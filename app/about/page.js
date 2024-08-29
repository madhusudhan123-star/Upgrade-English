"use client";
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import React, { useState } from 'react';
import Image from 'next/image';

const Page = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            <div className='overflow-x-hidden'>
                <div className='w-screen overflow-y-hidden h-screen xsm:h-[50vh] sm:h-[50vh] md:h-[50vh] lg:h-screen xl:h-screen 2xl:h-screen pl-10 pr-16 bg-[#FFE32B]'>
                    <Navbar />
                    <div className='w-full h-full flex items-end justify-start cursor-default'>
                        <h1 className='font-bold text-4xl mb-32'>Meet Our Creator</h1>
                    </div>
                </div>
                <div className="w-full max-w-sm mx-auto">
                    <div
                        className="relative w-full aspect-[3/4] cursor-pointer overflow-hidden"
                        onClick={toggleExpand}
                    >
                        <Image
                            src="/util/img/developer.jpg"
                            alt="Madhu Sudhan"
                            layout="fill"
                            objectFit="cover"
                        />
                        <div
                            className={`
                                absolute inset-x-0 bottom-0 bg-black bg-opacity-70 text-white p-4 
                                transition-all duration-300 ease-in-out
                                ${isExpanded ? 'h-full' : 'h-16'}
                                ${!isExpanded && 'animate-bounce-subtle'}
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h2 className="text-xl font-bold">Madhu Sudhan</h2>
                                    <p className="text-sm">Developer</p>
                                </div>
                                {!isExpanded && (
                                    <p className="text-sm italic">Click to expand</p>
                                )}
                            </div>
                            <div className={`mt-4 ${isExpanded ? 'block' : 'hidden'}`}>
                                <p className="text-sm">
                                    From boxing rings to coding bootcamps, my path has been anything but ordinary. As a former competitive boxer, I learned the value of discipline, resilience, and strategic thinking - skills that I now apply to tackle the most complex coding challenges. This unique background allows me to approach web development with a fighter's spirit and a coder's precision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;