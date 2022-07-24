import { usePage, useForm } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import '../../../css/fonts.css';
import '../../../css/button.css';

export default function Skin(props) {

    const { auth } = usePage().props;
    const theskin = JSON.parse(auth.user.json_config).theme;

    const { data, setData } = useForm({
        skin: theskin.skin, icons: theskin.icons, button: theskin.button, font: theskin.font,
    })

    const skk = data.skin;
    const icc = data.icons;
    const fnt = data.font;
    const button = data.button;

    const buttons = ['orangebtn', 'oldbtn', 'roundedborderbtn', 'rgbbtn', 'purplebtn', 'blurbtn'];
    const fonts = ['BeatWord', 'Calygraphy', 'Gracheva', 'OldGorgeous', 'OldMe', 'Profont'];
    const skins = ['NnP', 'Vnt', 'RPG', 'BnW', 'Ind'];
    const icons = ['rB', 'Vx', 'C4', 'Dr', 'oB'];
    const _icons = JSON.parse(props.icons);
    const _skins = JSON.parse(props.skins);

    const setSkin = (skinn, clr) => {
        const element = document.querySelector('.skinn');
        for (let i = 0; i < document.querySelectorAll('.forBorder').length; i++) {
            document.querySelectorAll('.forBorder')[i].style.border = 'none';
        }
        document.getElementById(skinn).style.border = 'solid';
        element.style.background = `${clr}80`;
        // setSkk(skinn);
        setData({ ...data, ['skin']: skinn });

    }

    const over = (e) => {
        let selector = 'set' + e;
        document.getElementById(selector).firstChild.firstChild.innerHTML = "set it";
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

        // setIcc(icons[e]);
        setData({ ...data, ['icons']: icons[e] });

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
            document.getElementById(selector).firstChild.firstChild.firstChild.innerHTML = icons[e];
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
        for(let i=0; i<a.length; i++){
            a[i].style.background='none';
        }
        setData({ ...data, ['button']: e });
            document.getElementById(e).style.background='white'
            document.getElementById('buttoncurrent').innerHTML= 'current : '+ e;
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
                    <div className="overflow-hidden w-full flex flex-col sm:flex-row items-stretch content-center justify-center space-x-0 sm:space-x-2 space-y-2 sm:space-y-0">
                        {
                            _skins.map(skin => (
                                <div key={skin.name} id={skin.name} onClick={() => { setSkin(`${skin.name}`, `${skin.combo.colors[2]}`) }} className={`forBorder cursor-pointer flex flex-col space-y-2 w-full items-center content-center justify-center p-2 rounded-lg`} style={{ 'background': `${skin.combo.colors[0]}59` }}>
                                    <div className='flex w-full flex-row space-x-2 items-center content-center justify-center'>
                                        <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skin.combo.colors[0] }}></span>
                                        <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skin.combo.colors[1] }}></span>
                                        <span className={`rounded-lg h-8 sm:h-12 w-1/3`} style={{ 'background': skin.combo.colors[2] }}></span>
                                    </div>
                                    <div className="w-full h-16 sm:h-32 rounded-lg">
                                        <img className="w-full h-full object-cover rounded-lg" alt={skin.name} src={`/imgs/config/${skin.name}/Soung/0.jpg`} />
                                    </div>
                                    <h4 className="text-purple-200 font-bold text-xl">{skin.name}</h4>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <hr />

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
                                        <h5 className='texttt text-lg md:text-2xl text-white font-bold' >{icon.icons}</h5>
                                        <div className='flex md:hidden flex-row space-x-2 items-center content-center justify-center'>
                                            <img className='hidden xs:block w-10 h-10 rounded-lg' src={`/imgs/icons/${icon.icons}/dribbble.svg`} alt="dribbble" />
                                            <img className='w-10 h-10 rounded-lg' src={`/imgs/icons/${icon.icons}/linkedin.svg`} alt="linkedin" />
                                            <img className='w-10 h-10 rounded-lg' src={`/imgs/icons/${icon.icons}/twitter.svg`} alt="twitter" />
                                        </div>
                                    </div>
                                </div>
                                <div id={`gliss${i}`} onMouseOver={() => { ov(i) }} onMouseLeave={() => { le(i) }} className='eletoanimate hidden md:flex p-8 rounded-lg flex-col items-center space-y-2 content-center justify-center h-40 bg-pink-300' style={{ 'background': `url('/imgs/config/${_skins[i].name}/Soung/0.jpg')`, 'backgroundSize': 'cover' }}>
                                    <h5 className='hidden text-xl font-bold text-white'>Drawing style</h5>
                                    <div className='hidden flex-row space-x-2 items-center content-center justify-center'>
                                        <img className='w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon.icons}/dribbble.svg`} alt="dribbble" />
                                        <img className='w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon.icons}/linkedin.svg`} alt="linkedin" />
                                        <img className='hidden sm:block w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon.icons}/telegram.svg`} alt="telegram" />
                                        <img className='hidden sm:block w-10 md:w-20 h-10 md:h-20 rounded-lg' src={`/imgs/icons/${icon.icons}/twitter.svg`} alt="twitter" />
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
                        buttons.map((button) => (
                            <div id={button} onClick={()=>{setbutton(button)}} className='buttons w-[8.5em] m-3 p-2 rounded-lg'>
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
                <div className="fonts flex flex-wrap items-center w-full justify-start">
                    {
                        fonts.map(font => (
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
                <button onClick={() => { cll() }} type="button" className={`btn ${((theskin.icons === icc) && (theskin.button === button) && (theskin.skin === skk) && (theskin.font === fnt)) ? ' btn-disabled' : ''}`}>Save yourSkin</button>
                <p onClick={cll} className='text-sm italic font-light'>You can always change your skins.</p>
                <p className='text-sm italic font-light'>Help us to create more skins on our <a className='font-bold text-pink-300' target={'_blank'} href='https://github.com/adenlall/allacc'>GitHub page</a>.</p>
            </div>
        </>
    );
}
