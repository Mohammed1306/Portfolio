import { projects } from "./projects/data";

const experiences = [
  {
    company: "MDA · Polytechnique Montréal",
    role: "Software Developer",
    date: "2026 — 2027",
    bullets: [
      "Developing software for satellite data visualization, analysis and telemetry monitoring.",
      "Collaborating with GNC, systems and orbital mechanics teams on software integration.",
    ],
  },
  {
    company: "Humboldt-Universität zu Berlin",
    role: "Research Intern",
    date: "2026",
    bullets: [
      "Implemented computational algebra algorithms in SageMath for elliptic-curve research.",
      "Developed a documented and tested SageMath package.",
    ],
  },
  {
    company: "LifeEngine Technologies",
    role: "Software Optimization R&D",
    date: "2026",
    bullets: [
      "Merged two codebases into a shared software architecture.",
      "Reduced duplication and improved maintainability through refactoring and documentation.",
    ],
  },
  {
    company: "Polytechnique Montréal",
    role: "Teaching Assistant",
    date: "2026",
    bullets: [
      "Supported 24 students in compiler concepts including lexical analysis, parsing and ASTs.",
      "Reviewed assignments and contributed to Java and JavaCC laboratory material.",
    ],
  },
  {
    company: "LifeEngine Technologies",
    role: "Software Consultant",
    date: "2025 — 2026",
    bullets: [
      "Optimized the user interface and fixed critical issues for client delivery.",
      "Integrated new hardware sensors into the existing software interface.",
    ],
  },
  {
    company: "LifeEngine Technologies",
    role: "Mobile Development Intern",
    date: "2025",
    bullets: [
      "Refactored a React Native application architecture using MVP and Zustand.",
      "Migrated the application to React Native 0.80.2 and added testing and linting.",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
      {/* NAVBAR */}
      <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#0d0f12]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight transition hover:text-zinc-300"
          >
            MK.
          </a>

          <div className="hidden gap-7 text-sm text-zinc-400 sm:flex">
            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="mx-auto grid min-h-screen max-w-6xl items-center gap-16 px-6 pt-24 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Software Engineering · Montréal
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-7xl">
            Mohamed Kallel
          </h1>

          <p className="mt-7 max-w-2xl text-2xl leading-tight text-zinc-400 sm:text-3xl">
            I build{" "}
            <span className="text-white">
              full-stack, mobile and embedded software
            </span>{" "}
            with a focus on architecture and real-world systems.
          </p>

          <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500">
            Final-year Software Engineering student at Polytechnique Montréal with
            experience in software R&D, mobile development, computational research
            and embedded systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              View Projects
            </a>

            <a
              href="/resume/Mohammed_Kallel_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
            >
              Resume ↗
            </a>

            <a
              href="https://github.com/Mohammed1306"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:block">
          <div className="absolute -inset-8 rounded-[40px] bg-white/[0.025] blur-2xl" />

          <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-900/60 p-6">
            <div className="flex items-center gap-2 border-b border-zinc-800 pb-5">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-800" />
            </div>

            <div className="space-y-8 py-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Current focus
                </p>

                <p className="mt-3 text-xl font-medium text-zinc-200">
                  Software Architecture
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  "Full Stack",
                  "Mobile",
                  "Embedded",
                  "R&D",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                  >
                    <p className="text-sm text-zinc-400">{item}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  Selected project
                </p>

                <div className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
                  <p className="font-medium text-white">
                    CareerMatch AI
                  </p>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    Next.js · FastAPI · PostgreSQL · Gemini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-28"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Selected Work
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Projects
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              number={String(index + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-28"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Background
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Experience
        </h2>

        <div className="mt-14 divide-y divide-zinc-900">
          {experiences.map((experience) => (
            <Experience
              key={`${experience.company}-${experience.role}`}
              company={experience.company}
              role={experience.role}
              date={experience.date}
              bullets={experience.bullets}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-28"
      >
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              Software beyond the interface.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I&apos;m a final-year Software Engineering student at
              Polytechnique Montréal with experience across mobile development,
              full-stack applications, software R&D and computational research.
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-400">
              I&apos;m particularly interested in software architecture,
              cross-platform systems and projects where software interacts
              directly with complex physical or mathematical systems.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Stack
        </p>

        <h2 className="mt-3 text-4xl font-semibold tracking-tight">
          Technologies
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <SkillGroup
            title="Languages"
            skills="Python · Java · C++ · C# · TypeScript · JavaScript · Dart"
          />

          <SkillGroup
            title="Frontend"
            skills="React · React Native · Angular · Flutter · Tailwind"
          />

          <SkillGroup
            title="Backend & Data"
            skills="Node.js · MongoDB · PostgreSQL"
          />

          <SkillGroup
            title="Tools"
            skills="Git · Docker · Linux · GitHub Actions · Jest · Postman"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl border-t border-zinc-900 px-6 py-28"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <div className="mt-6 grid gap-10 md:grid-cols-[2fr_1fr] md:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something interesting.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              I&apos;m open to software engineering opportunities, technical
              collaborations and interesting projects.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <a
              href="mailto:mohammed.kallel.2004@gmail.com"
              className="text-zinc-300 transition hover:text-white"
            >
              mohammed.kallel.2004@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/mohammed-kallel-8b020927a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/Mohammed1306"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition hover:text-white"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 px-6 py-10 text-sm text-zinc-600 sm:flex-row">
          <p>© 2026 Mohamed Kallel</p>
          <p>Montréal, Canada</p>
        </div>
      </footer>
    </main>
  );
}

type ProjectCardProps = {
  project: (typeof projects)[number];
  number: string;
};

function ProjectCard({ project, number }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
      {/* FIXED SIZE COVER */}
      <a
        href={`/projects/${project.slug}`}
        className="flex h-64 items-center justify-center overflow-hidden bg-zinc-900"
      >
        <img
          src={project.image}
          alt={`${project.title} preview`}
          className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]"
        />
      </a>

      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center justify-between gap-4">
          <span className="text-sm text-zinc-600">{number}</span>

          <span className="text-right text-sm text-zinc-500">
            {project.category}
          </span>
        </div>

        <h3 className="mt-8 text-2xl font-semibold">
          <a
            href={`/projects/${project.slug}`}
            className="transition hover:text-zinc-300"
          >
            {project.title}
          </a>
        </h3>

        {project.subtitle && (
          <p className="mt-2 text-sm text-zinc-500">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 leading-7 text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-8">
          <div className="flex flex-wrap items-center gap-5 text-sm">
            <a
              href={`/projects/${project.slug}`}
              className="font-medium text-white transition hover:text-zinc-300"
            >
              View Project →
            </a>

            {project.links?.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function Experience({
  company,
  role,
  date,
  bullets,
}: {
  company: string;
  role: string;
  date: string;
  bullets: string[];
}) {
  return (
    <div className="grid gap-6 py-8 md:grid-cols-[1fr_2fr]">
      <div>
        <p className="font-medium text-white">{company}</p>
        <p className="mt-1 text-sm text-zinc-500">{role}</p>
        <p className="mt-1 text-sm text-zinc-600">{date}</p>
      </div>

      <ul className="space-y-3 text-zinc-400">
        {bullets.map((bullet) => (
          <li key={bullet} className="leading-7">
            • {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillGroup({
  title,
  skills,
}: {
  title: string;
  skills: string;
}) {
  return (
    <div>
      <h3 className="font-medium text-white">{title}</h3>
      <p className="mt-3 leading-7 text-zinc-500">{skills}</p>
    </div>
  );
}