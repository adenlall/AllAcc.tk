import Base from '../Layouts/Base';
import { usePage } from '@inertiajs/inertia-react';
import ServsClicks from '../Components/Dashboard/ServsClicks';
import Map from '../Components/Dashboard/map';
import { useEffect, useState } from 'react';
import LineStats from '../Components/Dashboard/LineStats';
import Bars from '../Components/Dashboard/Bars';


export default function Statistics() {
    const { services, services_statistics, config, visits, geo, timeline, stats } = usePage().props;
    const sers = [];
    const sers_d = [];
    const [syncW, setSyncW] = useState(window.innerWidth);

    window.addEventListener("resize", function () {
        setSyncW(window.innerWidth);
    });
    const chart_services = [];
    const chart_ser_value = [];
    const chart_ser_colors = [];

    // useEffect(() => {

    config.forEach((ser) => {
        if (services[ser.name] !== null) {
            ((services_statistics['services'][ser['name']] === undefined) || (services_statistics['services'][ser['name']] === null)) ? chart_ser_value.push('0') : chart_ser_value.push(services_statistics['services'][ser['name']])
            chart_services.push(ser['name'])
            chart_ser_colors.push('#' + ser['mColor'])
            sers.push(
                <div key={ser['name']} className={`w-full rounded-lg bg-ago p-2 py-[0.5em] flex flex-row items-center justify-center content-center`}>
                    <div className={`w-full p-2 m-2 rounded-lg text-xl sm:text-3xl font-extrabold italic text-white text-center`} style={{ 'textShadow': `3px 3px 0px #${ser['mColor']}` }}>
                        {ser['name']}
                    </div>
                    <h2 className='text-xl p-2 w-full m-2 text-white rounded-lg text-center bg-base-100'>Clicks :  <span className="bg-ap3 text-black p-1 rounded-lg" >{((services_statistics['services'][ser['name']] === undefined) || (services_statistics['services'][ser['name']] === null)) ? '0' : services_statistics['services'][ser['name']]}</span></h2>
                </div>
            )
        } else {
            sers_d.push(
                <div key={ser['name']} className={`w-full rounded-lg bg-[#f6bd6095] p-2 py-[0.5em] flex flex-row items-center justify-center content-center`}>
                    <div className={`w-full p-2 m-2 rounded-lg text-xl sm:text-3xl font-extrabold italic text-white text-center`} style={{ 'textShadow': `3px 3px 0px #${ser['mColor']}` }}>
                        {ser['name']}
                    </div>
                    <h2 className='text-xl p-2 w-full m-2 text-white rounded-lg text-center bg-base-100'>Clicks :  <span className="bg-ap3 text-black p-1 rounded-lg" >{((services_statistics['services'][ser['name']] === undefined) || (services_statistics['services'][ser['name']] === null)) ? '0' : services_statistics['services'][ser['name']]}</span></h2>
                </div>
            )
        }
    })

    // },[]);

    // console.log(chart_services,chart_ser_value,chart_ser_colors);
    const valcheck = () => {
        let ob = false;
        for (let i = 0; i < chart_ser_value.length; i++) {
            const e = chart_ser_value[i];
            if (e !== '0') {
                ob = true;
                break;
            }
        }
        return ob ? true : false;


    }
    console.log('////');
    // console.log(valcheck(),visits,sers.length,(sers.length == 0 || visits !== 0) ? "one" : valcheck() ? 'two' :'three');
    return (

        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
            <h2 className='text-2xl font-extrabold py-4'>Welcome to your new Statistics</h2>

            <div class="tooltip p-0 tooltip-right m-0 w-fit " style={{margin:'0'}} data-tip="Some sections here update delayed by about 16 hours">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-[3em] fill-ap3 h-[3em] p-0 m-0">
      <path
        d="M256 73.825a182.18 182.18 0 00-182.18 182.18c0 100.617 81.567 182.17 182.18 182.17a182.175 182.175 0 100-364.35zm43.251 279.317q-14.041 5.536-22.403 8.437a58.97 58.97 0 01-19.424 2.9q-16.994 0-26.424-8.28a26.833 26.833 0 01-9.427-21.058 73.777 73.777 0 01.703-10.134q.713-5.18 2.277-11.698l11.694-41.396c1.041-3.973 1.924-7.717 2.632-11.268a48.936 48.936 0 001.063-9.703q0-7.937-3.27-11.066c-2.179-2.073-6.337-3.128-12.51-3.128a33.005 33.005 0 00-9.304 1.424c-3.177.94-5.898 1.846-8.183 2.69l3.13-12.763q11.496-4.679 21.99-8.006a65.756 65.756 0 0119.89-3.34q16.868 0 26.024 8.165 9.156 8.16 9.15 21.19c0 1.802-.202 4.974-.633 9.501a63.919 63.919 0 01-2.343 12.48l-11.65 41.23a112.86 112.86 0 00-2.558 11.364 58.952 58.952 0 00-1.133 9.624q0 8.227 3.665 11.206 3.698 2.993 12.74 2.98a36.943 36.943 0 009.637-1.495 54.942 54.942 0 007.796-2.61zm-2.074-167.485a27.718 27.718 0 01-19.613 7.594 28.031 28.031 0 01-19.718-7.594 24.67 24.67 0 010-36.782 27.909 27.909 0 0119.718-7.647 27.613 27.613 0 0119.613 7.647 24.83 24.83 0 010 36.782z"
        data-name="Info"
      />
            </svg>
</div>

            <div className='flex flex-col items-center space-y-6 justify-center content-center'>
                {
                    (sers.length !== 0 || visits !== 0) ? (valcheck() ?
                        <>
                            {
                                syncW > 686 ?
                                    <Map geo={JSON.stringify(geo)} />
                                    :
                                    <div className='p-4 bg-ago text-ap3 text-center rounded-lg text-lg font-bold shadow-lg'>
                                        <svg
                                            className='m-auto w-[4em] h-[2.6em]'
                                            width="21px"
                                            height="21px"
                                            viewBox="0 0 21 21"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g
                                                fill="none"
                                                fillRule="evenodd"
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path
                                                    d="M2.525.5H8.5a2 2 0 012 2v10a2 2 0 01-2 2h-6a2 2 0 01-1.994-1.85L.5 12.494l.025-10a2 2 0 012-1.995zM7.5 12.5h-4"
                                                    transform="rotate(-90 10 7)"
                                                />
                                            </g>
                                        </svg>
                                        Landscape tour device to see the map analytics
                                    </div>
                            }
                            <ServsClicks text={13} data={JSON.parse(JSON.stringify(
                                [
                                    {
                                        title: "Accounts analitycs clicks",
                                        a: chart_ser_value,
                                        b: chart_ser_colors,
                                        c: chart_services
                                    },
                                    {
                                        title: "Geo analitycs visits",
                                        a: geo.map((x) => x.count),
                                        b: null,
                                        c: geo.map((x) => x.is)
                                    }
                                ]
                            ))} />
                        </>
                        : '') : ''
                }



            </div>

            <h3 id="ffirst" className='text-xl font-bold py-1'>Your public page visits:</h3>
            <div className='w-full rounded-lg m-auto bg-[url(/imgs/config/RPG/Header/footer-0.jpg)] bg-cover bg-center bg-no-repeat'>
                <div className='flex items-center rounded-lg w-full justify-start p-[4em]' style={{ 'background': 'linear-gradient(90deg,darkcyan,transparent)' }}>
                    <h1 className='text-2xl font-bold text-white w-[90%] sm:w-[40%]'>Number of visits to your public page is : <span className="itt">{visits}</span></h1>
                </div>
            </div>

            <h3 id="active_s" className='text-xl font-bold py-1'>Active services:</h3>
            <div class="collapse">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium bg-ap2 text-black rounded-lg mb-2">
                    Click to show Active services clicks
                </div>
                <div class="collapse-content space-y-2">
                    {
                        sers.length === 0
                            ?
                            <div className=" mb-4 my-1 w-full p-8 bg-ago text-black text-lg text-bold rounded-lg flex flex-row items-center justify-center content-center">
                                Add your services from Dashboard first!
                            </div>
                            :
                            sers
                    }
                </div>
            </div>
            {
                visits === 0 ? "" :
                    <>
                        <h3 id="delete_s" className='text-xl font-bold py-1'>Deleted services:</h3>
                        <div class="collapse">
                            <input type="checkbox" />
                            <div class="collapse-title text-xl font-medium bg-ap2 text-black rounded-lg mb-2">
                                Click to show Deleted services clicks
                            </div>
                            <div class="collapse-content space-y-2">
                                {
                                    sers_d.length === 0
                                        ?
                                        <div className=" mb-4 my-1 w-full p-8 bg-ago text-black text-lg text-bold rounded-lg flex flex-row items-center justify-center content-center">
                                            Great! you don't have any deleted service.
                                        </div>
                                        :
                                        sers_d
                                }
                            </div>
                        </div>
                    </>
            }
            {
                visits !== 0 ?
                    <>
                        <Bars stats={JSON.stringify(stats)} />
                        <LineStats data={JSON.stringify(timeline)} />
                    </>
                    :
                    ''
            }


        </div >
    );
}

Statistics.layout = (page) => <Base children={page} title={"Statistics - AllAcc"} />
