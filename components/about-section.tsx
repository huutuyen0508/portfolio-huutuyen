// About section with bio and skills display
// Update the bio text and skills list with your own information

export function AboutSection() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "NestJS", level: 80 },
        { name: "API Design", level: 80 },
      ],
    },
    {
      category: "Mobile & Tools",
      items: [
        { name: "Android Development", level: 80 },
        { name: "Git", level: 90 },
        { name: "Problem Solving", level: 90 },
        { name: "UI/UX Design", level: 75 },
      ],
    },
  ]

  return (
    <section id="about" className="py-20 px-4 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I&apos;m a final-year Information Technology student at the Academy of Cryptography Techniques in Hanoi, Vietnam. I have a software engineering foundation in Next.js, React, TypeScript, NestJS, RESTful APIs, databases, and Docker, with experience building modern web applications.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Recently, I have been focusing more deeply on AI Engineering, especially LLM applications, RAG, GraphRAG, Multi-Agent Systems, LangGraph, AI evaluation, and model fine-tuning. Through my projects, I am learning how AI components can be integrated into practical, production-oriented software systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m currently looking for an Internship or Fresher opportunity related to <strong>AI Engineering / AI-ML Engineering</strong>, where I can continue learning, gain real-world experience, strengthen my AI and software engineering skills, and contribute to meaningful products.
            </p>
          </div>

          {/* Skills Section with Progress Bars */}
          <div>
            <h3 className="text-2xl font-semibold mb-8">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="font-semibold text-accent mb-4">{skillGroup.category}</h4>
                  <div className="space-y-3">
                    {skillGroup.items.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="w-full bg-card border border-border rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-accent to-accent/60 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
