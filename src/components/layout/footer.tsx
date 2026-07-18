import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border px-4 pb-10 pt-16 md:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-semibold tracking-tight">
            {siteConfig.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Frontend developer crafting modern React & Next.js experiences from{" "}
            {siteConfig.location}.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.hash}>
                <a
                  href={link.hash}
                  className="text-sm text-foreground/80 transition hover:text-accent"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
            Connect
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition hover:border-accent/40 hover:text-accent"
            >
              <Mail size={16} />
            </a>
          </div>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-4 block text-sm text-muted transition hover:text-foreground"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>Crafted with Next.js, Tailwind & Motion.</p>
      </div>
    </footer>
  );
}
