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
        description: "“Join us for an exciting one or two-day hackathon-style event where engineering organizations and university students from diverse fields converge to tackle real-world challenges. Build4Good aims to foster collaboration, innovation, and the transformative power of technology to create solutions that make a positive impact.”",
        link: "/",
        photo: build4GoodHackathonPhoto
    }, 
    {
       title: "Easter Egg Hunt Social",
       description: "“Easter Egg Hunt at Aggie Park!! Gift card prize for the most eggs, with a headphones prize if you find one lucky egg. Free boba, courtesy of the DoorDash Campus Launchers.”",
       link: "/",
       photo: easterEggHuntPhoto
    },{
        title: "CapitalOne Industry Speakers",
        description: "“Perfect your elevator pitch and interview skills with direction from Capital One software engineers who are Texas A&M alumni! Free pizza and club shirts!”",
        link: "/",
        photo: capitalOneSpeakersPhoto
    },{
        title: "TACS + Notion Event",
        description: "“Get ready for a tech talk with a Notion software engineer and MIT alumni who will go over a day in the life of a software engineer at Notion and how she leverages Notion in her daily work routine. Q&A session and free food, courtesy of the Notion Campus Launchers.”",
        link: "/",
        photo: notionEventPhoto
    },{
        title: "Technical Interview Workshop With Paycom",
        description: "“Learn how to make the most out of your career fair experience with Paycom Talent Acquisition!”",
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