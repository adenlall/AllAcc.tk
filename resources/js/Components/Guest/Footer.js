import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

function Footer() {

    const { auth } = usePage().props;


    return (
        <footer className="bg-[#042b28]">
            <div className="container px-6 py-8 mx-auto">
                <div className="text-center">
                    <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300">AllAcc</Link>
                    {auth.user === null
                        ?
                        <>
                            <h1 className="max-w-md mx-auto mt-2 text-gray-400">Controle all your social meadia accouts for better followers experience.</h1>
                            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 ">
                                <Link href="/login" class="btn gap-2">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" />
                                    </svg>
                                    Log in
                                </Link>
                                <Link href="/register" className="btn">Get started</Link>
                            </div>
                        </>
                        :
                        <>
                            <h1 className="max-w-md mx-auto mt-2 text-gray-400">That's good, look like you are already loged in.</h1>
                            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 ">
                                <Link  href={"/"+auth.user.username} class="btn gap-2">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" />
                                    </svg>
                                    Your Public Page
                                </Link>
                                <Link href="/dashboard" className="btn">Dashboard</Link>
                            </div>
                        </>
                    }
                </div>
                <hr className="my-10 border-ap3" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-ap3">© Copyright 2021. All Rights Reserved.</p>
                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <Link href="/labs" className="mx-2 text-sm text-ap3" aria-label="Reddit"> Labs </Link>
                        <Link href="/privacy" className="mx-2 text-sm text-ap3" aria-label="Reddit"> Privacy </Link>
                        <Link href="/about" className="mx-2 text-sm text-ap3" aria-label="Reddit"> About </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
