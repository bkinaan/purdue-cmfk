import Navlink from "./navlink";

export default function Navigation() {
  return (
    <div className="border p-4 flex justify-end font-montserrat bg-white text-black rounded-full m-8 shadow-lg shadow-gray-500">
      <div className="mr-auto text-xs sm:text-xl">
        <span className="text-custom-gold">
          <a href="">Purdue</a>
        </span>
        <a href="/"> College Mentors for Kids</a>
      </div>
      <div className="ml-4">
        <Navlink
          title="Instagram"
          link="https://www.instagram.com/purduecollegementors/"
        />
      </div>
      <div className="ml-4">
        <Navlink
          title="Donate"
          link="https://secure.qgiv.com/event/collegementorspurdue/"
        />
      </div>
      <div className="ml-4">
        <Navlink
          title="Apply"
          link="https://members.collegementors.org/application"
        />
      </div>
    </div>
  );
}
