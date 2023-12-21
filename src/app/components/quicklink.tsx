export default function Quicklink(props: { title: string; link: string }) {
  return (
    <a href={props.link} className="relative inline-block text-4xl group">
      <button className="bg-white border-2 font-normal border-custom-green rounded-full p-4 font-montserrat shadow-lg shadow-custom-green hover:bg-custom-green hover:translate-y-1 ease-in-out duration-200">
        {props.title}
      </button>
    </a>
  );
}
