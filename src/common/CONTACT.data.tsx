import SOCIALSMeta from './CONTACT.meta';
import { Dictionary } from 'intlayer';

export default {
  key: 'contact',
  content: {
    email: 'hattagithub@gmail.com',
    creator: {
      name: 'Muhammad Hatta Yudia Gymnastiar',
      url: '/'
    },
    socials: [
      {
        id: 'github',
        label: 'Github',
        url: 'https://github.com/attah1911'
      },
      {
        id: 'instagram',
        label: 'Instagram',
        url: 'https://www.instagram.com/hatt.agym/'
      },
      {
        id: 'linkedin',
        label: 'Linkedin',
        url: 'https://www.linkedin.com/in/muhammad-hatta-yudia-gymnastiar/'
      }
    ] satisfies { id: keyof typeof SOCIALSMeta; label: string; url: string }[]
  }
} satisfies Dictionary;
