import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import axios from 'axios';
import toast from 'react-hot-toast';

function Spotify() {

    const [q, setQ] = useState(null);
    const [s, setS] = useState(0);
    const [load, setLoad] = useState(true);
    const [onsearch, setOnsearch] = useState(false);
    const [data, setData] = useState([]);

    const [values, setValues] = useState({
        track: null,
        artist: null,
    })

    const baseUrl = "http://ws.audioscrobbler.com/2.0";
    const api_key = "b23ead6cbeb54b78c6081fd264f205b4";


    const query = () => {
        const qe = document.querySelector('#search');
        setQ(qe.value);
    }

    const search = (e) => {
        setOnsearch(true);
        setLoad(true);

        e.preventDefault();
        axios.get(`${baseUrl}/?method=track.search&track=${encodeURI(q)}&api_key=${api_key}&format=json`, {
            "Accept": "application/json",
        }).then((response) => {

            setData([]);
            setData(response.data.results.trackmatches.track);
            // console.log(response.data.results.trackmatches.track);
            setS(s + 1);

            setLoad(false);
            response.data.results.trackmatches.track.length === 0 ? setOnsearch(false) : setOnsearch(true)

        }).catch(error => {

            setLoad(false);
            setOnsearch(true);
            console.log(error);

        })

    }
    const selectTrack = (e, a, b) => {


        setValues(values => ({
            ...values,
            ['track']: a,
            ['artist']: b,
        }))


        let allEle = document.querySelectorAll('.tracksItem');
        for (let i = 0; i < allEle.length; i++) {
            const ele = allEle[i];
            ele.classList.remove('border-ap2')
            ele.classList.remove('ring-ap3')
            ele.classList.remove('border-4')
        }

        document.getElementById(e).classList.add('border-ap2')
        document.getElementById(e).classList.add('border-4')
        document.getElementById(e).classList.add('ring-ap3')

    }

    const hundelSubmit = () => {
        if (values.track === null) {
            toast['error']("Please slect a track before submit!");
        }

        // console.log(values);
        Inertia.post('/soung', values)
    }

    useEffect(() => { // http://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=YOUR_API_KEY&artist=cher&track=believe&format=json


        for (let i = 0; i < data.length; i++) {
            const itt = data[i];
            axios.get(`${baseUrl}/?method=track.getInfo&api_key=${api_key}&artist=${itt.artist}&track=${itt.name}&format=json`, {
                "Accept": "application/json",
            }).then((res) => {
                document.getElementById('img_' + res.data.track.url).src = res.data.track.album.image[2]["#text"];

            }).catch(error => {
                setLoad(false);
                setOnsearch(true);
                console.log(error);
            })

        }

    }, [s])

    return (
        <>
            <form onSubmit={search}>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" onChange={query} id="search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  " placeholder="Search Track ..." required="" />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  ">Search</button>
                </div>
            </form>
            <section>
                {

                    data.map(track => (
                        < div key={track.url} className='mt-3' >
                            <div onClick={() => { selectTrack(track.url, track.name, track.artist) }} id={track.url} className='tracksItem flex flex-row space-x-3 p-2 mt-2 w-full rounded-lg bg-ap1 hover:bg-[#f2848269] '>
                                <div className=' rounded-xl w-[10em] h-[10em] bg-white p-2 '>
                                    <img className='rounded-xl object-contain w-full h-full ' id={'img_' + track.url} src={data[0].image[2]["#text"]} alt={track.name} />
                                </div>
                                <div className='flex flex-row items-start justify-between w-[67%] '>
                                    <div className='flex flex-col space-y-3 w-full '>
                                        <h4 className='text-xl font-bold text-white w-[78%] h-[3em] overflow-hidden max-h-[10em] ' style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>{track.name}</h4>
                                        <h3 className='text-lg font-bold text-drk p-1 rounded-lg'>{track.artist}</h3>
                                    </div>
                                    <div className='flex flex-col h-full '>
                                        <div className='flex flex-col h-full w-full space-y-2 p-[.8em] items-center content-center justify-center rounded-lg bg-[url(https://tlgur.com/d/8BO1BzNG)]'>
                                            <div className='flex flex-row space-x-1 w-[91%]'>
                                                <svg
                                                    className='w-[2.2em]'
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    x="0px"
                                                    y="0px"
                                                    viewBox="0 0 495 495"
                                                    xmlSpace="preserve"
                                                >
                                                    <path
                                                        fill="#c70024"
                                                        d="M247.5 0L247.5 40 455 40 455 455 247.5 455 247.5 495 495 495 495 0z"
                                                    />
                                                    <path
                                                        fill="#ff0c38"
                                                        d="M40 455L40 40 247.5 40 247.5 0 0 0 0 495 247.5 495 247.5 455z"
                                                    />
                                                    <path
                                                        d="M168.65 334.99c40.78 0 60.275-19.125 60.275-19.125L217.36 284.48s-18.77 20.94-46.915 20.94c-24.88 0-42.575-21.66-42.575-56.29 0-44.395 22.36-60.275 44.395-60.275 31.755 0 41.855 20.585 50.505 46.915l11.545 36.095c11.54 35 33.2 63.145 95.625 63.145 44.745 0 75.06-13.715 75.06-49.805 0-29.22-16.605-44.375-47.64-51.585l-23.085-5.055c-15.88-3.615-20.565-10.1-20.565-20.94 0-12.265 9.745-19.475 25.625-19.475 17.325 0 26.7 6.485 28.145 22.015l36.07-4.335c-2.89-32.48-25.25-45.82-62.07-45.82-32.46 0-64.215 12.265-64.215 51.6 0 24.53 11.915 40.04 41.855 47.265l24.53 5.76c18.4 4.34 24.53 11.915 24.53 22.365 0 13.36-12.965 18.77-37.52 18.77-36.445 0-51.6-19.12-60.25-45.47l-11.915-36.075c-15.14-46.91-39.315-64.235-87.305-64.235-53.05 0-81.19 33.575-81.19 90.565 0 54.865 28.14 84.435 78.65 84.435z"
                                                        fill="#ff0c38"
                                                    />
                                                </svg>
                                                <a className='text-base' href='https://last.fm'>last.fm</a>
                                            </div>
                                            <div className='flex flex-col space-y-1 w-full rounded-lg p-2 bg-[#ee60f65e] hover:bg-[#c73430] '>
                                                <span className='rounded-lg text-sm italic' >current listeners</span>
                                                <p className='font-bold text-lg text-white'>{track.listeners}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                    )
                }

                {

                    load === true && onsearch === true ?
                        <div className='bg-agr rounded-lg sticky bottom-2 mt-2 p-4  w-full flex items-center justify-center'>
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
                        :
                        load === false && onsearch === true ?
                            <div className='bg-agr text-white rounded-lg sticky bottom-2 mt-2 p-4 w-full flex items-center justify-center'>
                                save your chages <button onClick={() => { hundelSubmit() }} className='ml-1 btn btn-sm '>Save it!</button>
                            </div>
                            :
                            load === false && onsearch === false ?
                                <div className='bg-agr rounded-lg sticky bottom-2 mt-2 p-4  w-full flex items-center justify-center'>
                                    sorry bu we find any track much your record!
                                </div>
                                :
                                ''
                }
            </section>
        </>
    );
}

export default Spotify;
