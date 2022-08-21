
import toast from 'react-hot-toast';
import React, { useState } from 'react';
import Base from '../Layouts/Base';
import Skin from '../Components/Dashboard/Skin';
import { usePage } from '@inertiajs/inertia-react';
import UIType from '../Components/Dashboard/UIType';


export default function Setting() {
    const { icons, skins } = usePage().props;
    const [ ind, setInd ]  = useState(0);

    return (

        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full'>
            <div className="container-fluid p-4 w-full">
                <h2 className='text-3xl py-2 font-bold rounded-lg w-full'>Manage your setting</h2>
            </div>
            <div class="tabs tabs-boxed w-fit sm:m-2 m-auto">
                <button onClick={()=>{setInd(0)}} type="button" class={`tab ${ind === 0 ? 'tab-active' : ''}`} >Type</button>
                <button onClick={()=>{setInd(1)}} type="button" class={`tab ${ind === 1 ? 'tab-active' : ''}`} >Settings</button>
            </div>
            {
                ind === 1 ?
                <Skin skins={JSON.stringify(skins)} icons={JSON.stringify(icons)} />
                : ind === 0 ?
                <UIType/>
                :''
            }

        </div>

    );
}

Setting.layout = (page) => <Base children={page} title={"Setting - AllAcc"} />
