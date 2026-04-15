import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

const stats = [
  { value: "0", label: "Websites developed" },
  { value: "0", label: "Databases created" },
  { value: "0", label: "Dashboards" },
  { value: "0", label: "Advanced AI/ML systems deployed" },
];

export default function StatsStrip() {
  return (
    <section className="relative z-10 py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
        <ScrollReveal>
          <div
            className="p-1.5 rounded-[2rem] border border-border"
            style={{
              backgroundColor: "rgba(19, 19, 22, 0.4)",
            }}
          >
            <div
              className="rounded-[calc(2rem-0.375rem)] bg-surface px-6 py-10 lg:px-12 lg:py-14"
              style={{ boxShadow: "var(--shadow-inner-highlight)" }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: i * 0.1,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                  >
                    <div className="font-display font-bold text-3xl lg:text-4xl text-accent tracking-tight mb-2">
                      {stat.value}
                    </div>
                    <div className="font-mono text-xs text-text-tertiary uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
