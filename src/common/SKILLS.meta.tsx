import { Skill } from '@/types/Skill';
import { PiDotsThreeBold } from 'react-icons/pi';
import {
  SiBootstrap,
  SiChakraui,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostman,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';

export default {
  typescript: {
    Icon: SiTypescript
  },
  javascript: {
    Icon: SiJavascript
  },
  react: {
    Icon: SiReact
  },
  nextjs: {
    Icon: SiNextdotjs
  },
  express: {
    Icon: SiExpress
  },
  nodejs: {
    Icon: SiNodedotjs
  },
  php: {
    Icon: SiPhp
  },
  mongodb: {
    Icon: SiMongodb
  },
  supabase: {
    Icon: SiSupabase
  },
  mysql: {
    Icon: SiMysql
  },
  git: {
    Icon: SiGit
  },
  postman: {
    Icon: SiPostman
  },
  tailwindcss: {
    Icon: SiTailwindcss
  },
  shadcn: {
    Icon: SiShadcnui
  },
  chakra: {
    Icon: SiChakraui
  },
  bootstrap: {
    Icon: SiBootstrap
  },
  ellipsis: {
    Icon: PiDotsThreeBold
  }
} satisfies Record<string, Pick<Skill, 'Icon'>>;
