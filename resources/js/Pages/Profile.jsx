import { useForm, usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import Base from '../Layouts/Base';

export default function Profile() {

    const { auth, errors } = usePage().props;
    const [power, setPower] = useState(0);
    const var_char = /[!-\/:-@[-`{-~\u00A1-\u00A9\u00AB\u00AC\u00AE-\u00B1\u00B4\u00B6-\u00B8\u00BB\u00BF\u00D7\u00F7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u037E\u0384\u0385\u0387\u03F6\u0482\u055A-\u055F\u0589\u058A\u058D-\u058F\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0606-\u060F\u061B\u061E\u061F\u066A-\u066D\u06D4\u06DE\u06E9\u06FD\u06FE\u0700-\u070D\u07F6-\u07F9\u07FE\u07FF\u0830-\u083E\u085E\u0964\u0965\u0970\u09F2\u09F3\u09FA\u09FB\u09FD\u0A76\u0AF0\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0C84\u0D4F\u0D79\u0DF4\u0E3F\u0E4F\u0E5A\u0E5B\u0F01-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F85\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE-\u0FDA\u104A-\u104F\u109E\u109F\u10FB\u1360-\u1368\u1390-\u1399\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DB\u1800-\u180A\u1940\u1944\u1945\u19DE-\u19FF\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B6A\u1B74-\u1B7C\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2010-\u2027\u2030-\u205E\u207A-\u207E\u208A-\u208E\u20A0-\u20BF\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2775\u2794-\u2B73\u2B76-\u2B95\u2B98-\u2BC8\u2BCA-\u2BFE\u2CE5-\u2CEA\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFB\u3001-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u303F\u309B\u309C\u30A0\u30FB\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u32FE\u3300-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAA77-\uAA79\uAADE\uAADF\uAAF0\uAAF1\uAB5B\uABEB\uFB29\uFBB2-\uFBC1\uFD3E\uFD3F\uFDFC\uFDFD\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE66\uFE68-\uFE6B\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD\u{10100}-\u{10102}\u{10137}-\u{1013F}\u{10179}-\u{10189}\u{1018C}-\u{1018E}\u{10190}-\u{1019B}\u{101A0}\u{101D0}-\u{101FC}\u{1039F}\u{103D0}\u{1056F}\u{10857}\u{10877}\u{10878}\u{1091F}\u{1093F}\u{10A50}-\u{10A58}\u{10A7F}\u{10AC8}\u{10AF0}-\u{10AF6}\u{10B39}-\u{10B3F}\u{10B99}-\u{10B9C}\u{10F55}-\u{10F59}\u{11047}-\u{1104D}\u{110BB}\u{110BC}\u{110BE}-\u{110C1}\u{11140}-\u{11143}\u{11174}\u{11175}\u{111C5}-\u{111C8}\u{111CD}\u{111DB}\u{111DD}-\u{111DF}\u{11238}-\u{1123D}\u{112A9}\u{1144B}-\u{1144F}\u{1145B}\u{1145D}\u{114C6}\u{115C1}-\u{115D7}\u{11641}-\u{11643}\u{11660}-\u{1166C}\u{1173C}-\u{1173F}\u{1183B}\u{11A3F}-\u{11A46}\u{11A9A}-\u{11A9C}\u{11A9E}-\u{11AA2}\u{11C41}-\u{11C45}\u{11C70}\u{11C71}\u{11EF7}\u{11EF8}\u{12470}-\u{12474}\u{16A6E}\u{16A6F}\u{16AF5}\u{16B37}-\u{16B3F}\u{16B44}\u{16B45}\u{16E97}-\u{16E9A}\u{1BC9C}\u{1BC9F}\u{1D000}-\u{1D0F5}\u{1D100}-\u{1D126}\u{1D129}-\u{1D164}\u{1D16A}-\u{1D16C}\u{1D183}\u{1D184}\u{1D18C}-\u{1D1A9}\u{1D1AE}-\u{1D1E8}\u{1D200}-\u{1D241}\u{1D245}\u{1D300}-\u{1D356}\u{1D6C1}\u{1D6DB}\u{1D6FB}\u{1D715}\u{1D735}\u{1D74F}\u{1D76F}\u{1D789}\u{1D7A9}\u{1D7C3}\u{1D800}-\u{1D9FF}\u{1DA37}-\u{1DA3A}\u{1DA6D}-\u{1DA74}\u{1DA76}-\u{1DA83}\u{1DA85}-\u{1DA8B}\u{1E95E}\u{1E95F}\u{1ECAC}\u{1ECB0}\u{1EEF0}\u{1EEF1}\u{1F000}-\u{1F02B}\u{1F030}-\u{1F093}\u{1F0A0}-\u{1F0AE}\u{1F0B1}-\u{1F0BF}\u{1F0C1}-\u{1F0CF}\u{1F0D1}-\u{1F0F5}\u{1F110}-\u{1F16B}\u{1F170}-\u{1F1AC}\u{1F1E6}-\u{1F202}\u{1F210}-\u{1F23B}\u{1F240}-\u{1F248}\u{1F250}\u{1F251}\u{1F260}-\u{1F265}\u{1F300}-\u{1F6D4}\u{1F6E0}-\u{1F6EC}\u{1F6F0}-\u{1F6F9}\u{1F700}-\u{1F773}\u{1F780}-\u{1F7D8}\u{1F800}-\u{1F80B}\u{1F810}-\u{1F847}\u{1F850}-\u{1F859}\u{1F860}-\u{1F887}\u{1F890}-\u{1F8AD}\u{1F900}-\u{1F90B}\u{1F910}-\u{1F93E}\u{1F940}-\u{1F970}\u{1F973}-\u{1F976}\u{1F97A}\u{1F97C}-\u{1F9A2}\u{1F9B0}-\u{1F9B9}\u{1F9C0}-\u{1F9C2}\u{1F9D0}-\u{1F9FF}\u{1FA60}-\u{1FA6D}]/u;
    // console.log(errors);

    const { data, setData } = useForm({
        name: auth.user.name,
        id: auth.user.id,
        email: auth.user.email,
        username: auth.user.username,
        quote: auth.user.quote,
        gender: auth.user.gender,
        birthday: auth.user.birthday,
        country: auth.user.country,
        age: auth.user.age,

    });
    const [pass, setPass] = useState({
        email: auth.user.email,
        username: auth.user.username,
        current_password: '',
        new_password: '',
    });

    const onChange = (e) => {
        let key = e.target.id;
        let val = e.target.value;
        if (key === 'age') {
            val = e.target.checked;
        }
        setData({ ...data, [key]: val });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        // removeEmpty(data);
        data.username === auth.user.username ? delete data.username : '';
        data.email === auth.user.email ? delete data.email : '';
        data.quote === auth.user.quote ? delete data.quote : '';
        console.log(data)
        Inertia.post('/profile', data);
    }

    useEffect(() => {
        Axios.get(`https://restcountries.com/v3.1/all`)
            .then(data => {
                const datta = data.data
                // console.log(datta)
                const ele = document.querySelector('.elsex').options
                for (let i = 0; i < datta.length; i++) {
                    ele.add(new Option(datta[i].name.common, datta[i].altSpellings[0]));
                }
                const hel = document.querySelectorAll('.elsex option')
                for (let i = 0; i < datta.length; i++) {
                    hel[i].name = datta[i].name.common
                }
                if (auth.user.country != null) {
                    // console.log('country not null')
                    document.querySelector('#country').value = auth.user.country;
                }
            }).catch(erro => {
                console.log(erro)
                // setSelectState(false)
            })

        if (auth.user.age != null) {
            // console.log('age not null')
            if (auth.user.age === true) {
                // console.log('ckekes')
                document.querySelector('#age').checked = true;
            }
        }
        if (auth.user.country != null) {
            // console.log('country not null')
            document.querySelector('#country').value = auth.user.country;
        }
        if (auth.user.gender != null) {
            // console.log('country not null')
            document.querySelector('#gender').value = auth.user.gender;
        }

    }, [])


    // pass section : //////////////////////////////////////////////////
    const newPassChange = (e) => {
        let val = e.target.value;

        document.querySelector('.pass_strong').style.display = 'grid';
        document.querySelector('.pass_strongg').style.display = 'block';


        setPass(pass => ({
            ...pass,
            ['new_password']: val,
        }));

        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;
        if (var_char.test(val)) {
            a = 1;
        }
        if (val.length > 6) {
            b = 1;
        }
        if (val.match(/\p{Lu}/gu)) {
            c = 1;
        }
        if (val.match(/\p{N}/gu)) {
            d = 1;
        }
        let add = a + b + c + d;
        // console.log(add)
        setPower(add)
    }


    const passChange = (e) => {
        let val = e.target.value;
        setPass(pass => ({
            ...pass,
            ['current_password']: val,
        }));
    }

    const passSubmit = (e) => {
        e.preventDefault();
        if (power < 3) {
            document.querySelector('.newPass').innerHTML = 'Please type a more stong password!';
        }
        if (power >= 3) {
            Inertia.post('/password', pass);

        }

    }


    const classTogg = (m, type) => {
        if (type === 'class') {
            if (power < m) {
                return "h-full col-span-3 bg-gray-200 rounded"
            } else {
                return "h-full col-span-3 bg-green-500 rounded"
            }
        } if (type === 'string') {
            if (power < 1) {
                return "Invalid password"
            }
            if (power < 2) {
                return "Weak password"
            }
            if (power <= 3) {
                return "Valid password"
            }
            if (power > 3) {
                return "Strong password"
            }
        }
        // didn't work! => className={"h-full col-span-3 " + (power < 1) ? " bg-gray-200 " : " bg-green-500 " + " rounded"}
    }



    return (
        <>
            <div id='profile' className="shadow-lg rounded-2xl my-4 w-[95%] sm:w-[72%] bg-primary">
                <img alt="profil" src="https://tlgur.com/d/gj0AOr78" className="rounded-t-lg h-[19em] object-cover w-full mb-4" />
                <div className="flex flex-col items-center justify-center p-4 -mt-24">
                    <a href="#" className="block relative">
                        <div className='rounded-full h-[8em] w-[8em] bg-[url("https://tlgur.com/d/g2XEm7O8")] bg-cover bg-center ' >
                            <div className="flex justify-center items-center rounded-full h-[8em] w-[8em]">
                                {/*    <label htmlFor="dropzone-file" className="xelex flex flex-col justify-center items-center rounded-full h-[8em] w-[8em] border-2 cursor-pointer ">
                                    <div className="xelex mx-auto object-cover rounded-full h-[8em] w-[8em] flex flex-col items-center justify-center content-center border-2 border-gray-800 hover:bg-[#000000a8] " >
                                        <svg
                                            className="h-20 w-20 hidden"
                                            width={24}
                                            height={24}
                                            viewBox={"0 0 24 24"}
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M0 0h24v24H0z" stroke="none" />
                                            <path d="M15 8L15.01 8" />
                                            <rect x={4} y={4} width={16} height={16} rx={3} />
                                            <path d="M4 15l4-4a3 5 0 013 0l5 5" />
                                            <path d="M14 14l1-1a3 5 0 013 0l2 2" />
                                        </svg>
                                    </div>
                                    <input id="dropzone-file" name="picture" type="file"  accept=".png, .jpg, .jpeg" className="hidden" />
                                </label>
                            */}
                            </div>
                        </div>

                    </a>
                    <p className="text-light text-xl font-bold mt-2"> {auth.user.name}
                    </p>
                    <p className="text-gray-300 text-sm font-medium mt-2"> @{auth.user.username}
                    </p>
                    <section className="w-full mt-16">
                        {/* <hr />
                        <div className='w-full'>


                            <div className="items-center w-full p-8 space-y-4 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-4/12 text-light"> Profile image
                                </h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex flex-col space-y-2">
                                    <div className="">
                                        <div className="flex justify-center items-center w-full">
                                            <label htmlFor="dropzone-file" className="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                                                    <svg className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                </div>
                                                <input id="dropzone-file" type="file" className="hidden" />
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>




                        </div> */}

                        <hr />
                        <form onSubmit={onSubmit} className="w-full">
                            <div className="space-y-6">
                                <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
                                    <h2 className="max-w-sm mx-auto md:w-1/3 text-light"> Quote
                                    </h2>
                                    <div className="max-w-sm flex flex-col space-y-2 mx-auto md:w-2/3">
                                        <div className="form-control w-full">
                                            <textarea onChange={onChange} value={data.quote} className="textarea textarea-accent text-black w-full" id="quote" placeholder="Let's Others know what do you think!"></textarea>
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.quote}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
                                    <h2 className="max-w-sm mx-auto md:w-1/3 text-light"> Account
                                    </h2>
                                    <div className="max-w-sm flex flex-col space-y-2 mx-auto md:w-2/3">
                                        <div className="form-control w-full">
                                            <input onChange={onChange} type="email" id="email" className="input input-accent text-black w-full" value={data.email} placeholder="Email" />
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.email}</span>
                                            </label>
                                        </div>
                                        <div className="form-control w-full">
                                            <input onChange={onChange} type="text" id="username" className="input input-accent text-black w-full" value={data.username} placeholder="Username" />
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.username}</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <hr />
                                <div className="items-center w-full p-4 space-y-4 md:inline-flex md:space-y-0">
                                    <h2 className="max-w-sm mx-auto md:w-1/3 text-light"> Personal info
                                    </h2>
                                    <div className="max-w-sm mx-auto space-y-2 md:w-2/3">
                                        <div>
                                            <div className="form-control w-full">
                                                <input onChange={onChange} value={data.name} type="text" id="name" className="input input-accent text-black w-full" placeholder="Name" />
                                                <label className="label">
                                                    <span className="label-text-alt text-light">{errors.name}</span>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-control w-full">
                                            <select value={data.country} onChange={onChange} id="country" className="select select-accent text-black w-full elsex">
                                                <option disabled selected>Select your country</option>
                                            </select>
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.country}</span>
                                            </label>
                                        </div>
                                        <div className="form-control w-full">
                                            <select onChange={onChange} id='gender' className="select select-accent text-black select-bordered w-full">
                                                <option disabled selected>Select Your gender</option>
                                                <option>Male</option>
                                                <option>Female</option>
                                                <option>Both</option>
                                                <option>Prefere to don't say</option>
                                            </select>
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.gender}</span>
                                            </label>
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text ">Your birthday?</span>
                                            </label>
                                            <input onChange={onChange} value={data.birthday} id='birthday' max={`${new Date().getFullYear() - 5}-01-01`} type="date" className="input input-accent text-black w-full" />
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.birthday}</span>
                                            </label>
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label cursor-pointer w-full ">
                                                <span className="label-text ">Display your age to public?</span>
                                                <input onChange={onChange} id='age' type="checkbox" className="checkbox checkbox-accent text-black" />
                                            </label>
                                            <label className="label">
                                                <span className="label-text-alt text-light">{errors.age}</span>
                                            </label>
                                        </div>
                                        <div className="w-full mt-5 px-4 pb-4 flex items-center justify-evenly space-x-4">
                                            <h4 className="text-lg font-bold text-light">Save your data</h4>
                                            <button type="submit" className="btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>

                        <form onSubmit={passSubmit} className="w-full mt-19">
                            <hr />
                            <div id="change_password" className="items-center w-full p-8 space-y-4 md:inline-flex md:space-y-0">
                                <h2 className="max-w-sm mx-auto md:w-4/12 text-light"> Change password
                                </h2>
                                <div className="max-w-sm mx-auto md:w-2/3 flex flex-col space-y-2">
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-light">Current password</span>
                                        </label>
                                        <input onChange={passChange} type="password" id="password" name="password" className="input input-accent text-black w-full" placeholder="Current Password" />
                                        <label className="label">
                                            <span className="label-text-alt text-light">{errors.current_password}</span>
                                        </label>
                                    </div>
                                    <div className="">
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-light">New password</span>
                                            </label>
                                            <input onChange={newPassChange} type="text" id="new_password" className="input input-accent text-black w-full" name="new_password" placeholder="New Password" />
                                            <label className="label">
                                                <span className="newPass label-text-alt text-light">{errors.new_password}</span>
                                            </label>
                                        </div>
                                        <div className="pass_strong hidden w-full h-1 grid-cols-12 gap-4 mt-3">
                                            <div className={classTogg(1, 'class')}>
                                            </div>
                                            <div className={classTogg(2, 'class')}>
                                            </div>
                                            <div className={classTogg(3, 'class')}>
                                            </div>
                                            <div className={classTogg(4, 'class')}>
                                            </div>
                                        </div>
                                        <div className="pass_strongg hidden mt-2 text-green-300">
                                            {classTogg(0, 'string')}
                                        </div>
                                        <div className="w-full mt-5 px-4 pb-4 flex items-center justify-evenly space-x-4">
                                            <h4 className="text-lg font-bold text-light">Save your data</h4>
                                            <button type="submit" className="btn">Save</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </section>
                </div>
            </div>


        </>
    )
}

Profile.layout = (page) => <Base children={page} title={"Profile"} />
