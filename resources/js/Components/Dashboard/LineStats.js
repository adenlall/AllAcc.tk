import moment from "moment";
import { Line } from "react-chartjs-2";


function LineStats(props) {

    const data = JSON.parse(props.data);
    const myarr = [];
    const config = [];

    for (let i = 0; i < data.length; i++) {
            myarr[data[i]['on']] = data[i]['visits'];
    }


    let curentDate = moment(new Date());
    for (let i = 0; i < 7; i++) {
        let xy = curentDate.subtract(1, "days");
        xy = xy.format("YYYY-MM-DD");
        if(myarr[xy]!==undefined){
            config.push({on:xy,visits:myarr[xy]})
        }else{
            config.push({on:xy,visits:0})
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
