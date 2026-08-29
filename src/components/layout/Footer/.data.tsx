import { Dictionary, insert, nest, t } from 'intlayer';

export default {
  key: 'footer',
  content: {
    action: {
      email: nest('contact', 'email'),
      label: 'Email'
    },
    description: t({
      en: 'The dev — between algorithms, interfaces, and the pursuit of building something truly great.',
      id: 'Sang developer — di antara algoritma, antarmuka, dan usaha membangun sesuatu yang benar-benar hebat.'
    }),
    copyright: insert('© {{year}} {{link}}'),
    location: nest('location'),
    socials: nest('contact', 'socials')
  }
} satisfies Dictionary;
