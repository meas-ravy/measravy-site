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
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900/70 dark:hover:text-white"
    >
      {children}
    </a>
  );
}

const ICON_CLASS = "h-6 w-6 cursor-pointer";

export default function Footer() {
  return (
    <footer className="py-14 flex flex-col items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
      <div className="flex items-center gap-3">
        <SocialIcon label="GitHub" href="https://github.com/meas-ravy">
          <Github className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Twitter" href="https://x.com/measravy12yy">
          <Twitter className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon
          label="YouTube"
          href="https://www.youtube.com/@measravy9037"
        >
          <Youtube className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon
          label="LinkedIn"
          href="https://www.linkedin.com/in/meas-ravy"
        >
          <Linkedin className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Instagram" href="https://www.instagram.com/ravy__v/">
          <Instagram className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon
          label="Spotify"
          href="https://open.spotify.com/user/31ffxg23viewqsbzmquupr3elx24"
        >
          <Headphones className={ICON_CLASS} />
        </SocialIcon>
        <SocialIcon label="Email" href="mailto:measravy072@gmail.com">
          <Mail className={ICON_CLASS} />
        </SocialIcon>
      </div>

      <p className="font-medium">© 2026 Ravy Meas. All rights reserved.</p>
    </footer>
  );
}
