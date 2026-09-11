const REGISTRATION_FORM_URL = "https://forms.gle/D3oBQXFUAZPL2CEC7";

const translations = {
  lv: {
    metaTitle: "Unicornio Tango Weekend · Rīga",
    metaDescription: "Unicornio Tango Weekend ar Yanina Muzyka un Emmanuel Casal, 2026. gada 23.–25. oktobrī Rīgā.",
    skip: "Pāriet uz saturu",
    navProgram: "Programma",
    navArtists: "Mākslinieki",
    navRegistration: "Reģistrācija",
    heroEyebrow: "2026. gada 23.–25. oktobris · Rīga",
    heroLead: "Trīs dienas rotaļīga, jūtīga un izteiksmīga tango kopā ar pasaules čempioniem Yanina Muzyka & Emmanuel Casal.",
    seeProgram: "Skatīt programmu",
    register: "Reģistrācija",
    factWorkshops: "nodarbības",
    factMilongas: "milongas",
    factHall: "m² deju zāle",
    introEyebrow: "Tango nedēļas nogale ar savu raksturu",
    introTitle: "Nopietna meistarība. Rotaļīgs gars.",
    introP1: "Yanina un Emmanuel ir savs skatījums uz tango, kontaktu un komunikāciju. Viņu mācīšanas stils apvieno precīzu tehniku ar zinātkāri, brīvību un spēli.",
    introP2: "Gaidāmi oriģināli vingrinājumi, kas palīdz ķermenim darboties dabiski, uzlabo dialogu pārī un ļauj sarežģītām kustībām kļūt vieglākām un ērtākām.",
    programEyebrow: "Trīs dienas Rīgā",
    programTitle: "Programma",
    pricesEyebrow: "Nodarbību biļetes",
    pricesTitle: "Nodarbību cenas",
    pricesNotice: "Milongas tiek apmaksātas atsevišķi.",
    artistsEyebrow: "Pasniedzēji, dejotāji, cilvēki",
    artistsTitle: "Mākslinieki",
    artistsIntro: "Četrpadsmit gadi kopā dejojot, radot un mācot visā pasaulē.",
    maestrosLabel: "Maestro",
    maestrosBio: "Viņu metode ļauj izprast tango caur jūtīgumu, rotaļu un brīvību — saglabājot sociālās dejas būtību un vienlaikus atjaunojot kontakta un komunikācijas instrumentus.",
    juampiBio1: "Juan Pablo Canavire jeb DJ Juampi ikvienā deju zālē ienes autentisku Argentīnas tango garu.",
    juampiBio2: "Juampi nāk no Jujuy Argentīnā un karjeru attīstīja Buenosairesā, sešus gadus būdams DNI Tango pastāvīgais dīdžejs. Šie gadi veidoja viņa muzikālo identitāti un deju grīdas izpratni.",
    juampiBio3: "Šobrīd Juampi dzīvo Stokholmā un spēlē visā pasaulē. Zelta laikmeta orķestros sakņotās tandas apvieno ritmu, emocijas un dinamiku, uzturot dzīvu deju grīdu un saikni ar dejotājiem.",
    marikoBio1: "DJ Mariko ir tango dīdžeja un profesionāla skaņu režisore.",
    marikoBio2: "Viņa spēlē tango kopš 2012. gada un ir uzstājusies milongās un tango pasākumos dažādās valstīs. Profesionālā pieredze skaņu režijā ir veidojusi viņas īpašo uzmanību skaņas kvalitātei, līdzsvaram un detaļām.",
    marikoBio3: "Mariko katrs vakars ir stāsts, kas top konkrētajā mirklī — caur mūziku, deju grīdas enerģiju un saikni ar dejotājiem. Viņas setiem ir sava plūsma un dramaturģija, kas vakara gaitā attīstās dabiski.",
    videoChampions: "Skatīties 2021. gada čempionāta priekšnesumu",
    videoVals: "Skatīties viņu valsi",
    registrationEyebrow: "Rezervē savu vietu",
    registrationTitle: "Reģistrācija",
    registrationCardTitle: "Nodarbības un milongas",
    registrationCardText: "Reģistrējies Google veidlapā vai sazinies ar organizatori Facebook pasākumā.",
    registrationFormButton: "Atvērt Google veidlapu",
    registrationOr: "vai",
    openEvent: "Atvērt Facebook pasākumu",
    backToTop: "Uz augšu ↑",
    fullPass: "Pilna nodarbību biļete",
    singleClass: "Viena nodarbība",
    schedule: [
      {
        day: "Piektdiena",
        date: "23. oktobris",
        items: [
          { time: "19:00 - 20:15", type: "1. nodarbība", title: "Kontakts un komunikācija pagriezienos un očo", text: "Tehnika, vadīšana un projekcijas dažādos virzienos. Kustību kvalitāte un intensitāte." },
          { time: "20:40", type: "Milonga", title: "Atklāšanas milonga ar TDJ Juampi", text: "ARG / SWE · līdz 00:30+", milonga: true },
        ],
      },
      {
        day: "Sestdiena",
        date: "24. oktobris",
        items: [
          { time: "14:00 - 15:15", type: "2. nodarbība", title: "Neparastās parādas", text: "Arī ar gančo kā rotājumu." },
          { time: "15:30 - 16:45", type: "3. nodarbība", title: "Valsis", text: "Dinamiski un ar kolgādām cilpā." },
          { time: "20:00", type: "Grand Milonga", title: "Milonga ar Yanina & Emmanuel šovu", text: "TDJ Mariko · UKR / ISR · līdz 01:00", milonga: true },
        ],
      },
      {
        day: "Svētdiena",
        date: "25. oktobris",
        items: [
          { time: "13:00 - 14:15", type: "4. nodarbība", title: "Enroskes un aizmugurējās sakādas", text: "Aizmugurējo sakādu tehnika abām lomām. Ar pārsteigumiem." },
          { time: "14:30 - 15:45", type: "5. nodarbība", title: "Volkādu tehnika", text: "Lineāras un apļveida volkādas ar rotājumiem." },
          { time: "15:45", type: "Pārtraukums", title: "Pusdienu pārtraukums", text: "30 minūtes spēku atjaunošanai." },
          { time: "16:15 - 17:30", type: "6. nodarbība", title: "Mulinete, enroskes un gančo", text: "Spēks un dinamika jaunā līmenī." },
        ],
      },
    ],
    pricing: [
      { period: "Līdz 30. septembrim", text: "Tiem, kuri savus plānus zina nedaudz tuvāk pasākumam.", full: "190 €", single: "35 €" },
      { period: "No 1. oktobra", text: "Spontānajiem pēdējā brīža putniņiem — ja vēl ir vietas.", full: "220 €", single: "40 €" },
    ],
    achievements: [
      "2021. gada pasaules čempioni skatuves tango kategorijā",
      "2016. gada pasaules vicečempioni skatuves tango kategorijā",
      "Carlos balva par labāko deju pāri izrādē Asi Vuelvo, 2022",
    ],
  },
  ru: {
    metaTitle: "Unicornio Tango Weekend · Рига",
    metaDescription: "Unicornio Tango Weekend с Yanina Muzyka и Emmanuel Casal, 23–25 октября 2026 года в Риге.",
    skip: "Перейти к содержанию",
    navProgram: "Программа",
    navArtists: "Артисты",
    navRegistration: "Регистрация",
    heroEyebrow: "23–25 октября 2026 · Рига",
    heroLead: "Три дня игрового, чуткого и выразительного танго с чемпионами мира Yanina Muzyka & Emmanuel Casal.",
    seeProgram: "Смотреть программу",
    register: "Регистрация",
    factWorkshops: "занятий",
    factMilongas: "милонги",
    factHall: "м² танцевальный зал",
    introEyebrow: "Танго-уикенд со своим характером",
    introTitle: "Серьёзная техника. Игровой дух.",
    introP1: "У Yanina и Emmanuel — своё видение танго, контакта и коммуникации. Их преподавание соединяет точную технику с любопытством, свободой и игрой.",
    introP2: "Вас ждут авторские упражнения, которые помогают телу работать естественно, улучшают диалог в паре и делают сложные движения легче и комфортнее.",
    programEyebrow: "Три дня в Риге",
    programTitle: "Программа",
    pricesEyebrow: "Абонементы на занятия",
    pricesTitle: "Цены на уроки",
    pricesNotice: "Милонги оплачиваются отдельно.",
    artistsEyebrow: "Преподаватели, танцоры, люди",
    artistsTitle: "Артисты",
    artistsIntro: "Четырнадцать лет совместного танца, творчества и преподавания по всему миру.",
    maestrosLabel: "Маэстро",
    maestrosBio: "Их метод помогает понять танго через чуткость, игру и свободу — сохраняя суть социального танца и обновляя инструменты контакта и коммуникации.",
    juampiBio1: "Juan Pablo Canavire, известный как DJ Juampi, приносит на каждый танцпол подлинный дух аргентинского танго.",
    juampiBio2: "Родом из Жужуя в Аргентине, он развивал свою карьеру в Буэнос-Айресе и шесть лет был резидентом DNI Tango. Эти годы сформировали его музыкальную индивидуальность и понимание танцпола.",
    juampiBio3: "Сегодня Juampi живёт в Стокгольме и играет по всему миру. Опираясь на оркестры Золотого века, он объединяет в тандах ритм, эмоции и динамику, сохраняя жизнь на танцполе и связь музыки, танцоров и зала.",
    marikoBio1: "DJ Mariko — танго-диджей и профессиональный звукорежиссёр.",
    marikoBio2: "Она играет танго с 2012 года и выступала на милонгах и танго-мероприятиях в разных странах. Профессиональный опыт в звукорежиссуре сформировал её особое внимание к качеству звука, балансу и деталям.",
    marikoBio3: "Для Марико каждый вечер — это история, которая рождается в моменте: через музыку, энергию танцпола и связь с танцорами. У её сетов есть собственное течение и драматургия, которые естественно развиваются на протяжении вечера.",
    videoChampions: "Смотреть чемпионское выступление 2021 года",
    videoVals: "Смотреть их вальс",
    registrationEyebrow: "Сохраните своё место",
    registrationTitle: "Регистрация",
    registrationCardTitle: "Занятия и милонги",
    registrationCardText: "Зарегистрируйтесь через Google Forms или свяжитесь с организатором через Facebook.",
    registrationFormButton: "Открыть Google Forms",
    registrationOr: "или",
    openEvent: "Открыть событие в Facebook",
    backToTop: "Наверх ↑",
    fullPass: "Фулл-пасс на занятия",
    singleClass: "Одно занятие",
    schedule: [
      {
        day: "Пятница",
        date: "23 октября",
        items: [
          { time: "19:00 - 20:15", type: "Занятие 1", title: "Контакт и коммуникация в очо и поворотах", text: "Техника, ведение и проекции в разных направлениях. Качество и интенсивность движения." },
          { time: "20:40", type: "Милонга", title: "Милонга открытия с TDJ Juampi", text: "ARG / SWE · до 00:30+", milonga: true },
        ],
      },
      {
        day: "Суббота",
        date: "24 октября",
        items: [
          { time: "14:00 - 15:15", type: "Занятие 2", title: "Нестандартные парады", text: "В том числе с ганчо в качестве украшений." },
          { time: "15:30 - 16:45", type: "Занятие 3", title: "Вальс", text: "С движем и с зацикленными кольгадами." },
          { time: "20:00", type: "Grand Milonga", title: "Милонга с шоу Yanina & Emmanuel", text: "TDJ Mariko · УКР / ИЗР · до 01:00", milonga: true },
        ],
      },
      {
        day: "Воскресенье",
        date: "25 октября",
        items: [
          { time: "13:00 - 14:15", type: "Занятие 4", title: "Энроскес и задние сакады", text: "Техника задних сакад для обеих ролей. С сюрпризами." },
          { time: "14:30 - 15:45", type: "Занятие 5", title: "Техника волькад", text: "Линейные и круговые волькады с украшениями." },
          { time: "15:45", type: "Перерыв", title: "Перерыв на обед", text: "30 минут, чтобы набраться сил." },
          { time: "16:15 - 17:30", type: "Занятие 6", title: "Мулинет, энроскес и ганчо", text: "Выводим силу и динамику на новый уровень." },
        ],
      },
    ],
    pricing: [
      { period: "До 30 сентября", text: "Для тех, кто уверен в своих планах чуть ближе к датам.", full: "190 €", single: "35 €" },
      { period: "С 1 октября", text: "Для спонтанных пташек последней минуты — если останутся места.", full: "220 €", single: "40 €" },
    ],
    achievements: [
      "Чемпионы мира по сценическому танго, 2021",
      "Вице-чемпионы мира по сценическому танго, 2016",
      "Премия Carlos за лучшую танцевальную пару в Asi Vuelvo, 2022",
    ],
  },
  en: {
    metaTitle: "Unicornio Tango Weekend · Riga",
    metaDescription: "Unicornio Tango Weekend with Yanina Muzyka and Emmanuel Casal, October 23–25, 2026 in Riga.",
    skip: "Skip to content",
    navProgram: "Program",
    navArtists: "Artists",
    navRegistration: "Registration",
    heroEyebrow: "October 23–25, 2026 · Riga",
    heroLead: "Three days of playful, sensitive and expressive tango with world champions Yanina Muzyka & Emmanuel Casal.",
    seeProgram: "See program",
    register: "Registration",
    factWorkshops: "workshops",
    factMilongas: "milongas",
    factHall: "m² dance hall",
    introEyebrow: "A tango weekend with its own character",
    introTitle: "Serious craft. Playful spirit.",
    introP1: "Yanina and Emmanuel have their own vision of tango, connection and communication. Their teaching joins precise technique with curiosity, freedom and play.",
    introP2: "Expect original exercises that help the body work naturally, improve the dialogue inside the couple and make challenging movements feel lighter and more comfortable.",
    programEyebrow: "Three days in Riga",
    programTitle: "Program",
    pricesEyebrow: "Workshop passes",
    pricesTitle: "Class prices",
    pricesNotice: "Milongas are paid separately.",
    artistsEyebrow: "Teachers, dancers, people",
    artistsTitle: "Artists",
    artistsIntro: "Fourteen years dancing, creating and teaching together around the world.",
    maestrosLabel: "Maestros",
    maestrosBio: "Their method approaches tango through sensitivity, play and freedom, preserving the essence of social dance while renewing the tools of connection and communication.",
    juampiBio1: "Juan Pablo Canavire, known as DJ Juampi, brings the authentic spirit of Argentine tango to every dance floor.",
    juampiBio2: "Originally from Jujuy, Argentina, he developed his career in Buenos Aires, spending six years as resident DJ at DNI Tango. Those years shaped his musical identity and understanding of the dance floor.",
    juampiBio3: "Now based in Stockholm, Juampi plays internationally. Rooted in Golden Age orchestras, his tandas blend rhythm, emotion and dynamics to keep the pista alive and connect music, dancers and room.",
    marikoBio1: "DJ Mariko is a tango DJ and professional sound engineer.",
    marikoBio2: "DJing tango since 2012, she has played at milongas and tango events in different countries. Her professional background in sound engineering has shaped her strong attention to sound quality, balance, and details.",
    marikoBio3: "For Mariko, every night is a story created in the moment - through music, the energy of the dance floor, and the connection with the dancers. Her sets have their own flow and dramaturgy, evolving naturally throughout the night.",
    videoChampions: "Watch the 2021 championship performance",
    videoVals: "Watch their vals",
    registrationEyebrow: "Save your place",
    registrationTitle: "Registration",
    registrationCardTitle: "Workshops & milongas",
    registrationCardText: "Register through the Google Form or contact the organizer through the Facebook event.",
    registrationFormButton: "Open Google Form",
    registrationOr: "or",
    openEvent: "Open Facebook event",
    backToTop: "Back to top ↑",
    fullPass: "Classes full pass",
    singleClass: "Single class",
    schedule: [
      {
        day: "Friday",
        date: "October 23",
        items: [
          { time: "19:00 - 20:15", type: "Workshop 1", title: "Connection and communication in ochos and pivots", text: "Technique, lead and projections in different directions. Movement qualities and intensity." },
          { time: "20:40", type: "Milonga", title: "Opening milonga with TDJ Juampi", text: "ARG / SWE · until 00:30+", milonga: true },
        ],
      },
      {
        day: "Saturday",
        date: "October 24",
        items: [
          { time: "14:00 - 15:15", type: "Workshop 2", title: "Unconventional paradas", text: "Including ganchos as ornaments." },
          { time: "15:30 - 16:45", type: "Workshop 3", title: "Vals", text: "In motion, with colgadas in chain." },
          { time: "20:00", type: "Grand Milonga", title: "Milonga with Yanina & Emmanuel show", text: "TDJ Mariko · UKR / ISR · until 01:00", milonga: true },
        ],
      },
      {
        day: "Sunday",
        date: "October 25",
        items: [
          { time: "13:00 - 14:15", type: "Workshop 4", title: "Enrosques and back sacadas", text: "Back sacada technique for both roles. Surprises included." },
          { time: "14:30 - 15:45", type: "Workshop 5", title: "Volcada technique", text: "Linear and circular volcadas with ornaments." },
          { time: "15:45", type: "Break", title: "Lunch break", text: "30 minutes to recharge." },
          { time: "16:15 - 17:30", type: "Workshop 6", title: "Moulinette, enrosques and gancho", text: "Take your power and dynamics to the next level." },
        ],
      },
    ],
    pricing: [
      { period: "Until September 30", text: "For dancers who know their plans a little closer to the date.", full: "190 €", single: "35 €" },
      { period: "From October 1", text: "For spontaneous last-minute birds — if places remain.", full: "220 €", single: "40 €" },
    ],
    achievements: [
      "Tango Stage World Champions, 2021",
      "Tango Stage World Vice-Champions, 2016",
      "Carlos Award for best dance couple in Asi Vuelvo, 2022",
    ],
  },
};

