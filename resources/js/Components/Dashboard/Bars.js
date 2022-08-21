import { useState } from "react";
import { Bar } from "react-chartjs-2";

export default function Bars(props) {
    const data = JSON.parse(props.stats);
    const [eloow, setEloow] = useState(data.os);
    const [ii, setIi] = useState(1);

    const arrPrepare = (x) => {
        let arr = [];
        for (let i = 0; i < eloow.length; i++) {
            arr.push(`hsl(${Math.floor(Math.random() * 359)} 100% ${80-Math.floor(Math.random()*30)}% / 80%)`);
        }
        return arr;
    };

    return (
        <div className="my-8">
            <div class="tabs tabs-boxed w-auto m-auto">
                <button onClick={() => { setEloow(data.browser); setIi(0); }} class={`tab ${ii === 0 ? 'tab-active' : ''} `}>Browsers</button>
                <button onClick={() => { setEloow(data.os); setIi(1); }} class={`tab ${ii === 1 ? 'tab-active' : ''} `}>OSs</button>
                <button onClick={() => { setEloow(data.device); setIi(2); }} class={`tab ${ii === 2 ? 'tab-active' : ''} `}>Devices</button>
            </div>
            <Bar
                data={{
                    labels: eloow.map((el) => el.name === false ? 'developers' : el.name),
                    datasets: [{
                        label: "agent",
                        data: eloow.map((el) => el.count),
                        backgroundColor: arrPrepare(0),
                        borderWidth: 1
                    }],

                }}

                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Agents Visits",
                            font: {
                                size: 15,
                            },
                            color: 'white',
                        }
                    },
                    legend: {
                        display: true,
                        position: "bottom",
                    },
                }}
            />

        </div>
    );
}
