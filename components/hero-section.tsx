import Image from "next/image"
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-border px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-44">
      <div className="mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-[1.35fr_.65fr]">
        <div>
          <div className="mb-8 flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Available for select collaborations
          </div>
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.24em] text-accent">AI / ML Engineer · FRONT-END DEVELOPER</p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.06em] md:text-8xl">
            Building intelligent systems with a human point of view.
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground">
            I&apos;m Nguyễn Hữu Tuyến, an AI/ML engineer focused on LLMs, computer vision, and production-grade software that makes complex ideas useful.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground transition-transform hover:-translate-y-0.5">
              Explore selected work <ArrowDown size={17} className="transition-transform group-hover:translate-y-1" />
            </a>
            <a href="mailto:nguyenhuutuyen@example.com" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-medium transition-colors hover:border-accent hover:text-accent">
              Let&apos;s talk <ArrowUpRight size={17} />
            </a>
          </div>
          <div className="mt-14 flex items-center gap-2 text-sm text-muted-foreground"><MapPin size={15} className="text-accent" /> Hanoi , VietNam</div>
        </div>
        <div className="relative mx-auto w-full max-w-sm lg:mb-3">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-secondary shadow-2xl shadow-accent/5">
            <Image src="/nguyen-huu-tuyen-portrait.jpg" alt="Nguyễn Hữu Tuyến" width={520} height={640} className="aspect-[4/5] w-full object-cover object-[50%_56%] grayscale transition-all duration-700 hover:grayscale-0" priority />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-border bg-background px-4 py-3 font-mono text-xs text-muted-foreground shadow-lg">01 / 04<br /><span className="text-foreground">Selected work</span></div>
        </div>
      </div>
    </section>
  )
}