function renderSchedule(content) {
  const schedule = document.querySelector("#schedule");
  schedule.innerHTML = content.schedule
    .map(
      (day) => `
        <article class="day">
          <header class="day-header">
            <h3>${day.day}</h3>
            <span>${day.date}</span>
          </header>
          ${day.items
            .map(
              (item) => `
                <div class="event-item${item.milonga ? " milonga" : ""}">
                  <time class="event-time">${item.time}</time>
                  <div class="event-copy">
                    <span>${item.type}</span>
                    <h4>${item.title}</h4>
                    <p>${item.text}</p>
                  </div>
                </div>`,
            )
            .join("")}
        </article>`,
    )
    .join("");
}

function renderPricing(content) {
  document.querySelector("#pricing").innerHTML = content.pricing
    .map(
      (price) => `
        <article class="price-card">
          <span class="price-period">${price.period}</span>
          <p>${price.text}</p>
          <div class="price-row"><span>${content.fullPass}</span><strong>${price.full}</strong></div>
          <div class="price-row"><span>${content.singleClass}</span><strong>${price.single}</strong></div>
        </article>`,
    )
    .join("");
}

function renderAchievements(content) {
  document.querySelector("#achievements").innerHTML = content.achievements
    .map((achievement) => `<li>${achievement}</li>`)
    .join("");
}

