import React from "react";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import EventCard from "@/components/EventCard";

import eventsPageImage from "../../public/events_page_image.png";
import build4GoodHackathonPhoto from "../../public/build_4_good_hackathon_photo.webp";
import easterEggHuntPhoto from "../../public/easter_egg_hunt_social_image.webp"
import capitalOneSpeakersPhoto from "../../public/capital_one_speakers.webp"
import notionEventPhoto from "../../public/notion_event_image.webp"
import paycomTechnicalInterviewPhoto from "../../public/paycom_technical_interview_photo.webp"

const EventsPage: React.FC = () => {
    const events = [{
        title: "Build4Good Hackathon",
        description: "Event Description",
        link: "/",
        photo: build4GoodHackathonPhoto
    }, {
       title: "Easter Egg Hunt Social",
       description: "Event Description",
       link: "/",
       photo: easterEggHuntPhoto
    },{
        title: "CapitalOne Industry Speakers",
        description: "Event Description",
        link: "/",
        photo: capitalOneSpeakersPhoto
    },{
        title: "TACS + Notion Event",
        description: "Event Description",
        link: "/",
        photo: notionEventPhoto
    },{
        title: "Technical Interview Workshop With Paycom",
        description: "Event Description",
        link: "/",
        photo: paycomTechnicalInterviewPhoto
    }]

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar selectedPage="events" />

            <div className="flex-grow pt-28 max-w-7xl mx-auto px-4">
                <div className="flex">
                    <div className="flex-1 p-4 space-y-8">
                        <h2 className="text-4xl font-bold">Events</h2>

                        <p className="text-gray-500">
                            We host industry professionals and academic experts as guest speakers throughout the semester, as well as executing our own workshops and events to cover necessary skills to navigate the industry. Each meeting provides unique opportunities for networking and practical learning, and our social events foster a supportive and close community.
                        </p>

                        <p className="text-gray-500">
                            In the past we have collaborated with top tech companies and startups in order to give the most industry exposure to students. Take a look at some of the cool stuff we’ve been up to!
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="mx-auto mb-4">
                            <Image src={eventsPageImage} alt={`events page image`} layout="contain" objectFit="contain" />
                        </div>
                    </div>
                </div>

                <div className="my-20 space-y-12">
                    {events.map((elm, index) => (
                        <div key={index}>
                            <EventCard event={elm} />
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default EventsPage;