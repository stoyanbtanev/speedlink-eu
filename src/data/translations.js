export const t = (translations, lang) => translations[lang] || translations.en || "";

export const nav = {
  home:     { bg: "Начало",   en: "Home" },
  services: { bg: "Услуги",   en: "Services" },
  reviews:  { bg: "Отзиви",   en: "Reviews" },
  contact:  { bg: "Контакти", en: "Contact" },
  quote:    { bg: "Безплатна оферта", en: "Free Quote" },
  language: { bg: "EN", en: "BG" },
  phone:    "+359 877 404 599",
};

export const hero = {
  tag:      { bg: "Логистика без компромис", en: "Logistics without compromise" },
  title:    { bg: "Вашата оферта.\nДо 24 часа.", en: "Your quote.\nWithin 24 hours." },
  subtitle: {
    bg: "Товари в 47 държави. Оферта до 24 часа. От офертата до вратата — един партньор.",
    en: "Cargo across 47 countries. Quoted within 24 hours. From quote to doorstep — one partner.",
  },
  cta1: { bg: "Поискай оферта", en: "Get a Quote" },
  cta2: { bg: "Обади се",       en: "Call Us" },
};

export const emailCta = {
  title:    { bg: "Кажете ни какво изпращате", en: "Tell us what you're shipping" },
  subtitle: {
    bg: "Попълнете детайлите — отговаряме с твърда оферта до обяд на следващия работен ден.",
    en: "Fill in the details. We'll respond with a firm quote before noon the next business day.",
  },
  placeholder: { bg: "Вашият имейл", en: "Your email" },
  button:      { bg: "Изпрати",       en: "Send" },
  disclaimer: {
    bg: "Уважаваме пощата ви. Без спам, без непоискани обаждания.",
    en: "We respect your inbox. No spam, no follow-up calls you didn't ask for.",
  },
};

export const logos = {
  title: {
    bg: "Доверие от водещи логистични компании в Европа",
    en: "Trusted by leading logistics companies across Europe",
  },
};

export const whyUs = {
  tag:      { bg: "Защо ние",  en: "Why us" },
  title:    { bg: "Шест причини да изберете SpeedLink", en: "Six reasons to choose SpeedLink" },
  subtitle: { bg: "Бързо. Точно. По вашия начин.", en: "Fast. Precise. Your way." },
  cards: [
    {
      tag:   { bg: "Скорост",    en: "Speed" },
      title: { bg: "Оферта до 24 часа",   en: "Quote in 24 hours" },
      desc:  { bg: "Без чакане. Без забавяне. Твърда цена — до обяд на следващия ден.", en: "No waiting. No delays. Firm pricing by noon next day." },
    },
    {
      tag:   { bg: "Покритие",   en: "Coverage" },
      title: { bg: "47 държави", en: "47 countries" },
      desc:  { bg: "Партньорска мрежа от ключови хъбове до регионални центрове в Европа и Азия.", en: "Partner network from major hubs to regional centres across Europe and Asia." },
    },
    {
      tag:   { bg: "Митница",    en: "Customs" },
      title: { bg: "Пълно оформяне", en: "Full clearance" },
      desc:  { bg: "Документи, тарифи, съответствие — включено. Без изненади на границата.", en: "Documents, tariffs, compliance — included. No surprises at the border." },
    },
    {
      tag:   { bg: "Проследяване", en: "Tracking" },
      title: { bg: "Реално време",   en: "Real-time" },
      desc:  { bg: "Следете товара си на живо. Знаете къде е — всеки момент.", en: "Track your cargo live. Know where it is — every step of the way." },
    },
  ],
  featured: {
    tag:   { bg: "Ценообразуване", en: "Pricing" },
    title: { bg: "Прозрачни цени. Без изненади.", en: "Transparent pricing. No surprises." },
    desc:  { bg: "Каквото котираме — плащате. Без скрити такси, без доплащания, без дребен шрифт.", en: "What we quote is what you pay. No hidden fees, no surcharges, no fine print." },
    cta:   { bg: "Вземи оферта", en: "Get a quote" },
  },
};

