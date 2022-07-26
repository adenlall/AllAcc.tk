import { Head, usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Dashboard/Navbar';
import Statistic from '../Components/Guest/Statistic';
import Footer from '../Components/Guest/Footer';
import React, { useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'


export default function Guest({children, title}) {//resources/js/Components/Guest/Statistic.jsx
    const { flash } = usePage().props;

    useEffect(()=>{
        flash.type && toast[flash.type](flash.message)
    })

    return (
    <div className='bg-ap3'>
        <Head title={ title } />
        <Navbar/>
        {children}
        <Statistic/>
        <Footer/>
    </div>
  )
}
