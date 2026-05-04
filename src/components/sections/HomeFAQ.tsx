import ScrollReveal from "../ScrollReveal";

interface HomeFAQProps {
  faqs: { q: string; a: string }[];
}

export default function HomeFAQ({ faqs }: HomeFAQProps) {
  return (
    <section className="relative z-10 py-16 lg:py-24" aria-labelledby="home-faq">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div className="max-w-[680px] mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-yellow-400" />
              <span className="text-sm uppercase tracking-widest text-yellow-400">
                Frequently asked
              </span>
            </div>
            <h2
              id="home-faq"
              className="font-display font-bold tracking-tighter text-text-primary"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
            >
              Common questions
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map(({ q, a }, i) => (
            <ScrollReveal key={q} delay={i * 0.06}>
              <div
                className="rounded-2xl border border-border-light p-6 h-full"
                style={{
                  backgroundColor: "rgba(19, 19, 22, 0.55)",
                  boxShadow: "var(--shadow-inner-highlight)",
                }}
              >
                <h3 className="font-display font-semibold text-text-primary text-lg mb-3 tracking-tight">
                  {q}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {a}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
