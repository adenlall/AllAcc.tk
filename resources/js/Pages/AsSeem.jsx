import { usePage, Link } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';


function AsSeem() {

    const { auth, user, services_config, services, soung, icons, skin } = usePage().props;

    // console.log(icons, skin);
    const [pl, setPl] = useState(false);
    const accs = [];
    const icons_n = JSON.parse(icons.json_icons);
    const e = Math.floor(Math.random()*2);
    // console.log('');
    if (services.length !== 0) {
        let i =0;
        services_config.forEach(serv => {
            let cle = serv.name.replace(/\./g, "");

            if (services[cle] === null) { } else {
                accs.push(
                    <a key={cle} href={serv.website + '/' + services[cle]}>
                        <div className='ittem flex flex-row space-x-3 p-2 mt-2 w-full rounded-lg bg-secondary'>
                            <div className='w-[6.5em] h-[6.5em] rounded-xl'>
                                <img className='rounded-xl object-contain w-[6.5em] h-full bg-white p-2' src={icons_n[i]} alt={cle} />
                            </div>
                            <div className='flex flex-col space-y-2'>
                                <h4 className='text-xl font-bold text-info'>{cle} :</h4>
                                <h3 className='text-2xl font-bold bg-info text-white p-1 px-3 rounded-lg'>@{services[cle]}</h3>
                            </div>
                        </div>
                    </a>
                )
            }

            i++;
        });
    }

    console.log(JSON.parse(user.json_config).theme.skin);
    const play = () => {
        if (pl === true) {
            // console.log(pl, 'is now on pause')
            document.querySelector('#audio').pause();
            document.querySelector('#pause').style.display = "none";
            document.querySelector('#play').style.display = "block";
            setPl(false);
        } else {
            // console.log(pl, 'is now on play')
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






    return (
        <>
            <div data-theme={JSON.parse(user.json_config).theme.skin} style={{'background': `url(${skin[`img${e}`]})`,'backgroundSize':'contain','backgroundRepeat':'no-repeat','backgroundColor':' hsl(var(--b1))','borderRadius':'0'}} className=''>

                {/* NAV BAR */}
                <section className="container m-auto p-4 ">
                    <nav className="navbar bg-secondary rounded-lg">
                        <div className="flex-1 flex">
                            <a href="#" className="btn btn-secondary btn-ghost text-lg font-bold w-[8em] sm:w-[50%] text-ellipsis overflow-hidden sm:overflow-visible block p-2 text-left text-base-100">{user.username}</a>
                        </div>
                        <div className="flex-none">
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



                <div className='mt-16 h-20' style={{'borderRadius':'0', "background": "linear-gradient(360deg, hsl(var(--b1)), hsl(var(--b1)), hsl(var(--b1)/.8), hsl(var(--b1) / .5), transparent)" }}></div>
                <div className='w-full pb-[2em] bg-base-100 mb-[-1.5em]'style={{'borderRadius':'0'}} >
                    <div className=' container m-auto pt-3 px-4 sm:px-0'>

                        {/* CTA */}
                        <div className=' m-auto my-12'>
                            <h1 className='w-full text-3xl font-extrabold'>Welcome to <span className='text-success'>{user.name}</span> Accounts center</h1>
                        </div>

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
                                            <div className="w-full h-full p-4 rounded-lg bg-success text-drk ">
                                                <h3 className="text-lg text-base-100 font-semibold">{user.quote}</h3>
                                            </div>

                                        </section>
                                    </>
                            }

                            {/* PROFILE */}
                            <section className={user.quote !== null ? 'space-y-3 md:w-1/2 w-full' : 'space-y-5 w-full'}>
                                <h3 className='italic text-xl font-extrabold'>THE PROFILE :</h3>
                                <div className='flex items-stretch h-full space-x-2 rounded-lg bg-accent'>
                                    <div className=' md:min-w-[10em] w-[8em] h-[revert] flex items-center justify-center rounded-lg m-2 bg-secondary'>
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
                                    <menu className='flex flex-col space-y-1 p-2 min-w-[min-content]'>
                                        <h1 className='flex items-center justify-between space-2'>
                                            <p className='w-[88%] overflow-hidden'><span className={(user.country === null && user.birthday === null) || (user.birthday === null && user.gender === null) ? 'md:text-[11vmin] text-[1.5em] leading-[1em] text-success font-extrabold h-full' : 'text-2xl text-success font-extrabold'}>{user.name}</span></p>
                                        </h1>
                                        {

                                            (
                                                user.birthday === null ?
                                                    <></>
                                                    :
                                                    <h1 className='flex items-start flex-col justify-start space-2'>
                                                        <p className='font-bold text-sm text-drk-l'>Birthday : </p><p className='w-[60%] sm:w-1/2'><span className='text-sm text-drk font-extrabold'>{user.birthday}</span></p>
                                                    </h1>
                                            )
                                        }
                                        {
                                            (
                                                user.country === null
                                                    ?
                                                    <></>
                                                    :
                                                    <h1 className='flex items-start flex-col justify-start space-2'>
                                                        <p className='font-bold text-sm text-drk-l'>Country : </p><p className='w-[60%] sm:w-1/2'><span className='text-xl text-drk font-extrabold'>{user.country}</span></p>
                                                    </h1>
                                            )

                                        }
                                    </menu>

                                </div>
                                {
                                    (
                                        (user.country === null && user.birthday === null) || (user.birthday === null && user.gender === null)
                                            ?
                                            <p className='font-bold text-xs italic'>Look like {user.name} don't want to share more details!</p>
                                            :
                                            <></>
                                    )
                                }
                            </section>


                        </div>

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
                                                <div className='flex flex-col justify-between sm:flex-row sm:space-x-2 space-x-0 rounded-lg  bg-cover' style={{'background':`url(${JSON.parse(skin.json_config).imgs[e]})`,'backgroundSize':'cover'}}>
                                                    <div className='w-full flex flex-col sm:flex-row sm:space-x-2 space-x-0 rounded-lg bg-transparent '>
                                                        <div className="sm:w-[17em] sm:h-[17em] h-[17em] w-[17em] sm:m-0 mt-8 m-auto z-[1]" >
                                                            <img onError={event => { event.target.src = "https://tlgur.online/d/4GD3ba0U"; event.onerror = null }} className='object-cover w-full h-full rounded-tl-lg rounded-bl-lg rounded-br-lg rounded-tr-lg sm:rounded-br-none sm:rounded-tr-none' src={soung.album.cover_big} alt="" />
                                                        </div>
                                                        <div className='p-2 flex flex-row justify-between space-y-2 sm:w-[60%] w-full mt-[-4em] pt-[4em] sm:mt-0 sm:pt-2 bg-accent sm:bg-transparent rounded-lg '>
                                                            <div className='p-2 flex flex-col space-y-2'>
                                                                <h2 className='font-extrabold text-[3em] leading-2 mt-[.3em] sm:text-white text-black overflow-hidden text-ellipsis' style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.track}</h2>
                                                                <h2 className='font-bold text-lg sm:text-white text-black overflow-hidden text-ellipsis' style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{user.artist}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-col justify-end sm:items-center items-start p-2; space-y-2 mt-[-1em] h-[6em] sm:w-[5em] w-auto sm:h-auto sm:m-0 bg-accent sm:bg-transparent rounded-bl-lg rounded-br-lg' style={{'border-top-left-radius': '0', 'border-top-right-radius': '0'}}>
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


                </div>
                <div  style={{'borderBottomLeftRadius': '0', 'borderBottomRightRadius': '0', 'background':`url(${skin.img2})`,'backgroundSize':'cover'}}   className='w-full bg-center bg-cover m-0'>
                    <div  style={{'borderBottomLeftRadius': '0', 'borderBottomRightRadius': '0', 'background':'hsl(var(--p) / .4)'}}   className='w-full pt-[2em] pb-[2em]' >
                        <div className=' container m-auto pt-3 px-4 sm:px-0'>
                            <h3 className='italic text-xl font-extrabold text-white'>WHERE CAN YOU FIND <span className='text-white'>{user.name}</span> :</h3>
                            <section className="my-4  m-auto space-y-3">
                                {accs.length === 0
                                    ?
                                    <div className='flex flex-row justify-center items-center content-center space-x-3 p-2 mt-2 w-full rounded-lg hover:bg-[#dc50668f] bg-secondary'>
                                        <h3 className="text-xl font-extrabold text-white">Nothing here yet!</h3>
                                    </div>
                                    :
                                    accs
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