function setLanguage(language) {
  const lang = translations[language] ? language : "en";
  const content = translations[lang];

  document.documentElement.lang = lang;
  document.title = content.metaTitle;
  document.querySelector('meta[name="description"]').content = content.metaDescription;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (typeof content[key] === "string") element.textContent = content[key];
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  renderSchedule(content);
  renderPricing(content);
  renderAchievements(content);

  try {
    window.localStorage.setItem("unicornio-language", lang);
  } catch (_) {
    // The page works normally when storage is unavailable.
  }
}

function getInitialLanguage() {
  try {
    const saved = window.localStorage.getItem("unicornio-language");
    if (translations[saved]) return saved;
  } catch (_) {
    // Continue with browser language detection.
  }

  const browserLanguage = (navigator.language || "en").toLowerCase();
  if (browserLanguage.startsWith("lv")) return "lv";
  if (browserLanguage.startsWith("ru")) return "ru";
  return "en";
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-registration-form]").forEach((link) => {
  if (REGISTRATION_FORM_URL) {
    link.href = REGISTRATION_FORM_URL;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.classList.remove("disabled-link");
    link.removeAttribute("aria-disabled");
  } else {
    link.addEventListener("click", (event) => event.preventDefault());
  }
});

const backToTopLink = document.querySelector("#back-to-top");
const topMarker = document.querySelector("#top");

function setBackToTopVisibility(isVisible) {
  backToTopLink.classList.toggle("is-visible", isVisible);
  backToTopLink.setAttribute("aria-hidden", String(!isVisible));
  backToTopLink.tabIndex = isVisible ? 0 : -1;
}

if ("IntersectionObserver" in window) {
  const topObserver = new IntersectionObserver(([entry]) => {
    setBackToTopVisibility(!entry.isIntersecting);
  });

  topObserver.observe(topMarker);
} else {
  const updateBackToTopVisibility = () => setBackToTopVisibility(window.scrollY > 88);
  window.addEventListener("scroll", updateBackToTopVisibility, { passive: true });
  updateBackToTopVisibility();
}

setLanguage(getInitialLanguage());
