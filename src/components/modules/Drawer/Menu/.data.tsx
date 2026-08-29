import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'menu-drawer',
  content: {
    menu: {
      label: 'Menu',
      open: t({ en: 'Open menu', id: 'Buka menu' }),
      close: t({ en: 'Close menu', id: 'Tutup menu' })
    },
    socials: nest('contact', 'socials'),
    nav: nest('pages', 'main')
  }
} satisfies Dictionary;
