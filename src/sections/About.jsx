import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing for speed across both the frontend UI and backend APIs to deliver lightning-fast experiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring ideas to life.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies and best practices.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
            Building intuitive web experiences
              <span className="font-serif italic font-normal text-white">
                {" "}
                and resilient systems..
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
              I'm a passionate software developer dedicated to crafting clean, responsive, and fault-tolerant digital products. My journey started with a deep curiosity for how the web works, 
              driving me from building functional frontend management systems during my internship to engineering robust backend microservices.
              </p>
              <p>
              I specialize in bridging the gap between sleek user interfaces and complex data logic.
               My stack includes React.js and Tailwind CSS for the frontend, paired with Node.js, NestJS, and SQLite for secure, scalable server design. Whether I'm developing interactive admin dashboards or implementing transactional database patterns, my approach combines a keen eye for modern design with strict architectural rigor.
              </p>
              <p>
              When I'm not coding, you'll find me exploring distributed systems architecture, tackling complex algorithmic challenges, 
              or finding new ways to level up my full-stack development skills.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to build digital products that are architecturally sound from the ground
                 upcreating interfaces users love to navigate, powered by backend systems that never fail."
              </p>
            </div>
          </div>

          {/* Right Column - Hilights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};