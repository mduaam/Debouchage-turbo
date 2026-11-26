const encodeSvgBase64 = (svg: string): string => {
  if (typeof window === 'undefined') {
    return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
  }
  return `data:image/svg+xml;base64,${window.btoa(svg)}`;
};

export const NAVY_BLUR_DATA_URL = encodeSvgBase64(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 6"><rect width="8" height="6" fill="#031d4f"/><rect width="8" height="3" fill="#0a2d6e" opacity="0.5"/></svg>'
);

export const LIGHT_BLUR_DATA_URL = encodeSvgBase64(
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 6"><rect width="8" height="6" fill="#eef3fb"/><rect width="8" height="3" fill="#dbe5f4" opacity="0.65"/></svg>'
);

export const SERVICE_IMAGE_SIZES = {
  serviceHero:
    '(min-width: 1280px) 660px, (min-width: 1024px) 58vw, (min-width: 640px) 92vw, 100vw',
  relatedCard:
    '(min-width: 1280px) 380px, (min-width: 768px) 31vw, 94vw',
  catalogCard:
    '(min-width: 1024px) 208px, (min-width: 640px) 192px, 94vw',
  gridCard:
    '(min-width: 1280px) 280px, (min-width: 1024px) 24vw, (min-width: 640px) 46vw, 94vw',
  homeHeroDesktop:
    '(min-width: 1280px) 66vw, (min-width: 1024px) 64vw, 100vw',
  homeHeroMobile:
    '(min-width: 768px) 92vw, 100vw',
} as const;

export const IMAGE_QUALITY = {
  hero: 85,
  card: 75,
  avatar: 75,
} as const;
