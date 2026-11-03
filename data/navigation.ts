export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: 'Overview', href: '/' },
  { label: 'Research & Gaps', href: '/research' },
  { label: 'Subsystems', href: '/subsystems' },
  { label: 'Field Results', href: '/results' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Investigators', href: '/team' },
];