export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Placement', href: '/placement' },
  { label: 'Admission', href: '/admission' },
  { label: 'Contact', href: '/contact' },
] as const

export const FOOTER_LINKS = {
  quickLinks: [
    { label: 'Home', href: '/' },
    { label: 'All Courses', href: '/courses' },
    { label: 'Admission Form', href: '/admission' },
    { label: 'Placement Guidance', href: '/placement' },
    { label: 'Contact Us', href: '/contact' },
  ],
  courses: [
    { label: 'Basic Computer Course', href: '/courses/basic-computer-course' },
    { label: 'Advanced Computer Course', href: '/courses/advanced-computer-course' },
    { label: 'MS Office Mastery', href: '/courses/ms-office-mastery' },
    { label: 'Graphic Design Basics', href: '/courses/graphic-design-basics' },
    { label: 'English Communication', href: '/courses/english-communication-course' },
    { label: 'Academic Tuition Batches', href: '/courses/academic-tuition-batches' },
  ],
} as const
