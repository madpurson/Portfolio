import React from "react"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export function ContactPageBody() {
    return (
        <>  
            <div className="h-screen bg-[url('background.png')] bg-cover bg-center">
                {/* <img src="background.png" alt="" /> */}
                <h1>Contact.</h1>
                <div className="text-xs flex h-full">
                    {/* <PhoneIcon className=" text-blue-500" /> */}
                    <span>+639499750275</span>
                    {/* <EnvelopeIcon className=" text-blue-500" /> */}
                    <span>pelegrinompatrick@gmail.com</span>
                </div>
                <form action="post">
                    <input type="text" name="email" />
                    <input type="text" name="subject" />
                    <textarea name="message" />
                </form>
            </div>
            
        </>
    )
}