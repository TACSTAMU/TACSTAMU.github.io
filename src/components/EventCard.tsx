import React from 'react';
import Image from 'next/image';

interface Props {
    icon: any;
    title: string;
    description: string;
}

const EventCard: React.FC<Props> = ({ icon, title, description }) => (
    <div className="border-2 border-primary-light border-r-4 border-b-4 rounded-2xl p-10 w-64 text-center">
        <div className="relative w-28 h-28 mx-auto mb-4">
            <Image src={icon} alt={`${title} icon`} layout="fill" objectFit="contain" />
        </div>
        <h2 className="text-primary font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

export default EventCard;