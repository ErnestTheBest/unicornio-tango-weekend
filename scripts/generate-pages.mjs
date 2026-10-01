import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";

const projectRoot = new URL("../", import.meta.url);
const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");
const translationsStart = source.indexOf("const translations = ") + "const translations = ".length;
const translationsEnd = source.indexOf("function renderSchedule");

if (translationsStart < "const translations = ".length || translationsEnd === -1) {
  throw new Error("Could not read translations from script.js");
}

const translationsExpression = source
  .slice(translationsStart, translationsEnd)
  .trim()
  .replace(/;$/, "");
const translations = vm.runInNewContext(`(${translationsExpression})`);
const registrationUrl = source.match(/const REGISTRATION_FORM_URL = "([^"]+)";/)?.[1];

if (!registrationUrl) throw new Error("Registration URL is missing");

const siteUrl = "https://tangounicornio.lv";
const pageMeta = {
  lv: {
    title: "Argentīnas tango nedēļas nogale Rīgā 2026 | Unicornio",
    description:
      "Argentīnas tango nodarbības un milongas Rīgā 2026. gada 23.–25. oktobrī ar Yanina Muzyka un Emmanuel Casal.",
  },
  ru: {
    title: "Уикенд аргентинского танго в Риге 2026 | Unicornio",
    description:
      "Занятия и милонги аргентинского танго в Риге 23–25 октября 2026 года с Yanina Muzyka и Emmanuel Casal.",
  },
  en: {
    title: "Argentine Tango Weekend in Riga 2026 | Unicornio",
    description:
      "Argentine tango workshops and milongas in Riga, October 23–25, 2026, with Yanina Muzyka and Emmanuel Casal.",
  },
};

const dayDates = ["2026-10-23", "2026-10-24", "2026-10-25"];
const dayOffsets = ["+03:00", "+03:00", "+02:00"];
const itemStarts = [
  ["19:00", "20:40"],
  ["14:00", "15:30", "20:00"],
  ["13:00", "14:30", "15:45", "16:15"],
];

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderSchedule(content) {
  return content.schedule
    .map(
      (day, dayIndex) => `
              <article class="day">
                <header class="day-header">
                  <h3>${escapeHtml(day.day)}</h3>
                  <time datetime="${dayDates[dayIndex]}">${escapeHtml(day.date)}</time>
                </header>
                ${day.items
                  .map(
                    (item, itemIndex) => `
                <div class="event-item${item.milonga ? " milonga" : ""}">
                  <time class="event-time" datetime="${dayDates[dayIndex]}T${itemStarts[dayIndex][itemIndex]}:00${dayOffsets[dayIndex]}">${escapeHtml(item.time)}</time>
                  <div class="event-copy">
                    <span>${escapeHtml(item.type)}</span>
                    <h4>${escapeHtml(item.title)}</h4>
                    <p>${escapeHtml(item.text)}</p>
                  </div>
                </div>`,
                  )
                  .join("")}
              </article>`,
    )
    .join("");
}

function renderEventJsonLd(lang, content, canonicalUrl) {
  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Unicornio Tango Weekend",
    description: pageMeta[lang].description,
    startDate: "2026-10-23T19:00:00+03:00",
    endDate: "2026-10-25T17:30:00+02:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    inLanguage: lang,
    url: canonicalUrl,
    image: [`${siteUrl}/assets/unicornio-cover-1733.webp`],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Riga",
        addressCountry: "LV",
      },
    },
    performer: [
      { "@type": "Person", name: "Yanina Muzyka" },
      { "@type": "Person", name: "Emmanuel Casal" },
    ],
    offers: content.pricing.flatMap((price) =>
      [
        { name: content.fullPass, price: price.full },
        { name: content.singleClass, price: price.single },
      ].map((offer) => ({
        "@type": "Offer",
        name: `${offer.name} — ${price.period}`,
        price: offer.price.replace(/[^\d.,]/g, "").replace(",", "."),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        ...(price.validFrom ? { validFrom: price.validFrom } : {}),
        ...(price.validThrough ? { validThrough: price.validThrough } : {}),
        url: registrationUrl,
      })),
    ),
    sameAs: "https://facebook.com/events/s/unicornio-tango-weekend/2858745324495593/",
  };

  return JSON.stringify(event, null, 2).replaceAll("<", "\\u003c");
}

