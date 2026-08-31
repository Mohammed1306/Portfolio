import { notFound } from "next/navigation";
import { getProject, projects } from "../data";
import type { Metadata } from "next";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">
            <section className="mx-auto max-w-5xl px-6 py-24">
                {/* BACK */}
                <a
                    href="/#projects"
                    className="text-sm text-zinc-500 transition hover:text-white"
                >
                    ← Back to projects
                </a>

                {/* HERO */}
                <p className="mt-16 text-sm uppercase tracking-[0.3em] text-zinc-500">
                    {project.category}
                </p>

                <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
                    {project.title}
                </h1>

                {project.subtitle && (
                    <p className="mt-3 text-sm text-zinc-500">
                        {project.subtitle}
                    </p>
                )}

                <p className="mt-6 max-w-3xl text-xl leading-8 text-zinc-400">
                    {project.description}
                </p>

                {/* LINKS */}
                {project.links && project.links.length > 0 && (
                    <div className="mt-10 flex flex-wrap gap-4">
                        {project.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={
                                    link.primary
                                        ? "rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                                        : "rounded-full border border-zinc-700 px-6 py-3 text-sm font-medium transition hover:border-zinc-400"
                                }
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                )}

                {/* COVER */}
                <div className="mt-16 flex h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-contain"
                    />
                </div>

                {/* OVERVIEW */}
                <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold">
                        Overview
                    </h2>

                    <div className="space-y-6 text-lg leading-8 text-zinc-400">
                        {project.overview.map((paragraph) => (
                            <p key={paragraph}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>

                {/* CONTRIBUTION */}
                <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold">
                        My Contribution
                    </h2>

                    <ul className="space-y-3 text-lg leading-8 text-zinc-400">
                        {project.contribution.map((item) => (
                            <li key={item}>
                                • {item}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* TECHNOLOGIES */}
                <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
                    <h2 className="text-2xl font-semibold">
                        Tech Stack
                    </h2>

                    <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                            <span
                                key={tech}
                                className="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </section>

                {/* PROJECT FOCUS */}
                {project.focus && project.focusTitle && (
                    <section className="mt-24 grid gap-10 md:grid-cols-[1fr_2fr]">
                        <h2 className="text-2xl font-semibold">
                            {project.focusTitle}
                        </h2>

                        <div className="space-y-6 text-lg leading-8 text-zinc-400">
                            {project.focus.map((paragraph) => (
                                <p key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </section>
                )}

                {/* YOUTUBE */}
                {project.youtubeUrl && (
                    <section className="mt-24">
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Demo
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold">
                            Project Video
                        </h2>

                        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-950 p-8">
                            <p className="text-zinc-400">
                                Watch the {project.title} project demonstration on YouTube.
                            </p>

                            <a
                                href={project.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
                            >
                                Watch on YouTube ↗
                            </a>
                        </div>
                    </section>
                )}

                {/* LOCAL VIDEO */}
                {project.localVideo && (
                    <section className="mt-24">
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Demo
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold">
                            Project Video
                        </h2>

                        <div className="mt-8 flex h-[420px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-black">
                            <video
                                controls
                                preload="metadata"
                                className="h-full w-full object-contain"
                            >
                                <source
                                    src={project.localVideo}
                                    type="video/mp4"
                                />

                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </section>
                )}

                {/* FOOTER */}
                <section className="mt-24 border-t border-zinc-900 pt-12">
                    <p className="text-sm text-zinc-600">
                        {project.footer}
                    </p>
                </section>
            </section>
        </main>
    );
}