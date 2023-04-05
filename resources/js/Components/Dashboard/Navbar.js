import { Link, usePage } from '@inertiajs/inertia-react'
import React from 'react'

export default function Navbar({ props, pageName }) {

    const { auth, is_admin, __lang__ } = usePage().props;
    const { component } = usePage();
    return (
        <>
            <div className="navbar text-white bg-[#042b28]">
                <div className="navbar-start flex">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact space-y-2 dropdown-content mt-3 p-2 shadow bg-light rounded-box w-52">
                            <li><Link className={component === 'Home' ? 'font-bold text-lg text-black bg-accent rounded-xl' : 'text-drk'} href="/" >Home</Link></li>
                            <li><Link className={component === 'About' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/about" >About</Link></li>
                            <hr />
                            {auth.user !== null
                                ?
                                <>
                                    {
                                        is_admin.is
                                            ?
                                            (
                                                <>
                                                    <li><Link className={component === 'Admin' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={'/admin/' + is_admin.name + '/dashboard'} >Dashboard</Link></li>
                                                    <li><Link className={component === 'AdminStatistic' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={'/admin/' + is_admin.name + '/statistic'} >Statistic</Link></li>
                                                    <li><Link className={component === 'AdminActivities' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={'/admin/' + is_admin.name + '/activities'} >Activities</Link></li>
                                                </>
                                            )
                                            :
                                            (
                                                <>
                                                    <li><Link className={component === 'Dashboard' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/dashboard" >Dashboard</Link></li>
                                                    <li><Link className={component === 'Profile' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/profile" >Profile</Link></li>
                                                    <li><Link className={component === 'Setting' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/setting" >Skin Settings</Link></li>
                                                    <li><Link className={component === 'Statistics' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/statistics" >Statistics</Link></li>
                                                    <li><Link className={component === 'Advanced' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href="/advanced" >Advanced</Link></li>
                                                    <li><Link className={component === 'AsSeem' ? 'font-bold text-lg bg-accent rounded-xl text-black' : 'text-drk'} href={"/" + auth.user.username} >Public Page</Link></li>
                                                </>
                                            )
                                    }

                                    <li>
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
                    <div class="dropdown dropdown-hover">
                        <label tabindex="0" class="btn md:m-1 m-0 flex grap-2 p-[2px] w-auto">
                            <svg
                                className="w-auto md:mr-2 mr-0 h-[-webkit-fill-available]"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                width="200px"
                                height="200px"
                                viewBox="796 796 200 200"
                                xmlSpace="preserve"
                            >
                                <path d="M973.166 818.5H818.833c-12.591 0-22.833 10.243-22.833 22.833v109.333c0 12.59 10.243 22.833 22.833 22.833h154.333c12.59 0 22.834-10.243 22.834-22.833V841.333c0-12.59-10.244-22.833-22.834-22.833zM896 961.5h-77.167c-5.973 0-10.833-4.859-10.833-10.833V841.333c0-5.974 4.86-10.833 10.833-10.833H896v131zm82.58-89.371c-.547 9.145-5.668 27.261-20.869 39.845 4.615 1.022 9.629 1.573 14.92 1.573v12c-10.551 0-20.238-1.919-28.469-5.325-7.689 3.301-16.969 5.325-28.125 5.325v-12c5.132 0 9.924-.501 14.366-1.498-8.412-7.016-13.382-16.311-13.382-26.78h11.999c0 8.857 5.66 16.517 14.884 21.623 4.641-2.66 8.702-6.112 12.164-10.351 5.628-6.886 8.502-14.521 9.754-20.042h-49.785v-12h22.297v-11.986h12V864.5h21.055c1.986 0 3.902.831 5.258 2.28a7.213 7.213 0 011.933 5.349z" />
                                <path d="M839.035 914.262l-4.45 11.258h-15.971l26.355-61.09h15.971l25.746 61.09h-16.583l-4.363-11.258h-26.705zm13.44-34.386l-8.902 22.604h17.629l-8.727-22.604z" />
                            </svg>
                            <p className='hidden md:block'>
                                {__lang__[0]+__lang__[1]}
                            </p>
                        </label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link as="button" disabled={__lang__ === 'de' ? true : false} method='post' data={{ lang: 'de' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621v73.471h512v-73.471c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#464655"
                                    />
                                    <path
                                        d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345v-73.471H0v73.471z"
                                        fill="#ffe15a"
                                    />
                                    <path fill="#ff4b55" d="M0 200.09H512V311.9H0z" />
                                </svg>
                                German
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'ko' ? true : false} method='post' data={{ lang: 'ko' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#f5f5f5"
                                    />
                                    <path
                                        d="M305.009 182.531c-40.563-27.042-95.35-15.986-122.374 24.506-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195 27.042-40.559 16.111-95.347-24.417-122.39"
                                        fill="#ff4b55"
                                    />
                                    <path
                                        d="M182.634 207.038c-13.555 20.211-8.045 47.674 12.235 61.195 20.265 13.521 47.64 8.03 61.161-12.252 13.521-20.281 40.914-25.704 61.178-12.254 20.298 13.521 25.757 40.984 12.217 61.195-27.006 40.632-81.775 51.549-122.338 24.507-40.526-27.039-51.494-81.827-24.453-122.391"
                                        fill="#41479b"
                                    />
                                    <g fill="#464655">
                                        <path d="M349.92 149.189l16.035 24.102a4.414 4.414 0 01-1.219 6.112l-4.066 2.723a4.414 4.414 0 01-6.129-1.22l-16.055-24.096a4.415 4.415 0 011.223-6.119l4.086-2.728a4.414 4.414 0 016.125 1.226zM374.66 186.35l16.087 24.087a4.414 4.414 0 01-1.237 6.134l-4.084 2.699a4.413 4.413 0 01-6.103-1.23l-16.078-24.062a4.414 4.414 0 011.217-6.122l4.075-2.724a4.414 4.414 0 016.123 1.218zM367.089 137.731l40.829 61.273a4.413 4.413 0 01-1.225 6.12l-4.102 2.734a4.414 4.414 0 01-6.121-1.224l-40.843-61.269a4.415 4.415 0 011.227-6.123l4.115-2.739a4.418 4.418 0 016.12 1.228zM384.211 126.291l16.07 24.149a4.412 4.412 0 01-1.241 6.127l-4.087 2.7a4.412 4.412 0 01-6.105-1.234l-16.082-24.117a4.415 4.415 0 011.224-6.122l4.099-2.732a4.413 4.413 0 016.122 1.229zM408.967 163.531l16.045 24.099a4.413 4.413 0 01-1.22 6.115l-4.075 2.724a4.414 4.414 0 01-6.127-1.223l-16.045-24.099a4.414 4.414 0 011.22-6.115l4.075-2.724a4.411 4.411 0 016.127 1.223zM132.721 293.982l40.824 61.207a4.413 4.413 0 01-1.222 6.12l-4.088 2.73a4.414 4.414 0 01-6.123-1.222l-40.824-61.207a4.412 4.412 0 011.222-6.12l4.089-2.73a4.413 4.413 0 016.122 1.222zM115.582 305.43l16.028 24.041a4.413 4.413 0 01-1.217 6.116l-4.066 2.722a4.414 4.414 0 01-6.126-1.217l-16.047-24.035a4.413 4.413 0 011.22-6.122l4.086-2.728a4.414 4.414 0 016.122 1.223zM140.351 342.604l16.046 24.102a4.412 4.412 0 01-1.222 6.115l-4.078 2.727a4.414 4.414 0 01-6.126-1.222l-16.056-24.097a4.413 4.413 0 011.222-6.118l4.088-2.73a4.413 4.413 0 016.126 1.223zM98.442 316.875l40.798 61.21a4.416 4.416 0 01-1.219 6.118l-4.077 2.726a4.414 4.414 0 01-6.125-1.22l-40.822-61.202a4.415 4.415 0 011.224-6.122l4.102-2.734a4.412 4.412 0 016.119 1.224zM121.294 210.441l40.818-61.257a4.414 4.414 0 016.124-1.224l4.087 2.729a4.415 4.415 0 011.222 6.12l-40.834 61.223a4.414 4.414 0 01-6.108 1.231l-4.071-2.695a4.413 4.413 0 01-1.238-6.127zM104.147 199.008l40.825-61.269a4.414 4.414 0 016.126-1.222l4.077 2.726a4.413 4.413 0 011.22 6.116l-40.814 61.272a4.413 4.413 0 01-6.124 1.224l-4.088-2.729a4.413 4.413 0 01-1.222-6.118zM86.99 187.624l40.829-61.33a4.415 4.415 0 016.127-1.224l4.077 2.726a4.414 4.414 0 011.222 6.114l-40.804 61.339a4.415 4.415 0 01-6.123 1.228l-4.1-2.734a4.415 4.415 0 01-1.228-6.119zM338.493 355.188l16.047-24.035a4.414 4.414 0 016.126-1.217l4.066 2.722a4.413 4.413 0 011.216 6.116l-16.028 24.04a4.414 4.414 0 01-6.123 1.223l-4.086-2.728a4.413 4.413 0 01-1.218-6.121zM363.243 318.141l16.073-24.154a4.414 4.414 0 016.123-1.227l4.096 2.73a4.415 4.415 0 011.223 6.124l-16.107 24.116a4.413 4.413 0 01-6.109 1.227l-4.062-2.692a4.414 4.414 0 01-1.237-6.124zM355.626 366.698l16.057-24.098a4.414 4.414 0 016.122-1.225l4.104 2.737a4.415 4.415 0 011.225 6.119l-16.047 24.1a4.414 4.414 0 01-6.12 1.228l-4.115-2.739a4.416 4.416 0 01-1.226-6.122zM380.403 329.463l16.066-24.042a4.415 4.415 0 016.119-1.22l4.102 2.734a4.413 4.413 0 011.221 6.125l-16.066 24.043a4.414 4.414 0 01-6.118 1.22l-4.103-2.734a4.414 4.414 0 01-1.221-6.126zM372.771 378.081l16.075-24.056a4.414 4.414 0 016.103-1.23l4.086 2.7a4.414 4.414 0 011.239 6.131l-16.063 24.088a4.415 4.415 0 01-6.121 1.224l-4.098-2.732a4.413 4.413 0 01-1.221-6.125zM397.554 340.969l16.035-24.085a4.414 4.414 0 016.127-1.223l4.072 2.722a4.414 4.414 0 011.218 6.119l-16.049 24.053a4.413 4.413 0 01-6.11 1.229l-4.06-2.69a4.415 4.415 0 01-1.233-6.125z" />
                                    </g>
                                </svg>
                                Korean
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'en' ? true : false} method='post' data={{ lang: 'en' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V385.38c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.621c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#41479b"
                                    />
                                    <path
                                        d="M511.469 120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54 107.147V88.276h-88.276v107.147L48.322 88.276h-9.977c-19.017 0-34.792 13.847-37.814 32.007l139.778 91.58H0v88.276h140.309L.531 391.717c3.022 18.159 18.797 32.007 37.814 32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54 107.147h9.977c19.017 0 34.792-13.847 37.814-32.007l-139.778-91.58H512v-88.276H371.691l139.778-91.579z"
                                        fill="#f5f5f5"
                                    />
                                    <g fill="#ff4b55">
                                        <path d="M282.483 88.276L229.517 88.276 229.517 229.517 0 229.517 0 282.483 229.517 282.483 229.517 423.724 282.483 423.724 282.483 282.483 512 282.483 512 229.517 282.483 229.517z" />
                                        <path d="M24.793 421.252l186.583-121.114h-32.428L9.224 410.31a38.393 38.393 0 0015.569 10.942zM346.388 300.138H313.96l180.716 117.305a38.515 38.515 0 0012.287-13.075l-160.575-104.23zM4.049 109.475l157.73 102.387h32.428L15.475 95.842a38.499 38.499 0 00-11.426 13.633zM332.566 211.862l170.035-110.375a38.4 38.4 0 00-15.699-10.86L300.138 211.862h32.428z" />
                                    </g>
                                </svg>
                                English
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'ja' ? true : false} method='post' data={{ lang: 'ja' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#f5f5f5"
                                    />
                                    <circle cx={256} cy={255.999} r={97.1} fill="#ff4b55" />
                                </svg>
                                Japanese
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'ch' ? true : false} method='post' data={{ lang: 'ch' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.275H38.345C17.167 88.275 0 105.442 0 126.62v258.76c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V126.62c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#ff4b55"
                                    />
                                    <g fill="#ffe15a">
                                        <path d="M85.007 140.731l8.416 25.234 26.6.206c3.444.026 4.872 4.422 2.101 6.467l-21.398 15.801 8.023 25.362c1.038 3.284-2.7 5.999-5.502 3.997l-21.64-15.469-21.64 15.468c-2.802 2.003-6.54-.714-5.502-3.997l8.023-25.362-21.398-15.8c-2.771-2.046-1.343-6.441 2.101-6.467l26.6-.206 8.416-25.234c1.09-3.267 5.711-3.267 6.8 0zM181.599 146.949l6.035 8.228 9.739-3.046c1.261-.394 2.298 1.044 1.526 2.115l-5.962 8.281 5.906 8.321c.765 1.077-.282 2.508-1.54 2.105l-9.719-3.111-6.089 8.189c-.788 1.06-2.473.506-2.478-.814l-.045-10.205-9.67-3.261c-1.252-.423-1.246-2.195.009-2.609l9.69-3.196.114-10.204c.014-1.317 1.703-1.858 2.484-.793zM144.857 122.419l10.144 1.102 4.328-9.241c.561-1.196 2.322-.991 2.591.302l2.086 9.988 10.126 1.26c1.311.163 1.66 1.901.513 2.558l-8.855 5.07 1.931 10.02c.25 1.298-1.295 2.166-2.274 1.279l-7.559-6.855-8.932 4.932c-1.156.639-2.461-.563-1.919-1.768l4.183-9.308-7.452-6.972c-.963-.898-.224-2.509 1.089-2.367zM160.895 221.313l-6.034 8.23-9.739-3.046c-1.261-.394-2.298 1.043-1.526 2.115l5.962 8.281-5.906 8.321c-.765 1.077.282 2.508 1.54 2.105l9.718-3.111 6.089 8.189c.788 1.06 2.473.506 2.478-.814l.045-10.205 9.67-3.261c1.252-.423 1.246-2.195-.009-2.609l-9.69-3.196-.114-10.204c-.016-1.319-1.703-1.861-2.484-.795zM197.635 198.261l-10.145 1.102-4.328-9.241c-.561-1.196-2.321-.991-2.591.302l-2.087 9.988-10.126 1.26c-1.311.163-1.66 1.901-.513 2.558l8.855 5.07-1.931 10.02c-.25 1.298 1.295 2.166 2.274 1.279l7.559-6.855 8.932 4.932c1.156.639 2.461-.563 1.919-1.768l-4.183-9.308 7.452-6.972c.967-.898.228-2.509-1.087-2.367z" />
                                    </g>
                                </svg>
                                Chinese
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'in' ? true : false} method='post' data={{ lang: 'in' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 512 512"
                                    xmlSpace="preserve"
                                >
                                    <path
                                        d="M473.655 88.276H38.345C17.167 88.276 0 105.443 0 126.621V256h512V126.621c0-21.178-17.167-38.345-38.345-38.345z"
                                        fill="#c8414b"
                                    />
                                    <path
                                        d="M0 385.379c0 21.177 17.167 38.345 38.345 38.345h435.31c21.177 0 38.345-17.167 38.345-38.345V256H0v129.379z"
                                        fill="#f5f5f5"
                                    />
                                </svg>
                                Indonesian
                            </Link></li>
                            <li><Link as="button" disabled={__lang__ === 'vi' ? true : false} method='post' data={{ lang: 'vi' }} href="set/lang" className='flex grap-2 '>
                                <svg
                                    className="h-[2em]"
                                    viewBox="0 0 36 36"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill="#DA251D"
                                        d="M32 5H4a4 4 0 00-4 4v18a4 4 0 004 4h28a4 4 0 004-4V9a4 4 0 00-4-4z"
                                    />
                                    <path
                                        fill="#FF0"
                                        d="M19.753 16.037L18 10.642l-1.753 5.395h-5.672l4.589 3.333-1.753 5.395L18 21.431l4.589 3.334-1.753-5.395 4.589-3.333z"
                                    />
                                </svg>
                                Vietnamese
                            </Link></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden xs:block ">
                    <Link className=" btn-ghost btn w-[6em] sm:w-auto " href="/"><img className='w-full h-[2.5em]' src="/AllAcc-logo-gray-c.svg" alt="allacc logo" /></Link>
                </div>
                <div className="navbar-end p-0 sm:pr-4">
                    {auth.user != null ? <Link href={'/' + auth.user.username} className='w-[max-content] text-lg font-bold'>{is_admin.is ? '_BOSS_' : `@${auth.user.username}`}</Link> : <Link href="/register" className="w-[max-content] text-lg font-bold">Get yours</Link>}
                </div>
            </div>


        </>
    )
}
