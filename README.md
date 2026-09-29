# Raman Dental – Landing Page (React + Vite)

## Run
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in /dist
npm run preview   # preview the build
```

## Customise
- **All text/content:** `src/data/config.js`
- **Colours:** CSS variables at the top of `src/styles/index.css`
- **Doctor photo:** put `doctor.jpg` in `/public` and use the `<img>` line noted in `src/components/About.jsx`
- **Booking form backend:** implement `submitBooking()` in `src/services/booking.js`

## Structure
```
src/
  components/  Nav, Hero, Stats, Services, BeforeAfter, About, Process,
               Testimonials, Faq, Booking, Footer, Reveal, SectionHead, Tooth
  hooks/       useInView, useCountUp, useInterval
  context/     ThemeContext (dark/light, persisted)
  services/    booking.js (API stub)
  data/        config.js
  styles/      index.css
```

## Concepts used
Custom hooks · Context API · useReducer form state · React.lazy + Suspense code-splitting ·
memo/useMemo · IntersectionObserver · requestAnimationFrame · async submit states ·
accessible controls & reduced-motion support.
