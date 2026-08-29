import { Skill } from '@/types/Skill';
import { Dictionary, t } from 'intlayer';

export default {
  key: 'skills',
  content: [
    {
      id: 'typescript',
      title: 'TypeScript'
    },
    {
      id: 'javascript',
      title: 'JavaScript'
    },
    {
      id: 'react',
      title: 'React'
    },
    {
      id: 'nextjs',
      title: 'Next.js'
    },
    {
      id: 'express',
      title: 'Express.js'
    },
    {
      id: 'nodejs',
      title: 'Node.js'
    },
    {
      id: 'php',
      title: 'PHP'
    },
    {
      id: 'mongodb',
      title: 'MongoDB'
    },
    {
      id: 'supabase',
      title: 'SupabaseDB'
    },
    {
      id: 'mysql',
      title: 'MySQL'
    },
    {
      id: 'git',
      title: 'Git'
    },
    {
      id: 'postman',
      title: 'Postman'
    },
    {
      id: 'tailwindcss',
      title: 'Tailwind CSS'
    },
    {
      id: 'shadcn',
      title: 'Shadcn UI'
    },
    {
      id: 'chakra',
      title: 'Chakra UI'
    },
    {
      id: 'bootstrap',
      title: 'Bootstrap'
    },
    {
      id: 'ellipsis',
      title: t({ en: 'Much more', id: 'Dan masih banyak lagi' })
    }
  ]
} satisfies Dictionary<Pick<Skill, 'id' | 'title'>[]>;
