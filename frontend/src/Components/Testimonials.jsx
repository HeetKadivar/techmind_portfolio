import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
    {
        id: 6,
        name: 'Alice',
        role: 'Data Scientist',
        avatar: 'https://i.pravatar.cc/150?img=23',
        review: `Absolutely mind-blowing! From graphics to gameplay, it's a virtual masterpiece. I lost track of time in the immersive experience.`,
    },
    {
        id: 0,
        name: 'Bob',
        role: 'Architect',
        avatar: 'https://i.pravatar.cc/150?img=13',
        review: `A hidden gem for tech enthusiasts. The selection is vast, and the ease of discovering new tech is addictively delightful!`,
    },
    {
        id: 2,
        name: 'Charlie',
        role: 'DevOps Engineer',
        avatar: 'https://i.pravatar.cc/150?img=8',
        review: `Results speak louder than words. I've never seen progress like this. The workflows are challenging but oh-so-rewarding. Kudos!`,
    },
    {
        id: 3,
        name: 'Diana',
        role: 'Product Manager',
        avatar: 'https://i.pravatar.cc/150?img=41',
        review: `It's very easy to customize and categorize lists for new projects/task categories.`,
    },
    {
        id: 13,
        name: 'Ethan',
        role: 'Software Engineer',
        avatar: 'https://i.pravatar.cc/150?img=57',
        review: `An adventure for the curious mind. Every click led to a new discovery. It's like a digital journey through the wonders of the internet.`,
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slideDirection, setSlideDirection] = useState('right');

    const handleSlide = (direction) => {
        if (isAnimating) return;
        
        setIsAnimating(true);
        setSlideDirection(direction);
        const totalSlides = REVIEWS.length;
        
        if (direction === 'left') {
            setCurrentIndex((prevIndex) => 
                (totalSlides + prevIndex - 1) % totalSlides
            );
        } else {
            setCurrentIndex((prevIndex) => 
                (totalSlides + prevIndex + 1) % totalSlides
            );
        }

        setTimeout(() => {
            setIsAnimating(false);
        }, 500);
    };

    const slideAnimationClass = isAnimating
        ? `${slideDirection === 'left' ? '-translate-x-full opacity-0' : 'translate-x-full opacity-0'}`
        : 'translate-x-0 opacity-100';

    return (
        <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center justify-center px-4 py-16">
            <div className="relative w-full max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="inline-block text-blue-600 font-medium mb-4 px-4 py-2 bg-blue-50 rounded-full">Testimonials</span>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
                    <p className="text-gray-600 text-lg">Join thousands of satisfied customers who trust our services</p>
                </div>

                <div className="relative">
                    {/* Navigation Buttons */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10">
                        <button
                            onClick={() => handleSlide('left')}
                            className="group hover:-translate-x-1 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10">
                        <button
                            onClick={() => handleSlide('right')}
                            className="group hover:translate-x-1 bg-white hover:bg-blue-50 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                        </button>
                    </div>

                    {/* Testimonial Card */}
                    <div className="bg-white rounded-3xl shadow-2xl mx-auto max-w-3xl transform hover:scale-[1.02] transition-all duration-300">
                        <div className={`transition-all duration-500 transform ${slideAnimationClass} p-8 lg:p-12`}>
                            <blockquote className="text-gray-700 text-2xl lg:text-3xl leading-relaxed mb-12">
                                {REVIEWS[currentIndex].review}
                            </blockquote>
                            
                            <div className="flex items-center gap-6 border-t border-gray-100 pt-8">
                                <div className="relative group">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300" />
                                    <img 
                                        src={REVIEWS[currentIndex].avatar}
                                        alt={REVIEWS[currentIndex].name}
                                        className="relative w-16 h-16 object-cover rounded-full ring-4 ring-white"
                                    />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                                        {REVIEWS[currentIndex].name}
                                    </h3>
                                    <p className="text-gray-500">{REVIEWS[currentIndex].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center gap-3 mt-10">
                        {REVIEWS.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`transition-all duration-300 ${
                                    index === currentIndex 
                                        ? 'w-8 bg-blue-500'
                                        : 'w-2 bg-gray-200 hover:bg-blue-200'
                                } h-2 rounded-full hover:scale-110`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;