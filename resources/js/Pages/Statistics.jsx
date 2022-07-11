import Base from '../Layouts/Base';


export default function Statistics() {


    return ( 
            
        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
        <h2 className='text-2xl font-extrabold py-4'>Welcome to your new Statistics :</h2>

            <div className="h-[70vh] w-full p-4 bg-ago text-black text-lg text-bold rounded-lg flex flex-row items-center justify-center content-center">
                This feature will come very soon!
            </div>

        </div>
        );  
}

Statistics.layout = (page) => <Base children={page} title={"Statistics - AllAcc"} />
