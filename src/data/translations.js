export const t = (translations, lang) => translations[lang] || translations.en || "";

export const nav = {
  home:     { bg: "Начало",   en: "Home" },
  services: { bg: "Услуги",   en: "Services" },
  reviews:  { bg: "Отзиви",   en: "Reviews" },
  faq:      { bg: "Въпроси",  en: "FAQ" },
  contact:  { bg: "Контакти", en: "Contact" },
  quote:    { bg: "Безплатна оферта", en: "Free Quote" },
  language: { bg: "EN", en: "BG" },
  phone:    "+359 877 404 599",
};

export const hero = {
  tag:      { bg: "Спедиция и логистика", en: "Freight & Logistics" },
  title:    { bg: "Вашият товар.\nНашата мрежа.", en: "Your freight.\nOur network." },
  subtitle: {
    bg: "Сухопътен, морски и въздушен транспорт в 47 държави. Оферта до минути. Митница включена.",
    en: "Road, ocean and air freight across 47 countries. Quoted in minutes. Customs included.",
  },
  cta1: { bg: "Поискай оферта", en: "Request a Quote" },
  cta2: { bg: "Обади се",       en: "Call Us" },
};

export const emailCta = {
  title:    { bg: "Разкажете ни за пратката", en: "Tell us about your shipment" },
  subtitle: {
    bg: "Опишете товара — изпращаме твърда оферта до обяд на следващия работен ден.",
    en: "Share the details — we respond with a binding quote by noon the next business day.",
  },
  placeholder: { bg: "Вашият имейл", en: "Your email" },
  button:      { bg: "Изпрати",       en: "Submit" },
  disclaimer: {
    bg: "Без спам. Без нежелани обаждания.",
    en: "No spam. No unsolicited calls.",
  },
};

export const logos = {
  title: {
    bg: "Партньорска мрежа от водещи европейски оператори",
    en: "Partner network of leading European operators",
  },
};

export const whyUs = {
  tag:      { bg: "Предимства",  en: "Advantages" },
  title:    { bg: "Защо клиентите избират SpeedLink Logistics", en: "Why clients choose SpeedLink Logistics" },
  subtitle: { bg: "Бързина. Прозрачност. Контрол.", en: "Speed. Transparency. Control." },
  cards: [
    {
      tag:   { bg: "Реакция",    en: "Response" },
      title: { bg: "Оферта до минути",   en: "Offer in minutes" },
      desc:  { bg: "Получавате твърда цена и срок веднага след уточняване на детайлите и спецификата на вашия товар.", en: "You receive a binding price and timeline immediately after clarifying the details and specifications of your cargo." },
    },
    {
      tag:   { bg: "Обхват",   en: "Reach" },
      title: { bg: "47 държави", en: "47 countries" },
      desc:  { bg: "Собствена партньорска мрежа от терминали и хъбове в Европа, Турция и Централна Азия.", en: "Dedicated partner network of terminals and hubs across Europe, Turkey and Central Asia." },
    },
    {
      tag:   { bg: "Митница",    en: "Customs" },
      title: { bg: "Цялостно оформяне", en: "Full clearance" },
      desc:  { bg: "Документация, тарифна класификация, съответствие — ние поемаме целия граничен процес.", en: "Documentation, tariff classification, compliance — we handle the entire border process." },
    },
    {
      tag:   { bg: "Ценообразуване", en: "Pricing" },
      title: { bg: "Прозрачни цени. Без изненади.", en: "Transparent pricing. Zero surprises." },
      desc:  { bg: "Цената в офертата е крайна. Без скрити такси, без доплащания, без уговорки.", en: "The quoted price is final. No hidden fees, no surcharges, no fine print." },
    },
  ],
  featured: {
    tag:   { bg: "Видимост", en: "Visibility" },
    title: { bg: "Проследяване в реално време",   en: "Real-time tracking" },
    desc:  { bg: "Следете пратката на живо — позиция, статус и очаквано пристигане по всяко време.", en: "Track your shipment live — position, status and ETA available at all times." },
    cta:   { bg: "Проследи", en: "Track" },
  },
};

