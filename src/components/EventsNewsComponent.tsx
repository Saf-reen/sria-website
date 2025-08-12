// EventsNewsComponent.tsx
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

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
  link: string;
};

type Props = {
  events: Event[];
  news: News[];
};

const EventsNewsComponent: React.FC<Props> = ({ events, news }) => {
  const [eventScrollPosition, setEventScrollPosition] = useState(0);
  const [newsScrollPosition, setNewsScrollPosition] = useState(0);

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
    return events;
  };

  const getVisibleNews = () => {
    return news;
  };

  return (
    <div
      className="w-full mx-auto bg-white"
      style={{ fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Upcoming Events Section */}
        <div className="mb-16">
          <div className="flex flex-row sm:flex-row items-center justify-between mb-8">
            <h2 className="text-[42px] sm:text-[61px] text-gray-800 leading-tight">
              Upcoming Events
            </h2>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button
                onClick={prevEvent}
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={nextEvent}
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${eventScrollPosition}px)` }}
            >
              {getVisibleEvents().map((event) => (
                <div
                  key={event.id}
                  className="bg-white hover:shadow-lg transition-shadow flex-shrink-0 w-full sm:w-80"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-[21px] text-gray-800 mb-2">
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

        {/* Latest News Section */}
        {/* <div className="mb-16">
          <div className="flex flex-row sm:flex-row items-center justify-between mb-8">
            <h2 className="text-[42px] sm:text-[61px] text-gray-800 leading-tight">
              Latest News
            </h2>
            <div className="flex gap-2 mt-4 sm:mt-0">
              <button
                onClick={prevNews}
                className="p-2 bg-gray-100 hover:bg-gray-200 transition-colors"
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

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden">
              <div
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(${newsScrollPosition}px)` }}
              >
                {getVisibleNews().map((newsItem) => (
                  <div
                    key={newsItem.id}
                    className="p-6 hover:shadow-md transition-shadow flex-shrink-0 w-full sm:w-[26rem]"
                  >
                    <h3 className="text-[21px] text-gray-800 mb-3">
                      {newsItem.title}
                    </h3>
                    <div className="mb-3">
                      <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        {newsItem.tag}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[16px] text-gray-600 mb-3">
                      <ArrowRight className="w-4 h-4" />
                      <Link
                        to={newsItem.link}
                        className="flex items-center gap-1 text-blue-600 hover:underline"
                      >
                        <span>Read more</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <p className="text-gray-600 text-sm">
                      {newsItem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <div className="bg-gray-50 w-full sm:w-1/2 text-[16px] flex flex-col justify-center p-6">
                <p className="text-gray-700 mb-4">
                  Stay up to date with the latest news: includes articles,
                  in-depth studies, extras and stories about the collaborations
                  and bonds between Sria Infotech and its clients.
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
        </div> */}
      </div>
    </div>
  );
};

export default EventsNewsComponent;