export const industries = {
  tag:      { bg: "Индустрии", en: "Industries" },
  title:    { bg: "Осем вертикала в Европа и Азия", en: "Eight verticals across Europe and Asia" },
  subtitle: { bg: "Всяка индустрия има свой ритъм. Ние познаваме вашия.", en: "Every industry has its rhythm. We know yours." },
  items: [
    {
      title: { bg: "Електронна търговия", en: "E-commerce & retail" },
      desc:  { bg: "Бърза ротация, кратки срокове, обратна логистика. Пълним рафтовете — доставяме до вратата.", en: "Fast turnover, tight deadlines, reverse logistics. We fill shelves and deliver to doorsteps." },
    },
    {
      title: { bg: "Автомобилна индустрия", en: "Automotive & parts" },
      desc:  { bg: "JIT доставки, температурен контрол, сигурна обработка. Компоненти и готови автомобили — без компромис.", en: "JIT delivery, temperature control, secure handling. Components and finished vehicles — zero tolerance." },
    },
    {
      title: { bg: "Фармацевтика", en: "Pharmaceuticals" },
      desc:  { bg: "Студена верига, проследимост, регулирани граници. Товарът пристига непокътнат.", en: "Cold chain, traceability, regulated borders. Your cargo arrives intact." },
    },
    {
      title: { bg: "Химикали и опасни товари", en: "Chemicals & hazmat" },
      desc:  { bg: "Специализирана обработка, сертифицирани шофьори, пълна документация. Безопасността не е опция.", en: "Specialised handling, certified drivers, full documentation. Safety is never optional." },
    },
  ],
  cta: { bg: "Разгледай индустриите", en: "Explore industries" },
};

export const gallery = {
  title:    { bg: "Нашата мрежа",    en: "Our network" },
  subtitle: { bg: "Маршрути из Европа, Азия и отвъд", en: "Routes across Europe, Asia and beyond" },
};

export const testimonials = {
  title:    { bg: "Какво казват клиентите", en: "What our clients say" },
  subtitle: { bg: "Реална обратна връзка от реални изпращачи", en: "Real feedback from real shippers" },
  items: [
    {
      quote: {
        bg: "SpeedLink ни дадоха оферта за часове и доставиха навреме. Без изненади, без извинения.",
        en: "SpeedLink quoted us in hours and delivered on time. No surprises, no excuses.",
      },
      name: "Марко Петров",
      role: { bg: "Логистичен мениджър, TechImports Sofia", en: "Logistics Manager, TechImports Sofia" },
    },
    {
      quote: {
        bg: "Изпращаме автомобилни части из Европа всеки месец. SpeedLink управляват митницата и ни държат в график.",
        en: "We ship automotive parts across Europe every month. SpeedLink handles customs and keeps us on schedule.",
      },
      name: "Елена Ковачева",
      role: { bg: "Директор верига на доставки, AutoParts Bulgaria", en: "Supply Chain Director, AutoParts Bulgaria" },
    },
    {
      quote: {
        bg: "Студената верига за фармацевтика е без компромис. SpeedLink доказаха, че разбират залозите.",
        en: "Cold-chain compliance for pharma is non-negotiable. SpeedLink proved they understand the stakes.",
      },
      name: "Димитър Ангелов",
      role: { bg: "Ръководител операции, MediCare Logistics", en: "Operations Lead, MediCare Logistics" },
    },
  ],
};

export const stats = {
  tag:      { bg: "Резултати", en: "Results" },
  title:    { bg: "Изградено на опит и доверие", en: "Built on experience and trust" },
  subtitle: { bg: "Петнадесет години движим товари през континенти.", en: "Fifteen years moving cargo across continents." },
  items: [
    { value: "15+",    label: { bg: "Години опит",             en: "Years in business" },      desc: { bg: "Хиляди доставки навреме — всеки път.",           en: "Thousands of shipments delivered on time — every time." } },
    { value: "8,400+", label: { bg: "Пратки миналата година",   en: "Shipments last year" },    desc: { bg: "Обслужваме клиенти в 47 държави.",              en: "Serving clients across 47 countries." } },
    { value: "47",     label: { bg: "Обслужени държави",        en: "Countries served" },       desc: { bg: "Партньорска мрежа на ключови хъбове в Европа.", en: "Partner network spanning key hubs across Europe." } },
  ],
};

export const ctaDual = {
  ship: {
    title: { bg: "Готови за изпращане?",   en: "Ready to ship?" },
    desc:  { bg: "Твърда оферта до 24 часа. Без скрити такси. Без забавяне.", en: "Firm quote within 24 hours. No hidden fees. No delays." },
    cta1:  { bg: "Оферта",    en: "Get a Quote" },
    cta2:  { bg: "Обади се",  en: "Call Us" },
  },
  track: {
    title: { bg: "Проследете товара",        en: "Track your cargo" },
    desc:  { bg: "Следете пратката в реално време. Въведете номера за проследяване.", en: "Monitor your shipment live. Enter your tracking number." },
    cta1:  { bg: "Проследи",   en: "Track" },
    cta2:  { bg: "Поддръжка",  en: "Support" },
  },
};

