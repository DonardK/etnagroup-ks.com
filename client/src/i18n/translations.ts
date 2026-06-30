export type Locale = 'sq' | 'en' | 'de'

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'sq', label: 'SQ' },
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
]

export const LOCALE_ARIA_LABELS: Record<Locale, string> = {
  sq: 'Shqip',
  en: 'English',
  de: 'Deutsch',
}

const sq = {
  nav: {
    home: 'Ballina',
    projects: 'Projektet',
    about: 'Për Ne',
    contact: 'Na Kontaktoni',
    chat: 'Bisedo me mua',
    chatAria: 'Bisedo me asistentin AI',
  },
  home: {
    tagline: 'Ndërtojmë të Ardhmen',
    projectsTitle: 'Projektet Tona',
    projectsSubtitle: 'Portofolio i komplekseve rezidenciale premium',
    location: 'Lokacioni',
    viewDetails: 'Shiko Detajet',
    statusCompleted: 'I Përfunduar',
    statusConstruction: 'Në Ndërtim',
    statusSoon: 'Së Shpejti',
    flatSelectorTitle: 'Gjej Banesën Tënde',
    flatSelectorSubtitle:
      'Filtroni manualisht sipas qytetit, numrit të dhomave dhe sipërfaqes — ose përdorni asistentin AI.',
    filterCity: 'Qyteti',
    filterBedrooms: 'Dhoma gjumi',
    filterSize: 'Sipërfaqja (m²)',
    filterAll: 'Të gjitha',
    filterResults: 'Rezultatet',
    filterNoResults: 'Nuk u gjet asnjë banesë me këto filtra. Provoni të zgjeroni kriteret.',
    filterSelectHint: 'Zgjidhni të paktën një filtër për të parë banesat e disponueshme.',
    viewPlan: 'Shiko Planimetrinë',
    bedroom: (n: number) => (n === 1 ? '1 dhomë gjumi' : `${n} dhoma gjumi`),
    orUseAi: 'Ose bisedoni me asistentin tonë AI për rekomandime të personalizuara.',
  },
  chat: {
    promo:
      'Gjeje banesën ideale në 30 sekonda me Ndihmësin tonë të avancuar AI',
    promoAria: 'Hap asistentin AI për të gjetur banesën ideale',
    assistant: 'Asistente Dixhitale',
    greeting: `Përshëndetje! Unë jam Etna, asistentja juaj dixhitale e Etna Group. Si mund t'ju ndihmoj?`,
    placeholder: 'Shkruani mesazhin tuaj…',
    disclaimer: 'Etna mund të gabojë. Për çmime & rezervime, na kontaktoni.',
    viewPlan: 'Shiko Planimetrinë',
    errorGeneric: 'Më vjen keq, ndodhi një gabim. Ju lutem provoni përsëri.',
    errorUnavailable:
      'Më vjen keq, shërbimi nuk është i disponueshëm për momentin. Ju lutem provoni më vonë ose na kontaktoni në info@etnagroup-ks.com.',
    assistantName: 'Etna',
    chatAria: 'Asistenti i chat-it Etna Group',
    closeChat: 'Mbyll chat-in',
    typeMessage: 'Shkruani mesazhin',
    sendMessage: 'Dërgo mesazhin',
    openChatAssistant: 'Hap asistentin AI të chat-it',
    closeChatAssistant: 'Mbyll asistentin AI të chat-it',
  },
  footer: {
    locations: 'Lokacionet Tona',
    tagline: 'Hapësira Rezidenciale Premium',
    home: 'Ballina',
    about: 'Për Ne',
    contact: 'Kontakt',
    copyright: 'Të gjitha të drejtat e rezervuara.',
    mapElsaOffice: 'Elsa Residence & Zyrë Prishtinë',
    mapPrizrenOffice: 'Zyrë Prizren',
    mapTara: 'Tara Residence',
    mapTiani: 'Tiani Residence',
    mapJoni: 'Joni Residence',
    companyName: 'Etna Group.',
  },
  about: {
    title: 'Për Ne',
    hero:
      'Etna Group është një kompani e specializuar në zhvillimin e komplekseve rezidenciale premium në Kosovë',
    projects: 'Projekte',
    units: 'Njësi',
    residents: 'Banorë',
    learnMore: 'Mëso Më Shumë',
    visionTitle: 'Vizioni Ynë',
    visionBody:
      'Etna Group synon të jetë lider në tregun e zhvillimit rezidencial në Kosovë, duke ofruar komplekse që kombinon arkitekturë moderne, teknologji të avancuar dhe jetesë premium. Ne besojmë në ndërtimin e komuniteteve që përmirësojnë jetën e banorëve tanë dhe kontribuojnë në zhvillimin e qëndrueshëm të qytetit.',
    valueQualityTitle: 'Cilësi Premium',
    valueQualityBody:
      'Materiale dhe teknologji më të mira për rezultate të jashtëzakonshme',
    valueSustainabilityTitle: 'Qëndrueshmëri',
    valueSustainabilityBody:
      'Dizajn që respekton mjedisin dhe promovon jetesë të qëndrueshme',
    valueCommunityTitle: 'Komunitet',
    valueCommunityBody:
      'Krijimi i hapësirave që lidhin njerëzit dhe ndërtojnë komunitete të forta',
  },
  contact: {
    title: 'Na Kontaktoni',
    subtitle: 'Jemi këtu për t\'ju ndihmuar të gjeni banesën tuaj të ëndrrave',
    formIntro:
      'Jemi këtu për t\'ju ndihmuar. Plotësoni formularin më poshtë dhe ne do t\'ju kontaktojmë sa më shpejt të jetë e mundur.',
    name: 'Emri',
    nameFull: 'Emri dhe Mbiemri *',
    namePlaceholder: 'Shkruani emrin tuaj',
    email: 'Email',
    phone: 'Telefoni',
    phoneFull: 'Numri i Telefonit *',
    project: 'Projekti',
    projectInterested: 'Projekti i Interesuar',
    message: 'Mesazhi',
    messageLabel: 'Mesazhi *',
    send: 'Dërgo Mesazhin',
    sending: 'Duke dërguar…',
    success: 'Mesazhi u dërgua me sukses!',
    successDetail: '✓ Mesazhi u dërgua me sukses! Do t\'ju kontaktojmë së shpejti.',
    error: 'Gabim në dërgim. Ju lutem provoni përsëri.',
    errorDetail:
      '✗ Dërgimi dështoi. Ju lutem provoni përsëri ose na kontaktoni direkt në info@etnagroup-ks.com',
    messagePlaceholder: 'Shkruani mesazhin tuaj këtu...',
    selectProject: 'Zgjidhni projektin',
    general: 'Informacion i Përgjithshëm',
    contactInfo: 'Informacioni i Kontaktit',
    address: 'Adresa',
    officePrishtina: 'Zyrë Prishtinë:',
    officePrizren: 'Zyrë Prizren:',
    addressPrishtina: 'Prishtinë, Rr. Malush Kosova',
    addressPrizren: 'Prizren, Rrethrrotullimi Ortakoll',
    workingHours: 'Orari i Punës',
    hoursWeekdays: 'E Hënë - E Shtunë: 09:00 - 17:00',
    hoursSunday: 'E Diel: Mbyllur',
    followUs: 'Na Ndiqni',
    phonePlaceholder: '+383 XX XXX XXX',
    emailPlaceholder: 'email@example.com',
    projectElsa: 'Elsa Residence',
    projectTara: 'Tara Residence',
    projectTiani: 'Tiani Residence',
    projectJoni: 'Joni Residence',
    projectEtna: 'Etna Residence',
  },
  report: {
    title: 'Raporto një problem',
    subtitle: 'Na tregoni çfarë nuk funksionon ose çfarë mund të përmirësohet në faqe.',
    descriptionLabel: 'Përshkrimi i problemit *',
    descriptionPlaceholder: 'P.sh. linku i planimetrisë nuk hapet, teksti i gabuar, etj.',
    emailLabel: 'Email (opsional)',
    emailPlaceholder: 'email@example.com',
    submit: 'Dërgo raportin',
    sending: 'Duke dërguar…',
    success: 'Faleminderit! Raporti u dërgua.',
    error: 'Dërgimi dështoi. Ju lutem provoni përsëri.',
    close: 'Mbyll',
    footerLink: 'Raporto problem',
  },
  status: {
    completed: 'I Përfunduar',
    'under-construction': 'Në Ndërtim',
    planning: 'Së Shpejti',
  },
  seo: {
    siteName: 'Etna Group',
    defaultTitle: 'Etna Group — Banesa Premium në Kosovë',
    defaultDescription:
      'Etna Group — komplekse rezidenciale premium në Prishtinë, Prizren dhe Malishevë. Elsa, Tiani, Tara dhe Joni Residence. Gjeni banesën ideale me asistentin tonë AI.',
    homeTitle: 'Etna Group — Banesa Premium & Komplekse Rezidenciale në Kosovë',
    homeDescription:
      'Zbuloni Elsa, Tiani, Tara dhe Joni Residence — banesa premium nga Etna Group në Kosovë. Filtroni sipas qytetit dhe metrave katrorë ose përdorni asistentin AI për të gjetur banesën ideale.',
    aboutTitle: 'Për Ne — Etna Group Kosovo',
    aboutDescription:
      'Mësoni për Etna Group, kompaninë kosovare të ndërtimit që zhvillon komplekse rezidenciale premium në Prishtinë, Prizren dhe Malishevë.',
    contactTitle: 'Kontakt — Etna Group',
    contactDescription:
      'Kontaktoni Etna Group për banesa në Elsa, Tiani, Tara dhe Joni Residence. Telefon, email dhe formular kontakti.',
    projectTitle: (name: string) => `${name} — Etna Group`,
    projectDescription: (name: string, city: string) =>
      `${name} në ${city} — kompleks rezidencial premium nga Etna Group. Shikoni planimetritë dhe kontaktoni për vizita.`,
  },
  common: {
    newBadge: 'E re',
    logoAlt: 'Logo Etna Group',
    heroVideoAria: 'Video hero Etna Group',
    openMenu: 'Hap menunë',
    closeMenu: 'Mbyll menunë',
    languageAria: 'Gjuha',
    brandName: 'Etna Group',
    areaSqm: (n: number) => `${n} m²`,
  },
  project: {
    notFound: 'Projekti nuk u gjet',
    backToHome: 'Kthehu në Ballinë',
    location: 'Lokacioni',
    status: 'Statusi',
    statusInPlanning: 'Në Planifikim',
    buildings: 'Ndërtesat',
    buildingSingular: 'Ndërtesë',
    buildingPlural: (n: number) => `${n} Ndërtesa`,
    features: 'Karakteristikat',
    mapSelectFloor: 'Zgjedhni Katin Tuaj',
    mapSelectApartment: 'Zgjidhni Banesën',
    mapSelectBlock: 'Zgjidhni Bllokun',
    mapHintFloor: 'Klikoni mbi katin për të parë tipet e banesave',
    mapHintApartment: 'Klikoni për të parë tipet e banesave',
    mapHintBlock: 'Klikoni mbi bllokun për të parë tipet e banesave',
    sectionUnderConstruction: 'Në Ndërtim',
    sectionUnderConstructionBody:
      'Seksioni për zgjedhjen e banesave është në zhvillim dhe do të jetë i disponueshëm së shpejti.',
    moreInfoPrefix: 'Për informacion më të detajuar, ju lutem',
    contactUsLink: 'na kontaktoni',
  },
  residence: {
    backToElsa: 'Kthehu te Elsa Residence',
    backToTiani: 'Kthehu te Tiani Residence',
    backToTara: 'Kthehu te Tara Residence',
    backToJoni: 'Kthehu te Joni Residence',
    blockTitle: (residence: string, block: string) => {
      const name = residence === 'tiani' ? 'Tiani Residence' : 'Elsa Residence'
      return `${name} — Blloku ${block}`
    },
    blockSubtitle: (block: string) => `Tipet e banesave në Bllokun ${block}`,
    joniFloorTitle: (floor: number) => `Joni Residence — Kati ${floor}`,
    joniFloorSubtitle: (floor: number) => `Tipet e banesave në Katin ${floor}`,
    taraTitle: 'Tara Residence',
    taraSubtitle: 'Tipet e banesave në Tara Residence',
    blockEComingSoon: 'Planimetritë me m² për Bllokun E do të shtohen së shpejti.',
    elsaResidenceAlt: 'Elsa Residence',
    tianiResidenceAlt: 'Tiani Residence',
    taraResidenceAlt: 'Tara Residence',
    joniResidenceAlt: 'Joni Residence',
  },
  group: {
    block: (letter: string) => `Blloku ${letter}`,
    floor: (n: number) => `Kati ${n}`,
  },
  cities: {
    prishtina: 'Prishtinë',
    prizren: 'Prizren',
    malisheva: 'Malishevë',
  },
  qr: {
    website: 'Faqja Web',
    phone: 'Telefoni',
    officePrishtina: 'Zyrë Prishtinë',
    officePrizren: 'Zyrë Prizren',
    openMaps: 'Hap në Google Maps',
    facebook: 'Facebook',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    tagline: 'Na ndiqni kudo',
  },
  error: {
    title: 'Ups! Diçka shkoi keq',
    message: 'Na vjen keq për shqetësimin. Ju lutem rifreskoni faqen.',
    refresh: 'Rifresko Faqen',
  },
  whatsapp: {
    prefilledMessage: 'Përshëndetje, jam i/e interesuar per një banesë.',
    ariaLabel: 'Na kontaktoni në WhatsApp',
  },
}

