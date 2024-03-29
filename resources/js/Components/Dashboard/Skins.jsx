import { usePage, useForm, Link } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import '../../../css/fonts.css';

export default function Skins(props) {

    const { auth } = usePage().props;
    const parsed = JSON.parse(auth.user.json_config);
    const theskin = parsed.theme;

    const { data, setData } = useForm({
        skins: theskin.skins, icons: theskin.icons, button: theskin.button, font: theskin.font,
    })

    const skk = data.skins;
    const icc = data.icons;
    const fnt = data.font;
    const button = data.button;

    console.log(props.buttons, props.fonts, props.icons, props.skins);

    const _buttons = JSON.parse(props.buttons);
    const _fonts   = JSON.parse(props.fonts);
    const _icons   = JSON.parse(props.icons);
    const _skins   = JSON.parse(props.skins);

    const setSkin = (skinn, clr) => {
        const element = document.querySelector('.skinn');
        for (let i = 0; i < document.querySelectorAll('.forBorder').length; i++) {
            document.querySelectorAll('.forBorder')[i].style.border = 'none';
        }
        document.getElementById(skinn).style.border = 'solid';
        element.style.background = `${clr}80`;
        // setSkk(skinn);
        setData({ ...data, ['skins']: skinn });

    }

    const over = (e) => {
        let selector = 'set' + e;
        document.getElementById(selector).firstChild.firstChild.innerHTML = "set it";
    }
    const leave = (e) => {
        let selector = 'set' + e;
        document.getElementById(selector).firstChild.firstChild.innerHTML = _icons[e]['c_name'];
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

        // setIcc(icons[e]);
        setData({ ...data, ['icons']: _icons[e]['c_name'] });

        // uncheck others
        for (let i = 0; i < document.querySelector('.ultcont').children.length; i++) {
            const allinall = document.querySelector('.ultcont').children[i].children[0];
            allinall.style.borderWidth = "0em";
        }
        let selector = 'cont' + e;

        let ele = document.getElementById(selector).children[0];
        ele.style.borderWidth = "0.5em";

        document.getElementById(selector).firstChild.firstChild.firstChild.innerHTML = '(.❛ ᴗ ❛.)';
        setTimeout(() => {
            document.getElementById(selector).firstChild.firstChild.firstChild.innerHTML = _icons[e]['c_name'];
        }, 500)
    }

    const cll = () => {
        // console.log(data);
        Inertia.post('/setting/set', data, { restOnSuccess: false, preserveScroll: true });
    }
    const setFont = (e) => {

        setData({ ...data, ['font']: e });
        const contai = document.querySelectorAll('.itt_f');
        const ele = document.getElementById(e);

        for (let i = 0; i < contai.length; i++) {
            let lele = contai[i];
            lele.style.background = '#e5e7eb';
            lele.style.boxShadow = 'none';
        }

        ele.style.background = 'linear-gradient(137deg, white, #8f8f8f)';
        ele.style.boxShadow = 'inset 0 0 0 0.4em black, 0.3em 0.3em black';
    }

    const setbutton = (e) => {
        let a = document.getElementsByClassName('buttons');
        for (let i = 0; i < a.length; i++) {
            a[i].style.background = 'none';
        }
        setData({ ...data, ['button']: e });
        document.getElementById(e).style.background = 'white'
        document.getElementById('buttoncurrent').innerHTML = 'current : ' + e;
    }

    return (
        <>
            {
                parsed.UI === undefined ? '':
                parsed.UI.type === 'Blade' ?
                    <div className="rounded-lg bg-agr p-8 text-white text-lg font-bold text-center w-full">
                        <svg
                            data-name="theme android app aplication phone"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-[4em] h-[4em] fill-white m-auto"
                        >
                            <path d="M30.56 8.47a8 8 0 00-7-7 64.29 64.29 0 00-15.06 0 8 8 0 00-7 7 64.29 64.29 0 000 15.06 8 8 0 007 7 64.29 64.29 0 0015.06 0 8 8 0 007-7 64.29 64.29 0 000-15.06zM15 29V19h2v10h-2zm13.58-5.7a6 6 0 01-5.28 5.28c-1.43.16-2.86.26-4.3.33V19a2 2 0 00-2-2v-2h7a2 2 0 002-2v-3a2 2 0 00-2-2h-1a2 2 0 00-2-2H11a2 2 0 00-2 2v2a2 2 0 002 2h10a2 2 0 002-2h1v3h-7a2 2 0 00-2 2v2a2 2 0 00-2 2v9.91a68.52 68.52 0 01-4.3-.33 6 6 0 01-5.28-5.28 63.65 63.65 0 010-14.6A6 6 0 018.7 3.42a63.65 63.65 0 0114.6 0 6 6 0 015.28 5.28 63.65 63.65 0 010 14.6zM21 10H11V8h10z" />
                        </svg>
                        chose by yourself the color that match your brand<br/>
                        <Link  href="advanced/ui" className="btn m-auto mt-2">customize</Link>
                    </div>
                    :
                    <>
                        <div className='skinn rounded-lg flex flex-col items-start p-3 space-y-2'>
                            <div className='flex flex-col space-y-1'>
                                <h3 id="skins" className='font-bold text-lg'>Chose your skins:</h3>
                                <h5 className='text-sm italic'>current: <span className='text-lg font-bold no-italic'>{theskin.skins}</span>.</h5>
                                {skk !== theskin.skins ? (<h5 style={{ 'lineHeight': '0.5em' }} className='text-sm italic'>selected: <span className='text-lg font-bold no-italic'>{skk}</span>.</h5>) : (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected: <span className='text-lg font-bold no-italic'>current</span>.</h5>)}
                            </div>
                            <div className="w-full">
                                <div className="overflow-hidden w-full flex flex-col sm:flex-row items-stretch content-center justify-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                                    {_skins.map(skins => (
                                        <div key={skins.name} id={skins.name} onClick={() => { setSkin(`${skins.name}`, `${skins.combo.colors[2]}`); }} className={`forBorder cursor-pointer flex flex-col space-y-2 w-full items-center content-center justify-center p-2 rounded-lg`} style={{ 'background': `${skins.combo.colors[0]}59` }}>
                                            <div className='flex w-full flex-row space-x-2 items-center content-center justify-center'>
                                                <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skins.combo.colors[0] }}></span>
                                                <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skins.combo.colors[1] }}></span>
                                                <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skins.combo.colors[2] }}></span>
                                            </div>
                                            <div className="w-full h-16 sm:h-32 rounded-lg">
                                                <img className="w-full h-full object-cover rounded-lg" alt={skins.name} src={`/imgs/config/${skins.name}/Soung/0.jpg`} />
                                            </div>
                                            <h4 className="text-purple-200 font-bold text-xl">{skins.name}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </>
            }

            <div className='skinn rounded-lg flex flex-col items-start p-3 space-y-2'>
                <div id="icons" className='flex flex-col'>
                    <h3 className='font-bold text-lg'>Chose your icons style:</h3>
                    <h5 className='text-sm italic'>current : <span className='text-lg font-bold no-italic'>{theskin.icons}</span>.</h5>
                    {icc !== theskin.icons ? (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected : <span className='text-lg font-bold no-italic'>{icc}</span>.</h5>) : (<h5 className='text-sm italic' style={{ 'lineHeight': '0.5em' }}>selected : <span className='text-lg font-bold no-italic'>current</span>.</h5>)}
                </div>
                <div className='ultcont w-full flex flex-col space-y-3 p-2'>
                    {
                        _icons.map((icon, i) => (

                            <div id={`cont${i}`} className='w-full flex flex-col md:flex-row p-2 space-x-2'>
                                <div id={`set${i}`} onClick={() => { click(i) }} onMouseOver={() => { over(i) }} onMouseLeave={() => { leave(i) }} className='cursor-pointer elemy w-full h-20 md:min-w-[10em] md:max-w-[10em] md:h-40 md:w-40 rounded-lg' style={{ 'background': `url('/imgs/config/BnW/Soung/1.jpg')`, 'backgroundSize': 'cover', 'backgroundRepeat': 'no-repeat' }}>
                                    <div className='p-3 h-full w-full rounded-lg flex flex-row items-center content-center justify-between md:justify-center bg-[#c1dbc55a]'>
                                        <h5 className='texttt text-lg md:text-2xl text-white font-bold' >{icon['c_name']}</h5>
                                        <div className='flex md:hidden flex-row space-x-2 items-center content-center justify-center'>
                                            <img className='hidden xs:block w-10 h-10 rounded-lg' src={`/imgs/icons/${icon['c_name']}/dribbble.svg`} alt="dribbble" />
                                            <img className='w-10 h-10 rounded-lg' src={`/imgs/icons/${icon['c_name']}/linkedin.svg`} alt="linkedin" />
                                            <img className='w-10 h-10 rounded-lg' src={`/imgs/icons/${icon['c_name']}/twitter.svg`} alt="twitter" />
                                        </div>
                                    </div>
                                </div>
                                <div id={`gliss${i}`} onMouseOver={() => { ov(i) }} onMouseLeave={() => { le(i) }} className='eletoanimate hidden md:flex p-8 rounded-lg flex-col items-center space-y-2 content-center justify-center h-40 bg-pink-300' style={{ 'background': `url('/imgs/config/${_skins[i].name}/Soung/0.jpg')`, 'backgroundSize': 'cover' }}>
                                    <h5 className='hidden text-xl font-bold text-white'>Drawing style</h5>
                                    <div className='hidden flex-row space-x-2 items-center content-center justify-center'>
                                        <img className='w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon['c_name']}/dribbble.svg`} alt="dribbble" />
                                        <img className='w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon['c_name']}/linkedin.svg`} alt="linkedin" />
                                        <img className='hidden sm:block w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon['c_name']}/telegram.svg`} alt="telegram" />
                                        <img className='hidden sm:block w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon['c_name']}/twitter.svg`} alt="twitter" />
                                    </div>
                                </div>
                                <div className='ovv hidden md:flex w-full flex-col items-center content-center justify-center'>
                                    <h3 className='text-xl hidden md:block font-light text-center font-serif italic'>{_skins[i].combo.header}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <hr />
            <div className='flex flex-col my-4 space-y-2 w-full '>
                <h3 className='font-bold text-lg'>Links button style:</h3>
                <h3 id='buttoncurrent' className='font-meduim text-sm'></h3>
                <div className="flex flex-wrap items-center w-auto m-auto justify-center">
                    {
                        _buttons.map((button) => (
                            <div id={button} onClick={() => { setbutton(button) }} className='buttons w-[8.5em] m-3 p-2 rounded-lg'>
                                <button className={`w-full m-auto ${button}`}>
                                    <span style={{ fontFamily: 'sans-serif' }} class="text font-bold  overflow-hidden text-ellipsis whitespace-nowrap">mob</span>
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <hr />

            <div className='flex flex-col space-y-2 w-full '>
                <h3 className='font-bold text-lg'>Chose your font:</h3>
                <div className="font flex flex-wrap items-center w-full justify-start">
                    {
                        _fonts.map(font => (
                            <div onClick={() => { setFont(font) }} key={font} id={font} className="itt_f bg-gray-200 rounded-lg m-[2.5%] sm:m-[1.5%] p-4 sm:w-[30%] w-[45%] cursor-pointer flex flex-col items-start border-solid justify-center content-center">
                                <div className='text-gray-900 text-center text-xl xs:text-3xl' style={{ 'fontFamily': `${font}` }}>
                                    Aa
                                </div>
                                <div className='font-bold text-gray-700 text-center text-xs xs:text-sm'>
                                    {font}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div id='forsave' className='p-2 pb-4 flex flex-col space-y-2'>
                <button onClick={() => { cll() }} type="button" className={`btn ${((theskin.icons === icc) && (theskin.button === button) && (theskin.skins === skk) && (theskin.font === fnt)) ? ' btn-disabled' : ''}`}>Save yourSkin</button>
                <p onClick={cll} className='text-sm italic font-light'>You can always change your skins.</p>
                <p className='text-sm italic font-light'>Help us to create more skins on our <a className='font-bold text-pink-300' target={'_blank'} href='https://github.com/adenlall/allacc'>GitHub page</a>.</p>
            </div>
        </>
    );
}
