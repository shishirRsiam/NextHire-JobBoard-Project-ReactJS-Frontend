import { useState, useEffect } from "react";

const images = [
    "https://news.umanitoba.ca/wp-content/uploads/2021/11/Career-Month-3-UM-Today-.png",
    "https://www.talentworld.com/sites/talent/files/styles/optimized/public/2020-01/What-not-to-wear_.jpg?itok=nFJuElio",
    "https://imdiversity.com/wp-content/uploads/37e0622c-67c0-4119-b40c-948148761c70.jpeg",
    "https://www.robertwalters.ch/content/dam/robert-walters-redesign/global/images/resource-solutions/935x530/content-images/RS_RW-C405-smiling%20colleagues%20shake%20hands-935x530px.jpg",
];
export default function Slideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Auto-switch every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="a w-full max-w-7xl mx-auto mt-10">
            {/* Image Slide */}
            <div className="overflow-hidden rounded-lg shadow-2xl relative">
                <img
                    src={images[currentIndex]}
                    alt="Slide"
                    className="w-full h-auto object-cover transition-transform duration-500 ease-in-out transform scale-105 hover:scale-110"
                />

                {/* Overlay Text */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h1 className="text-3xl font-bold mb-2">Get the job you deserve!</h1>
                    <p className="text-lg">We have more than 1400 jobs waiting for you!</p>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
                <button
                    onClick={prevSlide}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                >
                    ❮ Previous
                </button>
                <button
                    onClick={nextSlide}
                    className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700 transition duration-300"
                >
                    Next ❯
                </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-400"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
}