import React from 'react'

import Guest   from '../Layouts/Guest'
import Content from '../Components/Guest/Content'
import Header  from '../Components/Guest/Header'
import Feature from '../Components/Guest/Feature';
import Steps   from '../Components/Guest/Steps';
import { usePage } from '@inertiajs/inertia-react';



export default function Home() {
    const { lang } = usePage().props
    return (
        <>

            <Header  lang={JSON.stringify(lang.header)} />
            <Content lang={JSON.stringify(lang.content)} />
            <Feature lang={JSON.stringify(lang.feature)} />
            <Steps   lang={JSON.stringify(lang.steps)} />
            {/* <h1>Hello & mester</h1> */}
            {/* <p>hello mr father</p> */}

        </>
    )
}

Home.layout = (page) => <Guest children={page} title={"Home - AllAcc"} />
