import { ArrowUpRight } from "lucide-react"
import GitHubProjects from "./github-projects"

export function ProjectsSection() {
  return <section id="projects" className="border-b border-border px-6 py-24 md:px-10 md:py-32">
    <div className="mx-auto max-w-6xl">
      <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div><p className="mb-4 font-mono text-xs uppercase tracking-[0.24em] text-accent">Selected work</p><h2 className="text-4xl font-semibold tracking-[-0.04em] md:text-6xl">Things I&apos;ve built.</h2></div>
        <a href="https://github.com/huutuyen0508" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent">GitHub profile <ArrowUpRight size={15} /></a>
      </div>
      <GitHubProjects />
    </div>
  </section>
}
