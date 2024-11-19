import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiMedium,
  SiX,
} from '@icons-pack/react-simple-icons';
import { CMSLink } from 'edit-me/types/CMSLink';

export const links: CMSLink[] = [
  {
    href: 'https://github.com/JackTheHack',
    icon: SiGithub,
    title: 'GitHub',
  },  
  {
    href: 'https://www.linkedin.com/in/jackspektor/',
    icon: SiLinkedin,
    title: 'LinkedIn',
  },
  {
    href: 'https://medium.com/@jackspektor',
    icon: SiMedium,
    title: 'Medium',
  },
  {
    href: 'https://bsky.app/profile/jackspektor.bsky.social',
    icon: SiX,
    title: 'Bluesky',
  },
];