export const industries = {
  tag:      { bg: "Отрасли", en: "Sectors" },
  title:    { bg: "Специализация по индустрии", en: "Industry specialisation" },
  subtitle: { bg: "Всяка индустрия има своя логика на доставка. Ние я познаваме.", en: "Every industry has its own supply chain logic. We understand it." },
  items: [
    {
      title: { bg: "Електронна търговия", en: "E-commerce & retail" },
      desc:  { bg: "Бърз оборот, обратна логистика, last-mile доставка. Поддържаме ритъма на онлайн продажбите.", en: "Fast turnover, reverse logistics, last-mile delivery. We keep pace with online retail." },
    },
    {
      title: { bg: "Автомобилна индустрия", en: "Automotive & parts" },
      desc:  { bg: "JIT доставки, специализирана обработка, проследимост на компонентите. Нулев толеранс към закъснения.", en: "JIT deliveries, specialised handling, component traceability. Zero tolerance for delays." },
    },
    {
      title: { bg: "Фармацевтика", en: "Pharmaceuticals" },
      desc:  { bg: "Студена верига, GDP съответствие, контролирани условия от натоварване до доставка.", en: "Cold chain, GDP compliance, controlled conditions from loading to delivery." },
    },
    {
      title: { bg: "Химикали и опасни товари", en: "Chemicals & hazmat" },
      desc:  { bg: "ADR-сертифицирани шофьори, пълна документация, спазване на всички регулации за опасни товари.", en: "ADR-certified drivers, full documentation, compliance with all hazmat regulations." },
    },
    {
      title: { bg: "Хранителни продукти", en: "Food & beverages" },
      desc:  {
        bg: "Транспорт с температурен контрол, HACCP съответствие, стриктни срокове за доставка. Прясно от производителя до рафта.",
        en: "Temperature-controlled transport, HACCP compliance, strict delivery windows. Fresh from producer to shelf.",
      },
    },
  ],
  cta: { bg: "Всички отрасли", en: "All sectors" },
};

export const gallery = {
  title:    { bg: "Нашата мрежа",    en: "Our network" },
  subtitle: { bg: "Маршрути из Европа, Азия и отвъд", en: "Routes across Europe, Asia and beyond" },
};

export const testimonials = {
  title:    { bg: "Какво казват клиентите", en: "Client feedback" },
  subtitle: { bg: "Обратна връзка от реални партньори", en: "Feedback from real partners" },
  items: [
    {
      quote: {
        bg: "Получихме оферта в рамките на часове. Доставката беше навреме, без нито една допълнителна такса.",
        en: "We received a quote within hours. Delivery was on time, without a single extra charge.",
      },
      name: "Марко Петров",
      role: { bg: "Логистичен мениджър, TechImports Sofia", en: "Logistics Manager, TechImports Sofia" },
    },
    {
      quote: {
        bg: "Изпращаме автомобилни части из Европа всеки месец. SpeedLink Logistics поемат целия митнически процес — ние само следим.",
        en: "We ship automotive parts across Europe every month. SpeedLink Logistics handles the entire customs process — we just monitor.",
      },
      name: "Елена Ковачева",
      role: { bg: "Директор верига на доставки, AutoParts Bulgaria", en: "Supply Chain Director, AutoParts Bulgaria" },
    },
    {
      quote: {
        bg: "При фармацевтичните пратки няма място за компромис. SpeedLink Logistics доказаха, че познават изискванията.",
        en: "In pharmaceutical shipments there is no room for compromise. SpeedLink Logistics proved they understand the requirements.",
      },
      name: "Димитър Ангелов",
      role: { bg: "Ръководител операции, MediCare Logistics", en: "Operations Lead, MediCare Logistics" },
    },
  ],
};

export const stats = {
  tag:      { bg: "В числа", en: "In numbers" },
  title:    { bg: "Опит и мрежа, изградени с години", en: "Experience and network built over years" },
  subtitle: { bg: "Петнадесет години доставяме товари през континенти.", en: "Fifteen years delivering freight across continents." },
  items: [
    { value: "15+",    label: { bg: "Години опит",             en: "Years of experience" },    desc: { bg: "Доказана надеждност на всеки маршрут.",           en: "Proven reliability on every route." } },
    { value: "8,400+", label: { bg: "Пратки годишно",          en: "Shipments per year" },     desc: { bg: "Обслужваме клиенти в 47 държави.",               en: "Serving clients across 47 countries." } },
    { value: "47",     label: { bg: "Обслужени държави",        en: "Countries served" },       desc: { bg: "Мрежа от терминали и партньори в цяла Европа.",  en: "Network of terminals and partners across Europe." } },
  ],
};

export const ctaDual = {
  ship: {
    title: { bg: "Готови да изпратите?",   en: "Ready to ship?" },
    desc:  { bg: "Твърда оферта до минути. Без скрити разходи.", en: "Binding quote in minutes. No hidden costs." },
    cta1:  { bg: "Оферта",    en: "Get a Quote" },
    cta2:  { bg: "Обади се",  en: "Call Us" },
  },
  track: {
    title: { bg: "Проследете пратката",        en: "Track your shipment" },
    desc:  { bg: "Въведете номера за проследяване и следете статуса в реално време.", en: "Enter your tracking number and monitor the status in real time." },
    cta1:  { bg: "Проследи",   en: "Track" },
    cta2:  { bg: "Поддръжка",  en: "Support" },
  },
};

