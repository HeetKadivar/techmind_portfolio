import React, { useState, useEffect } from 'react';

const boxes = [
  { 
    id: 1, 
    title: 'Mountain View', 
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&h=300'
  },
  { 
    id: 2, 
    title: 'Ocean Waves', 
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=300&h=300'
  },
  { 
    id: 3, 
    title: 'Forest Path', 
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=300&h=300'
  },
  { 
    id: 4, 
    title: 'Desert Dunes', 
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=300&h=300'
  },
  { 
    id: 5, 
    title: 'Northern Lights', 
    image: 'https://images.unsplash.com/photo-1483347756197-71ef80e95f73?auto=format&fit=crop&w=300&h=300'
  },
];

function TechSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % boxes.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % boxes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + boxes.length) % boxes.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Technology Stack
          <div className="h-1 w-48 bg-black mx-auto mt-4 relative">
            <div className="absolute -top-[2px] left-1/3 right-1/3 h-2 bg-black"></div>
          </div>
        </h2>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {boxes.map((box) => (
              <div
                key={box.id}
                className="w-full flex-shrink-0 flex flex-col items-center justify-center p-8"
              >
                <div className="w-64 h-64 bg-white border-2 border-gray-200 rounded-lg shadow-lg mb-6 overflow-hidden group hover:border-blue-500 transition-all">
                  <img 
                    src={box.image} 
                    alt={box.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{box.title}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 pb-4">
            {boxes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechSlider;