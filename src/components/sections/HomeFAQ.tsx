import ScrollReveal from "../ScrollReveal";

interface HomeFAQProps {
  faqs: { q: string; a: string }[];
}

export default function HomeFAQ({ faqs }: HomeFAQProps) {
  return (
    <section className="relative z-10 py-12" aria-labelledby="home-faq">
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
                className="rounded-[28px] border border-white/10 bg-[#111214]/90 p-6 h-full transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#151515]"
                style={{ boxShadow: "0 18px 50px rgba(0,0,0,0.45)" }}
              >
                <h3 className="font-display text-[20px] font-extrabold leading-tight tracking-[-0.02em] text-text-primary mb-3">
                  {q}
                </h3>
                <p className="text-text-secondary text-[16px] leading-6">
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
