import React from 'react'

function Content() {

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                        <svg
                            className="fill-ap1"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 475.479 475.479"
                            xmlSpace="preserve"
                        >
                            <path d="M471.085 201.536L329.663 60.116c-5.857-5.857-15.354-5.858-21.213 0l-42.427 42.425h-.001l-31.819 31.82-31.817-31.819h-.001v-.001l-42.429-42.426c-5.858-5.857-15.355-5.858-21.213 0L4.394 194.466a14.998 14.998 0 000 21.214l42.427 42.426a14.953 14.953 0 0017.062 2.918l145.568 145.57.004.005c8.773 8.772 20.297 13.158 31.82 13.158s23.047-4.386 31.819-13.159c7.914-7.913 12.512-18.255 13.109-29.344 10.675-.589 21.18-4.946 29.317-13.082 8.144-8.144 12.5-18.658 13.085-29.342 10.684-.584 21.199-4.941 29.342-13.084l.019-.02 53.634-53.634a14.974 14.974 0 006.452 1.478c3.978 0 7.794-1.581 10.606-4.393l42.427-42.427a15 15 0 000-21.214zm-434.872 3.537L149.351 91.935l21.215 21.213-4.466 4.466L57.427 226.286l-21.214-21.213zm258.095 137.886c-5.846 5.845-15.357 5.847-21.207.007l-.007-.008-21.214-21.213c-5.858-5.857-15.356-5.857-21.213 0-5.857 5.858-5.857 15.355.001 21.213l21.21 21.209a.022.022 0 01.004.005l.006.006a14.9 14.9 0 014.387 10.599c0 4.006-1.56 7.773-4.394 10.608-5.848 5.848-15.365 5.848-21.214-.001a.022.022 0 00-.005-.004L85.712 240.427l106.067-106.066 21.212 21.213-31.819 31.82-.009.01c-17.535 17.546-17.533 46.087.008 63.63 8.773 8.773 20.296 13.16 31.82 13.16 11.523 0 23.046-4.386 31.818-13.158l.001-.001 31.82-31.82 53.026 53.026.006.007 7.085 7.084a14.9 14.9 0 014.381 10.592c0 4.002-1.558 7.765-4.384 10.597l-.01.01a.022.022 0 00-.004.005c-5.847 5.84-15.351 5.841-21.2.005l-.014-.015-21.209-21.208c-5.858-5.857-15.356-5.857-21.213.001-5.857 5.858-5.857 15.355 0 21.213l21.2 21.199.014.015c5.848 5.848 5.848 15.364 0 21.213zm74.246-74.247l-10.602-10.602-.005-.005c-.001-.001-.002-.001-.002-.003l-7.069-7.069-.002-.002-63.637-63.637a14.999 14.999 0 00-21.212 0l-42.426 42.426c-5.849 5.85-15.366 5.849-21.214.001-5.847-5.848-5.848-15.363-.001-21.212l.002-.002 42.414-42.415a.106.106 0 00.012-.01l.011-.012 31.809-31.81 113.137 113.138-21.215 21.214zm49.498-35.356L297.843 113.147l21.213-21.212 120.208 120.208-21.212 21.213z" />
                        </svg>
                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-ago sm:text-4xl sm:leading-none">
                            Let us analityc
                            <br className="hidden md:block" />
                            all your{' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                accounts
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            We can provide to you powerful tools to keep your followors
                            feel comfortable inside all your differents accounts.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://tlgur.online/d/ce8FuZ2M"
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://tlgur.online/d/wAHj9rsx"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://tlgur.online/d/2NIYVbrc"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Content;
