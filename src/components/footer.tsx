import type { ReactNode } from "react";
import {
  Github,
  Headphones,
  Instagram,
  Linkedin,
  Mail,
  Twitter,
  Youtube,
} from "lucide-react";

function SocialIcon({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/70 dark:hover:text-white"
    >
      {children}
    </button>
  );
}

const ICON_CLASS = "h-6 w-6 cursor-pointer";

export default function Footer() {
  return (
    <footer className="py-14 flex flex-col items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
      <div className="flex items-center gap-3">
        <SocialIcon label="GitHub">
          <Github className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Twitter">
          <Twitter className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="YouTube">
          <Youtube className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="LinkedIn">
          <Linkedin className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Instagram">
          <Instagram className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Spotify">
          <Headphones className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Email">
          <Mail className={ICON_CLASS} />
        </SocialIcon>
      </div>

      <p className="font-medium">© 2026 Ravy Meas. All rights reserved.</p>
    </footer>
  );
}