const en = {
  nav: {
    home: 'Home',
    projects: 'Projects',
    about: 'About Us',
    contact: 'Contact Us',
    chat: 'Chat with me',
    chatAria: 'Chat with AI assistant',
  },
  home: {
    tagline: 'Building the Future',
    projectsTitle: 'Our Projects',
    projectsSubtitle: 'A portfolio of premium residential complexes',
    location: 'Location',
    viewDetails: 'View Details',
    statusCompleted: 'Completed',
    statusConstruction: 'Under Construction',
    statusSoon: 'Coming Soon',
    flatSelectorTitle: 'Find Your Apartment',
    flatSelectorSubtitle:
      'Filter manually by city, bedrooms and size — or use our AI assistant.',
    filterCity: 'City',
    filterBedrooms: 'Bedrooms',
    filterSize: 'Area (m²)',
    filterAll: 'All',
    filterResults: 'Results',
    filterNoResults: 'No apartments match these filters. Try broadening your criteria.',
    filterSelectHint: 'Select at least one filter to see available apartments.',
    viewPlan: 'View Floor Plan',
    bedroom: (n: number) => (n === 1 ? '1 bedroom' : `${n} bedrooms`),
    orUseAi: 'Or chat with our AI assistant for personalized recommendations.',
  },
  chat: {
    promo: 'Find your ideal apartment in 30 seconds with our advanced AI assistant',
    promoAria: 'Open AI assistant to find your ideal apartment',
    assistant: 'Digital Assistant',
    greeting: `Hello! I'm Etna, your Etna Group digital assistant. How can I help you today?`,
    placeholder: 'Type your message…',
    disclaimer: 'Etna may make mistakes. For pricing & bookings, contact us.',
    viewPlan: 'View Floor Plan',
    errorGeneric: 'Sorry, something went wrong. Please try again.',
    errorUnavailable:
      'Sorry, the assistant is unavailable right now. Please try again later or contact us at info@etnagroup-ks.com.',
    assistantName: 'Etna',
    chatAria: 'Etna Group chat assistant',
    closeChat: 'Close chat',
    typeMessage: 'Type your message',
    sendMessage: 'Send message',
    openChatAssistant: 'Open AI chat assistant',
    closeChatAssistant: 'Close chat assistant',
  },
  footer: {
    locations: 'Our Locations',
    tagline: 'Premium Residential Spaces',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    copyright: 'All rights reserved.',
    mapElsaOffice: 'Elsa Residence & Prishtina Office',
    mapPrizrenOffice: 'Prizren Office',
    mapTara: 'Tara Residence',
    mapTiani: 'Tiani Residence',
    mapJoni: 'Joni Residence',
    companyName: 'Etna Group.',
  },
  about: {
    title: 'About Us',
    hero:
      'Etna Group is a company specialized in developing premium residential complexes in Kosovo',
    projects: 'Projects',
    units: 'Units',
    residents: 'Residents',
    learnMore: 'Learn More',
    visionTitle: 'Our Vision',
    visionBody:
      'Etna Group aims to be a leader in Kosovo\'s residential development market, delivering complexes that combine modern architecture, advanced technology and premium living. We believe in building communities that improve residents\' lives and contribute to sustainable urban growth.',
    valueQualityTitle: 'Premium Quality',
    valueQualityBody:
      'The finest materials and technology for exceptional results',
    valueSustainabilityTitle: 'Sustainability',
    valueSustainabilityBody:
      'Design that respects the environment and promotes sustainable living',
    valueCommunityTitle: 'Community',
    valueCommunityBody:
      'Creating spaces that connect people and build strong communities',
  },
  contact: {
    title: 'Contact Us',
    subtitle: 'We are here to help you find your dream home',
    formIntro:
      'We are here to help. Fill out the form below and we will get back to you as soon as possible.',
    name: 'Name',
    nameFull: 'Full Name *',
    namePlaceholder: 'Enter your name',
    email: 'Email',
    phone: 'Phone',
    phoneFull: 'Phone Number *',
    project: 'Project',
    projectInterested: 'Project of Interest',
    message: 'Message',
    messageLabel: 'Message *',
    send: 'Send Message',
    sending: 'Sending…',
    success: 'Message sent successfully!',
    successDetail: '✓ Message sent successfully! We will contact you soon.',
    error: 'Failed to send. Please try again.',
    errorDetail:
      '✗ Failed to send. Please try again or contact us directly at info@etnagroup-ks.com',
    messagePlaceholder: 'Write your message here...',
    selectProject: 'Select project',
    general: 'General Inquiry',
    contactInfo: 'Contact Information',
    address: 'Address',
    officePrishtina: 'Prishtina Office:',
    officePrizren: 'Prizren Office:',
    addressPrishtina: 'Prishtina, Rr. Malush Kosova',
    addressPrizren: 'Prizren, Ortakoll Roundabout',
    workingHours: 'Working Hours',
    hoursWeekdays: 'Monday – Saturday: 09:00 – 17:00',
    hoursSunday: 'Sunday: Closed',
    followUs: 'Follow Us',
    phonePlaceholder: '+383 XX XXX XXX',
    emailPlaceholder: 'email@example.com',
    projectElsa: 'Elsa Residence',
    projectTara: 'Tara Residence',
    projectTiani: 'Tiani Residence',
    projectJoni: 'Joni Residence',
    projectEtna: 'Etna Residence',
  },
  report: {
    title: 'Report an issue',
    subtitle: 'Tell us what is broken or what we could improve on the site.',
    descriptionLabel: 'Issue description *',
    descriptionPlaceholder: 'E.g. floor plan link broken, wrong text, etc.',
    emailLabel: 'Email (optional)',
    emailPlaceholder: 'email@example.com',
    submit: 'Send report',
    sending: 'Sending…',
    success: 'Thank you! Your report was sent.',
    error: 'Failed to send. Please try again.',
    close: 'Close',
    footerLink: 'Report issue',
  },
  status: {
    completed: 'Completed',
    'under-construction': 'Under Construction',
    planning: 'Coming Soon',
  },
  seo: {
    siteName: 'Etna Group',
    defaultTitle: 'Etna Group — Premium Apartments in Kosovo',
    defaultDescription:
      'Etna Group — premium residential complexes in Prishtina, Prizren and Malisheva. Elsa, Tiani, Tara and Joni Residence. Find your ideal apartment with our AI assistant.',
    homeTitle: 'Etna Group — Premium Apartments & Residences in Kosovo',
    homeDescription:
      'Discover Elsa, Tiani, Tara and Joni Residence — premium homes by Etna Group in Kosovo. Filter by city and square meters or use our AI assistant to find your ideal apartment.',
    aboutTitle: 'About Us — Etna Group Kosovo',
    aboutDescription:
      'Learn about Etna Group, the Kosovo construction company developing premium residential complexes in Prishtina, Prizren and Malisheva.',
    contactTitle: 'Contact — Etna Group',
    contactDescription:
      'Contact Etna Group about apartments at Elsa, Tiani, Tara and Joni Residence. Phone, email and contact form.',
    projectTitle: (name: string) => `${name} — Etna Group`,
    projectDescription: (name: string, city: string) =>
      `${name} in ${city} — a premium residential complex by Etna Group. View floor plans and book a visit.`,
  },
  common: {
    newBadge: 'New',
    logoAlt: 'Etna Group Logo',
    heroVideoAria: 'Etna Group hero video',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageAria: 'Language',
    brandName: 'Etna Group',
    areaSqm: (n: number) => `${n} m²`,
  },
  project: {
    notFound: 'Project not found',
    backToHome: 'Back to Home',
    location: 'Location',
    status: 'Status',
    statusInPlanning: 'In Planning',
    buildings: 'Buildings',
    buildingSingular: 'Building',
    buildingPlural: (n: number) => `${n} Buildings`,
    features: 'Features',
    mapSelectFloor: 'Choose Your Floor',
    mapSelectApartment: 'Choose Your Apartment',
    mapSelectBlock: 'Choose Your Block',
    mapHintFloor: 'Click on a floor to see apartment types',
    mapHintApartment: 'Click to see apartment types',
    mapHintBlock: 'Click on a block to see apartment types',
    sectionUnderConstruction: 'Under Construction',
    sectionUnderConstructionBody:
      'The apartment selection section is under development and will be available soon.',
    moreInfoPrefix: 'For more information, please',
    contactUsLink: 'contact us',
  },
  residence: {
    backToElsa: 'Back to Elsa Residence',
    backToTiani: 'Back to Tiani Residence',
    backToTara: 'Back to Tara Residence',
    backToJoni: 'Back to Joni Residence',
    blockTitle: (residence: string, block: string) => {
      const name = residence === 'tiani' ? 'Tiani Residence' : 'Elsa Residence'
      return `${name} — Block ${block}`
    },
    blockSubtitle: (block: string) => `Apartment types in Block ${block}`,
    joniFloorTitle: (floor: number) => `Joni Residence — Floor ${floor}`,
    joniFloorSubtitle: (floor: number) => `Apartment types on Floor ${floor}`,
    taraTitle: 'Tara Residence',
    taraSubtitle: 'Apartment types at Tara Residence',
    blockEComingSoon: 'Floor plans with m² for Block E will be added soon.',
    elsaResidenceAlt: 'Elsa Residence',
    tianiResidenceAlt: 'Tiani Residence',
    taraResidenceAlt: 'Tara Residence',
    joniResidenceAlt: 'Joni Residence',
  },
  group: {
    block: (letter: string) => `Block ${letter}`,
    floor: (n: number) => `Floor ${n}`,
  },
  cities: {
    prishtina: 'Prishtina',
    prizren: 'Prizren',
    malisheva: 'Malisheva',
  },
  qr: {
    website: 'Website',
    phone: 'Phone',
    officePrishtina: 'Prishtina Office',
    officePrizren: 'Prizren Office',
    openMaps: 'Open in Google Maps',
    facebook: 'Facebook',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    tagline: 'Follow us everywhere',
  },
  error: {
    title: 'Oops! Something went wrong',
    message: "We're sorry for the inconvenience. Please try refreshing the page.",
    refresh: 'Refresh Page',
  },
  whatsapp: {
    prefilledMessage: 'Hello, I am interested in an apartment.',
    ariaLabel: 'Contact us on WhatsApp',
  },
}

