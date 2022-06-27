import { Head, usePage } from '@inertiajs/inertia-react';
import Navbar from '../Components/Dashboard/Navbar';
import Statistic from '../Components/Guest/Statistic';
import Footer from '../Components/Guest/Footer';
import React from 'react'


export default function Guest({children, title}) {//resources/js/Components/Guest/Statistic.jsx
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
