
import Chart from 'chart.js/auto';
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import '../../../css/statistics.css';

export default function ServsClicks(props) {

    console.log(props.data);
    const data = props.data;
    // const data = JSON.parse(props.data);

    const [pie, setPie] = useState(data[0]);
    const [opp, setOpp] = useState(0);
    const arr = [];
    const arrPrepare = () => {
        for (let i = 0; i < pie.a.length; i++) {
            arr.push(`hsl(${Math.floor(Math.random() * 359)}, ${Math.floor(Math.random() * 99)}%, ${Math.floor(Math.random() * 99)}%)`);
        }
        return arr
    };
    const y = opp === 0 ? pie.b : arrPrepare;


    // const getRandomColor = () => {
    // ;
    // }

    return (
        <div>

            <div class="tabs tabs-boxed w-auto m-auto">
                <button onClick={() => {
                    setPie(data[0]);
                    setOpp(0);
                }} class={`tab ${opp === 0 ? 'tab-active' : ''}`}>Accounts</button>
                <button onClick={() => {
                    setPie(data[1]);
                    setOpp(1);
                }} class={`tab ${opp === 1 ? 'tab-active' : ''}`}>Countries</button>
            </div>

            <Doughnut
                className='cann'
                data={{
                    labels: pie.c,
                    boxHeight: 300,
                    datasets: [
                        {
                            label: "Accounts clicks",
                            data: pie.a,
                            backgroundColor: y,
                        }
                    ]
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: pie.title,
                            font: {
                                size: props.text + 8,
                            },
                            color: 'white',
                        },

                        legend: {
                            display: true,
                            position: "bottom",
                            labels: {
                                boxHeight: props.text + 7,
                                boxWidth: props.text + 7,
                                color: 'white',
                                font: {
                                    size: props.text,
                                },
                            },
                        },
                        responsive: false
                    }
                }}
            />
        </div>

    );
}
