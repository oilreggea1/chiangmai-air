type P = { className?: string };

const base = "h-6 w-6";

export function IconPhone({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 3.5h3l1.5 4-2 1.5a12.5 12.5 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 2.5 5.7 2 2 0 0 1 4.5 3.5Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconLine({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.6c5.4 0 9.8 3.5 9.8 7.9 0 1.6-.6 3-1.8 4.4-1.8 2.1-5.8 4.6-6.7 5-.9.4-.8-.2-.7-.5l.1-.7c0-.3.1-.6-.1-.8-.2-.2-.5-.3-.8-.3-4.6-.6-8-3.8-8-7.6C3.8 6.1 8.2 2.6 12 2.6Zm-3.3 5.8H8c-.2 0-.3.1-.3.3v4.2c0 .2.1.3.3.3h.6c.2 0 .3-.1.3-.3V8.7c0-.2-.1-.3-.3-.3Zm5.2 0h-.6c-.2 0-.3.1-.3.3v2.5l-1.9-2.6-.1-.1h-.7c-.2 0-.3.1-.3.3v4.2c0 .2.1.3.3.3h.6c.2 0 .3-.1.3-.3v-2.5l1.9 2.6.1.1h.7c.2 0 .3-.1.3-.3V8.7c0-.2-.1-.3-.3-.3Zm-6.6 3.6H5.6V8.7c0-.2-.1-.3-.3-.3h-.6c-.2 0-.3.1-.3.3v4.2c0 .2.1.3.3.3h2.6c.2 0 .3-.1.3-.3v-.6c0-.2-.1-.3-.3-.3Zm11.4-2.7c.2 0 .3-.1.3-.3v-.6c0-.2-.1-.3-.3-.3h-2.6c-.2 0-.3.1-.3.3v4.2c0 .2.1.3.3.3h2.6c.2 0 .3-.1.3-.3v-.6c0-.2-.1-.3-.3-.3h-1.7v-.7h1.7c.2 0 .3-.1.3-.3v-.6c0-.2-.1-.3-.3-.3h-1.7v-.7h1.7Z" />
    </svg>
  );
}

export function IconSnow({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2v20M4.2 6.5l15.6 9M19.8 6.5l-15.6 9" />
      <path d="M9.5 4.2 12 6.6l2.5-2.4M9.5 19.8 12 17.4l2.5 2.4" />
      <path d="M3.3 10.2 4 6.8l3.4.4M20.7 13.8 20 17.2l-3.4-.4" />
      <path d="M7.4 17.2 4 17.6l-.7-3.4M16.6 6.8 20 6.4l.7 3.4" />
    </svg>
  );
}

export function IconWrench({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M15.6 3.3a5.5 5.5 0 0 0-6.4 7l-6 6a2 2 0 0 0 2.8 2.8l6-6a5.5 5.5 0 0 0 7-6.4l-3 3-2.4-2.4 3-3Z" />
      <path d="M6.2 17.8h.01" strokeLinecap="round" />
    </svg>
  );
}

export function IconInstall({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="8" rx="2" />
      <path d="M6 9.5h6" strokeLinecap="round" />
      <path d="M7 15.5v1.5M12 15.5v3M17 15.5v1.5" strokeLinecap="round" />
    </svg>
  );
}

export function IconMove({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="10" height="6" rx="1.6" />
      <rect x="13.5" y="13.5" width="8" height="6" rx="1.6" />
      <path d="M16.5 8.5h4m0 0-2-2m2 2-2 2" strokeLinecap="round" />
    </svg>
  );
}

export function IconShield({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 2.7 4.5 5.6v6.1c0 4.4 3 8.1 7.5 9.6 4.5-1.5 7.5-5.2 7.5-9.6V5.6L12 2.7Z" />
      <path d="m8.8 11.8 2.3 2.3 4.1-4.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconSparkle({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 2.8 14 9l6.2 2-6.2 2-2 6.2L10 13l-6.2-2L10 9l2-6.2Z" />
      <path d="M19 3v3M17.5 4.5h3" strokeLinecap="round" />
    </svg>
  );
}

export function IconEngineer({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M4 11a8 8 0 0 1 16 0" strokeLinecap="round" />
      <path d="M2.8 11h18.4v1.6H2.8z" />
      <circle cx="12" cy="17" r="3.2" />
      <path d="M12 14.4V13M12 21v-1.4M9.4 17H8M16 17h-1.4" strokeLinecap="round" />
    </svg>
  );
}

export function IconClock({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 6.8V12l3.4 2.2" />
    </svg>
  );
}

export function IconPin({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round">
      <path d="M12 21.5s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10.5" r="2.6" />
    </svg>
  );
}

export function IconCheck({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function IconX({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
    </svg>
  );
}

export function IconStar({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m12 2.6 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.5 6.1 20.6l1.2-6.5-4.8-4.6 6.6-.9 2.9-6Z" />
    </svg>
  );
}

export function IconChevron({ className = "h-5 w-5" }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 5 7 7-7 7" />
    </svg>
  );
}

export function IconMenu({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className = base }: P) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export const serviceIcons = {
  snow: IconSnow,
  wrench: IconWrench,
  install: IconInstall,
  move: IconMove,
  shield: IconShield,
  sparkle: IconSparkle,
  engineer: IconEngineer,
  clock: IconClock,
} as const;
