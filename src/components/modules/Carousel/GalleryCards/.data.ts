import { Dictionary, t } from 'intlayer';

export default {
  key: 'gallery-cards-carousel',
  content: {
    prevSlideMessage: t({
      en: 'Go to previous image',
      id: 'Ke gambar sebelumnya'
    }),
    nextSlideMessage: t({
      en: 'Go to next image',
      id: 'Ke gambar berikutnya'
    }),
    firstSlideMessage: t({
      en: 'You are viewing the first image',
      id: 'Anda sedang melihat gambar pertama'
    }),
    lastSlideMessage: t({
      en: 'You are viewing the last image',
      id: 'Anda sedang melihat gambar terakhir'
    }),
    paginationBulletMessage: t({
      en: 'Go to image {{index}}',
      id: 'Ke gambar {{index}}'
    }),
    slideLabelMessage: t({
      en: 'Image {{index}} of {{slidesLength}}',
      id: 'Gambar {{index}} dari {{slidesLength}}'
    }),
    containerMessage: t({
      en: 'Image gallery',
      id: 'Galeri gambar'
    }),
    containerRoleDescriptionMessage: t({
      en: 'carousel',
      id: 'carousel'
    }),
    itemRoleDescriptionMessage: t({
      en: 'image',
      id: 'gambar'
    })
  }
} satisfies Dictionary;
