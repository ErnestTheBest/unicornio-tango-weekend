const REGISTRATION_FORM_URL = "https://forms.gle/D3oBQXFUAZPL2CEC7";

const translations = {
  lv: {
    navLabel: "Galvenā navigācija",
    languageLabel: "Valoda",
    highlightsLabel: "Pasākuma svarīgākais",
    heroImageAlt: "Yanina Muzyka un Emmanuel Casal dejo tango Rīgas ielā vienradžu motīvu ieskauti",
    djFriday: "Piektdiena · TDJ",
    djSaturday: "Sestdiena · TDJ",
    djJuampiCountries: "Juan Pablo Canavire · Argentīna / Zviedrija",
    djMarikoCountries: "Ukraina / Izraēla",
    footerText: "Unicornio Tango Weekend · Rīga · 23.–25.10.2026.",
    socialDescription: "Sešas nodarbības un divas milongas. Piektdien — pārsteiguma šovs, sestdien — uzstājas Yanina un Emmanuel.",
    teachersImageAlt: "Yanina Muzyka un Emmanuel Casal dejo kopā",
    juampiImageAlt: "Juampi portrets",
    marikoImageAlt: "Mariko portrets",
    metaTitle: "Unicornio Tango Weekend · Rīga",
    metaDescription: "Unicornio Tango Weekend 2026. gada 23.–25. oktobrī Rīgā. Piedalās Yanina Muzyka un Emmanuel Casal.",
    skip: "Pāriet uz saturu",
    navProgram: "Programma",
    navArtists: "Mākslinieki",
    navRegistration: "Reģistrācija",
    heroEyebrow: "2026. gada 23.–25. oktobris · Rīga",
    heroLead: "Pasaules čempioni Yanina Muzyka un Emmanuel Casal aicina uz trim rotaļīga, izjusta un izteiksmīga tango dienām.",
    seeProgram: "Skatīt programmu",
    register: "Reģistrācija",
    factWorkshops: "nodarbības",
    factMilongas: "milongas",
    factHall: "m² deju zāle",
    introEyebrow: "Tango nedēļas nogale ar savu raksturu",
    introTitle: "Nopietna meistarība. Rotaļīgs gars.",
    introP1: "Yanina un Emmanuel piedāvā savu skatījumu uz tango, saikni un saziņu pārī. Viņu pasniegšanas pieeja apvieno precīzu tehniku ar zinātkāri, brīvību un rotaļīgumu.",
    introP2: "Jūs gaida oriģināli vingrinājumi, kas palīdz kustēties dabiski, uzlabo dialogu pārī un ļauj sarežģītas kustības izpildīt vieglāk un brīvāk.",
    programEyebrow: "Trīs dienas Rīgā",
    programTitle: "Programma",
    pricesEyebrow: "Nodarbību abonementi",
    pricesTitle: "Nodarbību cenas",
    pricesNotice: "Dalība milongās jāapmaksā atsevišķi.",
    artistsEyebrow: "Pasniedzēji, dejotāji, cilvēki",
    artistsTitle: "Mākslinieki",
    artistsIntro: "Jau četrpadsmit gadus viņi kopā dejo, rada un pasniedz nodarbības visā pasaulē.",
    maestrosLabel: "Maestro",
    maestrosBio: "Viņu pasniegšanas pieeja balstās uz iejūtību, rotaļīgumu un brīvību. Tā saglabā sociālās dejas būtību un piedāvā jaunus veidus, kā veidot saikni un sazināties pārī.",
    juampiBio1: "Juan Pablo Canavire jeb DJ Juampi ikvienā deju zālē ienes autentisku Argentīnas tango garu.",
    juampiBio2: "Juampi nāk no Jujuy Argentīnā. Savu karjeru viņš attīstīja Buenosairesā, kur sešus gadus bija DNI Tango rezidējošais dīdžejs. Šie gadi veidoja viņa muzikālo rokrakstu un izpratni par dejotāju noskaņojumu.",
    juampiBio3: "Šobrīd Juampi dzīvo Stokholmā un spēlē visā pasaulē. Veidojot tandas no tango zelta laikmeta orķestru ierakstiem, viņš apvieno ritmu, emocijas un dinamiku, piepildot deju zāli ar enerģiju un veidojot saikni ar dejotājiem.",
    marikoBio1: "DJ Mariko ir tango dīdžeja un profesionāla skaņu režisore.",
    marikoBio2: "Kopš 2012. gada viņa kā dīdžeja spēlē milongās un tango pasākumos dažādās valstīs. Pieredze skaņu režijā mudina viņu pievērst īpašu uzmanību skaņas kvalitātei, līdzsvaram un detaļām.",
    marikoBio3: "Mariko katrs vakars ir stāsts, kas top uz vietas — mūzikā, deju zāles enerģijā un mijiedarbībā ar dejotājiem. Viņas muzikālajām programmām ir sava plūsma un dramaturģija, kas vakara gaitā attīstās dabiski.",
    videoChampions: "Skatīties 2021. gada čempionāta priekšnesumu",
    videoVals: "Skatīties viņu valsi",
    registrationEyebrow: "Rezervējiet savu vietu",
    registrationTitle: "Reģistrācija",
    registrationCardTitle: "Nodarbības un milongas",
    registrationCardText: "Reģistrējieties, aizpildot Google veidlapu, vai sazinieties ar organizatori Facebook pasākuma lapā.",
    registrationFormButton: "Atvērt Google veidlapu",
    registrationOr: "vai",
    openEvent: "Atvērt Facebook pasākumu",
    backToTop: "Uz augšu ↑",
    fullPass: "Visu nodarbību abonements",
    singleClass: "Viena nodarbība",
    schedule: [
      {
        day: "Piektdiena",
        date: "23. oktobris",
        items: [
          { time: "19:00 - 20:15", type: "1. nodarbība", title: "Saikne un saziņa očo un pagriezienos", text: "Tehnika, vadīšana un projekcijas dažādos virzienos. Kustību kvalitāte un intensitāte." },
          { time: "20:40 - 00:30+", type: "Milonga", title: "Atklāšanas milonga ar TDJ Juampi", text: "Pārsteiguma šovs · Argentīna / Zviedrija", milonga: true },
        ],
      },
      {
        day: "Sestdiena",
        date: "24. oktobris",
        items: [
          { time: "14:00 - 15:15", type: "2. nodarbība", title: "Neparastas parādas", text: "Arī ar gančo kā rotājumu." },
          { time: "15:30 - 16:45", type: "3. nodarbība", title: "Valsis", text: "Dinamiska deja ar kolgādu virknēm." },
          { time: "20:00 - 01:00", type: "Grand Milonga", title: "Milonga ar šovu — uzstājas Yanina un Emmanuel", text: "TDJ Mariko · Ukraina / Izraēla", milonga: true },
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
      { period: "Līdz 19. oktobrim", text: "Atlaides cena, reģistrējoties līdz 19. oktobrim ieskaitot.", full: "190 €", single: "35 €", validThrough: "2026-10-19T23:59:59+03:00" },
      { period: "No 20. oktobra", text: "Pilna cena — ja vēl būs brīvas vietas.", full: "220 €", single: "40 €", validFrom: "2026-10-20T00:00:00+03:00" },
    ],
    achievements: [
      "2021. gada pasaules čempioni skatuves tango kategorijā",
      "2016. gada pasaules vicečempioni skatuves tango kategorijā",
      "Carlos balva kategorijā «Labākais deju pāris» par izrādi «Así Vuelvo», 2022",
    ],
  },
  ru: {
    navLabel: "Основная навигация",
    languageLabel: "Язык",
    highlightsLabel: "О событии в цифрах",
    heroImageAlt: "Yanina Muzyka и Emmanuel Casal танцуют танго на рижской улице в окружении изображений единорогов",
    djFriday: "Пятница · TDJ",
    djSaturday: "Суббота · TDJ",
    djJuampiCountries: "Juan Pablo Canavire · Аргентина / Швеция",
    djMarikoCountries: "Украина / Израиль",
    footerText: "Unicornio Tango Weekend · Рига · 23–25.10.2026",
    socialDescription: "Шесть занятий и две милонги — с шоу-сюрпризом в пятницу и выступлением Yanina и Emmanuel в субботу.",
    teachersImageAlt: "Yanina Muzyka и Emmanuel Casal танцуют вместе",
    juampiImageAlt: "Портрет Juampi",
    marikoImageAlt: "Портрет Mariko",
    metaTitle: "Unicornio Tango Weekend · Рига",
    metaDescription: "Unicornio Tango Weekend с Yanina Muzyka и Emmanuel Casal, 23–25 октября 2026 года в Риге.",
    skip: "Перейти к содержанию",
    navProgram: "Программа",
    navArtists: "Артисты",
    navRegistration: "Регистрация",
    heroEyebrow: "23–25 октября 2026 · Рига",
    heroLead: "Три дня танго — с игрой, чуткостью и выразительностью — вместе с чемпионами мира Yanina Muzyka и Emmanuel Casal.",
    seeProgram: "Смотреть программу",
    register: "Регистрация",
    factWorkshops: "занятий",
    factMilongas: "милонги",
    factHall: "м² для танцев",
    introEyebrow: "Танго-уикенд со своим характером",
    introTitle: "Серьёзная техника. Дух игры.",
    introP1: "У Yanina и Emmanuel — свой взгляд на танго, контакт и общение в паре. В преподавании они сочетают точную технику с любознательностью, свободой и игрой.",
    introP2: "Вас ждут авторские упражнения, которые помогают двигаться естественно, развивают диалог в паре и позволяют выполнять сложные движения легче и свободнее.",
    programEyebrow: "Три дня в Риге",
    programTitle: "Программа",
    pricesEyebrow: "Абонементы на занятия",
    pricesTitle: "Стоимость занятий",
    pricesNotice: "Милонги оплачиваются отдельно.",
    artistsEyebrow: "Преподаватели, танцоры, люди",
    artistsTitle: "Артисты",
    artistsIntro: "Четырнадцать лет совместного танца, творчества и преподавания по всему миру.",
    maestrosLabel: "Маэстро",
    maestrosBio: "Их подход к преподаванию основан на чуткости, игре и свободе. Он сохраняет суть социального танца и открывает новые способы выстраивать контакт и общаться в паре.",
    juampiBio1: "Juan Pablo Canavire, известный как DJ Juampi, приносит на каждый танцпол подлинный дух аргентинского танго.",
    juampiBio2: "Juampi родом из Жужуя в Аргентине. Он строил свою карьеру в Буэнос-Айресе и шесть лет был диджеем-резидентом DNI Tango. Эти годы сформировали его музыкальный почерк и умение чувствовать танцпол.",
    juampiBio3: "Сегодня Juampi живёт в Стокгольме и играет по всему миру. Составляя танды из записей оркестров золотого века танго, он соединяет ритм, эмоции и динамику, наполняя танцпол энергией и создавая связь между музыкой и танцорами.",
    marikoBio1: "DJ Mariko — танго-диджей и профессиональный звукорежиссёр.",
    marikoBio2: "С 2012 года она играет как диджей на милонгах и танго-мероприятиях в разных странах. Опыт работы звукорежиссёром помогает ей уделять особое внимание качеству звука, балансу и деталям.",
    marikoBio3: "Для Марико каждый вечер — история, которая рождается здесь и сейчас из музыки, энергии танцпола и общения с танцорами. У её сетов есть свой ритм и драматургия, которые естественно развиваются в течение вечера.",
    videoChampions: "Смотреть чемпионское выступление 2021 года",
    videoVals: "Смотреть их вальс",
    registrationEyebrow: "Забронируйте место",
    registrationTitle: "Регистрация",
    registrationCardTitle: "Занятия и милонги",
    registrationCardText: "Зарегистрируйтесь через Google Forms или свяжитесь с организатором через Facebook.",
    registrationFormButton: "Открыть Google Forms",
    registrationOr: "или",
    openEvent: "Открыть событие в Facebook",
    backToTop: "Наверх ↑",
    fullPass: "Абонемент на все занятия",
    singleClass: "Одно занятие",
    schedule: [
      {
        day: "Пятница",
        date: "23 октября",
        items: [
          { time: "19:00 - 20:15", type: "Занятие 1", title: "Контакт и коммуникация в очо и поворотах", text: "Техника, ведение и проекции в разных направлениях. Качество и интенсивность движения." },
          { time: "20:40 - 00:30+", type: "Милонга", title: "Милонга открытия с TDJ Juampi", text: "Шоу-сюрприз · Аргентина / Швеция", milonga: true },
        ],
      },
      {
        day: "Суббота",
        date: "24 октября",
        items: [
          { time: "14:00 - 15:15", type: "Занятие 2", title: "Нестандартные парады", text: "В том числе с ганчо в качестве украшений." },
          { time: "15:30 - 16:45", type: "Занятие 3", title: "Вальс", text: "Динамичный вальс с цепочками кольгад." },
          { time: "20:00 - 01:00", type: "Grand Milonga", title: "Милонга с выступлением Yanina и Emmanuel", text: "TDJ Mariko · Украина / Израиль", milonga: true },
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
      { period: "До 19 октября", text: "Цена со скидкой при регистрации до 19 октября включительно.", full: "190 €", single: "35 €", validThrough: "2026-10-19T23:59:59+03:00" },
      { period: "С 20 октября", text: "Полная стоимость — при наличии свободных мест.", full: "220 €", single: "40 €", validFrom: "2026-10-20T00:00:00+03:00" },
    ],
    achievements: [
      "Чемпионы мира по сценическому танго, 2021",
      "Вице-чемпионы мира по сценическому танго, 2016",
      "Премия Carlos за лучший танцевальный дуэт в спектакле «Así Vuelvo», 2022",
    ],
  },
  en: {
    navLabel: "Main navigation",
    languageLabel: "Language",
    highlightsLabel: "Event highlights",
    heroImageAlt: "Yanina Muzyka and Emmanuel Casal dancing tango in a Riga street surrounded by unicorn imagery",
    djFriday: "Friday · TDJ",
    djSaturday: "Saturday · TDJ",
    djJuampiCountries: "Juan Pablo Canavire · Argentina / Sweden",
    djMarikoCountries: "Ukraine / Israel",
    footerText: "Unicornio Tango Weekend · Riga · 23–25.10.2026",
    socialDescription: "Six workshops and two milongas — with a surprise show on Friday and a performance by Yanina & Emmanuel on Saturday.",
    teachersImageAlt: "Yanina Muzyka and Emmanuel Casal dancing together",
    juampiImageAlt: "Portrait of Juampi",
    marikoImageAlt: "Portrait of Mariko",
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
    introP1: "Yanina and Emmanuel have their own vision of tango, connection and communication. Their teaching combines precise technique with curiosity, freedom and play.",
    introP2: "Expect creative exercises that help you move naturally, strengthen communication between partners and make challenging movements feel easier and more comfortable.",
    programEyebrow: "Three days in Riga",
    programTitle: "Program",
    pricesEyebrow: "Workshop passes",
    pricesTitle: "Workshop prices",
    pricesNotice: "Milonga admission is paid for separately.",
    artistsEyebrow: "Teachers, dancers, people",
    artistsTitle: "Artists",
    artistsIntro: "Fourteen years of dancing, creating and teaching together around the world.",
    maestrosLabel: "Maestros",
    maestrosBio: "Their teaching draws on sensitivity, play and freedom, preserving the essence of social tango while exploring new ways to connect and communicate.",
    juampiBio1: "Juan Pablo Canavire, known as DJ Juampi, brings the authentic spirit of Argentine tango to every dance floor.",
    juampiBio2: "Originally from Jujuy, Argentina, he developed his career in Buenos Aires, spending six years as resident DJ at DNI Tango. Those years shaped his musical identity and understanding of the dance floor.",
    juampiBio3: "Now based in Stockholm, Juampi plays internationally. Drawing on recordings by the orchestras of tango’s Golden Age, his tandas blend rhythm, emotion and dynamics to energize the dance floor and connect with the dancers.",
    marikoBio1: "DJ Mariko is a tango DJ and professional sound engineer.",
    marikoBio2: "A tango DJ since 2012, she has played at milongas and tango events in various countries. Her background in sound engineering informs her close attention to sound quality, balance and detail.",
    marikoBio3: "For Mariko, every night is a story created in the moment — through music, the energy of the dance floor and her connection with the dancers. Her sets have a natural flow and dramatic arc that unfold throughout the evening.",
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
    fullPass: "Full workshop pass",
    singleClass: "Single workshop",
    schedule: [
      {
        day: "Friday",
        date: "October 23",
        items: [
          { time: "19:00 - 20:15", type: "Workshop 1", title: "Connection and communication in ochos and pivots", text: "Technique, leading and projections in different directions. Quality and intensity of movement." },
          { time: "20:40 - 00:30+", type: "Milonga", title: "Opening milonga with TDJ Juampi", text: "Surprise show · Argentina / Sweden", milonga: true },
        ],
      },
      {
        day: "Saturday",
        date: "October 24",
        items: [
          { time: "14:00 - 15:15", type: "Workshop 2", title: "Unconventional paradas", text: "Including ganchos as ornaments." },
          { time: "15:30 - 16:45", type: "Workshop 3", title: "Vals", text: "Dynamic vals with sequences of colgadas." },
          { time: "20:00 - 01:00", type: "Grand Milonga", title: "Milonga with a performance by Yanina & Emmanuel", text: "TDJ Mariko · Ukraine / Israel", milonga: true },
        ],
      },
      {
        day: "Sunday",
        date: "October 25",
        items: [
          { time: "13:00 - 14:15", type: "Workshop 4", title: "Enrosques and back sacadas", text: "Back sacada technique for both roles. Surprises included." },
          { time: "14:30 - 15:45", type: "Workshop 5", title: "Volcada technique", text: "Linear and circular volcadas with ornaments." },
          { time: "15:45", type: "Break", title: "Lunch break", text: "30 minutes to recharge." },
          { time: "16:15 - 17:30", type: "Workshop 6", title: "Molinete, enrosques and ganchos", text: "Take your power and dynamics to the next level." },
        ],
      },
    ],
    pricing: [
      { period: "Until October 19", text: "Discounted price when registering by October 19, inclusive.", full: "190 €", single: "35 €", validThrough: "2026-10-19T23:59:59+03:00" },
      { period: "From October 20", text: "Full price — subject to availability.", full: "220 €", single: "40 €", validFrom: "2026-10-20T00:00:00+03:00" },
    ],
    achievements: [
      "World Stage Tango Champions, 2021",
      "World Stage Tango Runners-up, 2016",
      "Carlos Award for Best Dance Couple in Así Vuelvo, 2022",
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

  document.querySelector('meta[property="og:title"]').content = content.metaTitle;
  document.querySelector('meta[property="og:description"]').content = `${content.metaDescription} ${content.socialDescription}`;

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", content[element.dataset.i18nAriaLabel]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", content[element.dataset.i18nAlt]);
  });

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