function renderPage(lang, { rootCopy = false } = {}) {
  const content = translations[lang];
  const meta = pageMeta[lang];
  const canonicalUrl = `${siteUrl}/${lang}/`;

  const html = `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#130f0d" />
    <meta name="description" content="${escapeHtml(meta.description)}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="lv" href="${siteUrl}/lv/" />
    <link rel="alternate" hreflang="ru" href="${siteUrl}/ru/" />
    <link rel="alternate" hreflang="en" href="${siteUrl}/en/" />
    <link rel="alternate" hreflang="x-default" href="${siteUrl}/en/" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escapeHtml(meta.title)}" />
    <meta property="og:description" content="${escapeHtml(content.socialDescription)}" />
    <meta property="og:image" content="/assets/unicornio-cover.png" />
    <title>${escapeHtml(meta.title)}</title>
    <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="/styles.css" />
    <script type="application/ld+json">
${renderEventJsonLd(lang, content, canonicalUrl)}
    </script>
    <script src="/runtime.js" defer></script>
  </head>
  <body${rootCopy ? ' data-canonical-copy="en"' : ""}>
    <a class="skip-link" href="#main">${escapeHtml(content.skip)}</a>

    <header class="site-header" id="top">
      <a class="brand" href="#top" aria-label="Unicornio Tango Weekend">
        <img class="brand-mark" src="/assets/favicon.svg" alt="" />
        <span>Unicornio</span>
      </a>

      <nav class="main-nav" aria-label="${escapeHtml(content.navLabel)}">
        <a href="#program">${escapeHtml(content.navProgram)}</a>
        <a href="#artists">${escapeHtml(content.navArtists)}</a>
        <a href="#registration">${escapeHtml(content.navRegistration)}</a>
      </nav>

      <nav class="language-picker" aria-label="${escapeHtml(content.languageLabel)}">
        <a href="/lv/" lang="lv"${lang === "lv" ? ' class="active" aria-current="page"' : ""}>LV</a>
        <a href="/ru/" lang="ru"${lang === "ru" ? ' class="active" aria-current="page"' : ""}>RU</a>
        <a href="/en/" lang="en"${lang === "en" ? ' class="active" aria-current="page"' : ""}>EN</a>
      </nav>
    </header>

    <main id="main">
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-image-wrap">
          <picture>
            <source
              type="image/webp"
              srcset="
                /assets/unicornio-cover-640.webp 640w,
                /assets/unicornio-cover-1280.webp 1280w,
                /assets/unicornio-cover-1733.webp 1733w
              "
              sizes="100vw"
            />
            <img
              class="hero-image"
              src="/assets/unicornio-cover.png"
              width="1733"
              height="907"
              fetchpriority="high"
              alt="${escapeHtml(content.heroImageAlt)}"
            />
          </picture>
          <div class="hero-image-shade" aria-hidden="true"></div>
        </div>

        <div class="hero-content shell">
          <p class="eyebrow">${escapeHtml(content.heroEyebrow)}</p>
          <h1 id="hero-title">Unicornio<br /><span>Tango Weekend</span></h1>
          <p class="hero-lead">${escapeHtml(content.heroLead)}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="#program">${escapeHtml(content.seeProgram)}</a>
            <a class="button button-ghost" href="#registration">${escapeHtml(content.register)}</a>
          </div>
        </div>

        <div class="hero-facts shell" aria-label="${escapeHtml(content.highlightsLabel)}">
          <div><strong>6</strong><span>${escapeHtml(content.factWorkshops)}</span></div>
          <div><strong>2</strong><span>${escapeHtml(content.factMilongas)}</span></div>
          <div><strong>300</strong><span>${escapeHtml(content.factHall)}</span></div>
        </div>
      </section>

      <section class="intro section shell">
        <div class="section-heading intro-heading">
          <p class="eyebrow">${escapeHtml(content.introEyebrow)}</p>
          <h2>${escapeHtml(content.introTitle)}</h2>
        </div>
        <div class="intro-copy">
          <p>${escapeHtml(content.introP1)}</p>
          <p>${escapeHtml(content.introP2)}</p>
        </div>
      </section>

      <section class="section program-section" id="program">
        <div class="shell">
          <div class="section-heading split-heading">
            <div>
              <p class="eyebrow">${escapeHtml(content.programEyebrow)}</p>
              <h2>${escapeHtml(content.programTitle)}</h2>
            </div>
          </div>

          <div class="schedule">${renderSchedule(content)}
          </div>

          <div class="pricing-header">
            <div>
              <p class="eyebrow">${escapeHtml(content.pricesEyebrow)}</p>
              <h3>${escapeHtml(content.pricesTitle)}</h3>
            </div>
            <p class="notice">${escapeHtml(content.pricesNotice)}</p>
          </div>
          <div class="pricing-grid">
            ${content.pricing
              .map(
                (price) => `<article class="price-card">
              <span class="price-period">${escapeHtml(price.period)}</span>
              <p>${escapeHtml(price.text)}</p>
              <div class="price-row"><span>${escapeHtml(content.fullPass)}</span><strong>${escapeHtml(price.full)}</strong></div>
              <div class="price-row"><span>${escapeHtml(content.singleClass)}</span><strong>${escapeHtml(price.single)}</strong></div>
            </article>`,
              )
              .join("\n            ")}
          </div>
        </div>
      </section>

      <section class="section artists-section" id="artists">
        <div class="shell">
          <div class="section-heading split-heading">
            <div>
              <p class="eyebrow">${escapeHtml(content.artistsEyebrow)}</p>
              <h2>${escapeHtml(content.artistsTitle)}</h2>
            </div>
            <p>${escapeHtml(content.artistsIntro)}</p>
          </div>

          <article class="maestros-card">
            <div class="maestros-photo">
              <img src="/assets/yanina-emmanuel-teachers.webp" width="1024" height="1536" loading="lazy" decoding="async" alt="${escapeHtml(content.teachersImageAlt)}" />
            </div>
            <div class="maestros-content">
              <div class="maestros-title">
                <span>${escapeHtml(content.maestrosLabel)}</span>
                <h3>Yanina Muzyka<br />&amp; Emmanuel Casal</h3>
              </div>
              <div class="maestros-copy">
                <p>${escapeHtml(content.maestrosBio)}</p>
                <ul class="achievements">
                  ${content.achievements.map((achievement) => `<li>${escapeHtml(achievement)}</li>`).join("\n                  ")}
                </ul>
                <div class="video-links">
                  <a href="https://youtu.be/jiVx8VYluPM" target="_blank" rel="noreferrer">
                    <span aria-hidden="true">▶</span>
                    <span>${escapeHtml(content.videoChampions)}</span>
                  </a>
                  <a href="https://www.youtube.com/watch?v=4IIaq4v3_SM" target="_blank" rel="noreferrer">
                    <span aria-hidden="true">▶</span>
                    <span>${escapeHtml(content.videoVals)}</span>
                  </a>
                </div>
              </div>
            </div>
          </article>

          <div class="dj-grid">
            <article class="dj-card dj-card-with-photo">
              <div class="dj-photo">
                <img src="/assets/juampi-tdj.webp" width="800" height="1200" loading="lazy" decoding="async" alt="${escapeHtml(content.juampiImageAlt)}" />
              </div>
              <div class="dj-card-content">
                <span>${escapeHtml(content.djFriday)}</span>
                <h3>Juampi</h3>
                <p>${escapeHtml(content.djJuampiCountries)}</p>
                <div class="dj-bio">
                  <p>${escapeHtml(content.juampiBio1)}</p>
                  <p>${escapeHtml(content.juampiBio2)}</p>
                  <p>${escapeHtml(content.juampiBio3)}</p>
                </div>
              </div>
            </article>
            <article class="dj-card dj-card-with-photo rainbow-card">
              <div class="dj-photo">
                <img src="/assets/mariko-tdj.webp" width="800" height="1200" loading="lazy" decoding="async" alt="${escapeHtml(content.marikoImageAlt)}" />
              </div>
              <div class="dj-card-content">
                <span>${escapeHtml(content.djSaturday)}</span>
                <h3>Mariko</h3>
                <p>${escapeHtml(content.djMarikoCountries)}</p>
                <div class="dj-bio">
                  <p>${escapeHtml(content.marikoBio1)}</p>
                  <p>${escapeHtml(content.marikoBio2)}</p>
                  <p>${escapeHtml(content.marikoBio3)}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="section registration-section" id="registration">
        <div class="shell registration-shell">
          <div class="section-heading">
            <p class="eyebrow">${escapeHtml(content.registrationEyebrow)}</p>
            <h2>${escapeHtml(content.registrationTitle)}</h2>
          </div>

          <div class="registration-grid">
            <article class="registration-card">
              <h3>${escapeHtml(content.registrationCardTitle)}</h3>
              <p>${escapeHtml(content.registrationCardText)}</p>
              <div class="registration-actions">
                <a class="text-link" href="${registrationUrl}" target="_blank" rel="noreferrer">
                  <span>${escapeHtml(content.registrationFormButton)}</span>
                </a>
                <span class="registration-or">${escapeHtml(content.registrationOr)}</span>
                <a class="text-link" href="https://facebook.com/events/s/unicornio-tango-weekend/2858745324495593/" target="_blank" rel="noreferrer">${escapeHtml(content.openEvent)}</a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="shell footer-inner">
        <p>${escapeHtml(content.footerText)}</p>
      </div>
    </footer>

    <a class="back-to-top" id="back-to-top" href="#top" aria-hidden="true" tabindex="-1">${escapeHtml(content.backToTop)}</a>
  </body>
</html>
`;

  return html.replace(/[ \t]+$/gm, "");
}

for (const lang of ["lv", "ru", "en"]) {
  const directory = new URL(`../${lang}/`, import.meta.url);
  mkdirSync(directory, { recursive: true });
  writeFileSync(new URL("index.html", directory), renderPage(lang), "utf8");
}

writeFileSync(new URL("../index.html", import.meta.url), renderPage("en", { rootCopy: true }), "utf8");
