function Team() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="mx-auto mb-10 lg:max-w-xl text-center">
                <p className="inline-block px-3 py-px mb-4 text-lg font-bold tracking-wider text-ap1 uppercase rounded-full bg-teal-accent-400">
                    Team
                </p>
                <p className="text-base text-gray-700 md:text-lg">
                    By developers to everyone, remember that you can participate in this project on <a href="https://github.com/adenlall/AllAcc.tk" className="text-ago">Github</a> and make it better.
                </p>
            </div>
            <div className="w-full flex items-center justify-center">
                <div className="w-[14em]">
                    <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                        <img
                            className="absolute object-cover w-[14em] h-[14em] rounded"
                            src="https://avatars.githubusercontent.com/u/91727676?v=4"
                            alt="Person"
                        />
                    </div>
                    <div className="flex flex-col text-center">
                        <p className="text-lg font-bold text-black">Adenlall</p>
                        <p className="mb-5 text-xs text-gray-800">All in All</p>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
