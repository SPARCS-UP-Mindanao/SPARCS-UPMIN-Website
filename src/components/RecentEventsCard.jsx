import moment from "moment";
import Logo from "../../public/logo.png";

const RecentEventsCard = ({ event }) => {
  const { title, bannerUrl, description } = event;

  const getDate = () => {
    const isSameDayEvent = moment(event.startDate).isSame(event.endDate, "day");

    if (
      isSameDayEvent &&
      moment(event.startDate).format("ll, h:mm A") ===
        moment(event.endDate).format("ll, h:mm A")
    ) {
      return `${moment(event.startDate).format("ll, h:mm A")}`;
    }

    if (isSameDayEvent) {
      return `${moment(event.startDate).format("ll, h:mm A")} - ${moment(
        event.endDate,
      ).format("LT")}`;
    }

    if (event.endDate) {
      return `${moment(event.startDate).format("ll")} - ${moment(
        event.endDate,
      ).format("ll")}`;
    } else {
      return `${moment(event.startDate).format("ll")}`;
    }
  };

  return (
    <div className="w-[240px] h-[352.5px] md:w-[320px] md:h-[470px] rounded-2xl bg-[#CAD4FF] overflow-hidden">
      <div className="w-full h-4/6 overflow-hidden bg-no-repeat bg-cover">
        <img
          src={bannerUrl || Logo}
          alt={title}
          className="w-full h-full rounded-t-2xl scale-100 hover:scale-125 ease-in duration-100 hover:cursor-pointer object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
        <img
          src={Logo}
          alt={`Fallback ${title}`}
          className="w-full h-full rounded-t-2xl scale-100 hover:scale-125 ease-in duration-100 hover:cursor-pointer object-cover"
        />
      </div>
      <div className="p-2 md:p-3 h-2/6">
        <h1 className="text-xl md:text-lg mb-1 md:mb-2 font-raleway font-bold text-wrap">
          {title}
        </h1>
        <p className="text-sm md:text-md text-gray-500 mb-3">{getDate()}</p>
        <div
          className="text-sm md:text-md font-montserrat line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default RecentEventsCard;
