import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast'
import React, { useState } from 'react';
import Item from '../Components/Dashboard/item';
import Base from '../Layouts/Base'
import Spotify from '../Components/Dashboard/Spotify';


export default function Dashboard() {

    const { auth, services_config, services } = usePage().props;
    // console.log(auth, services);
    var int = 0;

    const [elements, setelements] = useState([]);
    const [inc, setInc] = useState(0);
    const [st, setSt] = useState(false);


    const addItem = (para, namm) => {
        if (document.querySelector(`#item_${namm.replace(/\./g, "")}`) === null) {
            const newElement = (
                <div key={'key_' + inc + new Date().getMilliseconds()} id={'item_' + namm.replace(/\./g, "")} className='flex flex-row-reverse mt-4 '>
                    <svg
                        onClick={() => { removeItem(namm.replace(/\./g, "")) }}
                        className="h-10 w-10 absolute cursor-pointer"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"

                    >
                        <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                        <path d="M9 9L15 15" />
                        <path d="M15 9L9 15" />
                    </svg>
                    <Item
                        id={inc}
                        user={auth.user.username}
                        img={services_config[para].img}
                        name={services_config[para].name}
                        mColor={services_config[para].mColor}
                        sColor={services_config[para].sColor}
                    />
                </div>
            );

            setelements(elements => [...elements, newElement]);
            setInc(inc + 1);
            if (document.querySelector('#items').children === undefined) {
                setSt(false)
            } else {
                setSt(true);
            }
        } else {
            toast['error']("Please we don't support more than one account in each service!");

        }
    };

    const removeItem = (para) => {
        let items = document.querySelector(`#item_${para}`);
        items.remove();
        if (document.querySelector('#items').children[0] === undefined) {
            setSt(false);
        } else {
            setSt(true);
        }
    }
    const handelDelete = (ele, dt) => {
        Inertia.post('/deleteItem', { name: ele, username: auth.user.username });
    }





    ///////////////////////////////////////////
    const editItem = (ele, dt) => {
        let what = document.createElement('input');
        var where = document.querySelector(`#${ele + dt}`);
        var elem = document.querySelector(`#${ele}`);
        elem.remove();
        what.setAttribute("class", 'input input-accent text-black input-bordered');
        what.setAttribute('value', services[dt]);
        what.setAttribute('id', ele);
        what.setAttribute('type', 'text');
        where.appendChild(what);
        // console.log(ele)
    }
    ///////////////////////////////////////////
    const saveEdits = (ele, ser) => {
        // console.log(ele)

        let input = document.querySelector(`#${ele}`);
        let data = input.value;
        let service = ser;

        if (services[ser] === data) {
            toast['error']("You didn't make any change!");
        } else {
            Inertia.post('/setting', {
                name: service,
                data: data,
                username: auth.user.username,
            });
        }


    }

    var arr = [];
    services_config.forEach(item => {
        arr.push(
            <div id='oneOn' key={item.id} className="avatar btn h-full p-0 rounded-xl border-none drop-shadow-lg">
                <div className="w-24 mask rounded-xl p-0 bg-white">
                    <img onClick={() => { addItem(item.position, item.name) }} className='rounded-xl p-[.5em]' src={item.img} />
                </div>
            </div>
        )
    })

    var serr = [];
    if (services.length != 0) {
        services_config.forEach(item => {
            let serv = item.name.replace(/\./g, "");
            if (services[serv] === null) { } else {

                serr.push(
                    <div key={services[serv] + serv + inc} className='flex flex-row-reverse space-x-3 p-2 rounded-lg mt-2 bg-accent'>
                        <div className='flex flex-col space-y-3 p-2 items-center justify-center content-center rounded-lg bg-secondary'>
                            <svg onClick={() => { handelDelete(serv) }} className="h-8 w-8 cursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <polyline points="3 6 5 6 21 6" />  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />  <line x1="10" y1="11" x2="10" y2="17" />  <line x1="14" y1="11" x2="14" y2="17" /></svg>
                            <svg onClick={() => { editItem(serv + inc, serv) }} className="h-8 w-8 text-black cursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                            <svg onClick={() => { saveEdits(serv + inc, serv) }} className="h-8 w-8-500 cursor-pointer bg-blue-100 rounded-lg p-[.2em] hover:bg-accent text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                        </div>
                        <div className='flex flex-row space-x-3 p-2 mt-2 w-full '>
                            <div className='w-[6.5em] h-full rounded-xl'>
                                <img className='rounded-xl object-contain w-[6.5em] h-full bg-white p-2' src={item.img} alt={item.name} />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h4 className='text-xl font-bold text-ap1'>{serv} :</h4>
                                <h3 id={serv + inc} className='text-lg font-bold bg-secondary text-white p-1 rounded-lg'>@{services[serv]}</h3>
                                <div id={serv + inc + serv} className='text-black' style={{ "color": "black" }}></div>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }
    const copy = () => {
        navigator.clipboard.writeText("https://allacc.tk/" + auth.user.username);
        toast['success']("URL has been copied!");
    }



    return (
        <>

            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full'>

                <div className="container-fluid p-4 w-full">
                    <header className='text-2xl font-extrabold text-accent'>Welcome {auth.user.name} to your dashboard</header>
                    <h3 className='text-xl font-bold'>Customize all your social links here!</h3>
                </div>
                <div onClick={() => { copy() }} className='w-full flex flex-col cursor-pointer space-y-3 my-4'>
                    <h3 className="text-lg font-bold">You can paste this this URL on all your social media profiles.</h3>
                    <div className='p-3 bg-ap3 hover:bg-ap2 space-x-2 flex flex-row items-center justify-center content-center rounded-lg'>
                        <h3 className="text-xl font-bold text-black">Copy your own adress</h3>
                        <svg
                            className="h-8"
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            viewBox="0 0 460 460"
                            xmlSpace="preserve"
                        >
                            <path d="M425.934 0H171.662c-18.122 0-32.864 14.743-32.864 32.864v77.134h149.543c34.664 0 62.865 28.201 62.865 62.865v147.139h74.728c18.121 0 32.864-14.743 32.864-32.865V32.864C458.797 14.743 444.055 0 425.934 0z" />
                            <path d="M288.339 139.998H34.068c-18.121 0-32.865 14.743-32.865 32.865v254.272C1.204 445.257 15.946 460 34.068 460H288.34c18.122 0 32.865-14.743 32.865-32.864V172.863c.001-18.122-14.744-32.865-32.866-32.865z" />
                        </svg>
                    </div>
                </div>

                <div>
                    <div className='w-full bg-primary rounded-lg sticky top-[1.5em] z-10'>
                        <ul className='flex items-center content-center space-x-2 p-4 w-full overflow-scroll'>
                            {arr}
                        </ul>
                    </div>

                    <div id='items' className='flex flex-col-reverse items-center w-full'>
                        {elements}
                    </div>
                </div>

                <div className="flex flex-col">
                    <header id='current' className='font-extrabold my-2 text-2xl'>Your current services :</header>
                    <div className='flex flex-col-reverse my-[1.5em]'>
                        {
                            serr.length !== 0
                                ?
                                serr
                                :
                                <div className='bg-ap3 rounded-lg w-full h-[11em] flex flex-col items-center p-4'>
                                    <svg
                                        width="4em"
                                        height="4em"
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <style>
                                                {
                                                    ".cls-1{fill:none;stroke:#083b43;stroke-linecap:round;stroke-linejoin:round;stroke-width:20px}"
                                                }
                                            </style>
                                        </defs>
                                        <g data-name="Layer 2" id="Layer_2">
                                            <path
                                                className="cls-1"
                                                d="M128 201.59l72.76 15s103.52-.63 106.43 0 76.81-15 76.81-15"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M209.07 154.19L200.76 216.56 253.97 357.81 307.19 215.23 298.88 154.19"
                                            />
                                            <path
                                                className="cls-1"
                                                d="M302.93 336.92L384 201.59 347.83 154.19 164.17 154.19 128 201.59 209.07 336.92 253.97 357.81 302.93 336.92z"
                                            />
                                        </g>
                                    </svg>
                                    <h1 className='text-xl font-bold text-[#042b28]'>Add your accounts now from the scroll above!</h1>
                                </div>
                        }
                    </div>
                </div>


                <div id="soung" className="flex flex-col">
                    <header id='current' className='font-extrabold my-2 text-2xl'>Describe yourself by one spotify track :</header>
                    {
                        auth.user.track === null ?
                            'search and select your soung, then submit.'
                            :
                            <span>soung selected : <span className='font-bold text-lg'>{auth.user.track}</span> by <span className='font-bold text-lg'>{auth.user.artist}</span></span>
                    }
                    <div className='flex flex-col p-4 my-[1.5em] rounded-lg bg-ago'>
                        <Spotify />
                    </div>
                </div>


            </div>

        </>
    )
}

Dashboard.layout = (page) => <Base children={page} title={"Dashboard"} />
