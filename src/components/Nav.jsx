import { useTheme } from "../context/ThemeContext.jsx";
import { CONFIG } from "../data/config.js";

export default function Nav() {
  const { theme, toggle } = useTheme();
  const [first, ...rest] = CONFIG.clinic.split(" ");
  return (
    <nav>
      <div className="wrap">
        <a className="logo" href="#top">{first}<span> {rest.join(" ")}</span></a>
        <div className="links">
          <a href="#services">Services</a>
          <a href="#results">Results</a>
          <a href="#about">Doctor</a>
          <a href="#faq">FAQ</a>
          <button className="icon" onClick={toggle} aria-label="Toggle theme">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <a className="btn" href="#book">Book now</a>
        </div>
      </div>
    </nav>
  );
}
