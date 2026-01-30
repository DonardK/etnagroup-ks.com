/**
 * Maps residence project IDs to their visual image paths
 * Images are stored in /visuals/{ResidenceName}Visuals/
 */

export const getResidenceVisuals = (projectId: string): string[] => {
  const basePath = '/visuals'
  
  // Map project IDs to their visual folder names
  const visualMap: Record<string, string[]> = {
    elsa: [
      `${basePath}/ElsaResidenceVisuals/Renderi 1.jpg`,
      `${basePath}/ElsaResidenceVisuals/Renderi 2.jpg`,
      `${basePath}/ElsaResidenceVisuals/Renderi 3.jpg`,
      `${basePath}/ElsaResidenceVisuals/Renderi 4.jpg`,
      `${basePath}/ElsaResidenceVisuals/Renderi 5.jpg`,
      `${basePath}/ElsaResidenceVisuals/Renderi 6.jpg`,
      `${basePath}/ElsaResidenceVisuals/1.jpg`,
      `${basePath}/ElsaResidenceVisuals/2.jpg`,
      `${basePath}/ElsaResidenceVisuals/3.jpg`,
      `${basePath}/ElsaResidenceVisuals/4.jpg`,
      `${basePath}/ElsaResidenceVisuals/5.jpg`,
      `${basePath}/ElsaResidenceVisuals/6.jpg`,
      `${basePath}/ElsaResidenceVisuals/7.jpg`,
      `${basePath}/ElsaResidenceVisuals/8.jpg`,
      `${basePath}/ElsaResidenceVisuals/9.jpg`,
      `${basePath}/ElsaResidenceVisuals/10.jpg`,
    ],
    joni: [
      `${basePath}/JoniResidenceVisuals/01_3 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_4 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_5 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_10 - Photo (1).jpg`,
      `${basePath}/JoniResidenceVisuals/01_12 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_19 - Photo (1).jpg`,
      `${basePath}/JoniResidenceVisuals/01_20 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_24 - Photo.jpg`,
      `${basePath}/JoniResidenceVisuals/01_27 - Photo (1).jpg`,
      `${basePath}/JoniResidenceVisuals/01_27 - Photo.jpg`,
    ],
    tara: [
      `${basePath}/TaraResidenceVisuals/A1.jpg`,
      `${basePath}/TaraResidenceVisuals/A2.jpg`,
      `${basePath}/TaraResidenceVisuals/A3.jpg`,
      `${basePath}/TaraResidenceVisuals/A4.jpg`,
      `${basePath}/TaraResidenceVisuals/A5.jpg`,
      `${basePath}/TaraResidenceVisuals/A6.jpg`,
      `${basePath}/TaraResidenceVisuals/A7.jpg`,
      `${basePath}/TaraResidenceVisuals/A8.jpg`,
      `${basePath}/TaraResidenceVisuals/A9.jpg`,
      `${basePath}/TaraResidenceVisuals/A10.jpg`,
      `${basePath}/TaraResidenceVisuals/A11.jpg`,
      `${basePath}/TaraResidenceVisuals/A12.jpg`,
      `${basePath}/TaraResidenceVisuals/A13.jpg`,
      `${basePath}/TaraResidenceVisuals/A14.jpg`,
      `${basePath}/TaraResidenceVisuals/a15.jpg`,
      `${basePath}/TaraResidenceVisuals/a16.jpg`,
      `${basePath}/TaraResidenceVisuals/a17.jpg`,
      `${basePath}/TaraResidenceVisuals/a18.jpg`,
      `${basePath}/TaraResidenceVisuals/a19.jpg`,
      `${basePath}/TaraResidenceVisuals/a20.jpg`,
      `${basePath}/TaraResidenceVisuals/A21.jpg`,
      `${basePath}/TaraResidenceVisuals/A22.jpg`,
      `${basePath}/TaraResidenceVisuals/A23.jpg`,
      `${basePath}/TaraResidenceVisuals/A24.jpg`,
      `${basePath}/TaraResidenceVisuals/A25.jpg`,
      `${basePath}/TaraResidenceVisuals/A26.jpg`,
      `${basePath}/TaraResidenceVisuals/A27.jpg`,
    ],
    tiani: [
      `${basePath}/TianiResidenceVisuals/01_1 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_2 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_3 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_4 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_5 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_7 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_9 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_14 - Photo copy.jpg`,
      `${basePath}/TianiResidenceVisuals/01_45 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_46 - Photo.jpg`,
      `${basePath}/TianiResidenceVisuals/01_48 - Photo.jpg`,
    ],
  }

  return visualMap[projectId] || []
}

/**
 * Gets the first visual image to use as a hero image fallback
 */
export const getResidenceHeroImage = (projectId: string): string | null => {
  const visuals = getResidenceVisuals(projectId)
  return visuals.length > 0 ? visuals[0] : null
}
