import Link from "next/link";
import { FaDiscord, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="h-52 w-full rounded-t-3xl mt-auto flex flex-col text-white">
            <div className="bg-primary-light bg-secondary-light flex flex-col items-center justify-center h-2/3 space-y-4">
                <div className="flex text-2xl gap-x-8 text-primary">
                    <a href="https://discord.com/" target="_blank" className="p-2 bg-white rounded-full cursor-pointer">
                        <FaDiscord />
                    </a>
                    <a href="https://www.instagram.com/tacstamu/" target="_blank" className="p-2 bg-white rounded-full cursor-pointer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/company/tamucs/" target='_blank' className="p-2 bg-white rounded-full cursor-pointer">
                        <FaLinkedinIn />
                    </a>
                </div>

                <div className="flex gap-x-8">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/join"}>Join</Link>
                    <Link href={"/about"}>About</Link>
                    <Link href={"/events"}>Events</Link>
                    <Link href={"/contact"}>Contact</Link>
                </div>
            </div>
            <div className="second-row bg-blue-500 flex items-center justify-center h-1/3">
                <small className="font-thin">Texas A&M Computing Society © 2024</small>
            </div>
        </footer>
    );
};

export default Footer;