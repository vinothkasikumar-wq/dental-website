import { CONFIG } from "../data/config.js";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <span>© {new Date().getFullYear()} {CONFIG.clinic} · {CONFIG.doctor}</span>
        <span>{CONFIG.email} · {CONFIG.phone}</span>
      </div>
    </footer>
  );
}