const de = {
  nav: {
    home: 'Startseite',
    projects: 'Projekte',
    about: 'Über uns',
    contact: 'Kontakt',
    chat: 'Mit mir chatten',
    chatAria: 'Mit dem KI-Assistenten chatten',
  },
  home: {
    tagline: 'Wir gestalten die Zukunft',
    projectsTitle: 'Unsere Projekte',
    projectsSubtitle: 'Ein Portfolio erstklassiger Wohnanlagen',
    location: 'Standort',
    viewDetails: 'Details ansehen',
    statusCompleted: 'Fertiggestellt',
    statusConstruction: 'Im Bau',
    statusSoon: 'Demnächst',
    flatSelectorTitle: 'Finden Sie Ihre Wohnung',
    flatSelectorSubtitle:
      'Manuell nach Stadt, Zimmern und Größe filtern — oder nutzen Sie unseren KI-Assistenten.',
    filterCity: 'Stadt',
    filterBedrooms: 'Schlafzimmer',
    filterSize: 'Fläche (m²)',
    filterAll: 'Alle',
    filterResults: 'Ergebnisse',
    filterNoResults:
      'Keine Wohnungen entsprechen diesen Filtern. Versuchen Sie, Ihre Kriterien zu erweitern.',
    filterSelectHint:
      'Wählen Sie mindestens einen Filter, um verfügbare Wohnungen anzuzeigen.',
    viewPlan: 'Grundriss ansehen',
    bedroom: (n: number) => (n === 1 ? '1 Schlafzimmer' : `${n} Schlafzimmer`),
    orUseAi:
      'Oder chatten Sie mit unserem KI-Assistenten für personalisierte Empfehlungen.',
  },
  chat: {
    promo:
      'Finden Sie Ihre Traumwohnung in 30 Sekunden mit unserem fortschrittlichen KI-Assistenten',
    promoAria: 'KI-Assistenten öffnen, um die ideale Wohnung zu finden',
    assistant: 'Digitaler Assistent',
    greeting: `Hallo! Ich bin Etna, Ihre digitale Assistentin von Etna Group. Wie kann ich Ihnen helfen?`,
    placeholder: 'Nachricht eingeben…',
    disclaimer:
      'Etna kann Fehler machen. Für Preise & Reservierungen kontaktieren Sie uns bitte.',
    viewPlan: 'Grundriss ansehen',
    errorGeneric: 'Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.',
    errorUnavailable:
      'Entschuldigung, der Assistent ist derzeit nicht verfügbar. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns unter info@etnagroup-ks.com.',
    assistantName: 'Etna',
    chatAria: 'Etna Group Chat-Assistent',
    closeChat: 'Chat schließen',
    typeMessage: 'Nachricht eingeben',
    sendMessage: 'Nachricht senden',
    openChatAssistant: 'KI-Chat-Assistenten öffnen',
    closeChatAssistant: 'KI-Chat-Assistenten schließen',
  },
  footer: {
    locations: 'Unsere Standorte',
    tagline: 'Premium-Wohnräume',
    home: 'Startseite',
    about: 'Über uns',
    contact: 'Kontakt',
    copyright: 'Alle Rechte vorbehalten.',
    mapElsaOffice: 'Elsa Residence & Büro Prishtina',
    mapPrizrenOffice: 'Büro Prizren',
    mapTara: 'Tara Residence',
    mapTiani: 'Tiani Residence',
    mapJoni: 'Joni Residence',
    companyName: 'Etna Group.',
  },
  about: {
    title: 'Über uns',
    hero:
      'Etna Group ist ein Unternehmen, das sich auf die Entwicklung erstklassiger Wohnanlagen im Kosovo spezialisiert hat',
    projects: 'Projekte',
    units: 'Einheiten',
    residents: 'Bewohner',
    learnMore: 'Mehr erfahren',
    visionTitle: 'Unsere Vision',
    visionBody:
      'Etna Group strebt danach, im kosovarischen Wohnungsmarkt führend zu sein und Anlagen anzubieten, die moderne Architektur, fortschrittliche Technologie und Premium-Wohnen vereinen. Wir glauben an den Aufbau von Gemeinschaften, die das Leben unserer Bewohner verbessern und zur nachhaltigen Stadtentwicklung beitragen.',
    valueQualityTitle: 'Premium-Qualität',
    valueQualityBody:
      'Beste Materialien und Technologie für außergewöhnliche Ergebnisse',
    valueSustainabilityTitle: 'Nachhaltigkeit',
    valueSustainabilityBody:
      'Design, das die Umwelt respektiert und nachhaltiges Wohnen fördert',
    valueCommunityTitle: 'Gemeinschaft',
    valueCommunityBody:
      'Schaffung von Räumen, die Menschen verbinden und starke Gemeinschaften aufbauen',
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Wir helfen Ihnen, Ihr Traumhaus zu finden',
    formIntro:
      'Wir sind für Sie da. Füllen Sie das Formular unten aus und wir melden uns so schnell wie möglich bei Ihnen.',
    name: 'Name',
    nameFull: 'Vollständiger Name *',
    namePlaceholder: 'Ihren Namen eingeben',
    email: 'E-Mail',
    phone: 'Telefon',
    phoneFull: 'Telefonnummer *',
    project: 'Projekt',
    projectInterested: 'Interessiertes Projekt',
    message: 'Nachricht',
    messageLabel: 'Nachricht *',
    send: 'Nachricht senden',
    sending: 'Wird gesendet…',
    success: 'Nachricht erfolgreich gesendet!',
    successDetail: '✓ Nachricht erfolgreich gesendet! Wir melden uns in Kürze bei Ihnen.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    errorDetail:
      '✗ Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt unter info@etnagroup-ks.com',
    messagePlaceholder: 'Schreiben Sie hier Ihre Nachricht...',
    selectProject: 'Projekt auswählen',
    general: 'Allgemeine Anfrage',
    contactInfo: 'Kontaktinformationen',
    address: 'Adresse',
    officePrishtina: 'Büro Prishtina:',
    officePrizren: 'Büro Prizren:',
    addressPrishtina: 'Prishtina, Rr. Malush Kosova',
    addressPrizren: 'Prizren, Ortakoll-Kreisverkehr',
    workingHours: 'Öffnungszeiten',
    hoursWeekdays: 'Montag – Samstag: 09:00 – 17:00',
    hoursSunday: 'Sonntag: Geschlossen',
    followUs: 'Folgen Sie uns',
    phonePlaceholder: '+383 XX XXX XXX',
    emailPlaceholder: 'email@beispiel.de',
    projectElsa: 'Elsa Residence',
    projectTara: 'Tara Residence',
    projectTiani: 'Tiani Residence',
    projectJoni: 'Joni Residence',
    projectEtna: 'Etna Residence',
  },
  report: {
    title: 'Problem melden',
    subtitle:
      'Teilen Sie uns mit, was nicht funktioniert oder was wir auf der Website verbessern könnten.',
    descriptionLabel: 'Problembeschreibung *',
    descriptionPlaceholder: 'Z. B. Grundriss-Link funktioniert nicht, falscher Text usw.',
    emailLabel: 'E-Mail (optional)',
    emailPlaceholder: 'email@beispiel.de',
    submit: 'Bericht senden',
    sending: 'Wird gesendet…',
    success: 'Vielen Dank! Ihr Bericht wurde gesendet.',
    error: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
    close: 'Schließen',
    footerLink: 'Problem melden',
  },
  status: {
    completed: 'Fertiggestellt',
    'under-construction': 'Im Bau',
    planning: 'Demnächst',
  },
  seo: {
    siteName: 'Etna Group',
    defaultTitle: 'Etna Group — Premium-Wohnungen im Kosovo',
    defaultDescription:
      'Etna Group — erstklassige Wohnanlagen in Prishtina, Prizren und Malisheva. Elsa, Tiani, Tara und Joni Residence. Finden Sie Ihre ideale Wohnung mit unserem KI-Assistenten.',
    homeTitle: 'Etna Group — Premium-Wohnungen & Residenzen im Kosovo',
    homeDescription:
      'Entdecken Sie Elsa, Tiani, Tara und Joni Residence — Premium-Wohnungen von Etna Group im Kosovo. Filtern Sie nach Stadt und Quadratmetern oder nutzen Sie unseren KI-Assistenten.',
    aboutTitle: 'Über uns — Etna Group Kosovo',
    aboutDescription:
      'Erfahren Sie mehr über Etna Group, das kosovarische Bauunternehmen, das erstklassige Wohnanlagen in Prishtina, Prizren und Malisheva entwickelt.',
    contactTitle: 'Kontakt — Etna Group',
    contactDescription:
      'Kontaktieren Sie Etna Group zu Wohnungen in Elsa, Tiani, Tara und Joni Residence. Telefon, E-Mail und Kontaktformular.',
    projectTitle: (name: string) => `${name} — Etna Group`,
    projectDescription: (name: string, city: string) =>
      `${name} in ${city} — eine erstklassige Wohnanlage von Etna Group. Grundrisse ansehen und Besichtigung vereinbaren.`,
  },
  common: {
    newBadge: 'Neu',
    logoAlt: 'Etna Group Logo',
    heroVideoAria: 'Etna Group Hero-Video',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    languageAria: 'Sprache',
    brandName: 'Etna Group',
    areaSqm: (n: number) => `${n} m²`,
  },
  project: {
    notFound: 'Projekt nicht gefunden',
    backToHome: 'Zurück zur Startseite',
    location: 'Standort',
    status: 'Status',
    statusInPlanning: 'In Planung',
    buildings: 'Gebäude',
    buildingSingular: 'Gebäude',
    buildingPlural: (n: number) => `${n} Gebäude`,
    features: 'Ausstattung',
    mapSelectFloor: 'Wählen Sie Ihre Etage',
    mapSelectApartment: 'Wählen Sie Ihre Wohnung',
    mapSelectBlock: 'Wählen Sie Ihren Block',
    mapHintFloor: 'Klicken Sie auf eine Etage, um Wohnungstypen zu sehen',
    mapHintApartment: 'Klicken Sie, um Wohnungstypen zu sehen',
    mapHintBlock: 'Klicken Sie auf einen Block, um Wohnungstypen zu sehen',
    sectionUnderConstruction: 'Im Bau',
    sectionUnderConstructionBody:
      'Der Bereich zur Wohnungsauswahl befindet sich in Entwicklung und wird bald verfügbar sein.',
    moreInfoPrefix: 'Für weitere Informationen bitte',
    contactUsLink: 'kontaktieren Sie uns',
  },
  residence: {
    backToElsa: 'Zurück zu Elsa Residence',
    backToTiani: 'Zurück zu Tiani Residence',
    backToTara: 'Zurück zu Tara Residence',
    backToJoni: 'Zurück zu Joni Residence',
    blockTitle: (residence: string, block: string) => {
      const name = residence === 'tiani' ? 'Tiani Residence' : 'Elsa Residence'
      return `${name} — Block ${block}`
    },
    blockSubtitle: (block: string) => `Wohnungstypen in Block ${block}`,
    joniFloorTitle: (floor: number) => `Joni Residence — Etage ${floor}`,
    joniFloorSubtitle: (floor: number) => `Wohnungstypen auf Etage ${floor}`,
    taraTitle: 'Tara Residence',
    taraSubtitle: 'Wohnungstypen in Tara Residence',
    blockEComingSoon: 'Grundrisse mit m² für Block E werden bald hinzugefügt.',
    elsaResidenceAlt: 'Elsa Residence',
    tianiResidenceAlt: 'Tiani Residence',
    taraResidenceAlt: 'Tara Residence',
    joniResidenceAlt: 'Joni Residence',
  },
  group: {
    block: (letter: string) => `Block ${letter}`,
    floor: (n: number) => `Etage ${n}`,
  },
  cities: {
    prishtina: 'Prishtina',
    prizren: 'Prizren',
    malisheva: 'Malisheva',
  },
  qr: {
    website: 'Webseite',
    phone: 'Telefon',
    officePrishtina: 'Büro Prishtina',
    officePrizren: 'Büro Prizren',
    openMaps: 'In Google Maps öffnen',
    facebook: 'Facebook',
    instagram: 'Instagram',
    tiktok: 'TikTok',
    tagline: 'Folgen Sie uns überall',
  },
  error: {
    title: 'Ups! Etwas ist schiefgelaufen',
    message: 'Entschuldigung für die Unannehmlichkeiten. Bitte laden Sie die Seite neu.',
    refresh: 'Seite neu laden',
  },
  whatsapp: {
    prefilledMessage: 'Hallo, ich interessiere mich für eine Wohnung.',
    ariaLabel: 'Kontaktieren Sie uns auf WhatsApp',
  },
}

