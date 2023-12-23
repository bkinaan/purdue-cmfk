export default function About_Section(props: {
  header: String;
  subtext: String;
  img: string;
  placement: Boolean; // true == right, false == left
}) {
  let imgRight = "";
  let imgLeft = "";
  if (props.placement) {
    imgLeft = "max-w-xl hidden";
    imgRight = "max-w-xl";
  } else {
    imgLeft = "max-w-xl";
    imgRight = "max-w-xl hidden";
  }
  return (
    <div className="flex flex-row items-center justify-center flex-wrap pb-32">
      <img className={imgLeft} src={props.img} alt="two people" />
      <div className="flex flex-col items-center justify-center max-w-md md:max-w-fit">
        <div className="self-start max-w-xl bg-white text-black font-montserrat text-center md:text-right p-8 text-sm md:text-xl shadow-xl shadow-gray-500 rounded-xl">
          <div className="text-2xl md:text-6xl pb-8">{props.header}</div>
          <div>{props.subtext}</div>
        </div>
      </div>
      <img className={imgRight} src={props.img} alt="" />
    </div>
  );
}
