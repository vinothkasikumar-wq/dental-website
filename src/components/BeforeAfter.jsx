import { useState } from "react";
import SectionHead from "./SectionHead.jsx";

const Teeth = () => Array.from({ length: 6 }, (_, i) => <i key={i} />);

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <section id="results" className="alt">
      <div className="wrap">
        <SectionHead tag="Real results" title="See the difference"
          sub="Drag the slider to compare a smile before and after professional whitening." />
        <div className="ba">
          <div className="layer a"><Teeth /></div>
          <span className="lab" style={{ right: 12 }}>After</span>
          <div className="layer b" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}><Teeth /></div>
          <span className="lab" style={{ left: 12 }}>Before</span>
          <div className="bar" style={{ left: `${pos}%` }} />
          <input type="range" min="0" max="100" value={pos}
            onChange={(e) => setPos(+e.target.value)} aria-label="Before and after comparison" />
        </div>
      </div>
    </section>
  );
}
