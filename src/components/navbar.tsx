import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "../hooks/light_dark_mode";

const NAV_ITEMS = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About", end: false },
  // { to: "/gear", label: "Gear", end: false },
  { to: "/contact", label: "Contact", end: false },
] as const;

export default function Navbar() {
  return (
    <header className="pt-10 pb-14">
      <div className="mx-auto w-full max-w-3xl px-4">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="Home">
            <img
              src="/images/avata.jpg"
              alt="Ravy Meas"
              className="h-10 w-10 rounded-full cursor-pointer object-cover ring-1 ring-slate-200/70 transition hover:ring-slate-300 dark:ring-slate-800/60 dark:hover:ring-slate-700"
            />
          </Link>

          <nav className="rounded-full bg-slate-100 p-1 ring-1 ring-slate-200/70 dark:bg-slate-900/60 dark:ring-slate-800/60">
            <ul className="flex items-center gap-1 text-sm">
              {NAV_ITEMS.map(item => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                      [
                        "inline-flex px-4 py-2 rounded-full transition",
                        isActive
                          ? "bg-white text-slate-900 shadow-sm dark:bg-slate-800 dark:text-white"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/60",
                      ].join(" ")
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