export const faq = {
  title:        { bg: "Въпроси и отговори",     en: "FAQ" },
  subtitle:     { bg: "Отговори на най-честите въпроси", en: "Answers to the most common questions" },
  stillHave:    { bg: "Не намерихте отговор?", en: "Didn't find your answer?" },
  stillHaveDesc:{ bg: "Свържете се с нас — отговаряме в рамките на часове.", en: "Get in touch — we respond within hours." },
  cta:          { bg: "Свържете се", en: "Contact us" },
  items: [
    {
      q: { bg: "Как формирате цените?",                   en: "How do you calculate pricing?" },
      a: { bg: "Цената зависи от тегло, разстояние, вид на товара и актуални пазарни условия. Котировката е окончателна — без допълнителни такси след приемане.", en: "Pricing depends on weight, distance, cargo type and current market conditions. The quote is final — no additional charges after acceptance." },
    },
    {
      q: { bg: "Какви са стандартните транзитни срокове?",    en: "What are standard transit times?" },
      a: { bg: "FTL в Европа: 2–5 дни. LTL с консолидация: 3–7 дни. Морски транспорт до Азия: 20–30 дни. Въздушен транспорт: 2–4 дни.", en: "FTL within Europe: 2–5 days. LTL with consolidation: 3–7 days. Ocean freight to Asia: 20–30 days. Air freight: 2–4 days." },
    },
    {
      q: { bg: "Предлагате ли товарна застраховка?",               en: "Do you offer cargo insurance?" },
      a: { bg: "Да. Организираме пълно застрахователно покритие чрез лицензирани застрахователи. Застраховката може да бъде включена директно в офертата.", en: "Yes. We arrange full coverage through licensed underwriters. Insurance can be included directly in the quote." },
    },
    {
      q: { bg: "Кой отговаря за митническото оформяне?",     en: "Who handles customs clearance?" },
      a: { bg: "Нашият екип поема целия процес — подаване на документи, тарифна класификация, координация с граничните власти.", en: "Our team manages the entire process — document filing, tariff classification, coordination with border authorities." },
    },
    {
      q: { bg: "Каква е разликата между FTL и LTL?",       en: "What is the difference between FTL and LTL?" },
      a: { bg: "FTL (Full Truck Load) — целият камион е за вашия товар. LTL (Less Than Truck Load) — товарът се консолидира с други съвместими пратки, което намалява разходите.", en: "FTL (Full Truck Load) — the entire truck is dedicated to your cargo. LTL (Less Than Truck Load) — your cargo is consolidated with other compatible shipments, reducing costs." },
    },
  ],
};

export const footer = {
  copyright: { bg: "© 2026 SpeedLink Logistics. Всички права запазени.", en: "© 2026 SpeedLink Logistics. All rights reserved." },
};

export const contactPage = {
  heroTitle:    { bg: "Свържете се с нас",   en: "Get in touch" },
  heroSubtitle: { bg: "Директен контакт. Бърз отговор. Конкретно решение.", en: "Direct contact. Fast response. Concrete solution." },
  formTag:      { bg: "Запитване", en: "Inquiry" },
  formTitle:    { bg: "Изпратете запитване",           en: "Send an inquiry" },
  formSubtitle: { bg: "Отговаряме в рамките на часове — не дни.", en: "We respond within hours — not days." },
  firstName:    { bg: "Име",        en: "First name" },
  lastName:     { bg: "Фамилия",    en: "Last name" },
  email:        { bg: "Имейл",      en: "Email" },
  phone:        { bg: "Телефон",    en: "Phone number" },
  serviceLabel: { bg: "Вид услуга", en: "Service type" },
  serviceOptions: [
    { value: "ftl",       label: { bg: "Пълен товар (FTL)",    en: "Full Truckload (FTL)" } },
    { value: "ltl",       label: { bg: "Частичен товар (LTL)",  en: "Partial Load (LTL)" } },
    { value: "ocean",     label: { bg: "Морски транспорт",      en: "Ocean Freight" } },
    { value: "air",       label: { bg: "Въздушен транспорт",    en: "Air Freight" } },
    { value: "customs",   label: { bg: "Митническо оформяне",   en: "Customs Clearance" } },
    { value: "warehouse", label: { bg: "Складиране",            en: "Warehousing" } },
  ],
  roleLabel: { bg: "Вие сте:",     en: "You are:" },
  roles: [
    { value: "importer",    label: { bg: "Вносител",            en: "Importer" } },
    { value: "exporter",    label: { bg: "Износител",            en: "Exporter" } },
    { value: "forwarder",   label: { bg: "Спедитор",             en: "Freight Forwarder" } },
    { value: "manager",     label: { bg: "Логистичен мениджър",  en: "Logistics Manager" } },
    { value: "procurement", label: { bg: "Снабдител",            en: "Procurement" } },
    { value: "other",       label: { bg: "Друго",                en: "Other" } },
  ],
  message:            { bg: "Съобщение",            en: "Message" },
  messagePlaceholder: { bg: "Опишете вашата пратка", en: "Describe your shipment" },
  terms:              { bg: "Приемам условията",    en: "I agree to the terms" },
  send:               { bg: "Изпрати",              en: "Submit" },
  directTag:          { bg: "Директен контакт",       en: "Direct contact" },
  directTitle:        { bg: "Директна връзка",     en: "Reach us directly" },
  directSubtitle:     { bg: "Обадете ни се или пишете — отговаряме в рамките на часове.", en: "Call or email us — we respond within hours." },
  emailAddress:       "info@speedlink-eu.com",
  officeAddress:      { bg: "София, България",      en: "Sofia, Bulgaria" },
};

