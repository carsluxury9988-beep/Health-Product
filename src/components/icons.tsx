type IconProps = { className?: string; size?: number };

const base = (size = 20) => ({ width: size, height: size, viewBox: "0 0 24 24", "aria-hidden": true as const, focusable: "false" as const });

export function WhatsAppIcon({ className, size = 20 }: IconProps) {
  return (
    <svg {...base(size)} className={className} fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.29Z" />
    </svg>
  );
}

function Stroke({ className, size = 22, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg {...base(size)} className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

export const CashIcon = (p: IconProps) => <Stroke {...p}><rect x="2.5" y="6" width="19" height="12" rx="2" /><circle cx="12" cy="12" r="2.6" /><path d="M6 9.5v.01M18 14.5v.01" /></Stroke>;
export const TruckIcon = (p: IconProps) => <Stroke {...p}><path d="M3 6.5h11v9H3zM14 9.5h4l3 3v3h-7" /><circle cx="7" cy="17.5" r="1.8" /><circle cx="17.5" cy="17.5" r="1.8" /></Stroke>;
export const ChatIcon = (p: IconProps) => <Stroke {...p}><path d="M20 12a8 8 0 0 1-11.6 7.1L4 20l1-4.2A8 8 0 1 1 20 12Z" /><path d="M8.5 11h.01M12 11h.01M15.5 11h.01" /></Stroke>;
export const TagIcon = (p: IconProps) => <Stroke {...p}><path d="M3 12.6V4.5A1.5 1.5 0 0 1 4.5 3h8.1l8.4 8.4a1.5 1.5 0 0 1 0 2.1l-6.9 6.9a1.5 1.5 0 0 1-2.1 0Z" /><circle cx="8" cy="8" r="1.4" /></Stroke>;
export const CheckIcon = (p: IconProps) => <Stroke {...p}><path d="m5 12.5 4.2 4.2L19 7" /></Stroke>;
export const ArrowRightIcon = (p: IconProps) => <Stroke {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Stroke>;
export const MailIcon = (p: IconProps) => <Stroke {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></Stroke>;
export const PlusIcon = (p: IconProps) => <Stroke {...p}><path d="M12 5v14M5 12h14" /></Stroke>;
export const MinusIcon = (p: IconProps) => <Stroke {...p}><path d="M5 12h14" /></Stroke>;
export const MenuIcon = (p: IconProps) => <Stroke {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Stroke>;
export const CloseIcon = (p: IconProps) => <Stroke {...p}><path d="M6 6l12 12M18 6 6 18" /></Stroke>;
export const ShieldIcon = (p: IconProps) => <Stroke {...p}><path d="M12 3 5 6v5.5c0 4.3 3 8 7 9.5 4-1.5 7-5.2 7-9.5V6Z" /><path d="m9 12 2 2 4-4" /></Stroke>;
export const MapIcon = (p: IconProps) => <Stroke {...p}><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11Z" /><circle cx="12" cy="10" r="2.3" /></Stroke>;
export const ClockIcon = (p: IconProps) => <Stroke {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></Stroke>;
export const FormIcon = (p: IconProps) => <Stroke {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" /></Stroke>;

export const featureIcons = { cash: CashIcon, truck: TruckIcon, chat: ChatIcon, tag: TagIcon } as const;
