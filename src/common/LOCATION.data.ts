import { Dictionary, t } from 'intlayer';

export default {
  key: 'location',
  content: {
    country: t({ en: 'Indonesia', id: 'Indonesia' }),
    state: 'Jakarta',
    gmt: 'GMT+7',
    timeZone: 'Asia/Jakarta'
  }
} satisfies Dictionary;