export const servicesPage = {
  heroTitle:    { bg: "Транспортни услуги",    en: "Transport services" },
  heroSubtitle: { bg: "Сухопътен, морски и въздушен транспорт в Европа и Азия", en: "Road, ocean and air freight across Europe and Asia" },
  tag:          { bg: "Услуги",   en: "Services" },
  title:        { bg: "Какво предлагаме", en: "What we offer" },
  subtitle:     { bg: "Пълни и частични товари. Всеки маршрут.", en: "Full and partial loads. Every route." },
  cards: [
    { tag: "FTL",                              title: { bg: "Пълен товар",      en: "Full Truckload" },  desc: { bg: "Целият камион е ваш. Директен маршрут, без прехвърляне.",                   en: "The entire truck is yours. Direct route, no transhipment." } },
    { tag: "LTL",                              title: { bg: "Частичен товар",   en: "Partial Load" },    desc: { bg: "Консолидация с други съвместими пратки. Ефективен разход за по-малки обеми.",          en: "Consolidated with other compatible shipments. Cost-effective for smaller volumes." } },
    { tag: { bg: "Море", en: "Ocean" },        title: { bg: "Морски транспорт", en: "Ocean Freight" },   desc: { bg: "Контейнерен транспорт — FCL и LCL — до основните пристанища в Европа и Азия.",          en: "Container shipping — FCL and LCL — to major ports across Europe and Asia." } },
    { tag: { bg: "Въздух", en: "Air" },        title: { bg: "Въздушен транспорт", en: "Air Freight" },   desc: { bg: "Експресна доставка за времечувствителни пратки. 2–4 дни до всяка дестинация.",   en: "Express delivery for time-sensitive shipments. 2–4 days to any destination." } },
  ],
  featured: {
    tag:   { bg: "Митница",  en: "Customs" },
    title: { bg: "Митническо оформяне от край до край", en: "End-to-end customs clearance" },
    desc:  { bg: "Документация, тарифна класификация, координация с граничните власти — целият процес е наша отговорност.", en: "Documentation, tariff classification, coordination with border authorities — the entire process is our responsibility." },
    cta:   { bg: "Запитване", en: "Inquire" },
  },
  whyTag:      { bg: "Защо",   en: "Why" },
  whyTitle:    { bg: "Защо SpeedLink Logistics", en: "Why SpeedLink Logistics" },
  whySubtitle: { bg: "Отговор в часове. Реален човек на линията. Ясни цени.", en: "Response within hours. A real person on the line. Clear pricing." },
  whyCards: [
    { title: { bg: "Оферта до минути",  en: "Offer in minutes" }, desc: { bg: "Твърда цена и срок — веднага след уточняване на детайлите.", en: "Binding price and timeline — immediately after clarifying the details." } },
    { title: { bg: "От врата до врата",   en: "Door to door" },          desc: { bg: "Поемаме целия процес — вие получавате стоката.", en: "We manage the entire process — you receive the goods." } },
    { title: { bg: "Митница включена",    en: "Customs included" },      desc: { bg: "Документи и съответствие — част от всяка услуга.",         en: "Documentation and compliance — part of every service." } },
  ],
  aboutTag:   { bg: "За нас",  en: "About" },
  aboutTitle: { bg: "Вашият логистичен партньор", en: "Your logistics partner" },
  aboutDesc:  { bg: "SpeedLink Logistics е българска спедиторска компания с мрежа от партньори в Европа и Азия. Двуезичен екип, персонален подход, доказана надеждност.", en: "SpeedLink Logistics is a Bulgarian freight forwarding company with a partner network across Europe and Asia. Bilingual team, personal approach, proven reliability." },
};

