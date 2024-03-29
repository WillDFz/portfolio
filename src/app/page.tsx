import Header from "@/components/Header";
import MainBanner from './../components/MainBanner/index';
import Skills from "@/components/Skills";
import Projects from './../components/Project/index';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container mx-auto">
        <MainBanner />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
