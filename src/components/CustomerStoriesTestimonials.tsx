import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

// Types
export interface CustomerStory {
  id: number;
  image: string;
  title: string;
  readMoreLink: string;
}

export interface CustomerReview {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
  verified: boolean;
}

// Default data (can override with props)
const defaultStories: CustomerStory[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400",
    title: "Transforming Business Operations With Innovative Solutions",
    readMoreLink: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
    title: "Digital Innovation Success Through Strategic Partnership",
    readMoreLink: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400",
    title: "Scaling New Heights in Technology Excellence",
    readMoreLink: "#",
  },
];

const defaultReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5,
    review:
      "Outstanding service and incredible results. The team's dedication to excellence is evident in every aspect of their work.",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    rating: 4.5,
    review:
      "Professional, efficient, and results-driven. The communication throughout the project was excellent.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    rating: 5,
    review:
      "Exceptional quality and attention to detail. A game-changer for our business operations.",
    verified: true,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder, StartupX",
    rating: 4.5,
    review:
      "Innovative solutions and outstanding support. Strategic guidance has been invaluable.",
    verified: true,
  },
];

// ⭐ Reusable stars renderer
const renderStars = (rating: number, maxStars: number = 5) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Star
        key="half"
        className="w-4 h-4 fill-yellow-400 text-yellow-400 opacity-50"
      />
    );
  }

  const remainingStars = maxStars - Math.ceil(rating);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
  }

  return stars;
};

// 📌 Component: Customer Stories
export const CustomerStories: React.FC<{
  stories?: CustomerStory[];
}> = ({ stories = defaultStories }) => {
  const [index, setIndex] = useState(0);
  const story = stories[index];

  return (
    <div className="text-white mt-20 pt-20 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[61px] sm:text-[61px] font-normal font-questrial leading-tight sm:leading-tight leading-[0.9]">
          Customer stories
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setIndex((i) => (i - 1 + stories.length) % stories.length)
            }
            className="p-2 bg-gray-800 hover:bg-gray-700 "
            aria-label="Previous Story"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() => setIndex((i) => (i + 1) % stories.length)}
            className="p-2 bg-gray-800 hover:bg-gray-700"
            aria-label="Next Story"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Responsive layout: stacked vertical on small, horizontal on lg */}
      <div className="flex flex-col lg:flex-row gap-8 items-end">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={story.image}
            alt={story.title}
            className="w-full h-80 object-cover "
          />
        </div>

        {/* Text content */}
        <div className="flex-1 flex flex-col justify-end h-80 w-full">
          <div className="mb-6 w-full lg:w-2/3">
            <h3 className="text-[27px] mb-8 font-normal leading-tight font-questrial">
              {story.title}
            </h3>
          </div>
          <a
            href={story.readMoreLink}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-normal"
          >
            Read More <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// 📌 Component: Testimonials
export const Testimonials: React.FC<{
  reviews?: CustomerReview[];
  overallRating?: number;
  totalStars?: number;
  companyName?: string;
  poweredByLogo?: string;
}> = ({
  reviews = defaultReviews,
  overallRating = 4.9,
  totalStars = 5,
  companyName = "Sria Infotech",
  poweredByLogo = "https://via.placeholder.com/120x30/6366f1/ffffff?text=Powered+By",
}) => {
  const [index, setIndex] = useState(0);
  const reviewPair = [reviews[index * 2], reviews[index * 2 + 1]].filter(
    Boolean
  );

  return (
    <div className="text-white mt-5 pt-5  mb-5 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-[61px] sm:text-[61px] font-normal font-questrial leading-tight sm:leading-tight leading-[0.9]">
          What Clients are Saying
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() =>
              setIndex(
                (i) =>
                  (i - 1 + Math.ceil(reviews.length / 2)) %
                  Math.ceil(reviews.length / 2)
              )
            }
            className="p-2 bg-gray-800 hover:bg-gray-700 "
            aria-label="Previous Reviews"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={() =>
              setIndex((i) => (i + 1) % Math.ceil(reviews.length / 2))
            }
            className="p-2 bg-gray-800 hover:bg-gray-700 "
            aria-label="Next Reviews"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      {/* Responsive flex: stacked on small, horizontal on lg */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Summary */}
        <div className="w-full lg:w-1/3 bg-black  p-6">
          <div className="text-start">
            <div className="text-[24px] font-bold mb-2">{overallRating}</div>
            <div className="flex gap-1 mb-4">
              {renderStars(overallRating, totalStars)}
            </div>
            <div className="text-lg font-normal mb-4">{companyName}</div>
            <img
              src={poweredByLogo}
              alt="Powered by"
              className="opacity-60 max-w-full"
            />
          </div>
        </div>

        {/* Reviews */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reviewPair.map((r) => (
            <div key={r.id} className="p-6 bg-gray-900 rounded-lg">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-[24px] font-bold">{r.rating}</span>
                <div className="flex gap-1">{renderStars(r.rating)}</div>
              </div>
              <p className="text-gray-300 text-[21px] leading-relaxed mb-4">
                {r.review}
              </p>
              <div className="text-white text-[16px] font-normal mb-1">
                {r.name}
              </div>
              <div className="text-gray-400 text-[16px] mb-3">{r.role}</div>
              {r.verified && (
                <div className="flex items-center gap-1 text-green-400 text-[14px]">
                  <Check className="w-3 h-3" />
                  Verified Review
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage wrapper with max-width container and responsive stacking
