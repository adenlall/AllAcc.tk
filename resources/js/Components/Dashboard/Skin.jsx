import React, { useState, useEffect } from 'react';
import { usePage, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';


export default function Skin(props) {

    const { auth } = usePage().props;
    const theskin = JSON.parse(auth.user.json_config).theme;
    // console.log(theskin);

    const [skk, setSkk] = useState(theskin.skin);
    const [icc, setIcc] = useState(theskin.icons);

    const skins = ['NnP', 'RRG', 'BnW', 'Ind'];
    const icons = ['light', 'drawing', 'lines', 'blackwhite'];
    const _icons = JSON.parse(props.icons);
    const _skins = JSON.parse(props.skins);
    console.log(_icons, _skins)

    const setSkin = (skin, clr) => {

        const element = document.querySelector('.skinn');
        element.style.background = `${clr}59`;
        setSkk(skin);

    }




    useEffect(() => {
        console.log('icon ' + icc);
        console.log('skin ' + skk);
    }, [icc, skk]);

    const over = (e) => {
        let selector = 'set' + e;
        document.getElementById(selector).firstChild.firstChild.innerHTML = "Set it!";
    }
    const leave = (e) => {
        let selector = 'set' + e;
        document.getElementById(selector).firstChild.firstChild.innerHTML = icons[e];
    }
    const ov = (e) => {
        let selector = 'cont' + e;
        document.getElementById(selector).children[2].style.display = "none";
        document.getElementById(selector).children[1].style.width = "100%";
        document.getElementById(selector).children[1].children[0].style.visibility = "hidden";
        document.getElementById(selector).children[1].children[1].style.visibility = "hidden";
        for (let i = 0; i < document.getElementById(selector).children[1].children.length; i++) {
            document.getElementById(selector).children[1].children[i].style.display = "flex";
        }
        setTimeout(() => {
            document.getElementById(selector).children[1].children[1].style.visibility = "visible";
            document.getElementById(selector).children[1].children[0].style.visibility = "visible";
        }, 250);
    }
    const le = (e) => {
        let selector = 'cont' + e;
        let ele = document.getElementById(selector);
        ele.children[2].style.display = "flex";
        ele.children[1].style.width = "auto";
        for (let i = 0; i < ele.children[1].children.length; i++) {
            ele.children[1].children[i].style.display = "none";
        }
    }

    const click = (e) => {

        setIcc(icons[e]);

        // uncheck others
        for (let i = 0; i < document.querySelector('.ultcont').children.length; i++) {
            const allinall = document.querySelector('.ultcont').children[i].children[0];
            allinall.style.borderWidth = "0em";
        }
        let selector = 'cont' + e;

        let ele = document.getElementById(selector).children[0];
        ele.style.borderWidth = "0.5em";

        document.getElementById(selector).firstChild.firstChild.firstChild.innerHTML = 'Selected!';
        setTimeout(() => {
            document.getElementById(selector).firstChild.firstChild.firstChild.innerHTML = icons[e];
        }, 500)
    }

    const cll = () => {
        // console.log({ skin: skk, icons: icc })
        Inertia.post('/setting/set',{ skin: skk, icons: icc }, { restOnSuccess:true,preserveScroll: true });
    }



    return (
        <>
            <div className='skinn rounded-lg flex flex-col items-start p-3 space-y-2'>
                <div className='flex flex-col space-y-1'>
                    <h3 id="skin" className='font-bold text-lg'>Chose your skin:</h3>
                    <h5 className='text-sm italic'>current : <span className='text-lg font-bold no-italic'>{theskin.skin}</span>.</h5>
                    {skk !== theskin.skin ? (<h5 style={{ 'lineHeight': '0.5em' }} className='text-sm italic'>selected : <span className='text-lg font-bold no-italic'>{skk}</span>.</h5>) : (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected : <span className='text-lg font-bold no-italic'>current</span>.</h5>)}
                </div>
                <div className="w-full">
                    <div className="overflow-hidden w-full flex flex-row items-stretch content-center justify-center space-x-2">
                        {
                            _skins.map(skin => (
                                <div key={skin.name} onClick={() => { setSkin(`${skin.name}`, `${skin.combo.colors[1]}`) }} className={`cursor-pointer flex flex-col space-y-2 w-full items-center content-center justify-center p-2 rounded-lg`} style={{ 'background': `${skin.combo.colors[0]}59` }}>
                                    <div className='flex w-full flex-row space-x-2 items-center content-center justify-center'>
                                        <span className={`rounded-lg h-12 w-1/3`} style={{ 'background': skin.combo.colors[0] }}></span>
                                        <span className={`rounded-lg h-12 w-1/3`} style={{ 'background': skin.combo.colors[1] }}></span>
                                        <span className={`rounded-lg h-12 w-1/3`} style={{ 'background': skin.combo.colors[2] }}></span>
                                    </div>
                                    <div className="w-full h-32 rounded-lg">
                                        <img className="w-full h-full object-cover rounded-lg" alt={skin.name} src={skin.combo.data.imgs[1]} />
                                    </div>
                                    <h4 className="text-purple-200 font-bold text-xl">{skin.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='skinn rounded-lg flex flex-col items-start p-3 space-y-2'>
                <div id="icons" className='flex flex-col'>
                    <h3 className='font-bold text-lg'>Chose your icons style:</h3>
                    <h5 className='text-sm italic'>current : <span className='text-lg font-bold no-italic'>{theskin.icons}</span>.</h5>
                    {icc !== theskin.icons ? (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected : <span className='text-lg font-bold no-italic'>{icc}</span>.</h5>) : (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected : <span className='text-lg font-bold no-italic'>current</span>.</h5>)}
                </div>
                <div className='ultcont w-full flex flex-col space-y-3 p-2'>
                    {
                        _icons.map((icon, i) => (

                            <div id={`cont${i}`} className='w-full flex flex-row p-2 space-x-2'>
                                <div id="set0" onClick={() => { click(i) }} onMouseOver={() => { over(i) }} onMouseLeave={() => { leave(i) }} className='cursor-pointer h-40 w-40 elemy min-w-40 max-w-40 rounded-lg'style={{'background':`url(${_skins[i].combo.data.imgs[1]})`,'backgroundSize':'cover','backgroundRepeat':'no-repeat'}}>
                                    <div className='p-3 h-full w-full rounded-lg flex flex-col items-center content-center justify-center bg-[#f572d05a]'>
                                        <h5 className='texttt text-2xl text-black font-bold' style={{ 'text-shadow': 'white 0 0 9px' }}>{icon.icons}</h5>
                                    </div>
                                </div>
                                <div id={`gliss${i}`} onMouseOver={() => { ov(i) }} onMouseLeave={() => { le(i) }} className='eletoanimate p-8 rounded-lg flex flex-col items-center space-y-2 content-center justify-center h-40 bg-pink-300'style={{'background':`url(${_skins[i].combo.data.imgs[0]})`,'backgroundSize':'cover'}}>
                                    <h5 className='hidden text-xl font-bold text-white'>Drawing style</h5>
                                    <div className='hidden flex-row space-x-2 items-center content-center justify-center'>
                                        <img className='hidden sm:block w-10 min-w-10 md:w-20 md:min-w-20 rounded-lg' src={icon.combo[0]} alt="" />
                                        <img className='hidden sm:block w-10 min-w-10 md:w-20 md:min-w-20 rounded-lg' src={icon.combo[1]} alt="" />
                                        <img className='w-10 min-w-10 md:w-20 md:min-w-20 rounded-lg' src={icon.combo[2]} alt="" />
                                        <img className='w-10 min-w-10 md:w-20 md:min-w-20 rounded-lg' src={icon.combo[3]} alt="" />
                                    </div>
                                </div>
                                <div className='ovv hidden sm:flex w-full flex-col items-center content-center justify-center'>
                                    <h3 className='text-xl hidden sm:block font-light text-center font-serif italic'>{_skins[i].combo.json_headers[0]}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div id='forsave' className='p-2 pb-4 flex flex-col space-y-2'>
                {((theskin.icons === icc) && (theskin.skin === skk)) ? '' : (<button onClick={()=>{cll()}} type="button" className='btn'>Save yourSkin</button>)}
                <p onClick={cll} className='text-sm italic font-light'>You can always change your skins.</p>
                <p className='text-sm italic font-light'>Help us to create more skins on our <a className='font-bold text-pink-300' target={'_blank'} href='https://github.com/adenlall/allacc'>GitHub page</a>.</p>
            </div>
        </>
    );
}
