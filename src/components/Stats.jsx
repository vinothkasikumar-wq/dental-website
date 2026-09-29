import { memo } from "react";
import useInView from "../hooks/useInView.js";
import useCountUp from "../hooks/useCountUp.js";
import { CONFIG } from "../data/config.js";

const Stat = memo(function Stat({ n, suffix, label, text }) {
  const [ref, seen] = useInView();
  const v = useCountUp(n, seen);
  const shown = text ?? (Number.isInteger(n) ? Math.round(v).toLocaleString() : v.toFixed(1)) + suffix;
  return (
    <div ref={ref} className="stat">
      <b>{shown}</b>
      <div>{label}</div>
    </div>
  );
});

export default function Stats() {
  return (
    <div className="wrap">
      <div className="stats">
        {CONFIG.stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
    </div>
  );
}
