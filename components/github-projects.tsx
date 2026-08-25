import { ArrowUpRight, Code2 } from "lucide-react"

const projects = [
  { title: "HolaSmile Dental Clinic Management System", description: "A modern dental clinic management system supporting appointment scheduling, patient records, medical examination workflows, and administrative operations.", tags: ["Next.js", "TypeScript", "Tailwind CSS"], href: "https://github.com/tuyen583/HeThongQuanLiPhongKhamHOLASMILE" },
  { title: "Production GraphRAG vs Flat RAG", description: "An end-to-end AI retrieval system comparing traditional vector-based RAG with a production-oriented GraphRAG architecture using knowledge graphs and hybrid retrieval.", tags: ["GraphRAG", "Neo4j", "FAISS"], href: "https://github.com/huutuyen0508/K4-Track3-2A202601520-NguyenHuuTuyen" },
  { title: "Production RAG Pipeline", description: "A modular Retrieval-Augmented Generation pipeline combining document processing, hybrid retrieval, reranking, LLM generation, and systematic RAG evaluation.", tags: ["Python", "Qdrant", "RAGAS"], href: "https://github.com/huutuyen0508/K34-Day18-Production-RAG" },
  { title: "Multi-Agent Research System", description: "A structured multi-agent AI system where a Supervisor coordinates specialized Researcher, Analyst, and Writer agents to produce a final researched response.", tags: ["LangGraph", "Python", "Multi-Agent"], href: "https://github.com/huutuyen0508/VinUni-AI20k-K4-Track3-Lab20-MultiAgent" },
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
