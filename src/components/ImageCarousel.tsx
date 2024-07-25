import React from 'react';
import Carousel from "react-multi-carousel";
import Image from 'next/image';
import "react-multi-carousel/lib/styles.css";

import CarouselImage1 from "../../public/carousel_image_1.png";
import CarouselImage2 from "../../public/carousel_image_2.png";
import CarouselImage3 from "../../public/carousel_image_3.png";
import CarouselImage4 from "../../public/carousel_image_4.png";
import CarouselImage5 from "../../public/carousel_image_5.png";
import CarouselImage6 from "../../public/carousel_image_6.png";
import CarouselImage7 from "../../public/carousel_image_7.png"; // Fixed the image path

const images = [
    CarouselImage1,
    CarouselImage2,
    CarouselImage3,
    CarouselImage4,
    CarouselImage5,
    CarouselImage6,
    CarouselImage7,
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

const ImageCarousel = () => {
    return (
        <div className="w-full overflow-hidden">
            <Carousel responsive={responsive} centerMode={true} ssr={true} swipeable={true} draggable={false}>
                {images.map((src, index) => (
                    <div key={index} className="flex justify-center mx-2"> {/* Add margin for spacing */}
                        <div className="max-w-xs mx-auto"> {/* Set max width for inner div */}
                            <Image 
                                src={src} 
                                alt={`Carousel Image ${index + 1}`} 
                                layout="intrinsic" 
                                width={300} // Adjust width for smaller size
                                height={200} // Adjust height for smaller size
                                className="rounded-lg" // Add any additional styling you want
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
