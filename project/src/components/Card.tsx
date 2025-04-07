import React from 'react';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export function Card({ title, description, imageUrl, link }: CardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
}