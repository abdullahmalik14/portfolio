"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/social";
import { contactContent, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import { MagneticButton } from "@/components/ui/magnetic-button";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const subject = encodeURIComponent(`Portfolio inquiry from ${values.name}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    );
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;

    setSuccess(true);
    reset();
    setTimeout(() => setSuccess(false), 4500);
  };

  return (
    <section id="contact" className="scroll-mt-24 px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title={contactContent.heading}
          description={contactContent.description}
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-3xl border border-border bg-surface/50 p-5 transition hover:border-accent/30"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background">
                <Mail size={16} className="text-accent" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  Email
                </p>
                <p className="mt-1 text-sm text-foreground">{siteConfig.email}</p>
              </div>
            </a>

            <div className="rounded-3xl border border-border bg-surface/50 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Status
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {siteConfig.availability}
              </p>
              <p className="mt-3 text-sm text-muted">
                Based in {siteConfig.location} · Open to remote roles
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface text-sm transition hover:border-accent/40"
              >
                <GithubIcon size={15} /> GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-border bg-surface text-sm transition hover:border-accent/40"
              >
                <LinkedinIcon size={15} /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-[#070b12] p-6 md:p-8">
            <AnimatePresence mode="wait">
              {success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="flex min-h-[320px] flex-col items-center justify-center text-center"
                >
                  <CheckCircle2 className="mb-4 text-success" size={42} />
                  <h3 className="font-display text-2xl font-semibold">
                    Message ready
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Your mail client should open with the message filled in.
                    Send it and I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4"
                >
                  <div>
                    <label htmlFor="name" className="text-xs text-muted">
                      Name
                    </label>
                    <input
                      id="name"
                      {...register("name")}
                      className="mt-2 w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
                      placeholder="Your name"
                    />
                    {errors.name ? (
                      <p className="mt-1 text-xs text-danger">
                        {errors.name.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs text-muted">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="mt-2 w-full rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
                      placeholder="you@company.com"
                    />
                    {errors.email ? (
                      <p className="mt-1 text-xs text-danger">
                        {errors.email.message}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="message" className="text-xs text-muted">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message")}
                      className="mt-2 w-full resize-none rounded-2xl border border-border bg-background/50 px-4 py-3 text-sm outline-none transition focus:border-accent/50"
                      placeholder="Tell me about the role or project..."
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-danger">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  <MagneticButton
                    type="submit"
                    className="w-full bg-accent text-background hover:brightness-110"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        {contactContent.cta}
                      </>
                    )}
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
