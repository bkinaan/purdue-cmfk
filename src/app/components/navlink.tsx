export default function Navlink(props: { title: string; link: string }) {
  return (
    <div>
      <a className="group text-black transition duration-300" href={props.link}>
        <button>{props.title}</button>
        <span className="block max-w-0 group-hover:max-w-full transition-all ease-in-out duration-500 h-0.5 bg-custom-gold"></span>
      </a>
    </div>
  );
}
