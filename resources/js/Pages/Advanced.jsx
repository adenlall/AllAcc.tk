import Outside from "../Components/Dashboard/Outside";
import Base from "../Layouts/Base";


export default function Advanced() {


    return (
        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
            <h2 className='text-2xl font-extrabold py-4'>Advanded setup</h2>

            <Outside/>


        </div>
     );
}
Advanced.layout = (page) => <Base children={page} title={"Advanced - AllAcc"} />
