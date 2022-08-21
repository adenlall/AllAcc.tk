// import { Chart } from 'react-chartjs-2'
import * as ChartGeo from 'chartjs-chart-geo';
import { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import '../../../css/map.css';
import axios from 'axios';

export default function Map(props) {



    useEffect(() => {
        // let indice = true;
    const data = JSON.parse(props.geo);
        let arr = {};
        data.forEach(x => {
            arr[x.is] = x.count;
        });

        let canvas = document.getElementById("canvas")
        if (!canvas) return

        axios.get('https://unpkg.com/world-atlas/countries-50m.json')
            .then((data) => {

                const ddd = data.data;
                const countries = ChartGeo.topojson.feature(ddd, ddd.objects.countries).features;
                const chart = new Chart(canvas.getContext("2d"), {
                    type: 'choropleth',
                    type: 'choropleth',
                    data: {
                        labels: countries.map((d) => d.properties.name),
                        datasets: [{
                            label: 'Countries',
                            data: countries.map((d) => ({ feature: d, value: arr[d.properties.name] !== undefined ? arr[d.properties.name] : 0 })),
                        }]
                    },
                    options: {
                        showOutline: false,
                        showGraticule: true,
                        plugins: {
                            legend: {
                                display: false
                            },

                            title: {
                                display: false,
                            },
                        },
                        color: 'yellow',
                        scales: {
                            xy: {
                                projection: 'equirectangular'
                            }
                        }
                    }
                })


            })

    });


    return (

                <div className='w-full' style={{ width: '100%' }}>
                    <canvas id='canvas' className="canvas"></canvas>
                </div>

    )
}
