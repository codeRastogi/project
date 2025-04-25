import React, { useState, useRef } from 'react';
import capabilities from '../data/capabilities';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const groupByCategory = capabilities.reduce((acc, curr) => {
  if (!acc[curr.category]) acc[curr.category] = [];
  acc[curr.category].push(curr);
  return acc;
}, {});

const categories = Object.keys(groupByCategory);
const flatCapabilities = capabilities;

const ServiceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);

  const next = () => setActiveIndex((prev) => (prev + 1) % flatCapabilities.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + flatCapabilities.length) % flatCapabilities.length);

  const jumpToCategory = (category) => {
    const firstOfCategory = flatCapabilities.findIndex((item) => item.category === category);
    if (firstOfCategory !== -1) setActiveIndex(firstOfCategory);
  };

  const handleIndicatorClick = (index) => setActiveIndex(index);

  const dragProps = {
    drag: 'x',
    dragConstraints: { left: 0, right: 0 },
    onDragEnd: (e, info) => {
      if (info.offset.x > 100) prev();
      else if (info.offset.x < -100) next();
    },
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-10 text-white">
      <h2 className="text-center text-2xl font-semibold mb-6">70+ Offerings that allow you to Focus on your core tasks</h2>

      <div className="flex justify-center gap-6 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => jumpToCategory(category)}
            className="text-sm hover:underline"
          >
            {category}
          </button>
        ))}
      </div>

      <div className="relative flex items-center justify-center">
        <button onClick={prev} className="absolute left-0 z-10 p-2">
          <ChevronLeft size={32} />
        </button>

        <motion.div
          ref={containerRef}
          className="w-[300px] h-[360px] bg-black/70 rounded-xl p-6 text-center"
          {...dragProps}
        >
          <h3 className="text-xl font-bold mb-4">{flatCapabilities[activeIndex].title}</h3>
          <ul className="space-y-2">
            {flatCapabilities[activeIndex].items.map((item, idx) => (
              <li key={idx} className="bg-white/10 p-2 rounded-md">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <button onClick={next} className="absolute right-0 z-10 p-2">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {flatCapabilities.slice(0, 6).map((_, i) => (
          <button
            key={i}
            onClick={() => handleIndicatorClick(i)}
            className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm mb-2">Send us your requirements, and get a response within 10 minutes</p>
        <p className="text-xs text-gray-400">That's how we keep ourselves Faster than the Fastest</p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
          GET IN TOUCH
        </button>
      </div>
    </div>
  );
};

export default ServiceSection;
