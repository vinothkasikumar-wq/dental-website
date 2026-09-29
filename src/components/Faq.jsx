import SectionHead from "./SectionHead.jsx";
import { CONFIG } from "../data/config.js";

export default function Faq() {
  return (
    <section id="faq" className="alt">
      <div className="wrap">
        <SectionHead tag="FAQ" title="Good to know" />
        <div className="faq">
          {CONFIG.faqs.map(({ q, a }) => (
            <details key={q}><summary>{q}</summary><p>{a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}
