import React from "react";
import Image from "next/image";

import linkedinIcon from "../../public/linkedin_icon.png"
import mailIcon from "../../public/mail_icon.png"

interface Props {
    officer: {
        name: string
        title: string
        photo?: any
        linkedinLink?: string
        emailLink?: string
    }
}

const OfficerCard: React.FC<Props> = ({ officer }) => {
    return (
        <div className="border-2 border-primary-light border-r-4 border-b-4 rounded-2xl p-10 px-4 w-64 text-center space-y-6">
            <div className="relative w-28 h-28 mx-auto mb-4">
                <Image src={officer.photo} alt={`${officer.name} image`} layout="fill" objectFit="contain" />
            </div>

            <div className="space-y-2">
                <h2 className="text-primary font-semibold text-xl">{officer.name}</h2>

                <p className="text-gray-600 text-sm">{officer.title}</p>
            </div>

            <div className="flex justify-center space-x-4">
                <a href={officer.linkedinLink} target="_blank" className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <Image
                        src={linkedinIcon}
                        alt="LinkedIn"
                        width={18}
                        height={18}
                    />
                </a>
                <a href={`mailto:${officer.emailLink}`} className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors">
                    <Image
                        src={mailIcon}
                        alt="Email"
                        width={18}
                        height={18}
                    />
                </a>
            </div>
        </div>
    )
}


export default OfficerCard;