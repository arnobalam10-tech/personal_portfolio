/*
  Every piece of work shown in the grid on the home page, in display order.
  - kind 'design' : opens the case study at /design/<slug>
  - kind 'web'    : opens the live site in a new tab
  - cover         : card artwork. Drop generated art in /public/assets/covers/ and point to it here.
  - ratio         : CSS aspect-ratio of the card artwork
  - tint          : background shown while the cover loads
*/
import { designProjects } from './designProjects';

const design = Object.fromEntries(designProjects.map((p) => [p.slug, p]));

export const works = [
  {
    id: 'chokka-brand',
    kind: 'design',
    slug: 'chokka',
    title: 'Chokka',
    tags: ['Branding', 'Packaging'],
    cover: design.chokka.cover,
    ratio: '4 / 4.6',
    tint: '#EAE2D0',
  },
  {
    id: 'kagoj',
    kind: 'web',
    url: 'https://kagoj-three.vercel.app/landing',
    title: 'Kagoj',
    tags: ['SaaS', 'Full-stack'],
    blurb: "A quiet, Notion-like personal notebook for a student's university life. Pages, databases, calendar, handwriting with Apple Pencil, attendance and tasks. No ads, no AI clutter. Just paper.",
    cover: '/assets/covers/kagoj.jpg',
    ratio: '4 / 5',
    tint: '#E9E3D0',
  },
  {
    id: 'baazar',
    kind: 'design',
    slug: 'baazar',
    title: 'Baazar',
    tags: ['Branding', 'App marketing'],
    cover: design.baazar.cover,
    ratio: '1 / 1',
    tint: '#E7F0E9',
  },
  {
    id: 'studynex',
    kind: 'design',
    slug: 'study-nex',
    title: 'StudyNEX',
    tags: ['Branding', 'Campaign'],
    cover: design['study-nex'].cover,
    ratio: '4 / 5',
    tint: '#EFE0DA',
  },
  {
    id: 'chokka-shop',
    kind: 'web',
    url: 'https://www.chokka.shop',
    title: 'Chokka Shop',
    tags: ['E-commerce', 'Vibe coded'],
    blurb: 'Ecommerce site with a full admin panel, analytics and 3D card animations on the front end.',
    cover: '/assets/covers/chokka-shop.jpg',
    ratio: '4 / 5',
    tint: '#DDE3F7',
  },
  {
    id: 'nire',
    kind: 'design',
    slug: 'nire',
    title: 'Niré',
    tags: ['Branding', 'Packaging'],
    cover: design.nire.cover,
    ratio: '4 / 4.6',
    tint: '#F2DDE0',
  },
  {
    id: 'whatsmygrade',
    kind: 'web',
    url: 'https://whatsmygrade.xyz/',
    title: 'WhatsMyGrade',
    tags: ['EdTech', 'SaaS'],
    blurb: 'A grade dashboard that calculates exactly what you need on finals to hit your target. 500+ users with $0 marketing.',
    cover: '/assets/projects/project-5.webp',
    ratio: '4 / 3',
    tint: '#DDDDF2',
  },
  {
    id: 'inframe',
    kind: 'design',
    slug: 'inframe',
    title: 'InFrame',
    tags: ['Branding', 'Social design'],
    cover: design.inframe.cover,
    ratio: '1 / 1',
    tint: '#DDE0F7',
  },
  {
    id: 'azeez',
    kind: 'web',
    url: 'https://www.azeez.shop/',
    title: 'Azeez',
    tags: ['Fashion', 'E-commerce'],
    blurb: "Traditional South Asian women's dresses and jewelry, curated for Australia. Cash on delivery.",
    cover: '/assets/projects/azeez.png',
    ratio: '16 / 10',
    tint: '#0B4A55',
  },
  {
    id: 'team-lonthon',
    kind: 'design',
    slug: 'team-lonthon',
    title: 'Team Lonthon',
    tags: ['Branding', 'Campaign'],
    cover: design['team-lonthon'].cover,
    ratio: '4 / 5',
    tint: '#DCE7E1',
  },
  {
    id: 'estore-vendor',
    kind: 'web',
    url: 'https://estorevendor.com/',
    title: 'Estore Vendor',
    tags: ['Culinary', 'WordPress'],
    blurb: 'Website for a UK culinary business with a dynamic menu and a booking system.',
    cover: '/assets/projects/project-3.webp',
    ratio: '4 / 3',
    tint: '#D8ECEC',
  },
  {
    id: 'ashatoru',
    kind: 'web',
    url: 'https://ashatoru.com/',
    title: 'Ashatoru',
    tags: ['Shopify', 'E-commerce'],
    blurb: 'Shopify store for a bag brand, with custom plugins and custom CSS and HTML.',
    cover: '/assets/projects/project-4.webp',
    ratio: '4 / 3',
    tint: '#F2DADA',
  },
];

export const brands = [
  { name: 'Chokka', logo: '/assets/chokka-logo.webp' },
  { name: 'Baazar', logo: design.baazar.logo },
  { name: 'StudyNEX', logo: design['study-nex'].logo },
  { name: 'Niré', logo: design.nire.logo },
  { name: 'InFrame', logo: design.inframe.logo },
  { name: 'Team Lonthon', logo: design['team-lonthon'].logo },
  { name: 'Estore Vendor' },
  { name: 'Ashatoru' },
  { name: 'WhatsMyGrade' },
  { name: 'Kagoj' },
];

export const contact = {
  email: 'arnob.alam10@gmail.com',
  whatsapp: 'https://wa.me/8801322654646',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/alampost._/' },
    { label: 'Chokka', href: 'https://www.instagram.com/chokka.co/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ashab-alam-315650270/' },
    { label: 'Facebook', href: 'https://www.facebook.com/arnob.alam.710456' },
    { label: 'GitHub', href: 'https://github.com/arnobalam10-tech' },
  ],
};
