import React from 'react';
import { FaStar, FaClock, FaRunning, FaLock } from 'react-icons/fa'; // Import specific icons from React Icons

const SpecialCards = () => {
  const cards = [
    {
      frontIcon: <FaStar className="text-3xl" />,
      title: "Consistently High Quality",
      backContent:
        "Technology has brought us to the threshold of a variety of high-quality services. However, as a team of ex-consultants from top consulting firms, we have constantly found",
    },
    {
      frontIcon: <FaClock className="text-3xl" />,
      title: "Round the Clock Availability",
      backContent:
        "Oftentimes our new clients ask us how it is that our service experts are always available, no matter the time of day, day of the week, or season of the year. How do we fulfill our promise",
    },
    {
      frontIcon: <FaRunning className="text-3xl" />,
      title: "Faster than the Fastest",
      backContent:
        "Rome may not have been built in a day, but what about your presentation? What about the audio-visual content you promised your client for the next meeting? In a competitive market",
    },
    {
      frontIcon: <FaLock className="text-3xl" />,
      title: "Information Security",
      backContent:
        "ISO 27001:2022 comes within the ISO 27000 family, which is dedicated to the standardization of Information Security Management Systems (ISMS). There are quite a few standards",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group w-72 h-44"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full h-full transition-transform duration-700 group-hover:rotate-y-180"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front Side */}
            <div
              className="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl shadow-lg text-white flex flex-col items-center justify-center"
              style={{ backfaceVisibility: "hidden" }}
            >
              <div className="text-3xl mb-2">{card.frontIcon}</div>
              <h3 className="text-center text-lg font-semibold px-4">
                {card.title}
              </h3>
              <div className="absolute top-2 right-2 text-white text-lg">
                ↗️
              </div>
            </div>

            {/* Back Side */}
            <div
              className="absolute w-full h-full bg-gradient-to-b from-blue-900 to-blue-950 rounded-2xl shadow-lg text-white flex flex-col justify-center p-4"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm">{card.backContent}</p>
              <a
                href="#"
                className="mt-2 text-white underline text-sm font-semibold"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecialCards;
