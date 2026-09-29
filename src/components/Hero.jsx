import Tooth from "./Tooth.jsx";
import { CONFIG } from "../data/config.js";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <div className="tag">{CONFIG.doctor} · Dental & Implant Care</div>
          <h1>Healthy teeth. <em>Confident</em> smiles.</h1>
          <p>Gentle, precise, technology-led dentistry in a calm space where you never feel rushed, and never feel pain.</p>
          <div className="cta">
            <a className="btn" href="#book">Book appointment</a>
            <a className="btn ghost" href={`tel:${CONFIG.phone.replace(/\s/g, "")}`}>📞 {CONFIG.phone}</a>
          </div>
        </div>
        <div className="blob">
          <Tooth />
          <span className="chip" style={{ top: "12%", left: 0 }}>⭐ 4.9 patient rating</span>
          <span className="chip" style={{ bottom: "14%", right: 0, animationDelay: "1s" }}>🩺 Painless treatment</span>
        </div>
      </div>
    </header>
  );
}
