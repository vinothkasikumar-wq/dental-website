import Reveal from "./Reveal.jsx";

export default function SectionHead({ tag, title, sub }) {
  return (
    <Reveal>
      <div className="tag">{tag}</div>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}
