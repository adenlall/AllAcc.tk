import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import toast from 'react-hot-toast'
import React, { useState } from 'react';
import Base from '../Layouts/Base'

export default function Setting() {
    return (

        <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full'>
            <div className="container-fluid p-4 w-full">
                <h3 className='text-3xl mt-2 font-bold rounded-lg text-drk bg-ago p-4 w-full flex items-center justify-center content-center'><span>Comming Soon!</span></h3>
            </div>
        </div>

     );
}

Setting.layout = (page) => <Base children={page} title={"Setting"} />