export const faq = {
  title:        { bg: "Въпроси",     en: "Questions" },
  subtitle:     { bg: "Отговори на най-важното", en: "Answers to what matters most" },
  stillHave:    { bg: "Имате още въпроси?", en: "Still have questions?" },
  stillHaveDesc:{ bg: "Обадете ни се или ни пишете. Отговаряме за часове.", en: "Call or email us. We respond within hours." },
  cta:          { bg: "Свържете се", en: "Get in touch" },
  items: [
    {
      q: { bg: "Как определяте цените?",                   en: "How do you price shipments?" },
      a: { bg: "Котираме на база тегло, разстояние, вид товар и текущи пазарни условия. Без изненади — цената, която получавате, е крайна.", en: "We quote based on weight, distance, cargo type and current market rates. No surprises — the price you see is final." },
    },
    {
      q: { bg: "Какви са типичните срокове за транзит?",    en: "What are typical transit times?" },
      a: { bg: "FTL в Европа: 2–5 дни. LTL консолидация добавя 1–2 дни. Морски транспорт до Азия: 20–30 дни. Въздушен: 2–4 дни.", en: "FTL within Europe: 2–5 days. LTL consolidation adds 1–2 days. Ocean to Asia: 20–30 days. Air freight: 2–4 days." },
    },
    {
      q: { bg: "Предлагате ли застраховка?",               en: "Do you offer cargo insurance?" },
      a: { bg: "Да. Организираме пълно покритие чрез утвърдени застрахователи. Застраховката е включена в офертата.", en: "Yes. We arrange full coverage through trusted underwriters. Insurance is included in every quote." },
    },
    {
      q: { bg: "Кой управлява митническото оформяне?",     en: "Who handles customs clearance?" },
      a: { bg: "Ние. Екипът ни подава документите, проверява съответствието и координира с граничните власти — от край до край.", en: "We do. Our team files all documents, verifies compliance and coordinates with border authorities — end to end." },
    },
    {
      q: { bg: "Каква е разликата между FTL и LTL?",       en: "What's the difference between FTL and LTL?" },
      a: { bg: "FTL — целият камион е ваш. LTL — споделяте камиона с друг съвместим товар и разделяте разходите.", en: "FTL means the entire truck is yours. LTL means you share the truck with compatible cargo and split the cost." },
    },
  ],
};

export const footer = {
  copyright: { bg: "© 2025 SpeedLink EU. Всички права запазени.", en: "© 2025 SpeedLink EU. All rights reserved." },
};

export const contactPage = {
  heroTitle:    { bg: "Свържете се с нас",   en: "Get in touch" },
  heroSubtitle: { bg: "Реални хора. Реални отговори. Реални резултати.", en: "Real people. Real answers. Real results." },
  formTag:      { bg: "Изпратете запитване", en: "Send an inquiry" },
  formTitle:    { bg: "Пишете ни",           en: "Send us a message" },
  formSubtitle: { bg: "Отговаряме в часове — не в дни.", en: "We respond within hours — not days." },
  firstName:    { bg: "Име",        en: "First name" },
  lastName:     { bg: "Фамилия",    en: "Last name" },
  email:        { bg: "Имейл",      en: "Email" },
  phone:        { bg: "Телефон",    en: "Phone number" },
  serviceLabel: { bg: "Какво ви трябва?", en: "What do you need?" },
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
  messagePlaceholder: { bg: "Разкажете ни за пратката ви", en: "Tell us about your shipment" },
  terms:              { bg: "Приемам условията",    en: "I agree to the terms" },
  send:               { bg: "Изпрати",              en: "Send" },
  directTag:          { bg: "Директна линия",       en: "Direct line" },
  directTitle:        { bg: "Директен контакт",     en: "Direct contact" },
  directSubtitle:     { bg: "Обадете ни се или пишете — по всяко време. Отговаряме за часове.", en: "Call or email us anytime. We respond within hours." },
  emailAddress:       "info@speedlink-eu.com",
  officeAddress:      { bg: "София, България",      en: "Sofia, Bulgaria" },
};

