import type { TranslationTree } from './translations'

export type ResidenceId = 'elsa' | 'tiani' | 'tara' | 'joni'

interface ApartmentPageCopy {
  title: string
  subtitle: string
  backLink: string
  backLabel: string
}

interface ApartmentPageOptions {
  residence: ResidenceId
  block?: string
  floor?: number
  comingSoon?: boolean
}

const backLabel = (t: TranslationTree, residence: ResidenceId): string => {
  switch (residence) {
    case 'elsa':
      return t.residence.backToElsa
    case 'tiani':
      return t.residence.backToTiani
    case 'tara':
      return t.residence.backToTara
    case 'joni':
      return t.residence.backToJoni
  }
}

export const getApartmentPageCopy = (
  t: TranslationTree,
  { residence, block, floor, comingSoon }: ApartmentPageOptions,
): ApartmentPageCopy => {
  const back = backLabel(t, residence)

  if (residence === 'tara') {
    return {
      title: t.residence.taraTitle,
      subtitle: t.residence.taraSubtitle,
      backLink: '/projektet/tara',
      backLabel: back,
    }
  }

  if (residence === 'joni' && floor !== undefined) {
    return {
      title: t.residence.joniFloorTitle(floor),
      subtitle: t.residence.joniFloorSubtitle(floor),
      backLink: '/projektet/joni',
      backLabel: back,
    }
  }

  if (block) {
    return {
      title: t.residence.blockTitle(residence, block),
      subtitle: comingSoon
        ? t.residence.blockEComingSoon
        : t.residence.blockSubtitle(block),
      backLink: `/projektet/${residence}`,
      backLabel: back,
    }
  }

  return {
    title: t.residence.taraTitle,
    subtitle: t.residence.taraSubtitle,
    backLink: `/projektet/${residence}`,
    backLabel: back,
  }
}
