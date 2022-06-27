import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar({ props, pageName }) {

    const { auth } = usePage().props;
    return (
        <>
            <div className="navbar bg-[#042b28]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className={pageName === 'Home' ? 'font-bold text-lg text-black bg-accent rounded-xl' : 'text-drk'} href="/" >Homne</Link></li>
                            {auth.user !== null
                                ?
                                <>
                                    <li><Link className={pageName === 'Dashboard' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/dashboard" >Dashboard</Link></li>
                                    <li><Link className={pageName === 'Profile'   ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/profile" >Profile</Link></li>
                                    <li><Link className={pageName === 'About' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/about" >About</Link></li>
                                    <li><Link className={pageName === auth.user.username   ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={"/"+auth.user.username} >Public Page</Link></li>
                                </>
                                :
                                <>
                                    <li><Link className={pageName === 'About' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/about" >About</Link></li>
                                    <li><Link className={pageName === 'Login' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'}  href="login" >Login</Link></li>
                                    <li><Link className={pageName === 'Register' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'}  href="register" >Register</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link href="/" className="btn btn-ghost normal-case text-xl">AllAcc</Link>
                </div>
                <div className="navbar-end pr-4">
                      {auth.user != null ? <Link href={'/'+auth.user.username} className='text-lg font-bold'>@{auth.user.username}</Link> :<Link href="/register" className="text-lg font-bold">Get your own</Link>}
                </div>
            </div>


        </>
    )
}
