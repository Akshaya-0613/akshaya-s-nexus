import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Learning } from "@/components/portfolio/Learning";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education } from "@/components/portfolio/Education";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { CareerGoals } from "@/components/portfolio/CareerGoals";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

const title = "Allada Akshaya | Backend Developer | Full Stack Developer | AI & ML";
const description =
  "Portfolio of Allada Akshaya, a Computer Science Engineering student specializing in AI & ML, focused on backend development, full-stack applications, machine learning, and modern software solutions.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Allada Akshaya",
          jobTitle: "Backend Developer | Full Stack Developer | AI & ML Engineer",
          email: "mailto:akshayaallada60@gmail.com",
          telephone: "+91 9391292177",
          alumniOf: "Dadi Institute of Engineering and Technology",
          sameAs: [
            "https://github.com/Akshaya-0613",
            "https://www.linkedin.com/in/akshaya-allada-2693a02b7",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Learning />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Achievements />
        <CareerGoals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
