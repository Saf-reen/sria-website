import React from "react";

// You can use these Unsplash images directly with Tailwind's arbitrary background class.
const IMAGES = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1100&q=80", // Forest
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1100&q=80", // Mountains
  "https://images.unsplash.com/photo-1460411882531-6f5aba0b43f0?auto=format&fit=crop&w=1100&q=80", // Beach
];

// Parallax section as a reusable component
function ParallaxSection({
  bgImage,
  children,
}: {
  bgImage: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`
        relative h-[80vh] flex items-center justify-center mb-16
        bg-fixed bg-center bg-cover
        before:absolute before:inset-0 before:bg-black before:bg-opacity-30 before:z-0
      `}
      style={{ backgroundImage: `url('${bgImage}')` }}
    >
      <div className="relative z-10 px-8 py-6 rounded-xl bg-white bg-opacity-30 backdrop-blur-md text-center shadow-xl">
        {children}
      </div>
    </section>
  );
}

export default function BeautifulParallaxTailwind() {
  return (
    <main className="flex flex-col items-stretch min-h-screen bg-gray-100">
      <ParallaxSection bgImage={IMAGES[0]}>
        <h1 className="text-white text-5xl font-extrabold drop-shadow-lg mb-2">
          Stunning Parallax Section
        </h1>
        <p className="text-xl text-white font-medium">
          Scroll down for more magic.
        </p>
      </ParallaxSection>

      <ParallaxSection bgImage={IMAGES[1]}>
        <h2 className="text-white text-4xl font-bold mb-2">
          Parallax with Tailwind CSS
        </h2>
        <p className="text-lg text-white">
          Fully responsive, pure utility styling.
        </p>
      </ParallaxSection>

      <ParallaxSection bgImage={IMAGES[2]}>
        <h2 className="text-white text-4xl font-bold mb-2">Smooth & Modern</h2>
        <p className="text-lg text-white">Easy to customize and extend.</p>
      </ParallaxSection>

      {/* Spacer for additional scroll */}
      <div className="h-64 flex items-center justify-center">
        <p className="text-2xl text-gray-700 font-semibold">
          Parallax effect demo with React + Tailwind CSS
        </p>
      </div>
    </main>
  );
}
