import React from 'react'

import Guest   from '../Layouts/Guest'
import Content from '../Components/Guest/Content'
import Header  from '../Components/Guest/Header'
import Feature from '../Components/Guest/Feature';
import Steps   from '../Components/Guest/Steps';



export default function Home() {
    return (
        <>

            <Header  />
            <Content />
            <Feature />
            <Steps   />
            {/* <h1>Hello & mester</h1> */}
            {/* <p>hello mr father</p> */}

        </>
    )
}

Home.layout = (page) => <Guest children={page} title={"Home"} />
