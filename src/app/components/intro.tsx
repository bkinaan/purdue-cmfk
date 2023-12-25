export default function Intro() {
  return (
    <div>
      <div className="flex flex-col text-center text-black pt-32 md:pt-48">
        <div className="text-black font-montserrat font-bold text-5xl sm:text-7xl md:text-8xl lg:text-8xl">
          <div className="pt-8 md:pt-0 pb-8">Mentoring</div>
          <div className="font-rock-salt text-custom-gold text-5xl sm:text-7xl md:text-8xl lg:text-9xl pb-8">
            Transforms
          </div>
          <div>Lives</div>
        </div>
        <div className="grid grid-flow-col columns-3 gap-24 mt-16 py-4 justify-center border-0 rounded-full">
          <a
            href="https://members.collegementors.org/application"
            className="relative inline-block text-4xl group"
          >
            <button className="bg-white font-normal border-custom-gold rounded-full p-4 font-montserrat shadow-xl shadow-custom-gold hover:bg-custom-gold hover:translate-y-1 ease-in-out duration-200">
              Make a Difference!
            </button>
          </a>
          {/* <Quicklink title="Apply Now!" link="https://members.collegementors.org/application"/>
                    <Quicklink title="Donate" link="https://secure.qgiv.com/event/collegementorspurdue/"/> */}
        </div>
        <div>
          <a href="#about" className="text-white">
            Or learn more below...
          </a>
        </div>
      </div>
    </div>
  );
}
