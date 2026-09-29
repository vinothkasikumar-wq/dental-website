import { useState } from "react";
import SectionHead from "./SectionHead.jsx";
import useInterval from "../hooks/useInterval.js";
import { CONFIG } from "../data/config.js";

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useInterval(() => !paused && setI((n) => (n + 1) % CONFIG.reviews.length), 5000);
  const { quote, who } = CONFIG.reviews[i];
  return (
    <section>
      <div className="wrap">
        <SectionHead tag="Testimonials" title="Loved by our patients" />
        <div className="quote" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} aria-live="polite">
          <p key={i}>“{quote}”</p>
          <b>{who}</b>
          <div className="dots">
            {CONFIG.reviews.map((_, n) => (
              <button key={n} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Review ${n + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