export const reviewsPage = {
  heroTitle:    { bg: "Отзиви от клиенти",     en: "Client testimonials" },
  heroSubtitle: { bg: "Надеждност и точност — при всяка пратка", en: "Reliability and precision — with every shipment" },
  testimonialsTitle:    { bg: "Обратна връзка", en: "Feedback" },
  testimonialsSubtitle: { bg: "Реални партньори. Реални резултати.", en: "Real partners. Real results." },
  items: [
    {
      quote: { bg: "SpeedLink Logistics доставиха пратката до Берлин за 48 часа. Без закъснения, без допълнителни разходи.", en: "SpeedLink Logistics delivered our shipment to Berlin in 48 hours. No delays, no additional costs." },
      name: "Марко Петров",
      role: { bg: "Логистичен мениджър, TechImports Sofia", en: "Logistics Manager, TechImports Sofia" },
    },
    {
      quote: { bg: "Три пратки месечно от година насам. Митническият екип на SpeedLink Logistics поема всичко — ние само потвърждаваме.", en: "Three shipments a month for over a year. SpeedLink Logistics' customs team handles everything — we just confirm." },
      name: "Елена Василева",
      role: { bg: "Директор верига на доставки, FashionHub EU", en: "Supply Chain Director, FashionHub EU" },
    },
    {
      quote: { bg: "Обадих се в петък следобед. В понеделник сутринта имах оферта с точна цена и срок.", en: "Called Friday afternoon. By Monday morning I had a quote with an exact price and timeline." },
      name: "Димитър Николов",
      role: { bg: "Управител, AutoParts Distribution", en: "Director, AutoParts Distribution" },
    },
  ],
  statsTag:      { bg: "В числа",     en: "By the numbers" },
  statsTitle:    { bg: "Какво изградихме", en: "What we've built" },
  statsSubtitle: { bg: "Петнадесет години. Мрежа, която работи.", en: "Fifteen years. A network that delivers." },
  statsItems: [
    { value: "15+",    label: { bg: "Години опит",    en: "Years of experience" } },
    { value: "8,500+", label: { bg: "Доставени пратки",    en: "Shipments delivered" } },
    { value: "47",     label: { bg: "Обслужени държави",   en: "Countries served" } },
  ],
};

export const legal = {
  privacy: { bg: "Политика за поверителност", en: "Privacy Policy" },
  cookies: { bg: "Политика за бисквитки",     en: "Cookie Policy" },
  terms:   { bg: "Общи условия",             en: "Terms & Conditions" },
};

export const cookiesBanner = {
  title:     { bg: "Ние ценим вашата поверителност", en: "We value your privacy" },
  desc:      { 
    bg: "Използваме бисквитки, за да подобрим вашето преживяване и да анализираме трафика си. Винаги можете да промените настройките си.",
    en: "We use cookies to enhance your browsing experience and analyze our traffic. You can always change your preferences."
  },
  acceptAll: { bg: "Приемам всички", en: "Accept All" },
  rejectAll: { bg: "Отказвам",      en: "Reject All" },
  customize: { bg: "Настройки",    en: "Customize" },
  save:      { bg: "Запази",       en: "Save preferences" },
  essential: { bg: "Необходими",    en: "Essential" },
  analytics: { bg: "Аналитични",    en: "Analytics" },
  marketing: { bg: "Маркетингови",  en: "Marketing" },
};

export const trust = {
  title: { bg: "Сертификати и съответствие", en: "Certificates & Compliance" },
  items: [
    { label: "ISO 9001",    desc: { bg: "Управление на качеството", en: "Quality Management" } },
    { label: "ISO 14001",   desc: { bg: "Екологичен мениджмънт", en: "Environmental Management" } },
    { label: "AEO",         desc: { bg: "Оторизиран икономически оператор", en: "Authorized Economic Operator" } },
    { label: "GDP",         desc: { bg: "Добра дистрибуторска практика", en: "Good Distribution Practice" } },
    { label: "ADR",         desc: { bg: "Опасни товари", en: "Dangerous Goods" } },
    { label: "HACCP",       desc: { bg: "Безопасност на храните", en: "Food Safety" } },
  ]
};
