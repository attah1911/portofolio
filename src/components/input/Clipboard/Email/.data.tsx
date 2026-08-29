import { Dictionary, t } from 'intlayer';

export default {
  key: 'email-clipboard',
  content: {
    label: t({ en: 'Copy email', id: 'Salin email' }),
    copied: t({ en: 'Email copied', id: 'Email disalin' })
  }
} satisfies Dictionary;
