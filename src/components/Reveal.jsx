import useInView from "../hooks/useInView.js";

export default function Reveal({ delay = 0, children }) {
  const [ref, seen] = useInView();
  return (
    <div ref={ref} className={`rv ${seen ? "in" : ""}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
