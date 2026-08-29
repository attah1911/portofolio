import { Dictionary, t } from 'intlayer';

export default {
  key: 'career-card',
  content: {
    open: t({ en: 'Open career', id: 'Buka karier' }),
    close: t({ en: 'Close career', id: 'Tutup karier' }),
    noEnd: t({ en: 'Present', id: 'Sekarang' })
  }
} satisfies Dictionary;
