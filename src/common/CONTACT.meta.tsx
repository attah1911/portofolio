import { IconType } from 'react-icons';
import { PiLinkedinLogoFill } from 'react-icons/pi';
import { SiGithub, SiInstagram } from 'react-icons/si';

export default {
  github: {
    Icon: SiGithub
  },
  instagram: {
    Icon: SiInstagram
  },
  linkedin: {
    Icon: PiLinkedinLogoFill
  }
} satisfies Record<string, { Icon: IconType }>;
