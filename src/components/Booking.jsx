import { useReducer } from "react";
import Reveal from "./Reveal.jsx";
import SectionHead from "./SectionHead.jsx";
import { submitBooking } from "../services/booking.js";
import { CONFIG } from "../data/config.js";

const initial = {
  values: { name: "", phone: "", service: CONFIG.services[0].title, date: "", note: "" },
  errors: {},
  status: "idle", // idle | sending | done | failed
};

function reducer(state, action) {
  switch (action.type) {
    case "set":
      return { ...state, values: { ...state.values, [action.key]: action.value }, errors: { ...state.errors, [action.key]: undefined } };
    case "errors": return { ...state, errors: action.errors };
    case "status": return { ...state, status: action.status };
    case "reset": return initial;
    default: return state;
  }
}

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name";
  if (!/^[+\d][\d\s-]{7,14}$/.test(v.phone.trim())) e.phone = "Enter a valid phone number";
  if (!v.date) e.date = "Pick a preferred date";
  return e;
}

export default function Booking() {
  const [{ values, errors, status }, dispatch] = useReducer(reducer, initial);
  const today = new Date().toISOString().split("T")[0];

  const bind = (key) => ({
    value: values[key],
    onChange: (e) => dispatch({ type: "set", key, value: e.target.value }),
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    if (Object.keys(errs).length) return dispatch({ type: "errors", errors: errs });
    dispatch({ type: "status", status: "sending" });
    try {
      await submitBooking(values);
      dispatch({ type: "status", status: "done" });
    } catch {
      dispatch({ type: "status", status: "failed" });
    }
  };

  return (
    <section id="book">
      <div className="wrap">
        <SectionHead tag="Appointments" title="Book your visit" sub={`${CONFIG.hours} · We confirm within a few hours.`} />
        <Reveal>
          {status === "done" ? (
            <div className="card ok">
              <div className="e" style={{ margin: "auto" }}>✅</div>
              <h3>Thank you, {values.name.split(" ")[0]}!</h3>
              <p>We received your request for {values.service} on {values.date}. Our team will call you shortly.</p>
              <button className="btn ghost" onClick={() => dispatch({ type: "reset" })}>Book another</button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <div className="row">
                <label>Full name
                  <input placeholder="Your name" {...bind("name")} />
                  {errors.name && <span className="err">{errors.name}</span>}
                </label>
                <label>Phone
                  <input placeholder="+91 …" inputMode="tel" {...bind("phone")} />
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </label>
              </div>
              <div className="row">
                <label>Treatment
                  <select {...bind("service")}>
                    {CONFIG.services.map((s) => <option key={s.title}>{s.title}</option>)}
                  </select>
                </label>
                <label>Preferred date
                  <input type="date" min={today} {...bind("date")} />
                  {errors.date && <span className="err">{errors.date}</span>}
                </label>
              </div>
              <label>Notes (optional)
                <textarea rows="3" {...bind("note")} />
              </label>
              {status === "failed" && <span className="err">Could not send. Please try again or call us.</span>}
              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Request appointment"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
