import Image from "next/image";
import Value from "./components/value";
import Intro from "./components/intro";
import Navigation from "./components/navigation";
import About from "./components/about";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-gradient-to-b from-neutral-100 via-green-100 to-green-200"> */}
      <div className=" bg-green-50">
        <div className="fixed top-0 left-0 right-0 z-40">
          <Navigation />
        </div>
        <div className="relative z-30">
          <Intro />
        </div>
        <div>
          <section id="about">
            <About />
          </section>
        </div>
      </div>
    </main>
  );
}
