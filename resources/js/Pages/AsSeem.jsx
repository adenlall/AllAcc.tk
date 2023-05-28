import { usePage, Link, Head } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import '../../css/fonts.css';
// import '../../css/button.css';


function AsSeem() {

    const { auth, user, services_config, services, soung } = usePage().props;
    const [cdnS, setCdnS] = useState({ twitter: false, facebook: false, instagram: false });
    const [pl, setPl] = useState(false);
    const accs = [];
    const theme = JSON.parse(user.json_config);
    const font = theme.theme.font;
    const e = Math.floor(Math.random() * 2);

    const dots = () => (
        <div className='bg-agr rounded-lg sticky bottom-2 m-0 p-4  w-full flex items-center justify-center'>
            <div className="dots">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );

    const ele = (a) => (
        <div className="flex flex-col w-full items-center justify-center content-center m-0 p-2">
            <TwitterTimelineEmbed
                onLoad={function noRefCheck() { }}
                placeholder={(dots())}
                noFooter
                noHeader
                screenName={a}
                sourceType="profile"
                tweetLimit={1}
            />
        </div>
    );
    const setCdn = (e) => {
        setCdnS(cdnS => ({
            ...cdnS,
            [e]: cdnS[e] ? false : true,
        }));
        // console.log(cdnS, cdnS[e]);
    }
    if (services !== null) {
        if (services.length !== 0) {
            let i = 0;
            services_config.forEach((serv, i) => {
                let cle = serv.name.replace(/\./g, "");
                if (services[cle] !== null) {
                    accs.push(
                        <div className='w-full rounded-lg bg-secondary boxAs flex flex-col items-start'>
                            <Link className="w-full" key={cle} method='post' as="button" href={"/statistics/set"} data={{ for_user: user.username, url: `${serv.website}/${services[cle]}`, service: cle }}>
                                <div className='ittem rounded-lg flex flex-row space-x-3 p-2 w-full'>
                                    <div className='rounded-xl'>
                                        <img className='rounded-xl object-contain w-[6.5em] h-full bg-white p-2' src={`/imgs/icons/${theme.theme.icons}/${cle}.svg`} alt={cle} />
                                    </div>
                                    <div className='flex flex-col space-y-2'>
                                        <h4 className='text-xl font-bold pl-2 text-info text-start'>{cle} :</h4>
                                        <h3 className='text-2xl font-bold bg-info text-white p-1 px-2 rounded-lg'>@{services[cle]}</h3>
                                    </div>
                                </div>
                            </Link>
                            {
                                ((cle === 'twitter') && (cdnS.twitter === true) && (theme.services.cdn.twitter === true)) ?
                                    ele(services[cle])
                                    : ''
                            }

                            {
                                (cle === 'twitter' && theme.services.cdn.twitter === true) ?
                                    (
                                        <>
                                            {
                                                window.innerWidth > '440'
                                                    ?
                                                    (
                                                        <>
                                                            <label for={`my-modal-${i}`} className="cursor-pointer text-sm bg-white text-black font-bold p-1 m-0 w-inherit rounded-b-lg rounded-t-none" style={{ 'fontFamily': 'sans-serif', 'width':'inherit' }} >click to show/hide it embed</label>

                                                            <input type="checkbox" id={`my-modal-${i}`} class="modal-toggle" />

                                                            <label for={`my-modal-${i}`} style={{ 'borderRadius': '1em' }} class="modal cursor-pointer">
                                                                <label class="modal-box relative" for="" style={{ 'borderRadius': '1em' }} >
                                                                    {ele(services[cle])}
                                                                </label>
                                                            </label>
                                                        </>


                                                    )
                                                    :
                                                    <span onClick={() => { setCdn(cle) }} className="cursor-pointer text-sm bg-white text-black font-bold p-1 m-0 w-[-webkit-fill-available] rounded-b-lg rounded-t-none" style={{ 'fontFamily': 'sans-serif' }}>click to show/hide it embed</span>
                                            }
                                        </>
                                    ) : ''

                            }
                        </div>
                    )
                }

                i++;
            });
        }
    } else {
        accs.push('null');
    }
    const play = () => {
        if (pl === true) {
            document.querySelector('#audio').pause();
            document.querySelector('#pause').style.display = "none";
            document.querySelector('#play').style.display = "block";
            setPl(false);
        } else {
            document.querySelector('#audio').play();
            document.querySelector('#play').style.display = "none";
            document.querySelector('#pause').style.display = "block";
            setPl(true);
        }
    }


    useEffect(() => {

        let timerID = setInterval(() => {
            if (soung !== null) {
                if (document.querySelector('#audio').currentTime === document.querySelector('#audio').duration) {
                    setPl(false);
                    document.querySelector('#audio').pause();
                    document.querySelector('#pause').style.display = "none";
                    document.querySelector('#play').style.display = "block";
                }
            }
        }, 1000)

        return () => {
            clearInterval(timerID)
        }

    })

    const grpCheck = (e) => {
        for (let i = 0; i < theme.urls.length; i++) {
            if (theme.urls[i].grp === e) {
                return true;
            }
        }
        return false;
    }


    return (
        <>

            <Head title={user.name + " - AllAcc"} />
            <div data-theme={theme.theme.skins} style={{ 'fontFamily': `${(font === null || font === undefined) ? 'Gracheva' : font}`, 'backgroundImage': `url("/imgs/config/${theme.theme.skins}/Header/${e}.jpg")`, 'backgroundSize': 'contain', 'backgroundRepeat': 'no-repeat', 'backgroundColor': ' hsl(var(--b1))', 'borderRadius': '0' }} className=''>

                {/* NAV BAR */}
                <section className="container m-auto p-4 ">
                    <nav className="navbar bg-secondary rounded-lg boxAs">
                        <div className="flex-1 flex">
                            <a href="#" className="btn btn-secondary btn-ghost text-lg font-bold w-auto text-ellipsis overflow-hidden sm:overflow-visible block p-2 text-left text-base-100">{user.username}</a>
                        </div>
                        <div className="flex-none hidden xs:flex">
                            <ul className="menu menu-horizontal p-0 space-x-2">
                                <li><Link href="/" className="btn btn-primary btn-ghost text-base-100 hidden sm:grid ">AllAcc</Link></li>
                                {
                                    auth.user === null
                                        ?
                                        <li><Link href="/register" className="btn text-base-100 btn-accent">Get your own</Link></li>
                                        :
                                        <li><Link href="/dashboard" className="btn text-base-100 btn-accent">Dashboard</Link></li>
                                }
                            </ul>
                        </div>
                    </nav>
                </section>




                <div className='mt-16 h-[2em]' style={{ 'borderRadius': '0', "background": "linear-gradient(360deg, hsl(var(--b1)), hsl(var(--b1)), hsl(var(--b1)/.8), hsl(var(--b1) / .5), transparent)" }}></div>
                <div className='w-full pb-[2em] bg-base-100 mb-[-1.5em]' style={{ 'borderRadius': '0' }} >
                    <div className=' container m-auto pt-3 px-4'>

                        {/* CTA */}
                        <div className=' m-auto my-12'>
                            <h1 className='w-full text-3xl font-extrabold'>Welcome to <span className='text-success'>{user.name}</span> accounts space</h1>
                        </div>
                        {
                            (((user.country === null && user.birthday === null) || (user.birthday === null && user.gender === null)) && (user.quote === null || user.quote === ''))
                                ? <div className="h-[44vh]"></div> :


                                <div className=' flex md:flex-row space-x-0 md:space-y-0 md:space-x-4 space-y-4 flex-col items-stretch my-[5em] lg:mt-[8em]'>

                                    {/* QUOTE */}
                                    {
                                        user.quote === null || user.quote === ''
                                            ?
                                            ''
                                            :
                                            <>

                                                <section className="space-y-3 md:w-1/2 w-full ">
                                                    <h3 className='italic text-xl font-extrabold'>THE QUOTE :</h3>
                                                    <div className="w-full h-full p-4 rounded-lg bg-secondary boxAs">
                                                        <h3 className={`text-lg ${theme.theme.skins === 'RPG' ? 'text-black' : theme.theme.skins === 'BnW' ? 'white' : 'text-base-100'} font-semibold`}>{user.quote}</h3>
                                                    </div>

                                                </section>
                                            </>
                                    }

                                    {/* PROFILE */}
                                    <section className={user.quote !== null ? 'space-y-3 md:w-1/2 w-full' : 'space-y-5 w-full'}>
                                        <h3 className='italic text-xl font-extrabold'>THE PROFILE :</h3>
                                        <div className='flex items-stretch h-full sm:space-x-2 rounded-lg bg-accent boxAs'>
                                            <div className=' sm:w-[16em] w-[-webkit-fill-available] h-[revert] flex items-center justify-center rounded-lg m-2 bg-secondary'>
                                                {
                                                    user.img === true
                                                        ?
                                                        <>
                                                        </>
                                                        :
                                                        <>
                                                            <h3 className=' font-extrabold text-[3em] uppercase md:text-[5em] text-primary'>{(user.name).split(' ').length === 1 ? (user.name).split(' ')[0][0] + (user.name).split(' ')[0][1] : (user.name).split(' ')[0][0] + (user.name).split(' ')[1][0]}</h3>
                                                        </>
                                                }
                                            </div>
                                            <menu className='flex flex-col space-y-1 p-2 w-[-webkit-fill-available]'>
                                                <h1 className='flex items-center justify-between space-2'>
                                                    <p className='w-[88%] overflow-hidden'><span className={(user.country === null && user.birthday === null) || (user.birthday === null && user.gender === null) ? 'md:text-[11vmin] text-[1.5em] leading-[1em] text-success font-extrabold h-full' : 'text-2xl text-success font-extrabold'}>{user.name}</span></p>
                                                </h1>
                                                {

                                                    (
                                                        user.birthday === null ?
                                                            ''
                                                            :
                                                            <h1 className='flex items-center justify-start space-x-1 sm:space-x-4 sm:my-4 my-2 mt-4'>
                                                                <p className={`font-bold text-md `}>
                                                                    <svg style={{ borderRadius: '0' }} className={`h-6 sm:h-10 `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                        <g data-name="calendar android app aplication phone">
                                                                            <path d="M30.56 8.47a8 8 0 00-7-7 64.29 64.29 0 00-15.06 0 8 8 0 00-7 7 64.29 64.29 0 000 15.06 8 8 0 007 7 64.29 64.29 0 0015.06 0 8 8 0 007-7 64.29 64.29 0 000-15.06zM8.7 3.42a63.65 63.65 0 0114.6 0A6 6 0 0127.56 6H4.44A6 6 0 018.7 3.42zM28.58 23.3a6 6 0 01-5.28 5.28 63.65 63.65 0 01-14.6 0 6 6 0 01-5.28-5.28 63.65 63.65 0 010-14.6 5.44 5.44 0 01.15-.7h24.86a5.44 5.44 0 01.15.7 63.65 63.65 0 010 14.6z" />
                                                                            <path d="M9 11H7a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM17 11h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM25 11h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM9 19H7a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM25 19h-2a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2zm-2 4v-2h2v2zM18.71 19.29a1 1 0 00-1.42 0L16 20.59l-1.29-1.3a1 1 0 00-1.42 1.42l1.3 1.29-1.3 1.29a1 1 0 001.42 1.42l1.29-1.3 1.29 1.3a1 1 0 001.42-1.42L17.41 22l1.3-1.29a1 1 0 000-1.42z" />
                                                                        </g>
                                                                    </svg>
                                                                </p>
                                                                <p className='w-[60%] sm:w-1/2'><span className={`text-sm sm:text-lg text-black font-bold`}>{user.birthday.replace(/-/g, '/')}</span></p>
                                                            </h1>
                                                    )
                                                }
                                                {
                                                    (
                                                        user.country === null
                                                            ?
                                                            ''
                                                            :
                                                            <h1 className='flex items-center justify-start space-x-2 sm:space-x-4 sm:my-4 my-2'>
                                                                <p className={`font-bold text-md `}>
                                                                    <svg style={{ borderRadius: '0' }} className={`h-6 sm:h-10 `} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                                                        <g data-name="map android app aplication phone">
                                                                            <path d="M30.56 8.47a8 8 0 00-7-7 64.29 64.29 0 00-15.06 0 8 8 0 00-7 7 64.29 64.29 0 000 15.06 8 8 0 007 7 64.29 64.29 0 0015.06 0 8 8 0 007-7 64.29 64.29 0 000-15.06zM3.42 23.3a63.65 63.65 0 010-14.6 6 6 0 011.07-2.79L14.59 16 4.49 26.09a6 6 0 01-1.07-2.79zm19.88 5.28a63.65 63.65 0 01-14.6 0 6 6 0 01-2.79-1.07L16 17.41l10.09 10.1a6 6 0 01-2.79 1.07zm5.28-5.28a6 6 0 01-1.07 2.79L5.91 4.49A6 6 0 018.7 3.42a63.65 63.65 0 0114.6 0 6 6 0 015.28 5.28 63.65 63.65 0 010 14.6z" />
                                                                            <path d="M22 6a4 4 0 00-4 4c0 1.87 2.65 5.8 3.18 6.57a1 1 0 001.64 0C23.35 15.8 26 11.87 26 10a4 4 0 00-4-4zm0 8.18A13.26 13.26 0 0120 10a2 2 0 014 0 13.36 13.36 0 01-2 4.18z" />
                                                                            <circle cx={22} cy={10} r={1} />
                                                                        </g>
                                                                    </svg>
                                                                </p>
                                                                <p className='w-[60%] sm:w-1/2'><span className={`text-lg text-black font-extrabold`}>{user.country}</span></p>
                                                            </h1>
                                                    )

                                                }
                                            </menu>

                                        </div>

                                    </section>


                                </div>
                        }


                        {/* TRACK */}
                        {user.track === null
                            ?
                            ''
                            :
                            <div>
                                {
                                    soung !== null
                                        ?
                                        <div className=' flex md:flex-row space-x-0 md:space-y-0 md:space-x-4 space-y-4 flex-col items-stretch my-[5em] lg:mt-[8em]'>

                                            <section className='sm:space-y-3 space-y-5 w-full mt-[3em]'>
                                                <h3 className='italic text-xl font-extrabold'>FEEL <span className="italic text-success">{user.name}</span> BY HIS FAVORITE SOUNG :</h3>
                                                <div className='boxAs flex flex-col justify-between sm:flex-row sm:space-x-2 space-x-0 rounded-lg  bg-cover' style={{ 'backgroundImage': `url("/imgs/config/${theme.theme.skins}/Soung/${e}.jpg")`, 'backgroundSize': 'cover' }}>
                                                    <div className='w-full flex flex-col sm:flex-row sm:space-x-2 space-x-0 rounded-lg bg-transparent '>
                                                        <div className="ss:w-[17em] ss:h-[17em] w-[11em] h-[11em] sm:m-0 mt-8 m-auto z-[1]" >
                                                            <img onError={event => { event.target.src = "https://nice-direct-links.herokuapp.com/12deb/file.jpg"; event.onerror = null }} className='object-cover w-full h-full rounded-lg' src={soung.album.cover_big} alt="" />
                                                        </div>
                                                        <div className='p-2 flex flex-row justify-between space-y-2 sm:w-[60%] w-full mt-[-4em] pt-[4em] sm:mt-0 sm:pt-2 bg-accent sm:bg-transparent rounded-lg '>
                                                            <div className='p-2 flex flex-col space-y-2'>
                                                                <h2 className={`font-extrabold xs:text-[3em] text-[2em] leading-2 mt-[.3em] ${theme.theme.skins !== 'BnW' ? 'sm:text-black text-black' : 'sm:text-white text-black'} overflow-hidden text-ellipsis trackUser`} style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.track}</h2>
                                                                <h2 className={`font-bold text-lg ${theme.theme.skins !== 'BnW' ? 'sm:text-black text-black' : 'sm:text-white text-black'} overflow-hidden text-ellipsis artistUser`} style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.artist}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-end sm:items-center items-start p-2; space-y-2 mt-[-1em] h-[6em] sm:w-[5em] w-auto sm:h-auto sm:m-0 bg-accent sm:bg-transparent rounded-bl-lg rounded-br-lg' style={{ 'border-top-left-radius': '0', 'borderTopRightRadius': '0' }}>
                                                        <div onClick={() => { play() }} id="pause" className='hidden w-[3.5em] h-[3.5em] rounded-lg sm:bg-white bg-black sm:hover:bg-[#f5cac3] hover:bg-primary m-4'></div>
                                                        <svg
                                                            id="play"
                                                            onClick={() => { play() }}
                                                            className='block cursor-pointer sm:fill-white fill-black sm:hover:fill-[#f5cac3] hover:fill-primary'
                                                            width="5em"
                                                            height="5.3em"
                                                            viewBox="0 0 512 512"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </section>
                                            <audio id='audio'>
                                                <source src={soung.preview} id="audioSrc" type="audio/ogg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </div>
                                        :
                                        <div className=' flex md:flex-row space-x-0 md:space-y-0 md:space-x-4 space-y-4 flex-col items-stretch my-[5em] lg:mt-[8em]'>

                                            <section className='sm:space-y-3 space-y-5 w-full mt-[3em]'>
                                                <h3 className='italic text-xl font-extrabold'>FEEL <span className="italic text-success">{user.name}</span> BY HIS FAVORITE SOUNG :</h3>
                                                <div className='flex flex-col justify-between sm:flex-row sm:space-x-2 space-x-0 rounded-lg bg-[url(https://tlgur.com/d/8e05BE94)] bg-cover'>
                                                    <div className='w-full flex flex-col sm:flex-row sm:space-x-2 space-x-0 rounded-lg bg-transparent '>
                                                        <div className="sm:w-[17em] sm:h-[17em] h-[17em] w-[17em] sm:m-0 mt-8 m-auto z-[1]" >
                                                            <img onError={event => { event.target.src = "https://tlgur.com/d/GXjOEVn4"; event.onerror = null }} className='object-cover w-full h-full rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-lg sm:rounded-br-none sm:rounded-tr-none' src={soung !== null ? soung.album.cover_big : 'https://tlgur.com/d/GXjOEVn4'} alt="" />
                                                        </div>
                                                        <div className='p-2 flex flex-row justify-between space-y-2 sm:w-[60%] w-full mt-[-4em] pt-[4em] sm:mt-0 sm:pt-2 bg-accent sm:bg-transparent rounded-lg '>
                                                            <div className='p-2 flex flex-col space-y-2'>
                                                                <h2 className='font-extrabold text-[3em] leading-2 mt-[.3em] sm:text-white text-black overflow-hidden text-ellipsis' style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.track}</h2>
                                                                <h2 className='font-bold text-lg sm:text-white text-black overflow-hidden text-ellipsis' style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.artist}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                }
                            </div>
                        }
                    </div>

                    {
                        theme.urls.length === 0 ? '' :


                            <div className="container my-4 px-4 mb-[3em] m-auto">
                                <div style={{ background: 'linear-gradient(182deg, hsl(var(--p)/0.4), transparent)' }} className="w-full text-secondary boxAs rounded-lg p-4 ">
                                    <h3 style={{ color: `${theme.theme.skins === 'BnW' ? 'white' : 'auto'}` }} className='italic text-2xl font-extrabold p-2 text-primary'><span style={{ color: `${theme.theme.skins === 'BnW' ? 'white' : 'auto'}` }} className='text-primary'>{user.name}</span>'s Links</h3>
                                    <div className="space-y-3">
                                        {
                                            theme.config.urlsGrps.map((urlGrp) => (
                                                grpCheck(urlGrp[0]) ?
                                                    (
                                                        <div style={{ background: 'hsl(var(--b1)/0.6)' }} className=" rounded-lg p-4 w-full">
                                                            <h3 className='text-xl my-2 p-2 font-bold text-accent text-center'>{urlGrp}</h3>
                                                            <div className="space-y-4 w-full p-4">
                                                                {
                                                                    theme.urls.map((url) => (
                                                                        <>
                                                                            {
                                                                                url['grp'] === urlGrp[0] ?
                                                                                    <a className="w-full block p-0 shadow-sm shadow-gray" href={url.link.includes("http") ? url.link : 'https://'+url.link}>
                                                                                        <button className={`w-full m-auto overflow-hidden ${theme.theme.button ? theme.theme.button : 'orangebtn'}`} style ={{overflow:"hidden"}}>
                                                                                            <span style={{ fontFamily: 'sans-serif' }} class="text font-bold overflow-hidden text-ellipsis whitespace-nowrap"><span className="m-auto">{url.name}</span></span>
                                                                                        </button>

                                                                                    </a>
                                                                                    : ''
                                                                            }
                                                                        </>
                                                                    ))
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                    : ''
                                            ))

                                        }
                                        <div className="space-y-4 w-full">
                                            {
                                                theme.urls.map((url) => (
                                                    <>
                                                        {
                                                            ((url['grp'] === null) || (url['grp'] === 'none')) ?
                                                                <a className="w-[95%]  m-auto block p-0 shadow-sm shadow-gray" href={url.link}>
                                                                    <button className={`w-full m-auto ${theme.theme.button ? theme.theme.button : 'orangebtn'}`} style={{overflow:"hidden"}}>
                                                                        <span style={{ fontFamily: 'sans-serif' }} class="noMoreBreak text font-bold overflow-hidden text-ellipsis whitespace-nowrap"><span className="m-auto">{url.name}</span></span>
                                                                    </button>
                                                                </a>
                                                                : ''
                                                        }
                                                    </>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                    }


                </div>





                <div style={{ 'borderBottomLeftRadius': '0', 'borderBottomRightRadius': '0', 'background': `url("/imgs/config/${theme.theme.skins}/Header/footer-0.jpg")`, 'backgroundSize': 'cover' }} className='w-full bg-center bg-cover m-0'>
                    <div style={{ 'borderBottomLeftRadius': '0', 'borderBottomRightRadius': '0', 'background': 'hsl(var(--p) / .4)' }} className='w-full pt-[2em] px-4 pb-[2em]' >
                        <div className=' container m-auto pt-3 px-4 sm:px-0'>
                            <h3 className='italic text-xl font-extrabold text-white'>WHERE CAN YOU FIND <span className='text-white'>{user.name}</span> :</h3>
                            <section className="my-4  m-auto space-y-4 flex flex-col items-center justify-center w-full">
                                {
                                    accs[0] !== 'null'
                                        ?
                                        (
                                            accs.length === 0
                                                ?
                                                <div className='flex flex-row justify-center items-center content-center space-x-3 p-2 mt-2 w-full rounded-lg hover:bg-[#9c9c9c7e] bg-secondary'>
                                                    <h3 className="text-xl font-extrabold text-base-100">Nothing here yet!</h3>
                                                </div>
                                                :
                                                accs
                                        )
                                        :
                                        <div className='flex flex-row justify-center items-center content-center space-x-3 p-2 mt-2 w-full rounded-lg hover:bg-[#dc50668f] bg-secondary'>
                                            <h3 className="text-xl font-extrabold text-primary">You had a fatal error please contact the developer!</h3>
                                        </div>
                                }
                            </section>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
}

export default AsSeem;
