import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

function Footer(props) {

    const { auth } = usePage().props;
    const data = JSON.parse(props.lang);
    return (
        <footer className="bg-[#042b28]">
            <div className="container px-6 py-8 mx-auto">
                <div className="text-center">
                    <Link className="btn btn-ghost" href="/"><img className="w-full h-[3em]" alt="allacc logo gray" src="/AllAcc-logo-gray-c.svg" /></Link>
                    {auth.user === null
                        ?
                        <>
                            <h1 className="max-w-md mx-auto mt-2 text-gray-400">{data.header.guest}</h1>
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
                                    {data.btn.guest[0]}
                                </Link>
                                <Link href="/register" className="btn">{data.btn.guest[1]}</Link>
                            </div>
                        </>
                        :
                        <>
                            <h1 className="max-w-md mx-auto mt-2 text-gray-400">{data.header.auth}</h1>
                            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center space-y-2 sm:space-y-0 space-x-0 sm:space-x-3 ">
                                <Link href={"/" + auth.user.username} class="btn gap-2 bg-white">
                                    <svg
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z" />
                                        <path d="M4 15h2v5h12V4H6v5H4V3a1 1 0 011-1h14a1 1 0 011 1v18a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm6-4V8l5 4-5 4v-3H2v-2h8z" />
                                    </svg>
                                    {data.btn.auth[0]}
                                </Link>
                                <Link href="/dashboard" className="btn bg-white">{data.btn.auth[1]}</Link>
                            </div>
                        </>
                    }
                </div>
                <hr className="my-10 border-ap3" />
                {/* ///////////////////////////////// */}

                <footer class="footer p-10 bg-neutral text-neutral-content">
                    <div>
                        <span class="footer-title">Web app</span>
                        <Link href="/" class="link link-hover">Home</Link>
                        <Link href="/about" class="link link-hover">About</Link>
                        {
                            auth.user ?
                                ''
                                :
                                <>
                                    <Link href="/login" class="link link-hover">Login</Link>
                                    <Link href="/register" class="link link-hover">Register</Link>
                                </>
                        }
                    </div>
                    <div>
                        <span class="footer-title">Support</span>
                        {
                            auth.user ?
                                <>
                                    <a href="/dd/info" class="link link-hover">general info</a>
                                    <a href="/dd/locate" class="link link-hover">locate data</a>
                                </>
                                : ''
                        }
                        <a href="/dd/contact" class="link link-hover">Contact</a>
                        <a href="/dd/support" class="link link-hover">Support</a>
                        <a href="/dd/repair" class="link link-hover">Repair</a>
                    </div>
                    <div>
                        <span class="footer-title">{auth.user ? 'Your space' :'Outside'}</span>
                        {
                            auth.user ?
                            <>
                            <Link href="/dashboard" class="link link-hover">Dashboard</Link>
                            <Link href="/profile" class="link link-hover">Profile</Link>
                            <Link href="/statistics" class="link link-hover">Statistics</Link>
                            <Link href="/setting" class="link link-hover">Setting</Link>
                            <Link href="/advanced" class="link link-hover">Advanced</Link>
                            </>
                            :
                            <>
                            <Link href="/privacy" class="link link-hover">Privacy</Link>
                            <Link href="/about" class="link link-hover">About</Link>
                            <a href="https://github.com/adenlall/AllAcc" class="link link-hover">Github</a>
                            </>

                        }
                    </div>
                </footer>

                {/* ///////////////////////////////// */}
                <hr className="my-10 border-ap3" />
                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-ap3">© Copyright 2021-2023. All Rights Reserved.</p>
                    <div className="flex mt-3 -mx-2 sm:mt-0">
                        <a href="https://github.com/adenlall/AllAcc.tk" className="mx-2 text-sm text-ap3" aria-label="Reddit"> Labs </a>
                        <Link href="/privacy" className="mx-2 text-sm text-ap3" aria-label="Reddit"> Privacy </Link>
                        <Link href="/about" className="mx-2 text-sm text-ap3" aria-label="Reddit"> About </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
