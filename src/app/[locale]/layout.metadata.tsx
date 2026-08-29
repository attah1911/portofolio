import { Dictionary, t } from 'intlayer';
import { Metadata } from 'next';

export default {
  key: 'locale-metadata',
  content: {
    title: {
      default: t({
        en: 'Muhammad Hatta Yudia Gymnastiar — an awesome Developer',
        id: 'Muhammad Hatta Yudia Gymnastiar — seorang Developer hebat'
      }),
      template: '%s — Muhammad Hatta Yudia Gymnastiar'
    },
    description: t({
      en: 'Beyond tech, algorithms and results. Web developer and Computer Science student passionate about building meaningful solutions, one line of code at a time.',
      id: 'Lebih dari tech, algoritma, dan hasil. Web developer dan mahasiswa Ilmu Komputer yang passionate membangun solusi bermakna, baris demi baris.'
    }),
    creator: 'Muhammad Hatta Yudia Gymnastiar',
    publisher: 'Muhammad Hatta Yudia Gymnastiar',
    category: 'technology',
    keywords: t({
      en: [
        'Muhammad Hatta Yudia Gymnastiar',
        'Portfolio',
        'Developer',
        'Full-Stack Developer',
        'Computer Science',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'PHP',
        'Moodle',
        'React Native',
        'MongoDB',
        'Git',
        'Tailwind CSS',
        'Web Development',
        'Frontend',
        'Backend'
      ].join(', '),
      id: [
        'Muhammad Hatta Yudia Gymnastiar',
        'Portofolio',
        'Developer',
        'Full-Stack Developer',
        'Ilmu Komputer',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'PHP',
        'Moodle',
        'React Native',
        'MongoDB',
        'Git',
        'Tailwind CSS',
        'Pengembangan Web',
        'Frontend',
        'Backend'
      ].join(', ')
    }),
    authors: [
      {
        name: 'Muhammad Hatta Yudia Gymnastiar',
        url: 'https://github.com/attah1911'
      }
    ],
    openGraph: {
      type: 'website',
      siteName: t({
        en: 'Muhammad Hatta Yudia Gymnastiar Portfolio',
        id: 'Portofolio Muhammad Hatta Yudia Gymnastiar'
      }),
      images: [
        {
          url: t({ en: '/og/en.png', id: '/og/en.png' }),
          width: 1200,
          height: 675,
          alt: t({
            en: 'Muhammad Hatta Yudia Gymnastiar Portfolio',
            id: 'Portofolio Muhammad Hatta Yudia Gymnastiar'
          })
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      images: [t({ en: '/og/en.png', id: '/og/en.png' })]
    }
  }
} satisfies Dictionary<Metadata>;
