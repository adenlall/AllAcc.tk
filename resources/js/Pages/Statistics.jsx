import Base from '../Layouts/Base';
import { usePage } from '@inertiajs/inertia-react';
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


export default function Statistics() {
    const { services, services_statistics, config, visits } = usePage().props;
    const sers = [];
    const sers_d = [];

    config.forEach((ser, i) => {
        if (services[ser.name] !== null) {
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

    });



    return (

        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
            <h2 className='text-2xl font-extrabold py-4'>Welcome to your new Statistics</h2>

            <Bar
                data={{
                    labels: ['hello', 'mob', 'opps'],
                    datasets: [
                        {
                            label: "Price in USD",
                            data: [12, 65, 43],
                            backgroundColor: [
                                "#ffbb11",
                                "#ecf0f1",
                                "#50AF95",
                                "#f3ba2f",
                                "#2a71d0"
                            ],
                        }
                    ]
                }}

                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Cryptocurrency prices"
                        },
                        legend: {
                            display: true,
                            position: "bottom"
                        }
                    }
                }}
            />




            <h3 id="ffirst" className='text-xl font-bold py-1'>Your public page visits:</h3>
            <div className='w-full rounded-lg m-auto bg-[url(https://nice-direct-links.herokuapp.com/12df0/file.jpg)] bg-cover bg-center bg-no-repeat'>
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


        </div>
    );
}

Statistics.layout = (page) => <Base children={page} title={"Statistics - AllAcc"} />
