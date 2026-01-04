import type { LucideIcon } from "lucide-react";
import {
  ChevronRight,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

type ContactMethod = {
  title: string;
  value: string;
  href: string;
  Icon: LucideIcon;
};

type CallOption = {
  title: string;
  duration: string;
  subtitle: string;
};

const CONTACT_METHODS: ContactMethod[] = [
  {
    title: "Email",
    value: "measravy072@gmail.com",
    href: "mailto:measravy072@gmail.com",
    Icon: Mail,
  },
  {
    title: "Instagram",
    value: "@ravy.meass",
    href: "https://www.instagram.com/ravy__v",
    Icon: Instagram,
  },
  {
    title: "LinkedIn",
    value: "in/meas-ravy",
    href: "https://www.linkedin.com/in/meas-ravy",
    Icon: Linkedin,
  },
  {
    title: "Discord",
    value: "Join Server",
    href: "https://discord.com/",
    Icon: MessageCircle,
  },
];

const CALL_OPTIONS: CallOption[] = [
  { title: "15 Min Chat", duration: "15 min", subtitle: "Quick chat" },
  { title: "30 Min Chat", duration: "30 min", subtitle: "Standard meeting" },
  {
    title: "60 Min Chat",
    duration: "60 min",
    subtitle: "In-depth conversation",
  },
];

function ContactCard({ method }: { method: ContactMethod }) {
  const { Icon } = method;

  return (
    <a
      href={method.href}
      target={method.href.startsWith("http") ? "_blank" : undefined}
      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
      className={[
        "group flex items-center gap-4 rounded-2xl px-5 py-4",
        "bg-white shadow-sm ring-1 ring-slate-200/70 transition",
        "hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-300/70",
        "dark:bg-white/5 dark:shadow-none dark:ring-white/10 dark:hover:bg-white/10 dark:hover:ring-white/15",
      ].join(" ")}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700 ring-1 ring-slate-200/70 dark:bg-black/25 dark:text-white/85 dark:ring-white/10">
        <Icon className="h-5 w-5" />
      </span>

      <div className="min-w-0">
        <div className="font-semibold text-slate-900 dark:text-white">
          {method.title}
        </div>
        <div className="truncate text-sm text-slate-600 dark:text-slate-400">
          {method.value}
        </div>
      </div>
    </a>
  );
}

function CallCard({ option }: { option: CallOption }) {
  return (
    <button
      type="button"
      className={[
        "group flex min-h-42.5 flex-col justify-between rounded-2xl p-6 text-left",
        "bg-white shadow-sm ring-1 ring-slate-200/70 transition",
        "hover:-translate-y-0.5 hover:shadow-md hover:ring-slate-300/70",
        "dark:bg-white/5 dark:shadow-none dark:ring-white/10 dark:hover:bg-white/10 dark:hover:ring-white/15",
      ].join(" ")}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="font-semibold text-slate-900 dark:text-white">
            {option.title}
          </div>
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-500 ring-1 ring-slate-200/70 dark:bg-black/25 dark:text-slate-300 dark:ring-white/10">
            {option.duration}
          </span>
        </div>
        <div className="text-slate-600 dark:text-slate-400">
          {option.subtitle}
        </div>
      </div>

      <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white">
        Select this option
        <ChevronRight className="h-4 w-4 translate-y-px" />
      </div>
    </button>
  );
}

export default function Contact() {
  return (
    <div className="space-y-14">
      <div className="space-y-2">
        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">
          Contact
        </h1>
        <p className="text-lg font-medium text-slate-600 dark:text-slate-400">
          Let&apos;s connect.
        </p>
      </div>

      <div className="space-y-5">
        <p className="text-slate-600 dark:text-slate-400">
          Connect with me through any of these platforms.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_METHODS.map(method => (
            <ContactCard key={method.title} method={method} />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Book a Call
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Schedule a call with me if you need a more in-depth conversation
            about anything you want!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CALL_OPTIONS.map(option => (
            <CallCard key={option.duration} option={option} />
          ))}
        </div>
      </div>
    </div>
  );
}
