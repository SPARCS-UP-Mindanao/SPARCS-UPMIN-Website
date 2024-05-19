import React, { useEffect, useState } from "react";
import moment from "moment";
import RecentEventsCard from "./RecentEventsCard";
import { getEventList } from "../content/eventList/eventList";

const EventsSection = () => {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const events = await getEventList();
      const sortedEvents = events
        .sort((a, b) => moment(a.startDate).diff(moment(b.startDate)))
        .reverse();
      setEventList(sortedEvents);
    };

    fetchEvents();
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col bg-[#0122BA] px-8 py-12"
      id="events"
    >
      <h1 className="text-center text-white text-4xl md:text-7xl font-arca">
        Our Events
      </h1>
      <div className="w-full flex flex-row flex-wrap justify-center p-4 md:p-8 gap-8 md:gap-16">
        {eventList.map((event, index) => (
          <RecentEventsCard key={index} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
