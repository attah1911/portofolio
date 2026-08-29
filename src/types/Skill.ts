import SKILLSMeta from '@/common/SKILLS.meta';
import { IconType } from 'react-icons';

export type Skill = {
  id: keyof typeof SKILLSMeta;
  title: string;
  Icon: IconType;
};
