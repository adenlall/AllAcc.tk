import { Link } from '@inertiajs/inertia-react';

function Header(props) {

    const data = JSON.parse(props.lang);
    return (
        <div className="flex flex-col items-center justify-center max-w-2xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8" style={{'background':'linear-gradient(87deg, #f7ede2, #042b2833, #f7ede2 )'}} >
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-ap1 uppercase rounded-full bg-teal-accent-400">
                        <span className="itt hover:text-white">{data.sky}</span>
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
                        <span className="relative itt">AllAcc</span>
                    </span>{' '}
                    {data.header[1]}
                </h1>
                <h2 className="text-base text-gray-700 md:text-lg">
                    {data.sub}
                </h2>
            </div>
            <form className="flex flex-col items-center justify-center w-full mb-4 md:flex-row md:px-16">

                <Link
                    method="get"
                    href='/register'
                    className="btn btn-primary"
                >
                    {data.btn}
                </Link>
            </form>
            <p className="max-w-md mb-10 text-xs text-gray-600 sm:text-sm md:text-center">
                {data.terms[0]}
                <Link href="/privacy">{data.terms[1]}</Link>.
            </p>
            <img
                src="https://kitwind.io/assets/kometa/half-phone.png"
                className="w-full mx-auto md:w-auto md:max-w-xs"
                alt=""
            />
        </div>
    );
};
export default Header;
