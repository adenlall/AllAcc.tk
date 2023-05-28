import Base from "../../Layouts/Base";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import CosUI from "../../Components/Dashboard/theme/CosUI";

export default function UI() {
    const { cosUI1, cosUI2, ediUI1, ediUI2, skins, active } = usePage().props;
    const [color, setColor] = useState(()=>{
        if(active === "custom1"){
            return cosUI1;
        }
        if(active === "custom2"){
            return cosUI2;
        }
        if(active === "editor1"){
            return ediUI1;
        }
        if(active === "editor2"){
            return ediUI2;
        }
    });

    const hundelsave = () => {
        // console.log(color);
        Inertia.post('/setting/set?is=ui', { data: color });
    }

    return (
        <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full'>
            <div className="container-fluid p-4 w-full">
                <h2 className='text-3xl py-2 font-bold rounded-lg w-full'>Customize your public page</h2>
                <h3 className='text-xl py-1 font-bold rounded-lg w-full'>current THEME : {active}</h3>
            </div>

            <div className="flex space-x-2">
                <div className="w-full">
                    <label htmlFor="modal-cos" className="btn w-full h-[12em]" style={{background: "repeating-linear-gradient(45deg, #f0f8ff, #f28482 62px)"}}>
                        <p className="font-extrabold">
                            TOGGLE YOUR ACTIVE THEME
                        </p>
                    </label>
                </div>
                <div>
                    <label htmlFor="modal-edi" className="btn w-full h-[12em] " style={{background: "repeating-linear-gradient(45deg, #f6bc60, #84a59d 62px)"}}>
                        <p className="font-extrabold">
                            CHOOSE FROM EDITOR THEMES
                        </p>
                    </label>
                </div>
            </div>

            <h3 className='text-sm py-1 pt-4 font-bold rounded-lg w-full'>active theme : <span className="text-accent">{active}</span></h3>

            <div className="flex items-center justify-center content-center md:flex-row flex-col space-y-2 md:space-y-0 md:space-x-2 space-x-0">
                {/* ////////////////////////////////////////////////////////////////////// */}
                {
                    active === "custom1" || active === "custom2" ?
                    (
                        <>
                         <div className="bg-agr shadow-lg space-y-2 rounded-lg overflow-auto p-2 w-full h-[60vh]">

                            <div className="bg-[#00000054] space-y-3 rounded-lg p-2">
                                <h1 className="text-lg font-bold pl-2">Page :</h1>
                                <div className="flex flex-col space-y-2 p-1">
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                console.log(e.target.value)
                                                setColor((color) => ({
                                                    ...color,
                                                    ['bg']: e.target.value
                                                }))
                                            }}
                                            value={color.bg}
                                            name="furniture" id="age"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">page backgroumd</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#00000054] space-y-3 rounded-lg p-2">
                                <h1 className="text-lg font-bold pl-2">Accounts Drawer :</h1>
                                <div className="flex flex-col space-y-2 p-1">
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    to_draw: {
                                                        ...color.to_draw,
                                                        ['bg']: e.target.value
                                                    }
                                                }))
                                            }}
                                            value={color.to_draw.bg}
                                            name="throat" id="pie"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    to_draw: {
                                                        ...color.to_draw,
                                                        ['text']: e.target.value
                                                    }
                                                }))
                                            }}
                                            value={color.to_draw.text}
                                            name="native" id="aloud"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">text</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    to_draw: {
                                                        ...color.to_draw,
                                                        button: {
                                                            ...color.to_draw.button,
                                                            ['bg']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.to_draw.button.bg}
                                            name="feet" id="straw"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">button</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#00000054] space-y-3 rounded-lg p-2">
                                <h1 className="text-lg font-bold pl-2">Profile :</h1>
                                <div className="flex flex-col space-y-2 p-1">
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    profile: {
                                                        ...color.profile,
                                                        img: {
                                                            ...color.profile.img,
                                                            ['bg']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.profile.img.bg}
                                            name="struggle" id="coat"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">image background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    profile: {
                                                        ...color.profile,
                                                        ['txt']: e.target.value
                                                    }
                                                }))
                                            }}
                                            value={color.profile.txt}
                                            name="task" id="everywhere"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">name color</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#00000054] space-y-3 rounded-lg p-2">
                                <h1 className="text-lg font-bold pl-2">Links :</h1>
                                <div className="flex flex-col space-y-2 p-1">
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    links: {
                                                        ...color.links,
                                                        ['bg']: e.target.value
                                                    }
                                                }))
                                            }}
                                            value={color.links.bg}
                                            name="cheese" id="twelve"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    links: {
                                                        ...color.links,
                                                        grp: {
                                                            ...color.links.grp,
                                                            ['bg']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.links.grp.bg}
                                            name="snake" id="include"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">groupe background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    links: {
                                                        ...color.links,
                                                        grp: {
                                                            ...color.links.grp,
                                                            ['txt']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.links.grp.txt}
                                            name="habit" id="remember"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">group name color</span>
                                    </div>


                                </div>
                            </div>

                            <div className="bg-[#00000054] space-y-3 rounded-lg p-2">
                                <h1 className="text-lg font-bold pl-2">Draw :</h1>
                                <div className="flex flex-col space-y-2 p-1">
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        ['bg']: e.target.value
                                                    }
                                                }))
                                            }}
                                            value={color.draw.bg}
                                            name="laugh" id="middle"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        items: {
                                                            ...color.draw.items,
                                                            ['bg']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.draw.items.bg}
                                            name="beneath" id="snake"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">items background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"

                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        items: {
                                                            ...color.draw.items,
                                                            img: {
                                                                ...color.draw.items.img,
                                                                ['background']: e.target.value
                                                            }
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.draw.items.img.background}
                                            name="acres" id="run"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">items images background</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        items: {
                                                            ...color.draw.items,
                                                            ['main_txt']: e.target.value
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.draw.items.main_txt}
                                            name="eye" id="lesson"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">items service name color</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        items: {
                                                            ...color.draw.items,
                                                            username: {
                                                                ...color.draw.items.username,
                                                                ['txt']: e.target.value
                                                            }
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.draw.items.username.txt}
                                            name="room" id="possibly"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">items username color</span>
                                    </div>
                                    <div className="flex bg-[#00000054] rounded-lg p-1 space-x-2">
                                        <input type="color"
                                            onChange={(e) => {
                                                setColor((color) => ({
                                                    ...color,
                                                    draw: {
                                                        ...color.draw,
                                                        items: {
                                                            ...color.draw.items,
                                                            username: {
                                                                ...color.draw.items.username,
                                                                ['bg']: e.target.value
                                                            }
                                                        }
                                                    }
                                                }))
                                            }}
                                            value={color.draw.items.username.bg}
                                            name="means" id="pan"
                                            className="bg-transparent w-8 h-8"
                                        />
                                        <span className="text-lg font-bold">items username background</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        </>
                    )
                    :''
                }
               
                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className={`flex space-x-2 m-auto ${active === "custom1" || active === "custom2" ? "w-fit": "w-full"}`}>
                    <div style={{ background: `url(${color.img}) center center / cover` }} className={`rounded-lg ${active === "custom1" || active === "custom2" ? "" : "w-full"}`}>
                        <div style={{ background: color.bg + '9c' }} className={`rounded-lg flex p-2 flex-col items-center justify-start content-center space-y-45deg ${active === "custom1" || active === "custom2" ? "w-[12em]": "w-full"} h-[60vh] overflow-auto`}>
                            <div class="tooltip w-full tooltip-bottom z-10" data-tip="accounts drawer">
                                <div style={{ background: color.to_draw.bg }} className="w-full rounded-lg p-2 flex items-center justify-between">
                                    <div style={{ background: color.to_draw.text }} className=" h-2 rounded-lg w-12"></div>
                                    <div class="tooltip tooltip-bottom" data-tip="button">
                                        <div style={{ background: color.to_draw.button.bg }} className=" h-2 rounded-lg w-8"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-start content-center m-[10px]">
                                <div class="tooltip tooltip-bottom z-[9]" data-tip="user profile image">
                                    <div style={{ background: color.profile.img.bg }} className="w-8 h-8 rounded-full m-auto"></div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[8]" data-tip="user name">
                                    <div style={{ background: color.profile.txt }} className="w-7 h-1 rounded-lg m-auto mt-1"></div>
                                </div>
                            </div>
                            <div style={{ background: color.links.bg }} className="flex flex-col p-2 w-full rounded-lg space-y-2 bg-[#59a09c6c] items-center justify-start content-center">
                                <div class="tooltip w-full tooltip-bottom z-[7]" data-tip="links group">
                                    <div style={{ background: color.links.grp.bg }} className="flex flex-col p-1 w-full rounded-lg bg-[#1ca5c76c] items-center justify-start content-center">
                                        <div style={{ background: color.links.grp.txt }} className="bg-gray-700 h-1 w-8 my-1 rounded-lg"></div>
                                        <div className="flex flex-col p-1 w-full space-y-2 items-center justify-start content-center">
                                            <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                            <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                            <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[6] w-full" data-tip="link item">
                                    <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[5] w-full" data-tip="link item">
                                    <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[4] w-full" data-tip="link item">
                                    <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[3] w-full" data-tip="link item">
                                    <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                </div>
                                <div class="tooltip tooltip-bottom z-[2] w-full" data-tip="link item">
                                    <div className="w-full h-3 bg-white rounded-lg m-auto"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ background: color.draw.bg }} className={`rounded-lg bg-[#307070] flex p-2 flex-col items-center justify-start content-center space-y-2 ${active === "custom1" || active === "custom2" ? "w-[9em]": "w-[90%]"} h-[60vh] overflow-auto`}>
                        <div style={{ background: color.draw.items.bg }} className="bg-slate-800 p-1 rounded-lg space-x-2 w-full flex items-center">
                            <div style={{ background: color.draw.items.img.background }} className="bg-green-300 rounded-lg w-[3em] h-[3em]"></div>
                            <div className="w-[3em] space-y-2">
                                <div style={{ background: color.draw.items.main_txt }} className="bg-white rounded-lg w-full h-1"></div>
                                <div style={{ background: color.draw.items.username.bg }} className="bg-blue-300 rounded-lg p-1 w-full">
                                    <div style={{ background: color.draw.items.username.txt }} className="bg-green-800 h-[0.15em] w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: color.draw.items.bg }} className="bg-slate-800 p-1 rounded-lg space-x-2 w-full flex items-center">
                            <div style={{ background: color.draw.items.img.background }} className="bg-red-300 rounded-lg w-[3em] h-[3em]"></div>
                            <div className="w-[3em] space-y-2">
                                <div style={{ background: color.draw.items.main_txt }} className="bg-white rounded-lg w-full h-1"></div>
                                <div style={{ background: color.draw.items.username.bg }} className="bg-blue-300 rounded-lg p-1 w-full">
                                    <div style={{ background: color.draw.items.username.txt }} className="bg-green-800 h-[0.15em] w-full"></div>
                                </div>
                            </div>
                        </div>
                        <div style={{ background: color.draw.items.bg }} className="bg-slate-800 p-1 rounded-lg space-x-2 w-full flex items-center">
                            <div style={{ background: color.draw.items.img.background }} className="bg-yellow-300 rounded-lg w-[3em] h-[3em]"></div>
                            <div className="w-[3em] space-y-2">
                                <div style={{ background: color.draw.items.main_txt }} className="bg-white rounded-lg w-full h-1"></div>
                                <div style={{ background: color.draw.items.username.bg }} className="bg-blue-300 rounded-lg p-1 w-full">
                                    <div style={{ background: color.draw.items.username.txt }} className="bg-green-800 h-[0.15em] w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {
                active === "custom1" || active === "custom2" ?
                (
                    <div className="flex space-x-2 overflow-auto p-2 bg-ap2 rounded-lg">
                        {
                            skins.map((skn) => (
                                <>
                                    <div onClick={() => {
                                        setColor((color) => ({
                                            ...color,
                                            ['img']: `/imgs/config/${skn.name}/Header/0.jpg`,
                                        }))
                                    }}
                                        style={{ background: `url(/imgs/config/${skn.name}/Header/0.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-ago rounded-lg'>
                                        <div className="rounded-lg" style={{ width: '8em', height: '13em' }}></div>
                                    </div>

                                    <div onClick={() => {
                                        setColor((color) => ({
                                            ...color,
                                            ['img']: `/imgs/config/${skn.name}/Header/1.jpg`,
                                        }))
                                    }}
                                        style={{ background: `url(/imgs/config/${skn.name}/Header/1.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-ago rounded-lg'>
                                        <div className="rounded-lg" style={{ width: '8em', height: '13em' }}></div>
                                    </div>

                                    <div onClick={() => {
                                        setColor((color) => ({
                                            ...color,
                                            ['img']: `/imgs/config/${skn.name}/Header/footer-0.jpg`,
                                        }))
                                    }}
                                        style={{ background: `url(/imgs/config/${skn.name}/Header/footer-0.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='bg-ago rounded-lg'>
                                        <div className="rounded-lg" style={{ width: '8em', height: '13em' }}></div>
                                    </div>
                                </>
                            ))
                        }
</div>
                )
                :''
            }
            {
                active === "custom1" || active === "custom2" ?
                    <button onClick={() => { hundelsave() }} className="btn w-full sticky bottom-[8px] z-index-[99]">Save your customized skins</button>
                :""                
            }

            <CosUI key="cos" label="custom" header="SELECT YOUR ACTIVE THEME"   modal="modal-cos" cos1={JSON.stringify(cosUI1)} cos2={JSON.stringify(cosUI2)} />
            <CosUI key="edi" label="editor" header="EDITOR PRESET THEME" modal="modal-edi" cos1={JSON.stringify(cosUI1)} cos2={JSON.stringify(cosUI2)} />
           

        </div>
    );
}

UI.layout = (page) => <Base children={page} title={"Customise UI - AllAcc"} />
