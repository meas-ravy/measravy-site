import { Eye, MoreHorizontal, Play, Plus, Users, Volume2 } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { tracks } from "../data/track";
import { FadeInSection } from "../utils/fadeIn-section";

function SpotifyMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7.6 10.1c3.7-1.2 7.3-1.1 10.8.3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.9 13c3-0.9 5.8-0.8 8.5.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8.4 15.7c2.1-0.6 4.1-0.5 6.1.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const VIDEO_THUMBNAILS = [
  {
    id: "xy3AcmW0lrQ",
    title: "",
    subtitle: "",
  },
  {
    id: "GOqEl4ADyVk",
    title: "",
    subtitle: "",
  },
  {
    id: "iYVJZHHJKl4",
    title: "",
    subtitle: "",
  },
  {
    id: "EMTGUPeg5SY",
    title: "",
    subtitle: "",
  },
] as const;

export default function Home() {
  const latestVideoId = "elKTtbsHd5g";
  const [soundEnabled, setSoundEnabled] = useState(false);

  return (
    <div>
      <FadeInSection>
        <section className="space-y-4">
          <motion.div
            className="text-2xl sm:text-3xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <TypeAnimation
              sequence={["hello, Ravy here"]}
              wrapper="h1"
              cursor={true}
              repeat={0}
              speed={50}
              style={{ display: "inline-block" }}
            />
          </motion.div>
          <motion.p
            className="text-sm sm:text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            your average boba enjoyer from socal trying to document the
            struggles of becoming a software engineer.
          </motion.p>
        </section>
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <motion.section className="space-y-1">
          <div className="py-4">
            <div className="space-y-5">
              <div className="flex items-end justify-between gap-6">
                <h2 className="text-lg font-semibold">Latest Video</h2>
                <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    40,900 subscribers
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Eye className="h-4 w-4" />
                    3,011,651 views
                  </span>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow-lg shadow-black/20 ring-1 ring-slate-200/70 dark:ring-white/10">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${latestVideoId}?autoplay=1&mute=${
                    soundEnabled ? 0 : 1
                  }&playsinline=1&list=RDelKTtbsHd5g&start_radio=1`}
                  title="Latest video"
                  loading="eager"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                {!soundEnabled && (
                  <button
                    type="button"
                    onClick={() => setSoundEnabled(true)}
                    className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/70"
                  >
                    <Volume2 className="h-4 w-4" />
                    Enable sound
                  </button>
                )}
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {VIDEO_THUMBNAILS.map(video => (
                  <a
                    key={video.id}
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group relative aspect-video overflow-hidden rounded-xl bg-slate-200 ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-white/10"
                    aria-label={video.title}
                  >
                    <img
                      src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/15 to-transparent opacity-95" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-xs font-semibold tracking-wide text-white drop-shadow">
                        {video.title}
                      </div>
                      <div className="text-[10px] font-semibold text-white/90 drop-shadow">
                        {video.subtitle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </FadeInSection>

      {/* Spotify */}

      <FadeInSection delay={0.4}>
        <motion.section className="mt-4">
          <div className="space-y-6">
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Recently Played
              </h2>
              <div className="flex items-center gap-4 text-sm">
                <button
                  type="button"
                  className="rounded-xl bg-slate-100 px-5 py-2 font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200/70 dark:bg-white/10 dark:text-white dark:ring-white/10"
                >
                  Recently Played
                </button>
                <button
                  type="button"
                  className="rounded-xl px-3 py-2 font-semibold text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                >
                  Top Tracks
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex min-h-105 flex-col justify-between rounded-3xl bg-teal-900 p-8 text-white shadow-lg shadow-black/30 ring-1 ring-white/10">
                <div className="flex justify-end">
                  <SpotifyMark className="h-6 w-6 text-white/90" />
                </div>

                <div className="space-y-8">
                  <img
                    src={"/images/img_2.jpg"}
                    alt="Album art"
                    className="mx-auto h-52 w-52 cursor-pointer rounded-2xl object-cover shadow-sm ring-1 ring-white/10"
                    loading="lazy"
                  />

                  <div className="space-y-3">
                    <div className="text-4xl font-bold leading-none tracking-tight">
                      is it okay
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <span className="rounded bg-black/35 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                        Preview
                      </span>
                      <span className="text-white/70">dami</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-6">
                  <button
                    type="button"
                    className="inline-flex items-center gap-3 text-sm font-semibold text-white/90 transition hover:text-white"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/70 bg-transparent transition hover:bg-white/10">
                      <Plus
                        className="h-5 w-5 cursor-pointer"
                        strokeWidth={2.5}
                      />
                    </span>
                    Save on Spotify
                  </button>

                  <div className="flex items-center gap-4">
                    <button
                      type="button"
                      aria-label="More"
                      className="inline-flex h-10 w-10 items-center justify-center text-white/80 transition hover:text-white"
                    >
                      <MoreHorizontal
                        className="h-5 w-5 cursor-pointer"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </button>
                    <button
                      type="button"
                      aria-label="Play"
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white text-teal-900 shadow-sm ring-1 ring-white/20 transition hover:bg-white/90"
                    >
                      <Play
                        className="h-7 w-7 translate-x-px cursor-pointer"
                        fill="currentColor"
                        strokeWidth={0}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {tracks.map(track => (
                  <div
                    key={track.title}
                    className={`group relative flex min-h-23 items-center justify-between gap-4 overflow-hidden rounded-3xl px-6 py-4 text-white shadow-lg shadow-black/35 ring-1 ring-white/10 ${track.bgClass}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-80" />
                    <SpotifyMark className="pointer-events-none absolute right-4 top-3 z-20 h-4 w-4 text-white/90" />

                    <div className="relative z-10 flex min-w-0 items-center gap-4">
                      <img
                        src={track.coverSrc}
                        alt=""
                        className="h-14 w-14 shrink-0 rounded-2xl object-cover shadow-sm"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <div className="truncate text-lg font-semibold leading-tight">
                          {track.title}
                        </div>
                        <div className="truncate text-xs font-semibold uppercase tracking-wide text-white/80">
                          {track.artist}
                        </div>
                        <div className="mt-2 flex items-center gap-2">
                          <span className="rounded-sm bg-black/45 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                            Preview
                          </span>
                          {track.explicit && (
                            <span className="rounded-sm bg-black/45 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-white">
                              E
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="relative z-10 flex shrink-0 items-center gap-4">
                      <button
                        type="button"
                        aria-label="Add"
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-white/70 bg-transparent text-white transition hover:bg-white/10"
                      >
                        <Plus className="h-5 w-5" strokeWidth={2.5} />
                      </button>
                      <button
                        type="button"
                        aria-label="More"
                        className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-white/85 transition hover:text-white"
                      >
                        <MoreHorizontal
                          className="h-5 w-5"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </button>
                      <button
                        type="button"
                        aria-label="Play"
                        className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white shadow-md shadow-black/10 ring-1 ring-white/20 transition hover:bg-white/90 ${track.accentClass}`}
                      >
                        <Play
                          className="h-5 w-5 translate-x-px"
                          fill="currentColor"
                          strokeWidth={0}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </FadeInSection>
    </div>
  );
}
