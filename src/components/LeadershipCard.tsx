// components/LeadershipCard.tsx
import React from "react";
import { Mail, Linkedin } from "lucide-react";

interface LeadershipCardProps {
  name: string;
  designation: string;
  description: string;
  image: string;
  linkedinUrl?: string;
  email?: string;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({
  name,
  designation,
  description,
  image,
  linkedinUrl,
  email,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-start gap-6 transition hover:shadow-xl">
      {/* Image on the left */}
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border border-gray-300"
      />

      {/* Text content on the right */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-orange-600 font-medium mt-1">
          {designation}
        </p>
        <p className="text-sm text-gray-600 mt-2 max-w-xl">{description}</p>

        <div className="flex gap-4 mt-4">
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600"
            >
              <Linkedin size={18} />
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-gray-700"
            >
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeadershipCard;
