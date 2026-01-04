import type { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col bg-white px-10 text-slate-900 antialiased dark:bg-black dark:text-white sm:px-6"
      style={{ zoom: 0.9 }}
    >
      <Navbar />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-20">
        {children}
      </main>
      <div className="mx-auto w-full max-w-3xl px-4">
        <Footer />
      </div>
    </div>
  );
}
