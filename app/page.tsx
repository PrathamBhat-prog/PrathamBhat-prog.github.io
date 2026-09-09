"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Brain,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  achievements,
  certifications,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

export default function Home() {
  return (
    <main className="relative mx-auto max-w-6xl px-6 pb-20 pt-8">
      <header className="sticky top-4 z-50 mb-16">
        <nav className="glass flex items-center justify-between rounded-2xl px-5 py-4 shadow-glow">
          <a href="#" className="flex items-center gap-2 font-semibold text-white">
            <Brain className="h-5 w-5 text-accent" />
            {profile.name}
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section className="mb-24 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
        <motion.div {...fadeUp}>
          <div className="mb-5 flex items-center gap-5">
            <Image
              src={profile.avatar}
              alt="3D avatar of Pratham Bhat"
              width={128}
              height={128}
              className="h-28 w-28 rounded-full border border-cyan-400/30 object-cover shadow-glow md:h-32 md:w-32"
              priority
            />
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/10 px-4 py-1.5 text-sm text-purple-200">
                <Sparkles className="h-4 w-4" />
                AI-ML · Deep Learning · Gen AI · MLOps · Computer Vision
              </div>
              <h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                {profile.name}
              </h1>
            </div>
          </div>
          <p className="mt-4 text-xl text-cyan-200">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition hover:border-cyan-400/40"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm transition hover:border-cyan-400/40"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass rounded-3xl p-6 shadow-glow"
        >
          <div className="mb-4 flex items-center gap-2 text-cyan-200">
            <GraduationCap className="h-5 w-5" />
            <span className="font-medium">Education</span>
          </div>
          <h2 className="text-xl font-semibold text-white">
            {profile.education.degree}
          </h2>
          <p className="mt-2 text-slate-300">{profile.education.school}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-400">
            <span className="chip">{profile.education.period}</span>
            <span className="chip">GPA {profile.education.gpa}</span>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mb-24">
        <motion.div {...fadeUp}>
          <h2 className="section-title">About</h2>
          <p className="section-subtitle">
            I design and ship end-to-end AI systems — from model training and
            RAG pipelines to production APIs, dashboards, and cloud deployment.
            My work spans financial ML, clinical computer vision, secure medical
            chatbots, and real-time inference systems.
          </p>
        </motion.div>
      </section>

      <section id="experience" className="mb-24">
        <motion.div {...fadeUp}>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Production AI engineering across startups, enterprise automation,
            and telecom research.
          </p>
        </motion.div>

        <div className="mt-10 space-y-6">
          {experience.map((item, index) => (
            <motion.article
              key={item.company}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass rounded-3xl p-6 md:p-8"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="flex items-start gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <Image
                      src={item.logo}
                      alt={`${item.company} logo`}
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="text-cyan-200">{item.company}</p>
                  </div>
                </div>
                <span className="chip self-start">{item.period}</span>
              </div>
              <ul className="mt-5 space-y-3 text-slate-300">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="mb-24">
        <motion.div {...fadeUp}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            Screenshots from running applications.
          </p>
        </motion.div>

        <div className="mt-10 space-y-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass overflow-hidden rounded-3xl shadow-glow"
            >
              <div className="relative border-b border-white/10 bg-black/20 p-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute right-5 top-5 z-10 inline-flex items-center gap-2 rounded-xl border border-white/15 bg-black/70 px-3 py-2 text-sm text-cyan-200 backdrop-blur-md transition hover:border-cyan-400/40"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                {"screenshots" in project && project.screenshots ? (
                  <div className="grid gap-3 md:grid-cols-3">
                    {project.screenshots.map((src) => (
                      <a
                        key={src}
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="overflow-hidden rounded-2xl border border-white/10"
                      >
                        <Image
                          src={src}
                          alt={`${project.title} screenshot`}
                          width={1440}
                          height={900}
                          className="h-full w-full object-cover object-top"
                        />
                      </a>
                    ))}
                  </div>
                ) : project.screenshot ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-2xl border border-white/10"
                  >
                    <Image
                      src={project.screenshot}
                      alt={`${project.title} screenshot`}
                      width={1440}
                      height={900}
                      className="h-auto w-full object-cover object-top"
                    />
                  </a>
                ) : null}
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-cyan-200 transition hover:border-cyan-400/40"
                  >
                    <Github className="h-4 w-4" />
                    View code
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="mb-24">
        <motion.div {...fadeUp}>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Full-stack AI engineering across modeling, deployment, and product
            interfaces.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              className="glass rounded-3xl p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="achievements" className="mb-24">
        <motion.div {...fadeUp}>
          <h2 className="section-title">Achievements & Certifications</h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {achievements.map((item) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-amber-300">
                <Award className="h-5 w-5" />
                <span className="font-medium">Achievement</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-300">
                {item.detail}
              </p>
            </motion.div>
          ))}

          {certifications.map((item) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              className="glass rounded-3xl p-6"
            >
              <div className="mb-3 flex items-center gap-2 text-cyan-200">
                <GraduationCap className="h-5 w-5" />
                <span className="font-medium">Certification</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300">{item.issuer}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact">
        <motion.div
          {...fadeUp}
          className="glass rounded-3xl p-8 shadow-glow md:p-10"
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">
            Open to AI engineering roles, research collaborations, and impactful
            product work.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30"
            >
              <Mail className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-slate-400">Email</p>
                <p className="font-medium text-white">{profile.email}</p>
              </div>
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30"
            >
              <Phone className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-slate-400">Phone</p>
                <p className="font-medium text-white">{profile.phone}</p>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30"
            >
              <Github className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-slate-400">GitHub</p>
                <p className="font-medium text-white">PrathamBhat-prog</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-cyan-400/30"
            >
              <Linkedin className="h-5 w-5 text-accent" />
              <div>
                <p className="text-sm text-slate-400">LinkedIn</p>
                <p className="font-medium text-white">pratham-bhat-62bb0a32a</p>
              </div>
              <ArrowUpRight className="ml-auto h-4 w-4 text-slate-500" />
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="mt-12 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js and
        hosted on GitHub Pages.
      </footer>
    </main>
  );
}
