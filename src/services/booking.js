// 🔌 Replace the body of this function with a real API call
// (e.g. fetch("/api/appointments", {...}), EmailJS, Formspree, or a WhatsApp deep link).
export async function submitBooking(data) {
  await new Promise((r) => setTimeout(r, 900)); // simulated network delay
  console.info("Booking request:", data);
  return { ok: true };
}
