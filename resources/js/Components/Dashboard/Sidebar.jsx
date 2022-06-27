import { usePage, Link } from '@inertiajs/inertia-react';
import React from 'react';


export default function Sidebar() {
    const { auth, is_admin } = usePage().props;

    return (
        <aside className="hidden md:block bg-default sticky top-5 h-full rounded-xl m-5 w-[20%] " id="sidenav-main">
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={"menu p-4 overflow-y-auto w-full justify-between rounded-xl h-[94vh] " + (is_admin.is ? 'bg-slate-900 text-light' : 'bg-light text-drk')}> {/* Sidebar content here */}
                    {
                        is_admin.is
                            ?
                            <div>
                                <ul className=''> <h4 className='p-2 bg-ap3 text-drk rounded-lg'><Link href={'/admin/' + is_admin.name + '/dashboard'} >Dashboard</Link></h4>
                                </ul>
                            </div>
                            :
                            <div>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg'><Link href={'/dashboard'} >Dashboard</Link></h4>
                                    <li className='pl-2'><Link className='text-sm text-drk-l' href='/dashboard#head'>Head page</Link></li>
                                    <li className='pl-2'><Link className='text-sm text-drk-l' href='/dashboard#current'>Your accounts</Link></li>
                                    <li className='pl-2'><Link className='text-sm text-drk-l' href='/dashboard#soung'>Your soung</Link></li>
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg'><Link href={'/profile'} >Profile</Link></h4>
                                    <li className='pl-2'><Link className='text-sm text-drk-l' href='/profile#change_password'>Change your password</Link></li>
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg'><Link href={`/${auth.user.username}`} >Public page</Link></h4>
                                </ul>
                            </div>
                    }
                    <div className='flex flex-col items-center p-2'>
                        {
                            is_admin.is
                                ?
                                ''
                                :
                                <div className="avatar w-[5em] h-[5em]">
                                    <div className="w-24 mask mask-squircle">
                                        <img src="https://tlgur.com/d/g2XEm7O8" />
                                    </div>
                                </div>
                        }
                        <div className={'p-3 w-full rounded-lg flex flex-col items-center '+ (is_admin.is ? 'bg-ap3':'pt-12 mt-[-2em] bg-ago')}>
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
                </ul>
            </div>
        </aside>
    )
}
