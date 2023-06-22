import Education from "~/components/Education";
import Experience from "~/components/Experience";
import Hero from "~/components/Hero";
import Medium from "~/components/Medium";
import Nav from "~/components/Nav";
import Projects from "~/components/Projects";

export default function Index() {
  return (
    <>
      <Nav />
      <Hero />
      <Experience />
      <Projects />
      <Medium />
      <Education />
    </>
  );
}
