import Iframe from "react-iframe";

export default function Fundraising() {
  return (
    <div className="flex flex-row items-center justify-center flex-wrap md:space-x-32">
      <div className="flex flex-col justify-center font-montserrat text-5xl pb-16 text-black">
        <div className="flex justify-center pb-4">Fundraising</div>
        <div className="flex text-lg mx-auto justify-center max-w-lg">
          Every mentor plays a crucial role not only in guiding our little
          buddies but also in ensuring the sustainability of our program. As
          part of their commitment, each mentor is required to meet an
          individual fundraising goal. The funds raised directly contribute to
          our programming expenses, helping us transform more lives through
          mentoring.
        </div>
      </div>

      <div className="flex flex-row items-center justify-center flex-wrap pb-32">
        <Iframe
          url="https://secure.qgiv.com/event/collegementorspurdue/widget/6546786/?etype=event&entity=1009365"
          width="272.664px"
          height="446.742px"
          className="bg-white rounded-xl shadow-lg shadow-custom-gold mb-16 p-8"
          scrolling="no"
        />
      </div>
    </div>
  );
}
