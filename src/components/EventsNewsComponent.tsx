// EventsNewsComponent.tsx
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";

type Event = {
  id: number;
  image: string;
  title: string;
  tag: string;
  date: string;
  venue: string;
};

type News = {
  id: number;
  title: string;
  tag: string;
  description: string;
};

type Props = {
  events: Event[];
  news: News[];
};

const EventsNewsComponent: React.FC<Props> = ({ events, news }) => {
  const [eventScrollPosition, setEventScrollPosition] = useState(960);
  const [newsScrollPosition, setNewsScrollPosition] = useState(960);

  const nextEvent = () => {
    setEventScrollPosition((prev) => prev - 320);
  };

  const prevEvent = () => {
    setEventScrollPosition((prev) => prev + 320);
  };

  const nextNews = () => {
    setNewsScrollPosition((prev) => prev - 320);
  };

  const prevNews = () => {
    setNewsScrollPosition((prev) => prev + 320);
  };
  const getVisibleEvents = () => {
    return events; // Return all events for smooth scrolling
  };

  const getVisibleNews = () => {
    return news; // Return all news for smooth scrolling
  };

  return (
    <div
      className="w-full  mx-auto p-6 bg-white"
      style={{ fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif" }}
    >
      <div className="bg-white p-8 ">
        {/* Div 1: Upcoming Events */}
        <div className="mb-12">
          {/* Events Header with Navigation */}
          <div className="flex items-center justify-around mb-8">
            <h2 className="text-[61px]  text-gray-800">Upcoming Events</h2>
            <div className="flex gap-2">
              <button
                onClick={prevEvent}
                className="p-2  bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextEvent}
                className="p-2  bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Events Container - Horizontal Scrolling */}
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${eventScrollPosition}px)` }}
            >
              {getVisibleEvents().map((event) => (
                <div
                  key={event.id}
                  className="bg-white   overflow-hidden hover:shadow-lg transition-shadow flex-shrink-0 w-80"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[21px]  text-gray-800 mb-2">
                      {event.title}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {event.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-gray-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-[14px] text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Div 2: Latest News */}
        <div className="mb-12 mt-20 pt-20">
          {/* News Header with Navigation */}
          <div className="flex items-center justify-around mb-8">
            <h2 className="text-[61px]  text-gray-800">Latest News</h2>
            <div className="flex gap-2">
              <button
                onClick={prevNews}
                className="p-2  bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextNews}
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          {/* News Content */}
          <div className="flex  flex-col gap-6">
            {/* News Boxes - Horizontal Scrolling */}
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${newsScrollPosition}px)` }}
              >
                {getVisibleNews().map((newsItem) => (
                  <div
                    key={newsItem.id}
                    className="  p-6 hover:shadow-md transition-shadow flex-shrink-0 w-[26rem]"
                  >
                    <h3 className="text-[21px]  text-gray-800 mb-3">
                      {newsItem.title}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        {newsItem.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[16px] text-gray-600 mb-3">
                      <ArrowRight className="w-4 h-4" />
                      <span>Read more</span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {newsItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed News Info Box - Below the scrolling boxes */}
            <div className="flex justify-center mt-6">
              <div className="bg-gray-50 flex w-1/2 text-[16px] flex-col justify-center  p-6">
                <p className="text-gray-700 mb-4">
                  Stay up to date with the latest news: includes articles,
                  in-depth studies, extras and stories about the collaborations
                  and bonds between Accely and its clients.
                </p>
                <div className="flex items-center gap-2 text-blue-600 mb-2 cursor-pointer hover:text-blue-800">
                  <span className="text-sm">Get notified</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800">
                  <span className="text-sm">All news articles</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO Statement Section */}
      <div className="w-full h- flex justify-center p-8   mt-8">
        <div className="w-3/4 flex gap-8 bg-gray-100 p-8  items-center">
          {/* Text Content */}
          <div className="w-1/3 h-[32rem]">
            <h3 className="text-[16px]   text-gray-400 mb-2">CEO Statement</h3>
            <h4 className="text-[47px] text-black mb-8 leading-[1.1]">
              Innovating the Change
            </h4>

            <p className="text-gray-400 text-[16px] mb-4 leading-relaxed">
              Accely uses Information Technology to make processes not just more
              efficient, but also much more effective. We look at automation as
              an opportunity to allow refined methodologies and innovation to
              create a synergy of the latest technology and vast accumulated
              experience. Once again, our differentiator is in the depth of
              technical knowledge, project execution, and problem-solving skills
              that enable us to provide high-value solutions, and rapid return
              on investment.
            </p>
            <p className="text-gray-800 text-[16px] font-medium">
              - Mr. Nilesh Shah, CEO at Accely Group
            </p>
          </div>

          {/* Video Content */}
          <div className="w-2/3 ">
            <div className="bg-black  overflow-hidden">
              <iframe
                className="w-full h-[32rem] lg:h-[32rem]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="CEO Statement Video"
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="p-8 rounded-lg mt-8">
        <div className="flex flex-wrap justify-center items-center gap-14">
          {[
            { src: "/fixedIcons/1.png", label: "ISO 9001" },
            { src: "/fixedIcons/2.png", label: "ISO 27001" },
            { src: "/fixedIcons/3.png", label: "CMMI Level 5" },
            { src: "/fixedIcons/4.png", label: "AWS Partner" },
            { src: "/fixedIcons/5.png", label: "Microsoft Gold" },
            { src: "/fixedIcons/6.png", label: "ISO 9001" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-40 h-40 p-2"
            >
              <img
                src={item.src}
                alt={item.label}
                className="h-24 mb-2 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsNewsComponent;
