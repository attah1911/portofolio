import { Dictionary, t } from 'intlayer';

export default {
  key: 'pages',
  content: {
    main: [
      {
        url: '/#experience',
        label: t({ en: 'Experience', id: 'Pengalaman' })
      },
      {
        url: '/#about',
        label: t({ en: 'About', id: 'Tentang' })
      },
      {
        url: '/#contact',
        label: t({ en: 'Contact', id: 'Kontak' })
      }
    ]
  }
} satisfies Dictionary;
