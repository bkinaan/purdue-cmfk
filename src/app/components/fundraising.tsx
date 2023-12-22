import Iframe from "react-iframe";

export default function Fundraising() {
  return (
    <div className="grid grid-cols-2 items-center pt-8">
      <div className="font-montserrat text-5xl pb-16">
        Fundraising
        <div className="text-xl">Test</div>
      </div>

      <div className="flex justify-center">
        <Iframe
          url="https://secure.qgiv.com/event/collegementorspurdue/widget/6546786/?etype=event&entity=1009365"
          width="272.664px"
          height="446.742px"
          className="bg-white rounded-xl shadow-xl shadow-custom-green mb-16 p-8"
          scrolling="no"
        />
      </div>
    </div>
  );
}
