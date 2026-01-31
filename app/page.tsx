import Image from "next/image";
import { FloatingDock } from "@/components/FloatingDock";

const experience = [
  {
    company: "Cisco",
    role: "Software Engineer",
    period: "jan 2024 - present",
    description: "building ai agents that fix code. codewatch fixed 100k+ defects autonomously.",
    logo: "/cisco.png",
  },
  {
    company: "Scale AI",
    role: "AI Contributor",
    period: "may 2024 - present",
    description: "training frontier models like o1, o3, gemini 2.5 pro.",
    logo: "/scale.png",
  },
  {
    company: "Riple.org",
    role: "Full-Stack Intern",
    period: "may 2023 - jul 2023",
    description: "built a news aggregation system processing 10k+ articles/day.",
    logo: "/stealth.png",
  },
  {
    company: "Reliance Jio",
    role: "Software Intern",
    period: "may 2022 - jul 2022",
    description: "nlp-based meeting summarizer using transformers.",
    logo: "/jio.png",
  },
];

const achievements = [
  {
    title: "CodeWatch @ Cisco",
    description: "built an agentic system that autonomously fixed 100k+ static defects. featured on openai's website. top 3 worldwide at anthropic's mcp hackathon among 400+ teams.",
    link: "https://openai.com/index/cisco/",
  },
  {
    title: "COLING 2025",
    description: "research on nlp for indian law published at the 31st international conference on computational linguistics.",
    link: null,
  },
  {
    title: "Silver Medal - CSMC",
    description: "ranked top 5 out of 13,000+ participants at the canadian senior mathematics contest by university of waterloo.",
    link: null,
  },
];

const skills = [
  "python",
  "c/c++",
  "typescript",
  "react",
  "langchain",
  "llvm",
  "ebpf",
  "docker",
  "300+ day leetcode streak",
  "weightlifting",
];

export default function Home() {
  return (
    <>
      <main className="min-h-screen px-6 py-16 pb-24 max-w-xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-2xl font-semibold mb-2">hi, raghuvir here</h1>
          <p className="text-muted-foreground">
            been coding for a while now
          </p>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">about</h2>
          <p className="text-muted-foreground leading-relaxed">
            software engineer who builds ai systems that actually work in production. 
            currently at cisco making agents that fix code autonomously. 
            also help train frontier models at scale ai.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            bits pilani cs grad. published at coling 2025. 
            i like building things that solve real problems.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">where i&apos;ve worked</h2>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={exp.company} className="group flex gap-4 items-start">
                <div className="w-[72px] h-[72px] flex-shrink-0">
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={72}
                    height={72}
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-medium">{exp.company}</h3>
                    <span className="text-xs text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.role}</p>
                  <p className="text-sm text-muted-foreground/70 mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-6">achievements</h2>
          <div className="space-y-6">
            {achievements.map((item) => (
              <div key={item.title} className="group">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-medium">
                      {item.link ? (
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-muted-foreground transition-colors underline underline-offset-4"
                        >
                          {item.title} ↗
                        </a>
                      ) : (
                        item.title
                      )}
                    </h3>
                    <p className="text-sm text-muted-foreground/70 mt-1">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">education</h2>
          <div className="flex gap-4 items-start">
            <div className="w-[72px] h-[72px] flex-shrink-0">
              <Image
                src="/bits.png"
                alt="BITS Pilani"
                width={72}
                height={72}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <h3 className="font-medium">BITS Pilani, Hyderabad</h3>
              <p className="text-sm text-muted-foreground">B.E. Computer Science • 8.60 GPA • 2020-2024</p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-xs text-muted-foreground/50">
          © 2025 raghuvir singh
        </footer>
      </main>

      <FloatingDock />
    </>
  );
}
