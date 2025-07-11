import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Star,
  Check,
} from "lucide-react";

// Types for props
interface CustomerStory {
  id: number;
  image: string;
  title: string;
  readMoreLink: string;
}

interface CustomerReview {
  id: number;
  name: string;
  role: string;
  rating: number;
  review: string;
  verified: boolean;
}

interface CustomerStoriesTestimonialsProps {
  customerStories: CustomerStory[];
  customerReviews: CustomerReview[];
  overallRating: number;
  totalStars: number;
  companyName: string;
  poweredByLogo: string;
}

// Default data
const defaultCustomerStories: CustomerStory[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
    title: "Transforming Business Operations With Innovative Solutions",
    readMoreLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
    title: "Digital Innovation Success Through Strategic Partnership",
    readMoreLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
    title: "Scaling New Heights in Technology Excellence",
    readMoreLink: "#",
  },
];

const defaultCustomerReviews: CustomerReview[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    rating: 5,
    review:
      "Outstanding service and incredible results. The team's dedication to excellence is evident in every aspect of their work. Highly recommend their services to anyone looking for top-tier solutions.",
    verified: true,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    rating: 4.5,
    review:
      "Professional, efficient, and results-driven. They delivered exactly what was promised and more. The communication throughout the project was excellent and the final outcome exceeded expectations.",
    verified: true,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    rating: 5,
    review:
      "Exceptional quality and attention to detail. The team's expertise shines through in every deliverable. Working with them has been a game-changer for our business operations and growth strategy.",
    verified: true,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder, StartupX",
    rating: 4.5,
    review:
      "Innovative solutions and outstanding support. The technical expertise and strategic guidance provided has been invaluable to our company's success and continued growth in the market.",
    verified: true,
  },
];

const CustomerStoriesTestimonials: React.FC<
  CustomerStoriesTestimonialsProps
> = ({
  customerStories = defaultCustomerStories,
  customerReviews = defaultCustomerReviews,
  overallRating = 4.9,
  totalStars = 5,
  companyName = "Sria Infotech",
  poweredByLogo = "https://via.placeholder.com/120x30/6366f1/ffffff?text=Powered+By",
}) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const nextStory = () => {
    setCurrentStoryIndex((prev) => (prev + 1) % customerStories.length);
  };

  const prevStory = () => {
    setCurrentStoryIndex(
      (prev) => (prev - 1 + customerStories.length) % customerStories.length
    );
  };

  const nextReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev + 1) % Math.floor(customerReviews.length / 2)
    );
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) =>
        (prev - 1 + Math.floor(customerReviews.length / 2)) %
        Math.floor(customerReviews.length / 2)
    );
  };

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

  const currentStory = customerStories[currentStoryIndex];
  const currentReviewPair = [
    customerReviews[currentReviewIndex * 2],
    customerReviews[currentReviewIndex * 2 + 1],
  ].filter(Boolean);

  return (
    <div className="bg-black min-h-screen mb-20 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Customer Stories Section */}
        <div className="mt-20 mb-16">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-white text-[61px] font-normal"
              style={{
                fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
              }}
            >
              Customer Stories
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevStory}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextStory}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Story Content */}
          <div className="flex gap-8 items-end">
            <div className="flex-shrink-0 w-1/2">
              <img
                src={currentStory.image}
                alt={currentStory.title}
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 flex flex-col justify-end h-80">
              <div className="mb-6 w-2/3">
                <h3
                  className="text-white text-[27px] font-normal mb-8 leading-tight"
                  style={{
                    fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
                  }}
                >
                  {currentStory.title}
                </h3>
              </div>
              <a
                href={currentStory.readMoreLink}
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-normal transition-colors"
                style={{
                  fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
                }}
              >
                Read More <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Client Testimonials Section */}
        <div className="mt-20 pt-20">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2
              className="text-white text-[61px] font-normal"
              style={{
                fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
              }}
            >
              What Clients are Saying
            </h2>
            <div className="flex gap-2">
              <button
                onClick={prevReview}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          {/* Testimonials Content */}
          <div className="flex gap-8">
            {/* Overall Rating Block */}
            <div className="flex-shrink-0 w-1/3 bg-black rounded-lg p-6">
              <div className="text-center flex flex-col  justify-start items-start">
                <div className="text-[24px] font-bold text-white mb-2">
                  {overallRating}
                </div>
                <div className="flex justify-center gap-1 mb-4">
                  {renderStars(overallRating, totalStars)}
                </div>
                <div
                  className="text-white text-lg font-normal mb-4"
                  style={{
                    fontFamily: "Questrial, Arial, Verdana, Tahoma, sans-serif",
                  }}
                >
                  {companyName}
                </div>
                <img
                  src={poweredByLogo}
                  alt="Powered by"
                  className="mx-auto opacity-60"
                />
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="flex-1 grid grid-cols-2 gap-6">
              {currentReviewPair.map((review) => (
                <div key={review.id} className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    <span className="text-white text-[24px] font-bold">
                      {review.rating}
                    </span>
                    <div className="flex text-[20px] gap-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <p
                    className="text-gray-300 text-[21px]leading-relaxed mb-4"
                    style={{
                      fontFamily:
                        "Questrial, Arial, Verdana, Tahoma, sans-serif",
                    }}
                  >
                    {review.review}
                  </p>
                  <div
                    className="text-white font-normal text-[16px] mb-1"
                    style={{
                      fontFamily:
                        "Questrial, Arial, Verdana, Tahoma, sans-serif",
                    }}
                  >
                    {review.name}
                  </div>
                  <div
                    className="text-gray-400 text-[16px] mb-3"
                    style={{
                      fontFamily:
                        "Questrial, Arial, Verdana, Tahoma, sans-serif",
                    }}
                  >
                    {review.role}
                  </div>
                  {review.verified && (
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
      </div>
    </div>
  );
};

export default CustomerStoriesTestimonials;