export type TranslationTree = {
  nav: {
    home: string
    projects: string
    about: string
    contact: string
    chat: string
    chatAria: string
  }
  home: {
    tagline: string
    projectsTitle: string
    projectsSubtitle: string
    location: string
    viewDetails: string
    statusCompleted: string
    statusConstruction: string
    statusSoon: string
    flatSelectorTitle: string
    flatSelectorSubtitle: string
    filterCity: string
    filterBedrooms: string
    filterSize: string
    filterAll: string
    filterResults: string
    filterNoResults: string
    filterSelectHint: string
    viewPlan: string
    bedroom: (n: number) => string
    orUseAi: string
  }
  chat: {
    promo: string
    promoAria: string
    assistant: string
    greeting: string
    placeholder: string
    disclaimer: string
    viewPlan: string
    errorGeneric: string
    errorUnavailable: string
    assistantName: string
    chatAria: string
    closeChat: string
    typeMessage: string
    sendMessage: string
    openChatAssistant: string
    closeChatAssistant: string
  }
  footer: {
    locations: string
    tagline: string
    home: string
    about: string
    contact: string
    copyright: string
    mapElsaOffice: string
    mapPrizrenOffice: string
    mapTara: string
    mapTiani: string
    mapJoni: string
    companyName: string
  }
  about: {
    title: string
    hero: string
    projects: string
    units: string
    residents: string
    learnMore: string
    visionTitle: string
    visionBody: string
    valueQualityTitle: string
    valueQualityBody: string
    valueSustainabilityTitle: string
    valueSustainabilityBody: string
    valueCommunityTitle: string
    valueCommunityBody: string
  }
  contact: {
    title: string
    subtitle: string
    formIntro: string
    name: string
    nameFull: string
    namePlaceholder: string
    email: string
    phone: string
    phoneFull: string
    project: string
    projectInterested: string
    message: string
    messageLabel: string
    messagePlaceholder: string
    send: string
    sending: string
    success: string
    successDetail: string
    error: string
    errorDetail: string
    selectProject: string
    general: string
    contactInfo: string
    address: string
    officePrishtina: string
    officePrizren: string
    addressPrishtina: string
    addressPrizren: string
    workingHours: string
    hoursWeekdays: string
    hoursSunday: string
    followUs: string
    phonePlaceholder: string
    emailPlaceholder: string
    projectElsa: string
    projectTara: string
    projectTiani: string
    projectJoni: string
    projectEtna: string
  }
  report: {
    title: string
    subtitle: string
    descriptionLabel: string
    descriptionPlaceholder: string
    emailLabel: string
    emailPlaceholder: string
    submit: string
    sending: string
    success: string
    error: string
    close: string
    footerLink: string
  }
  status: {
    completed: string
    'under-construction': string
    planning: string
  }
  seo: {
    siteName: string
    defaultTitle: string
    defaultDescription: string
    homeTitle: string
    homeDescription: string
    aboutTitle: string
    aboutDescription: string
    contactTitle: string
    contactDescription: string
    projectTitle: (name: string) => string
    projectDescription: (name: string, city: string) => string
  }
  common: {
    newBadge: string
    logoAlt: string
    heroVideoAria: string
    openMenu: string
    closeMenu: string
    languageAria: string
    brandName: string
    areaSqm: (n: number) => string
  }
  project: {
    notFound: string
    backToHome: string
    location: string
    status: string
    statusInPlanning: string
    buildings: string
    buildingSingular: string
    buildingPlural: (n: number) => string
    features: string
    mapSelectFloor: string
    mapSelectApartment: string
    mapSelectBlock: string
    mapHintFloor: string
    mapHintApartment: string
    mapHintBlock: string
    sectionUnderConstruction: string
    sectionUnderConstructionBody: string
    moreInfoPrefix: string
    contactUsLink: string
  }
  residence: {
    backToElsa: string
    backToTiani: string
    backToTara: string
    backToJoni: string
    blockTitle: (residence: string, block: string) => string
    blockSubtitle: (block: string) => string
    joniFloorTitle: (floor: number) => string
    joniFloorSubtitle: (floor: number) => string
    taraTitle: string
    taraSubtitle: string
    blockEComingSoon: string
    elsaResidenceAlt: string
    tianiResidenceAlt: string
    taraResidenceAlt: string
    joniResidenceAlt: string
  }
  group: {
    block: (letter: string) => string
    floor: (n: number) => string
  }
  cities: {
    prishtina: string
    prizren: string
    malisheva: string
  }
  qr: {
    website: string
    phone: string
    officePrishtina: string
    officePrizren: string
    openMaps: string
    facebook: string
    instagram: string
    tiktok: string
    tagline: string
  }
  error: {
    title: string
    message: string
    refresh: string
  }
  whatsapp: {
    prefilledMessage: string
    ariaLabel: string
  }
}

export const translations: Record<Locale, TranslationTree> = { sq, en, de }
