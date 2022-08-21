import moment from "moment";
import { Line } from "react-chartjs-2";


function LineStats(props) {

    const data = JSON.parse(props.data);
    const myarr = [];
    const config = [];

    for (let i = 0; i < data.length; i++) { //  [key] => value
            myarr[data[i]['on']] = data[i]['visits'];
    }


    let xy = moment(new Date());
    
    for (let i = 0; i < 7; i++) {
        let ddy = xy.subtract(i, 'days').format("YYYY-MM-DD");
        console.info('(-____-)');
        console.log(ddy);
        
        if(myarr[ddy]!==undefined){
            config.push({on:ddy,visits:myarr[ddy]})
        }else{
            config.push({on:ddy,visits:0})
        }
    }
    
    config.reverse();

    return (
        <>
            <Line
                data={{
                    labels: config.map((con)=>(moment(con.on, "YYYY-MM-DD").format("dddd"))),
                    datasets: [{
                        label: 'visits',
                        data: config.map((con)=>(con.visits)),
                        fill: true,
                        hoverBorderDashOffset: 8,
                        borderColor: '#f6bd60',
                        // borderJoinStyle: 'round',
                        tension: .3,
                        hoverBorderWidth: 22,
                        hoverBackgroundColor: '#f0f8ff',
                    }]
                }}

                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Your daily visits",
                                font: {
                                    size: 15,
                                },
                                color: 'white',
                            },
                            }
                        }}
            />

        </>
    );
}

export default LineStats;