export const servicesPage = {
  heroTitle:    { bg: "Транспортни услуги",    en: "Transport Services" },
  heroSubtitle: { bg: "Логистика за Европа, Азия и света", en: "Logistics for Europe, Asia and the world" },
  tag:          { bg: "Услуги",   en: "Services" },
  title:        { bg: "Какво предлагаме", en: "What we offer" },
  subtitle:     { bg: "Пълни и частични товари — по целия свят.", en: "Full and partial loads — worldwide." },
  cards: [
    { tag: "FTL",                              title: { bg: "Пълен товар",      en: "Full Truckload" },  desc: { bg: "Целият камион е ваш. Без споделяне, без чакане.",                   en: "The entire truck is yours. No sharing, no waiting." } },
    { tag: "LTL",                              title: { bg: "Частичен товар",   en: "Partial Load" },    desc: { bg: "Споделяте камиона и разхода. Идеално за по-малки пратки.",          en: "Share the truck and the cost. Ideal for smaller shipments." } },
    { tag: { bg: "Море", en: "Ocean" },        title: { bg: "Морски транспорт", en: "Ocean Freight" },   desc: { bg: "Контейнерен транспорт до основни пристанища — FCL и LCL.",          en: "Container shipping to major ports — FCL and LCL." } },
    { tag: { bg: "Въздух", en: "Air" },        title: { bg: "Въздушен транспорт", en: "Air Freight" },   desc: { bg: "Бърза доставка до 180 държави. 2–4 дни до всяка точка на света.",   en: "Fast delivery to 180 countries. 2–4 days to any point on the globe." } },
  ],
  featured: {
    tag:   { bg: "Митница",  en: "Customs" },
    title: { bg: "Митническо оформяне от край до край", en: "End-to-end customs management" },
    desc:  { bg: "Документи, тарифи, съответствие — включено. Граничните процедури са наша отговорност.", en: "Documents, tariffs, compliance — included. Border procedures are our responsibility." },
    cta:   { bg: "Запитване", en: "Inquire" },
  },
  whyTag:      { bg: "Защо",   en: "Why" },
  whyTitle:    { bg: "Защо SpeedLink Logistics", en: "Why SpeedLink Logistics" },
  whySubtitle: { bg: "Отговор в часове — не в дни. Реален човек на телефона. Прозрачни цени.", en: "Response within hours — not days. A real person on the line. Transparent pricing." },
  whyCards: [
    { title: { bg: "Оферта до 24 часа",  en: "Quote within 24 hours" }, desc: { bg: "Точна цена и график — в рамките на един ден.",       en: "Exact pricing and schedule — within one day." } },
    { title: { bg: "От врата до врата",   en: "Door to door" },          desc: { bg: "Управляваме всичко — вие просто получавате стоката.", en: "We handle everything — you just receive your goods." } },
    { title: { bg: "Митница включена",    en: "Customs included" },      desc: { bg: "Документи и съответствие — част от услугата.",         en: "Documentation and compliance — part of the service." } },
  ],
  aboutTag:   { bg: "За нас",  en: "About" },
  aboutTitle: { bg: "Вашият доверен партньор в логистиката", en: "Your trusted logistics partner" },
  aboutDesc:  { bg: "SpeedLink Logistics е българска компания с глобална мрежа. Двуезичен екип, реален контакт, доказана надеждност.", en: "SpeedLink Logistics is a Bulgarian company with a global network. Bilingual team, real contact, proven reliability." },
};

export const reviewsPage = {
  heroTitle:    { bg: "Клиентите ни говорят",     en: "Our clients speak" },
  heroSubtitle: { bg: "Надеждност и скорост — всеки ден", en: "Reliability and speed — every single day" },
  testimonialsTitle:    { bg: "Истински истории", en: "Real stories" },
  testimonialsSubtitle: { bg: "Те ни избраха. Ето защо.", en: "They chose us. Here's why." },
  items: [
    {
      quote: { bg: "SpeedLink доставиха пратката до Берлин за 48 часа. Без закъснения, без изненади.", en: "SpeedLink got our shipment to Berlin in 48 hours. No delays, no surprises." },
      name: "Марко Петров",
      role: { bg: "Логистичен мениджър, TechImports Sofia", en: "Logistics Manager, TechImports Sofia" },
    },
    {
      quote: { bg: "Правим по три пратки месечно със SpeedLink. Митническият им екип управлява всичко — ние просто следим.", en: "We send three shipments a month with SpeedLink. Their customs team handles everything — we just monitor." },
      name: "Елена Василева",
      role: { bg: "Директор верига на доставки, FashionHub EU", en: "Supply Chain Director, FashionHub EU" },
    },
    {
      quote: { bg: "Обадих се в 15:00 в петък. Имах оферта в 9:00 в понеделник. Точно такъв партньор ни трябваше.", en: "Called at 3pm on Friday. Had a quote by 9am Monday. Exactly the partner we needed." },
      name: "Димитър Николов",
      role: { bg: "Собственик, AutoParts Distribution", en: "Owner, AutoParts Distribution" },
    },
  ],
  statsTag:      { bg: "В цифри",     en: "By the numbers" },
  statsTitle:    { bg: "Какво изградихме", en: "What we've built" },
  statsSubtitle: { bg: "Десетилетие движение. Мрежа, която работи.", en: "A decade of movement. A network that works." },
  statsItems: [
    { value: "15+",    label: { bg: "Години в бизнеса",    en: "Years in business" } },
    { value: "8,500+", label: { bg: "Доставени пратки",    en: "Shipments delivered" } },
    { value: "47",     label: { bg: "Обслужени държави",   en: "Countries served" } },
  ],
};
