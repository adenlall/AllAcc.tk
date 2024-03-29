import { Inertia } from '@inertiajs/inertia';
import { usePage, Link } from '@inertiajs/inertia-react';
import React from 'react';


export default function Sidebar() {
    const { auth, is_admin } = usePage().props;
    const { component } = usePage();
    const ssubmit = () => {
        Inertia.post('/logout', { onSuccess: () => Inertia.get('/')})
    }

    return (
        <aside className="hidden md:block bg-default sticky top-5 h-full rounded-xl m-5 w-[20%] " id="sidenav-main">
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className={"menu p-4 overflow-y-auto w-full justify-between rounded-xl h-[94vh] " + (is_admin.is ? 'bg-slate-900 text-light' : 'bg-light text-drk')}> {/* Sidebar content here */}
                    {
                        is_admin.is
                            ?
                            <div className='space-y-2'>
                                <ul className=''> <h4 className='p-2 bg-ap3 text-drk rounded-lg'><Link href={'/admin/' + is_admin.name + '/dashboard'} >Dashboard</Link></h4>
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-ap3 text-drk rounded-lg'><Link href={'/admin/' + is_admin.name + '/statistic'} >Statistic</Link></h4>
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-ap3 text-drk rounded-lg'><Link href={'/admin/' + is_admin.name + '/activities'} >Activities</Link></h4>
                                </ul>
                            </div>
                            :
                            <div>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={'/dashboard'} >Dashboard</Link></h4>
                                    {
                                    component === 'Dashboard'
                                        ? (
                                            <>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#current'>Your accounts</a></li>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#soung'>Your soung</a></li>
                                            </>
                                        )
                                        :
                                        ''
                                    }

                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={'/profile'} >Profile</Link></h4>
                                {
                                    component === 'Profile'
                                        ? (
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#password'>Change password</a></li>
                                        )
                                        :
                                        ''
                                    }
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={`/setting`} >Skins Settings</Link></h4>
                                {
                                    component === 'Setting'
                                        ? (
                                            <>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#skins'>Skins</a></li>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#icons'>Icons</a></li>
                                            </>
                                        )
                                        :
                                        ''
                                    }
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={`/statistics`} >Statistics</Link></h4>
                                {
                                    component === 'Statistics'
                                        ? (
                                            <>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#head'>Visits</a></li>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#active_s'>Services clicks</a></li>
                                            </>
                                        )
                                        :
                                        ''
                                    }
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={`/advanced`} >Advanced</Link></h4>
                                {
                                    component === 'Advanced'
                                        ? (
                                            <>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#head'>Outside clicks</a></li>
                                                <li className='pl-2'><a className='text-sm text-drk-l' href='#c_html'>Custom HTML</a></li>
                                            </>
                                        )
                                        :
                                        ''
                                    }
                                </ul>
                                <ul className=''> <h4 className='p-2 bg-agr text-white rounded-lg mt-2'><Link href={`/${auth.user.username}`} >Public page</Link></h4>
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
                                        <img src="/imgs/config/NnP/Soung/1.jpg" />
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
                            <button onClick={()=>{ssubmit()}} className="btn mt-2 btn-primary btn-sm">Log out</button>
                        </div>
                    </div>
                </ul>
            </div>
        </aside>
    )
}
