import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'career-catalog',
  content: {
    empty: t({ en: 'None career found!', id: 'Tidak ada karier ditemukan!' }),
    items: nest('career')
  }
} satisfies Dictionary;
