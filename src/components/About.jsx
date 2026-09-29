import Reveal from "./Reveal.jsx";
import { CONFIG } from "../data/config.js";

export default function About() {
  const initials = CONFIG.doctor.split(" ").slice(-2).map((w) => w[0]).join("");
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal>
          {/* Replace with: <img className="doc" src="/doctor.jpg" alt={CONFIG.doctor} /> */}
          <div className="doc">{initials}</div>
        </Reveal>
        <Reveal delay={120}>
          <div>
            <div className="tag">Meet your dentist</div>
            <h2>{CONFIG.doctor}</h2>
            <p className="sub" style={{ maxWidth: "none" }}>
              With over fifteen years of experience, Dr. Raman blends artistry with the latest digital dentistry.
              Her philosophy is simple: explain everything, hurry nothing, and treat every patient like family.
            </p>
            <div className="creds">{CONFIG.creds.map((c) => <span key={c}>{c}</span>)}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
