import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { CONFIG } from "../data/config.js";

export default function Process() {
  return (
    <section className="alt">
      <div className="wrap">
        <SectionHead tag="How it works" title="Four simple steps" sub="A clear path from first visit to a lasting smile." />
        <div className="grid steps">
          {CONFIG.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="card"><h3>{s.title}</h3><p>{s.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
