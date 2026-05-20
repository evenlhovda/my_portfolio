// LucideIcons.jsx — inline copies of the Lucide icons used by Even's portfolio
// All accept { size, className } and inherit currentColor at 1.5px stroke.

const Icon = ({ children, size = 18, className = "", strokeWidth = 1.5 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const Mail = (p) => (
  <Icon {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </Icon>
);
const Linkedin = (p) => (
  <Icon {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </Icon>
);
const MapPin = (p) => (
  <Icon {...p}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </Icon>
);
const Calendar = (p) => (
  <Icon {...p}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
  </Icon>
);
const Users = (p) => (
  <Icon {...p}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
);
const Building = (p) => (
  <Icon {...p}>
    <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-4" />
  </Icon>
);
const ArrowRight = (p) => (
  <Icon {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </Icon>
);
const X = (p) => (
  <Icon {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Icon>
);
const Check = (p) => (
  <Icon {...p}>
    <path d="m4 12 6 6 12-12" />
  </Icon>
);

Object.assign(window, {
  LucideIcon: Icon,
  IconMail: Mail,
  IconLinkedin: Linkedin,
  IconMapPin: MapPin,
  IconCalendar: Calendar,
  IconUsers: Users,
  IconBuilding: Building,
  IconArrowRight: ArrowRight,
  IconX: X,
  IconCheck: Check,
});
