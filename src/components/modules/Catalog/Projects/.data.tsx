import { Dictionary, nest, t } from 'intlayer';

export default {
  key: 'projects-catalog',
  content: {
    empty: t({ en: 'None project found!', id: 'Tidak ada proyek ditemukan!' }),
    items: nest('projects')
  }
} satisfies Dictionary;
