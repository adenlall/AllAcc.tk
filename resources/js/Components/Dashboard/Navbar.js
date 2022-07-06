import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar({ props, pageName }) {

    const { auth, is_admin } = usePage().props;
    const { component } = usePage();
    return (
        <>
            <div className="navbar text-white bg-[#042b28]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact space-y-2 dropdown-content mt-3 p-2 shadow bg-light rounded-box w-52">
                            <li><Link className={component === 'Home' ? 'font-bold text-lg text-black bg-accent rounded-xl' : 'text-drk'} href="/" >Home</Link></li>
                            <li><Link className={component === 'About' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/about" >About</Link></li>
                            <hr/>
                            {auth.user !== null
                                ?
                                <>
                                    <li><Link className={component === 'Dashboard' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/dashboard" >Dashboard</Link></li>
                                    <li><Link className={component === 'Profile' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/profile" >Profile</Link></li>
                                    <li><Link className={component === 'Setting' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/setting" >Skin Settings</Link></li>
                                    <li><Link className={component === 'AsSeem' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={"/" + auth.user.username} >Public Page</Link></li>

                                    <li>
                                        <div className='flex flex-col items-center p-2'>
                                            {
                                                is_admin.is
                                                    ?
                                                    ''
                                                    :
                                                    <div className="avatar w-[5em] h-[5em]">
                                                        <div className="w-24 mask mask-squircle">
                                                            <img src="https://tlgur.online/d/uHwVUBEL" />
                                                        </div>
                                                    </div>
                                            }
                                            <div className={'p-3 w-full rounded-lg flex flex-col items-center ' + (is_admin.is ? 'bg-ap3' : 'pt-12 mt-[-2em] bg-ago')}>
                                                {
                                                    is_admin.is
                                                        ?
                                                        <>
                                                            <h2 className='text-lg font-bold text-black'>Welcome!</h2>
                                                            <h5 className='text-sm font-bold text-black'>{is_admin.name}</h5>
                                                        </>
                                                        :
                                                        <>
                                                            <h2 className='text-lg font-bold text-black'>{auth.user.name}</h2>
                                                            <h5 className='text-sm font-bold text-black'>@{auth.user.username}</h5>
                                                        </>
                                                }
                                                <Link className="btn mt-2 btn-primary btn-sm" href="/logout" method='post' as='button'>Logout</Link>
                                            </div>
                                        </div>
                                    </li>
                                </>
                                :
                                <>
                                    <li><Link className={pageName === 'Login' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="login" >Login</Link></li>
                                    <li><Link className={pageName === 'Register' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="register" >Register</Link></li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
                <div className="navbar-center btn btn-ghost">
                    <Link href="/"><img className='w-full h-[2.5em]' src="/AllAcc-logo-red-c.svg" alt="allacc logo" /></Link>
                </div>
                <div className="navbar-end pr-4">
                    {auth.user != null ? <Link href={'/' + auth.user.username} className='text-lg font-bold'>@{auth.user.username}</Link> : <Link href="/register" className="text-lg font-bold">Get your own</Link>}
                </div>
            </div>


        </>
    )
}
