import React from 'react'
import Link from 'next/link'
const HomepageIntro = () => {
    return (
        <section className="w-full flex flex-col md:flex-row-reverse  items-center justify-center px-6 md:px-12 lg:px-20 py-10">
            {/* Image */}
            <div className="flex justify-center md:w-1/2">
                <img
                    className="h-64 md:h-96 w-auto object-contain"
                    src="/robot.png"
                    alt="MedBotics robot"
                />
            </div>

            {/* Text */}
            <main className="text-white mt-6 md:mt-0 md:ml-12 md:w-1/2">
                <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                    Welcome to <span className="text-primary-500">MedBotics</span> 🩺
                </h1>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-justify md:text-left">
                    MedBotics is your AI-powered medical assistant built to simplify the way
                    doctors manage patient information. With a natural voice and chat interface,
                    MedBotics helps doctors create new patient records, access medical history,
                    and organize prescriptions — all in a matter of seconds.
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-justify md:text-left">
                    No more manual data entry. No more time wasted. Just fast, accurate, and
                    intelligent assistance that lets doctors focus on what truly matters:
                    <span className="font-semibold text-primary-400"> patient care.</span>
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-justify md:text-left">
                    ✨ With MedBotics, the future of healthcare starts at your fingertips.
                </p>
                <Link href='/signup'>
                <button className=" my-4 border-2 border-primary-500 py-1 px-6 rounded-2xl  hover:bg-primary-600 transition">
                    Get Started 
                </button>
                </Link>
            </main>
        </section>
    )
}

export default HomepageIntro
