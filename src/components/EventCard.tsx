import React from 'react';
import Image from 'next/image';

interface Props {
    event: {
        title: string,
        description: string,
        link: string
        photo: any
    }
}

const EventCard: React.FC<Props> = ({ event }) => {
    return (
        <div className="border-2 border-primary-light border-r-4 border-b-4 rounded-2xl py-6 px-8 w-full bg-white flex">
            {/* Left column: Text and icons */}
            <div className="w-1/2 flex flex-col justify-between p-4">
                <div className="space-y-4">
                    <h2 className="text-primary font-semibold text-xl">{event.title}</h2>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
                <div className="flex space-x-4 mt-4">
                    <a href={event.link} target='_blank' className="bg-primary-light border-2 border-b-4 border-r-4 border-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-primary">Learn More</a>
                </div>
            </div>

            {/* Right column: Photo */}
            <div className="relative w-1/2 h-full flex flex-col items-end">
                <Image
                    src={event.photo}
                    alt={`${event.title} photo`}
                    layout="contain"
                    objectFit="contain"
                    className="rounded-xl max-w-96"
                />
            </div>
        </div>
    )
};

export default EventCard;