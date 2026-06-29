import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getProjectById } from '../../data/projects'
import { useLanguage } from '../../i18n/LanguageContext'

const SITE_URL = 'https://etnagroup-ks.com'

const upsertMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

const upsertLink = (rel: string, href: string) => {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export const SeoHead = () => {
  const { pathname } = useLocation()
  const { locale, t } = useLanguage()

  useEffect(() => {
    let title: string = t.seo.defaultTitle
    let description: string = t.seo.defaultDescription

    if (pathname === '/') {
      title = t.seo.homeTitle
      description = t.seo.homeDescription
    } else if (pathname === '/per-ne') {
      title = t.seo.aboutTitle
      description = t.seo.aboutDescription
    } else if (pathname === '/kontakt') {
      title = t.seo.contactTitle
      description = t.seo.contactDescription
    } else if (pathname.startsWith('/projektet/')) {
      const id = pathname.split('/')[2]
      const project = id ? getProjectById(id) : undefined
      if (project) {
        title = t.seo.projectTitle(project.name)
        const city = project.location.split(',')[0]
        description = t.seo.projectDescription(project.name, city)
      }
    }

    const url = `${SITE_URL}${pathname === '/' ? '' : pathname}`

    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large')
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', t.seo.siteName)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:locale', locale === 'sq' ? 'sq_AL' : 'en_US')
    upsertMeta(
      'property',
      'og:image',
      'https://media.etnagroup-ks.com/brand/Logo.png',
    )
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    upsertLink('canonical', url)
  }, [pathname, locale, t])

  return null
}

/** JSON-LD for homepage — mount once on HomePage. */
export const HomeStructuredData = () => {
  const { locale } = useLanguage()

  useEffect(() => {
    const scriptId = 'etna-jsonld-org'
    let script = document.getElementById(scriptId) as HTMLScriptElement | null
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }

    const data = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE_URL}/#organization`,
          name: 'Etna Group',
          url: SITE_URL,
          logo: 'https://media.etnagroup-ks.com/brand/Logo.png',
          description:
            locale === 'sq'
              ? 'Komplekse rezidenciale premium në Kosovë — Elsa, Tiani, Tara dhe Joni Residence.'
              : 'Premium residential complexes in Kosovo — Elsa, Tiani, Tara and Joni Residence.',
          telephone: '+38346383838',
          email: 'info@etnagroup-ks.com',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Prishtinë',
            addressCountry: 'XK',
          },
          sameAs: [
            'https://www.facebook.com/etnagroupks/',
            'https://www.instagram.com/etna.shpk',
            'https://www.tiktok.com/@etnagroup',
          ],
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: SITE_URL,
          name: 'Etna Group',
          publisher: { '@id': `${SITE_URL}/#organization` },
          inLanguage: ['sq', 'en'],
          potentialAction: {
            '@type': 'SearchAction',
            target: `${SITE_URL}/#gjej-banesen`,
            'query-input': 'required name=search_term_string',
          },
        },
        {
          '@type': 'RealEstateAgent',
          '@id': `${SITE_URL}/#agent`,
          name: 'Etna Group',
          url: SITE_URL,
          telephone: '+38346383838',
          areaServed: ['Prishtinë', 'Prizren', 'Malishevë'],
        },
      ],
    }

    script.textContent = JSON.stringify(data)
    return () => {
      script?.remove()
    }
  }, [locale])

  return null
}
