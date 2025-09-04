'use client'
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
           <div className="flex flex-col text-center gap-2 py-2 ">
            <h1 className="text-white">Made by samanvaya with 💊 </h1>
            <div className="flex justify-center space-x-2 text-white ">
                <FaGithub size={20} className=" hover:text-primary-400"/>
                <FaTwitter size={20} className=" hover:text-primary-400"/>
                <FaLinkedin size={20} className=" hover:text-primary-400"/>

            </div>

           </div>
        </footer>
    );
};

export default Footer;
