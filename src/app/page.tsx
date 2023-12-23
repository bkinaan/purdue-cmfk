import Intro from "./components/intro";
import Navigation from "./components/navigation";
import About from "./components/about";
import Fundraising from "./components/fundraising";

export default function Home() {
  return (
    <main>
      {/* <div className="bg-gradient-to-b from-neutral-100 via-green-100 to-green-200"> */}
      <div className="bg-gradient-to-bl from-cmfk-purple via-cmfk-green to-cmfk-blue w-fit md:w-full">
        <div className="fixed top-0 left-0 right-0 z-40">
          <Navigation />
        </div>
        <div className="z-30">
          <Intro />
        </div>
        <div>
          <section id="about">
            <About />
          </section>
        </div>
        <section id="fundraising">
          <Fundraising />
        </section>
      </div>
    </main>
  );
}
