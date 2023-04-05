import { Head, usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Dashboard/Navbar';
import Statistic from '../Components/Guest/Statistic';
import Footer from '../Components/Guest/Footer';
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'


export default function Guest({ children, title }) {//resources/js/Components/Guest/Statistic.jsx
    const { flash, ibd } = usePage().props;
    useEffect(() => {
        flash.type && toast[flash.type](flash.message)
    })
    console.log(ibd);

    return (
        <div className='bg-ap3'>
            <Head title={title} />
            <Toaster />
            <Navbar />
            {children}
            <Statistic lang={JSON.stringify(ibd.home.chart)} />
            <Footer lang={JSON.stringify(ibd.home.footer)} />
        </div>
    )
}
