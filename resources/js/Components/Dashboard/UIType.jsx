import { Inertia } from "@inertiajs/inertia";

function UIType() {
    const over = (e) =>
    {
        document.getElementById(`type-h-${e}`).style.display = 'none';
        document.getElementById(`type-d-${e}`).style.display = 'flex';
    }
    const out = (e) =>
    {
        document.getElementById(`type-h-${e}`).style.display = 'block';
        document.getElementById(`type-d-${e}`).style.display = 'none';
    }
    const isType = (e) =>
    {
        Inertia.post('setting/set?is=ui',{data:e});
    }

    return (
        <div className="flex sm:flex-row flex-col items-center justify-center content-center sm:space-x-2 space-y-2 sm:space-y-0 w-full">
            <div className="rounded-lg bg-[url(/imgs/app/react.jpg)] w-full h-[12em] bg-contain bg-no-repeat bg-center bg-white sm:h-[17em]">
                <div onMouseOver={()=>{over(0)}} onMouseOut={()=>{out(0)}} className="type-js type-all rounded-lg w-full h-full bg-yellow-300 p-2 flex items-center justify-center content-center">
                    <h1 id="type-h-0" className="text-3xl font-extrabold text-center text-black">JSX</h1>
                    <div id="type-d-0" className="menu hidden text-black font-bold text-lg">
                        <li>Built with JavaScript</li>
                        <li>For stander use</li>
                        <li>Funny user interface</li>
                        <button onClick={()=>{isType('JSX')}} className="btn btn-sm m-auto mt-3">Set it!</button>
                    </div>
                </div>
            </div>
            <div className="rounded-lg bg-[url(/imgs/app/laravel.jpg)] w-full h-[12em] bg-contain bg-no-repeat bg-center bg-[#ef3c2f] sm:h-[17em]">
                <div onMouseOver={()=>{over(1)}} onMouseOut={()=>{out(1)}} className="type-php type-all rounded-lg w-full h-full bg-red-500 p-2 flex items-center justify-center content-center">
                    <h1 id="type-h-1" className="text-3xl font-extrabold text-center text-black">Blade</h1>
                    <div id="type-d-1" className="menu hidden text-black font-bold text-lg">
                        <li>Built with Laravel Blade</li>
                        <li>For profotionel use</li>
                        <li>Simple user interface</li>
                        <button onClick={()=>{isType('Blade')}} className="btn btn-sm m-auto mt-3">Set it!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UIType;
