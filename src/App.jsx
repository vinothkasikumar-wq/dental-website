import { lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";

// Below-the-fold sections are code-split and loaded on demand
const BeforeAfter = lazy(() => import("./components/BeforeAfter.jsx"));
const About = lazy(() => import("./components/About.jsx"));
const Process = lazy(() => import("./components/Process.jsx"));
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Faq = lazy(() => import("./components/Faq.jsx"));
const Booking = lazy(() => import("./components/Booking.jsx"));

export default function App() {
  return (
    <ThemeProvider>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <Suspense fallback={<div className="loading" aria-hidden="true" />}>
        <BeforeAfter />
        <About />
        <Process />
        <Testimonials />
        <Faq />
        <Booking />
      </Suspense>
      <Footer />
    </ThemeProvider>
  );
}
