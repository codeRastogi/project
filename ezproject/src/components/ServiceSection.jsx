import React, { useState, useRef, useEffect } from 'react';
import capabilities from '../data/capabilities';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BriefForm from './BriefForm';


// Group capabilities by their category
const groupByCategory = capabilities.reduce((acc, curr) => {
    if (!acc[curr.category]) acc[curr.category] = [];
    acc[curr.category].push(curr);
    return acc;
}, {});

// Extract all category names
const categories = Object.keys(groupByCategory);

const ServiceSection = () => {
    const [showForm, setShowForm] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // index of currently displayed capability card
    const containerRef = useRef(null);
    const [categoryIndex, setCategoryIndex] = useState(0); // index of current active category

    // Function to update the activeIndex to the first item of the selected category
    const updateActiveToCategory = (index) => {
        const category = categories[index];
        const firstOfCategory = capabilities.findIndex((item) => item.category === category);
        if (firstOfCategory !== -1) setActiveIndex(firstOfCategory);
    };

    // Whenever categoryIndex changes, update activeIndex to show the first capability in that category
    useEffect(() => {
        updateActiveToCategory(categoryIndex);
    }, [categoryIndex]);

    // Go to next capability card
    const next = () => {
        const newIndex = (activeIndex + 1) % capabilities.length;
        setActiveIndex(newIndex);
        const category = capabilities[newIndex].category;
        const newCategoryIndex = categories.indexOf(category);
        if (newCategoryIndex !== -1) setCategoryIndex(newCategoryIndex);
    };

    // Go to previous capability card
    const prev = () => {
        const newIndex = (activeIndex - 1 + capabilities.length) % capabilities.length;
        setActiveIndex(newIndex);
        const category = capabilities[newIndex].category;
        const newCategoryIndex = categories.indexOf(category);
        if (newCategoryIndex !== -1) setCategoryIndex(newCategoryIndex);
    };

    // Set the activeIndex when an indicator is clicked
    const handleIndicatorClick = (index) => setActiveIndex(index);

    // Handle drag gestures for carousel navigation
    const dragProps = {
        drag: 'x',
        dragConstraints: { left: 0, right: 0 },
        onDragEnd: (e, info) => {
            if (info.offset.x > 100) prev();
            else if (info.offset.x < -100) next();
        },
    };

    // Navigate to previous category
    const handleCategoryLeft = () => {
        setCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    // Navigate to next category
    const handleCategoryRight = () => {
        setCategoryIndex((prev) => (prev + 1) % categories.length);
    };

    // Get the visible 3 categories (previous, current, next)
    const visibleCategories = [
        categories[(categoryIndex - 1 + categories.length) % categories.length],
        categories[categoryIndex],
        categories[(categoryIndex + 1) % categories.length],
    ];

    return (
        <div className="relative w-full max-w-4xl mx-auto px-4 py-10 text-white">
            <h2 className="text-center text-2xl font-semibold mb-6">70+ Offerings that allow you to Focus on your core tasks</h2>

            {/* Category selector carousel */}
            <div className="flex items-center mb-10 relative justify-between">
                {visibleCategories.map((category, idx) => (
                    <button
                        key={category}
                        onClick={() => {
                            const newIndex = categories.indexOf(category);
                            setCategoryIndex(newIndex);
                        }}
                        className={`transition-all duration-300 ${idx === 1 ? 'text-white text-2xl font-bold' : 'text-gray-400 opacity-50'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Capability card with navigation */}
            <div className="relative flex items-center justify-center">
                <button onClick={prev} className="absolute left-0 z-10 p-2">
                    <ChevronLeft size={32} />
                </button>

                <motion.div
                    onClick={prev}
                    ref={containerRef}
                    className="w-full sm:w-[340px] h-[400px] bg-gradient-to-br from-gray-900 to-black/80 text-white rounded-xl p-6 shadow-xl border border-white/10 transform translate-x-[70%] opacity-20"
                    {...dragProps}
                >
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-center mb-2 border-b border-white/20 pb-2">
                        {capabilities[(activeIndex - 1 + capabilities.length) % capabilities.length].title}
                    </h3>

                    {/* Grid of Items */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {capabilities[(activeIndex - 1 + capabilities.length) % capabilities.length].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 text-sm text-center rounded-lg p-3 flex flex-col items-center justify-center hover:bg-white/20 transition duration-200"
                            >
                                {/* Simulated Icon (e.g. initials) */}
                                <div className="bg-white text-black font-bold rounded-md w-10 h-10 flex items-center justify-center mb-1">
                                    {item.slice(0, 2).toUpperCase()}
                                </div>
                                {/* Label */}
                                <span className="text-xs font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    ref={containerRef}
                    className="w-full sm:w-[340px] h-[400px] bg-gradient-to-br from-gray-900 to-black/80 text-white rounded-xl p-6 shadow-xl border border-white/10 z-10"
                    {...dragProps}
                >
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-center mb-2 border-b border-white/20 pb-2">
                        {capabilities[activeIndex].title}
                    </h3>

                    {/* Grid of Items */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {capabilities[activeIndex].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 text-sm text-center rounded-lg p-3 flex flex-col items-center justify-center hover:bg-white/20 transition duration-200"
                            >
                                {/* Simulated Icon (e.g. initials) */}
                                <div className="bg-white text-black font-bold rounded-md w-10 h-10 flex items-center justify-center mb-1">
                                    {item.slice(0, 2).toUpperCase()}
                                </div>
                                {/* Label */}
                                <span className="text-xs font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    onClick={next}
                    ref={containerRef}
                    className="w-full sm:w-[340px] h-[400px] bg-gradient-to-br from-gray-900 to-black/80 text-white rounded-xl p-6 shadow-xl border border-white/10 opacity-20  transform translate-x-[-70%]"
                    {...dragProps}
                >
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-center mb-2 border-b border-white/20 pb-2">
                        {capabilities[(activeIndex + 1) % capabilities.length].title}
                    </h3>

                    {/* Grid of Items */}
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        {capabilities[(activeIndex + 1) % capabilities.length].items.map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/10 text-sm text-center rounded-lg p-3 flex flex-col items-center justify-center hover:bg-white/20 transition duration-200"
                            >
                                {/* Simulated Icon (e.g. initials) */}
                                <div className="bg-white text-black font-bold rounded-md w-10 h-10 flex items-center justify-center mb-1">
                                    {item.slice(0, 2).toUpperCase()}
                                </div>
                                {/* Label */}
                                <span className="text-xs font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <button onClick={next} className="absolute right-0 z-10 p-2">
                    <ChevronRight size={32} />
                </button>
            </div>

            {/* Indicator buttons below the carousel */}
            <div className="flex justify-center mt-6 gap-2">
                {capabilities.slice(0, 6).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleIndicatorClick(i)}
                        className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-white' : 'bg-gray-500'}`}
                    />
                ))}
            </div>

            {/* CTA Section */}
            <div className="mt-8 text-center">
                <p className="text-sm mb-2">Send us your requirements, and get a response within 10 minutes</p>
                <p className="text-xs text-gray-400">That's how we keep ourselves Faster than the Fastest</p>
                <button 
                onClick={() => setShowForm(true)}
                className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                    GET IN TOUCH
                </button>
            </div>
            {showForm && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden shadow-lg">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-2 text-black bg-gray-200 hover:bg-gray-300 rounded-full p-1 z-10"
                        >
                            ×
                        </button>
                        <BriefForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServiceSection;
