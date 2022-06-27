import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium text-black">{title}</p>
                <svg
                    viewBox="0 0 24 24"
                    className={`w-3 text-gray-800 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                >
                    <polyline
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        points="2,7 12,17 22,7"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-gray-700">{children}</p>
                </div>
            )}
        </div>
    );
};

function Faq() {

    return (
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-ap1 uppercase rounded-full bg-teal-accent-400">
                            THE SKY IS THE LIMIT
                        </p>
                    </div>
                    <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                        <span className="relative inline-block">
                            <svg
                                viewBox="0 0 52 24"
                                className="fill-ago absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                            >
                                <defs>
                                    <pattern
                                        id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                                        x="0"
                                        y="0"
                                        width=".135"
                                        height=".30"
                                    >
                                        <circle cx="1" cy="1" r=".7" />
                                    </pattern>
                                </defs>
                                <rect
                                    fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                                    width="52"
                                    height="24"
                                />
                            </svg>
                            <span className="relative">AllAcc</span>
                        </span>{' '}
                        , Just enjoy it all
                    </h1>
                    <h2 className="text-base text-gray-700 md:text-lg">
                        here a frequency quetion but still you can ask more in developer accounts below or in the github repository.
                    </h2>
                </div>
                <div class="space-y-4">
                    <Item title="AllAcc is free?">
                        Absolutely yes, forever.
                    </Item>
                    <Item title="Can I add multipe accounts from ine service?">
                        No you can't do it until now, for many technical raisons.
                    </Item>
                </div>
            </div>
        </div>
    );
};
export default Faq;
