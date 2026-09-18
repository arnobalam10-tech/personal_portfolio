/*
  One entry per graphic design project, in display order.
  - slug      : used in the URL  -> /design/<slug>
  - title     : shown on the grid card
  - category  : shown on the grid card (e.g. "Brand Identity", "Social Media", "Packaging")
  - cover     : path to the card thumbnail, e.g. /assets/design/<slug>/cover.webp
  - accent    : a hex color used for the card's gradient fallback + hover glow
  - component : the page built for this specific project, living in src/pages/design/
*/
import Nire from '../pages/design/Nire';
import InFrame from '../pages/design/InFrame';
import TeamLonthon from '../pages/design/TeamLonthon';
import ChokkaCaseStudy from '../pages/design/Chokka';
import BaazarCaseStudy from '../pages/design/Baazar';
import StudyNexCaseStudy from '../pages/design/StudyNex';

export const designProjects = [
  {
    slug: 'nire',
    title: 'Niré',
    category: 'Brand Identity & Packaging',
    cover: '/assets/design/nire/04-shoe-box.webp',
    logo: '/assets/design/nire/01-brand-mark.webp',
    accent: '#8C1224',
    component: Nire,
  },
  {
    slug: 'inframe',
    title: 'InFrame',
    category: 'Brand Identity & Social Design',
    cover: '/assets/design/inframe/01-logo-lockup.webp',
    logo: '/assets/design/inframe/09-icon-mark.webp',
    accent: '#1A2BD1',
    component: InFrame,
  },
  {
    slug: 'team-lonthon',
    title: 'Team Lonthon',
    category: 'Brand Identity & Campaign Design',
    cover: '/assets/design/team-lonthon/01-cut-through-the-noise.webp',
    logo: '/assets/design/team-lonthon/05-logo-wordmark.webp',
    accent: '#1C4B3C',
    component: TeamLonthon,
  },
  {
    slug: 'chokka',
    title: 'Chokka',
    category: 'Brand Identity & Packaging',
    cover: '/assets/design/chokka/06-three-boxes-promo.webp',
    logo: '/assets/design/chokka/09-logo-lockup.webp',
    accent: '#3E6B52',
    component: ChokkaCaseStudy,
  },
  {
    slug: 'baazar',
    title: 'Baazar',
    category: 'Brand Identity & App Marketing',
    cover: '/assets/design/baazar/05-every-essential-shelf.png',
    logo: '/assets/design/baazar/01-logo-mark.png',
    accent: '#1B5E3C',
    component: BaazarCaseStudy,
  },
  {
    slug: 'study-nex',
    title: 'StudyNEX',
    category: 'Brand Identity & Campaign Design',
    cover: '/assets/design/study-nex/04-take-your-seat-post.png',
    logo: '/assets/design/study-nex/01-logo-mark.png',
    accent: '#5A1220',
    component: StudyNexCaseStudy,
  },
];
