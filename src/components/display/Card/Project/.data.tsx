import { Dictionary, t } from 'intlayer';

export default {
  key: 'project-card',
  content: {
    open: t({ en: 'Go to project page', id: 'Buka halaman proyek' }),
    noYear: t({ en: 'In progress', id: 'Dalam pengerjaan' })
  }
} satisfies Dictionary;
