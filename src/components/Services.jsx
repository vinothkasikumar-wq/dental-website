import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { CONFIG } from "../data/config.js";

export default function Services() {
  return (
    <section id="services">
      <div className="wrap">
        <SectionHead tag="What we do" title="Complete care under one roof"
          sub="From routine check-ups to complex rehabilitation, every treatment is planned around you." />
        <div className="grid">
          {CONFIG.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <div className="card">
                <div className="e">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
