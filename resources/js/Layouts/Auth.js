import { Head, usePage } from '@inertiajs/inertia-react'
import Navbar from '../Components/Dashboard/Navbar'
import toast, { Toaster } from 'react-hot-toast'
import React from 'react'

export default function Auth({ children, title }) {
    const { flash } = usePage().props;

    if (flash) {
        flash.type && toast[flash.type](flash.message)
    }

    return (


        <div className="g-sidenav-show bg-[#042b28]">
            <div className="min-height-300 bg-primary position-absolute w-100"></div>
            <Head title={title} />
            <Navbar pageName={title} />
            <main className="main-content position-relative border-radius-lg d-flex flex-column min-vh-100 ">
                <Toaster position='top-center' duration='4000' />
                {children}
            </main>
        </div>
    )
}
