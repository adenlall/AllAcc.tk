import { Inertia } from "@inertiajs/inertia";
import toast from "react-hot-toast";
import { usePage, Link } from '@inertiajs/inertia-react';


export default function Outside() {
    const { auth, advanced } = usePage().props;
    // console.log(advanced);

    function check_if_repeated(e){
        for (let i = 0; i <  advanced.from.length; i++) {
            const ele =  advanced.from[i].is;
            if(ele === e){
                return false;
            }
        }
        return true;
    }

    const cll = () => {
        let data = document.querySelector('#place').value;
        if (data === "" || data === null || data.match(" ") !== null) {
            toast['error']("we can't submit this!");
        } else {
           if(check_if_repeated(data)){
               Inertia.post('/advanced/set?is=outside&action=add', { data: data }, { restOnSuccess: false, preserveScroll: true });
           }else{
                toast['error']("source already exists!");
           }
        };
    };

    return (
        <>
            <div>
                <div className="flex flex-col shadow-lg lg:flex-row items-center justify-between p-2 text-lg  rounded-lg font-bold bg-ago text-black w-full">
                    <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row items-center justify-center lg:w-auto w-full">
                        <p className="bg-ap2 text-sm lg:text-lg flex rounded-lg mr-0 lg:mr-[-0.2em] p-2 sm:w-auto w-full "><span className="sm:block hidden">https://</span>allacc.herokuapp.com/{auth.user.username}</p>
                        <span className="p-2 pl-[0.1em] border-dashed border-[#042b28] border-[0.2em] sm:w-auto w-full bg-ap2 rounded-lg text-black font-bold md:text-lg lg:text-xl text-lg flex items-center" style={{ 'boxShadow': '-4px 5px 0px 0px black' }}>?from=<input type="text" name="place" id="place" className="input bg-white sm:h-fit lg:h-[3em] h-[3em] text-sm w-auto max-w-[9em] md:max-w-auto ml-2 md:ml-0 sm:w-[5em] lg:w-inherit" /></span>
                    </div>
                    <div className="lg:pt-0 pt-3 flex items-center justify-between lg:w-auto w-full">
                        <span className="lg:hidden block">submit : {' '}</span><button onClick={() => { cll() }} className="btn btn-accent mr-2" type="button">Add it</button>
                    </div>
                </div>
                <h2 className="text-lg font-bold my-4">Current outsides : </h2>
                <div className="flex flex-col items-center justify-center space-y-2">
                    {
                        advanced.from.length !== 0 ?
                            (
                                advanced.from.map((adv, i) => (
                                    <div className="flex flex-col lg:flex-row items-center rounded-lg bg-[darkslategray] w-full justify-between p-2">
                                        <div class="mockup-code w-[inherit] lg:w-[78%] text-[#a6adba] bg-[#191d24] rounded-lg">
                                            <pre className="text-[#fbbd23]" data-prefix=">" class="text-[#fbbd23]"><code>{adv.is}</code></pre>
                                            <pre className="text-[#36d399]" data-prefix=">" class="text-[#36d399]"><code>the link : <code>https://allacc.herokuapp.com/{auth.user.username}?from={adv.is}</code></code></pre>
                                        </div>
                                        <div className='lg:space-x-0 space-x-2 lg:space-y-2 space-y-0 flex flex-row lg:flex-col p-2 lg:items-start items-center lg:justify-center justify-between w-full lg:w-auto'>
                                            <code className="lg:text-lg text-xl font-extrabold">Clicks : <span className="text-ap1 font-bold text-xl">{adv.clicks}</span></code>
                                            <div className="space-x-2 flex flex-row">
                                                <Link preserveScroll as="button" method="post" data={{ data: adv.is }} href={'/advanced/set?is=outside&action=setzero'} className="btn w-auto">Set to 0</Link>
                                                <Link preserveScroll as="button" method="post" data={{ data: adv.is }} href={'/advanced/set?is=outside&action=delete'} className="btn btn-square"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg></Link>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )
                            :
                            (
                                <div className="w-full rounded-lg p-4 bg-ago flex flex-col items-center justify-center spce-y-2">
                                    <h4 className="text-sm italic text-[#3c3c3c]">Add your outside sources from the input above to see them here</h4>
                                        <article className="text-[#3c3c3c] w-[inherit]">
                                            <h3 className="text-xl font-bold m-auto text-center ">What's this ?</h3>
                                            <p className="article text-lg space-y-2 w-auto">
                                                <li>When you get your Public link from your Dashboard and you past it in your accounts Instagram, Facebook, Twitter..., and someone click it he enter to your public page, and you see that your public page incement in your Statistics page.</li>
                                                <li>But What about if you want to know how many people clicked the link in specific place let's say <span className="text-black">Twitter</span> for example.</li>
                                                <li>For that, you can add a <span className="text-black">"from"</span> parameter in your url in Twitter, and name it <span className="text-black">"twitter"</span>.</li>
                                                <li>At the end, your public page URL will be like this <code className="text-black italic break-words">https://allacc.herokuapp.com/{auth.user.username}/<span className="font-bold">?from=twitter</span></code></li>
                                                <li>And now, you can see every click on that link from <span className="text-black">Twitter</span> in this case.</li>
                                                <li>And you can add how much you want of "outside sources".</li>
                                            </p>
                                        </article>
                                </div>
                            )
                    }
                </div>

                <h2 className="text-lg font-bold my-4">Costum HTML : </h2>
                <div className="flex flex-col items-center text-black justify-center p-4 py-[4em] rounded-lg bg-ago">
                    This feature not available yet
                </div>


            </div>

        </>
    );
}
