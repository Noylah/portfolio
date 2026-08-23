import { useLayoutEffect, useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";
import MainSection from "../components/MainSection";
import Footer from "../components/Footer";
import { useTheme } from "../theme";
import portfolio from "../data/portfolio.json";
import Card from "../components/Card";

export default function Home() {
  const { theme } = useTheme();
  const pageRef = useRef<HTMLElement>(null);
  const heroSequence = portfolio.profile.heroLines.flatMap((line) => [
    line,
    1500,
  ]);

  useLayoutEffect(() => {
    if (
      !pageRef.current ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const context = gsap.context(() => {
      gsap.from(".hero-reveal", {
        opacity: 0,
        y: 18,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
      });
      gsap.from(".about-reveal", {
        opacity: 0,
        y: 24,
        duration: 0.8,
        delay: 0.25,
        ease: "power2.out",
      });
      gsap.from(".card-reveal", {
        opacity: 0,
        y: 18,
        duration: 0.55,
        delay: 0.45,
        stagger: 0.08,
        ease: "power2.out",
      });
    }, pageRef);
    return () => context.revert();
  }, []);

  return (
    <>
      <main
        ref={pageRef}
        className="relative mx-auto w-full max-w-7xl px-4 pt-28 text-left sm:px-8 md:pt-36"
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full ${theme.glowColor} blur-[100px]`}
        />

        <header className="hero-reveal relative mb-20 flex flex-col items-center text-center font-jakarta">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-slate-500">
            0x01 / portfolio query
          </p>
          <h1 className="mb-5 text-4xl font-black text-white sm:text-6xl md:text-8xl">
            SELECT <span className={`${theme.text}`}>*</span> FROM{" "}
            <span className={`${theme.text} lowercase`}>
              {portfolio.profile.name}
            </span>
          </h1>
          <p className="flex min-h-14 max-w-full flex-wrap items-center justify-center gap-x-1 text-base text-slate-400 sm:text-xl">
            <span>Query OK, 1</span>
            <span
              className={`${theme.text} inline-block max-w-full font-semibold wrap-break-word`}
            >
              <TypeAnimation sequence={heroSequence} repeat={Infinity} />
            </span>
            <span>affected (0.02 sec)</span>
          </p>
        </header>

        <div className="flex flex-col items-center gap-20">
          <MainSection />
          <section id="projects" className="section-reveal w-full scroll-mt-24">
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <p className="font-mono text-xs uppercase text-slate-500">
                  SELECT <span className={`${theme.text} lowercase`}>*</span>{" "}
                  FROM{" "}
                  <span className={`${theme.text} lowercase`}>projects</span>{" "}
                  <span className="text-gray-700">
                    -- LIMIT{" "}
                    <span className={`lowercase`}>my_immagination</span>
                  </span>
                </p>
                <h2 className="font-jakarta text-3xl font-black text-white sm:text-4xl">
                  Things I am building
                </h2>
              </div>
              <span
                className={`${theme.text} hidden font-mono text-xs sm:block`}
              >
                {portfolio.projects.length} rows
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {portfolio.projects.map((project) => (
                <Card key={project.title} {...project} />
              ))}
            </div>
          </section>
          <section
            id="contributions"
            className="section-reveal w-full scroll-mt-24"
          >
            <div className="mb-6 flex items-end justify-between gap-4 border-b border-slate-800 pb-3">
              <div>
                <p className="font-mono text-xs uppercase text-slate-500">
                  SELECT <span className={`${theme.text} lowercase`}>*</span>{" "}
                  FROM{" "}
                  <span className={`${theme.text} lowercase`}>
                    contributions
                  </span>
                </p>
                <h2 className="font-jakarta text-3xl font-black text-white sm:text-4xl">
                  My mark on open-source
                </h2>
              </div>
              <span
                className={`${theme.text} hidden font-mono text-xs sm:block`}
              >
                {portfolio.contributions.length} rows
              </span>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {portfolio.contributions.map((contribution) => (
                <Card key={contribution.title} {...contribution} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
