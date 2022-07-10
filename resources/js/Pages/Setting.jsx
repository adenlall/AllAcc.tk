
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import Base from '../Layouts/Base';
import Skin from '../Components/Dashboard/Skin';
import { usePage } from '@inertiajs/inertia-react';


export default function Setting() {
    const {icons, skins} = usePage().props;

    return (

        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full'>
            <div className="container-fluid p-4 w-full">
                <h2 className='text-3xl py-2 font-bold rounded-lg w-full'>Manage your setting</h2>
            </div>
            {/* SKINS */}
            <Skin skins={JSON.stringify(skins)} icons={JSON.stringify(icons)}  />

        </div>

     );
}

Setting.layout = (page) => <Base children={page} title={"Setting"} />
