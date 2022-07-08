import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react';

export default function Item(props) {

    const { errors } = usePage().props;
    const name = props.name;
    const [values, setValues] = useState({
        username: props.user,
        name: name.replace(/\./g, ""),
        data: "",
    })
    const handleChange = (e) => {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
        // console.log(values)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/setting', values)
    }


    return (
        <div className={'flex flex-row items-stretch w-full xs:w-[17em] ss:w-[20em] ls:w-[25em] p-4 rounded-xl'} style={{ background: `linear-gradient(22deg, #${props.mColor}, #${props.sColor})` }} >
            <div className='w-auto max-w-[3em] xs:max-w-[7em] h-full rounded-xl'>
                <img className='rounded-xl object-contain w-auto max-w-[3em] xs:max-w-[7em] h-full bg-white p-2' src={props.img} alt={props.name} />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-0 pl-2'>
                <div className='flex flex-col'>
                    <header className='text-xl font-bold text-white '>{props.name}</header>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-white">Your username</span>
                    </label>
                    <label className="input-group">
                        <span>@</span>
                        <input id="data" value={values.data} onChange={handleChange} type="text" placeholder="aden_lall_02" className="input input-accent w-[inherit] bg-white input-bordered" />
                    </label>
                    {errors.data ?(
                    <div className='label-text-alt text-red-700'>
                        {errors.data}
                    </div>
                    ) : ''}
                    <button className='btn btn-sm mt-2' type='submit'>
                        save
                    </button>
                </div>
            </form>


        </div>
    )

}
/*
<div id="item_instagram" class="flex flex-row-reverse mt-4"><svg class="h-10 w-10 absolute cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9L15 15"></path><path d="M15 9L9 15"></path></svg><div class="w-full flex flex-row items-stretch max-w-[30em] p-4 rounded-xl" style="background: linear-gradient(22deg, rgb(131, 58, 180), rgb(253, 29, 29));  "><div class="w-auto max-w-[3em] xs:max-w-[7em] h-full rounded-xl"><img class="rounded-xl object-contain w-auto max-w-[3em] xs:max-w-[7em] h-full bg-white p-2" src="https://nice-direct-links.herokuapp.com/12560/file.jpg"                alt="instagram"></div><form class="flex flex-col space-y-0 pl-2"><div class="flex flex-col"><header class="text-xl font-bold text-white ">instagram</header></div><div class="form-control"><label class="label"><span class="label-text text-white">Your username</span></label><label class="input-group"><span>@</span><input id="data" type="text" placeholder="aden_lall_02" class="input input-accent w-[inherit] bg-white input-bordered" value=""></label><button class="btn btn-sm mt-2" type="submit">save</button></div></form></div></div>
<div id="item_facebook"  class="flex flex-row-reverse mt-4"><svg class="h-10 w-10 absolute cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><path d="M9 9L15 15"></path><path d="M15 9L9 15"></path></svg><div class="w-full flex flex-row items-stretch max-w-[30em] p-4 rounded-xl" style="background: linear-gradient(22deg, rgb(24, 119, 242), rgb(255, 255, 255));"><div class="w-auto max-w-[3em] xs:max-w-[7em] h-full rounded-xl"><img class="rounded-xl object-contain w-auto max-w-[3em] xs:max-w-[7em] h-full bg-white p-2" src="https://nice-direct-links.herokuapp.com/12557/facebook-svgrepo-com.svg" alt="facebook"></div><form class="flex flex-col space-y-0 pl-2"><div class="flex flex-col"><header class="text-xl font-bold text-white ">facebook </header></div><div class="form-control"><label class="label"><span class="label-text text-white">Your username</span></label><label class="input-group"><span>@</span><input id="data" type="text" placeholder="aden_lall_02" class="input input-accent w-[inherit] bg-white input-bordered" value=""></label><button class="btn btn-sm mt-2" type="submit">save</button></div></form></div></div>
*/
