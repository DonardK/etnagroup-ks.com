export type Locale = 'sq' | 'en'

export const LOCALES: { code: Locale; label: string }[] = [
  { code: 'sq', label: 'SQ' },
  { code: 'en', label: 'EN' },
]

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
  },
  footer: {
    locations: 'Lokacionet Tona',
    tagline: 'Hapësira Rezidenciale Premium',
    home: 'Ballina',
    about: 'Për Ne',
    contact: 'Kontakt',
    copyright: 'Të gjitha të drejtat e rezervuara.',
  },
  about: {
    title: 'Për Ne',
    hero:
      'Etna Group është një kompani e specializuar në zhvillimin e komplekseve rezidenciale premium në Kosovë',
    projects: 'Projekte',
    units: 'Njësi',
    residents: 'Banorë',
    learnMore: 'Mëso Më Shumë',
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
  },
  footer: {
    locations: 'Our Locations',
    tagline: 'Premium Residential Spaces',
    home: 'Home',
    about: 'About Us',
    contact: 'Contact',
    copyright: 'All rights reserved.',
  },
  about: {
    title: 'About Us',
    hero:
      'Etna Group is a company specialized in developing premium residential complexes in Kosovo',
    projects: 'Projects',
    units: 'Units',
    residents: 'Residents',
    learnMore: 'Learn More',
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
  }
  footer: {
    locations: string
    tagline: string
    home: string
    about: string
    contact: string
    copyright: string
  }
  about: {
    title: string
    hero: string
    projects: string
    units: string
    residents: string
    learnMore: string
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
}

export const translations: Record<'sq' | 'en', TranslationTree> = { sq, en }
