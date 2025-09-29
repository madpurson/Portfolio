import React from "react"
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export function ContactPageBody() {
    return (
        <>
            <img src="background.png" alt="" />
            <h1>Contact.</h1>
            <div>
                <PhoneIcon />
                <span>+639499750275</span>
                <EnvelopeIcon />
                <span>pelegrinompatrick@gmail.com</span>
            </div>
            <form action="post">
                <input type="text" name="email" />
                <input type="text" name="subject" />
                <textarea name="message" />
            </form>
        </>
    )
}