import Outside from "../Components/Dashboard/Outside";
import Base from "../Layouts/Base";


export default function Advanced() {


    return (
        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
            <h2 className='text-2xl font-extrabold py-4'>Advanded setup</h2>

            <Outside/>

            <h2 className="text-lg font-bold my-4">Custom HTML : </h2>
                <div className="flex flex-col items-center text-black justify-center p-4 py-[4em] rounded-lg bg-ago">
                    This feature not available now for some security issues
                </div>


                <h2 className="text-lg font-bold my-4">Repair Account : </h2>
                <div className="flex flex-col items-center text-black justify-center p-4 py-[2em] space-y-2 rounded-lg bg-ago">
                    <span>Pepair your account and see your data stored in DBs </span>
                    <a class="btn btn-accent" href="/dd/repair">Repair</a>
                </div>


        </div>
     );
}
Advanced.layout = (page) => <Base children={page} title={"Advanced - AllAcc"} />
