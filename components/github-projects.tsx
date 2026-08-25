import { ArrowUpRight, Code2 } from "lucide-react"

const projects = [
  { title: "E-commerce Dashboard", description: "A focused analytics workspace for understanding revenue, products, and customer behavior at a glance.", tags: ["Next.js", "TypeScript", "Charts"], image: "/ecommerce-dashboard.png", href: "https://github.com/lilhop36/ecommerce-dashboard" },
  { title: "Task Management App", description: "A calm, collaborative system for turning large projects into clear, actionable work.", tags: ["React", "Node.js", "PostgreSQL"], image: "/task-management-app.png", href: "https://github.com/lilhop36/task-management-app" },
  { title: "Design System Components", description: "Accessible, composable UI primitives designed to help teams move quickly without losing craft.", tags: ["React", "Storybook", "Tailwind"], image: "/design-system-components.png", href: "https://github.com/lilhop36/design-system" },
  { title: "Analytics Dashboard", description: "A responsive data story that turns noisy metrics into decisions for modern product teams.", tags: ["Python", "FastAPI", "Recharts"], image: "/analytics-dashboard-charts.png", href: "https://github.com/lilhop36/analytics-dashboard" },
]

export default function GitHubProjects() {
  return (
    <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
      {projects.map((project, index) => (
        <a key={project.title} href={project.href} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="mb-2 font-mono text-xs text-accent">0{index + 1} / CASE STUDY</p>
              <h3 className="text-2xl font-medium tracking-tight group-hover:text-accent">{project.title}</h3>
              <p className="mt-3 max-w-md leading-7 text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-border px-3 py-1 font-mono text-[11px] text-muted-foreground"><Code2 size={11} className="mr-1 inline" />{tag}</span>)}</div>
            </div>
            <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" size={22} />
          </div>
        </a>
      ))}
    </div>
  )
}
