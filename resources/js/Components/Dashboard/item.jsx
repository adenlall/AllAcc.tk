import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia'

export default function Item(props) {
    // className=
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
        <div className={'w-full flex flex-row items-stretch max-w-[30em] p-4 rounded-xl'} style={{ background: `linear-gradient(22deg, #${props.mColor}, #${props.sColor})` }} >
            <div className='w-[6.5em] h-full rounded-xl'>
                <img className='rounded-xl object-contain w-[6.5em] h-full bg-white p-2' src={props.img} alt={props.name} />
            </div>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-0 pl-2'>
                <div className='flex flex-col'>
                    <header className='text-xl font-bold text-white '>{props.name}</header>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-ap1">Your username</span>
                    </label>
                    <label className="input-group">
                        <span>@</span>
                        <input id="data" value={values.data} onChange={handleChange} type="text" placeholder="aden_lall_02" className="input input-accent input-bordered" />
                    </label>
                    <button className='btn btn-sm mt-2' type='submit'>
                        save
                    </button>
                </div>
            </form>


        </div>
    )

}
