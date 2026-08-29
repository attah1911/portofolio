import { NotFoundData } from './not-found';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'not-found-page',
  content: {
    hero: {
      status: t({
        en: 'Error 404',
        id: 'Error 404'
      }),
      title: t({
        en: 'Sorry, the page was not found!',
        id: 'Maaf, halaman tidak ditemukan!'
      }),
      text: t({
        en: 'Let’s get you back to somewhere familiar.',
        id: 'Mari kita kembalikan Anda ke tempat yang familiar.'
      }),
      action: t({
        en: 'Home page',
        id: 'Beranda'
      })
    }
  }
} satisfies Dictionary<NotFoundData>;
