import { Inertia } from "@inertiajs/inertia";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import Axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast'
import '../../../css/register.css';

export default function Auth() {

    const { errors } = usePage().props;

    window.removeSpaceEnd = function (e) {
        if (typeof (e) === 'string') {
            while (e[e.length - 1] === ' ') {
                e = e.replace(/\s+$/, '');
            }
            return e;
        } else {
            return false;
        }
    };

    // console.log(errors.username, errors.email, errors.name );
    const [indice, setIndice] = useState(0);
    const [index, setIndex] = useState(0);
    const { data, setData } = useForm({
        name: '', username: '', email: '', password: '', country: '', birthday: '',
    })
    let idexing = [['you', '#000', '#284234', 'linear-gradient(143deg, white, #ffffff21)'], ['your respect', '#ff8d77', '#d8ffea', '#1b3f1e91'], ['your passion', '#f0eeff', '#4e4a75', '#7f6aac91'], ['your satisfaction', '#ffefa8', '#ffd5fb', '#5c0f4191'], ['your love', '#ffdfb2', '#f3e9bd', '#55420c91'], ['your enjoy', '#ffffff', '#ffffff', '#000000ab']]
    const changeHandler = (e) => {
        setData({ ...data, [e.target.id]: (e.target.id === 'name' || e.target.id === 'password') ? e.target.value : removeSpaceEnd(e.target.value) });
        if (index === 4) {
            let i = 0;
            if (/(?=^.{6,}$)/.test(data.password)) {
                i++;
            } if (/(?=.*[0-9])/.test(data.password)) {
                i++;
            } if (/(?=.*[A-Z])/.test(data.password)) {
                i++;
            } if (/(?=.*[a-z])/.test(data.password)) {
                i++;
            } if (/(?=.*[^A-Za-z0-9]).*/.test(data.password)) {
                i++;
            };

            let element = document.getElementsByClassName('passindex');
            for (let x = 0; x < element.length; x++) {
                element[x].style.opacity = '0.10';
            };
            for (let o = 0; o < i; o++) {
                element[o].style.opacity = '1';
            };

        }
    }



    const check = () => {
        if (index === 0) {
            return true;
        }
        if (index === 1) {
            if (data.name.length > 3) {
                return true;
            } else {
                return "your name should be mre than tree character!";
            }
        }
        if (index === 2) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
                return true;
            } else {
                return "Invalid email address!";
            }

        } if (index === 3) {
            if (!/\s/.test(data.username) && data.username.length > 4 && data.username.match("/") === null && data.username.match("@") === null) {
                return true;
            } else {
                return "Invalid username!";
            }
        } if (index === 4) {
            if (/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/.test(data.password)) {
                if (data.password === document.getElementById('repassword').value) {
                    return true;
                } else {
                    return "Passwords doesn't match!";
                }
            } else {
                return "Weak password!";
            }
        }

    }

    const setDiv = (e) => {
        let chh = check(e);
        if (chh === true || e === -1) {
            let key = index + e <= 0 ? 0 : index + e >= 5 ? 5 : index + e;
            setIndex(key);
            document.getElementById('foryour').innerHTML = idexing[key][0];
            document.getElementById('foryour').style.color = idexing[key][1];
            document.getElementById('contforyou').style.color = idexing[key][2];
            document.getElementById("colorcont").style.background = idexing[key][3];
            const frms = document.querySelectorAll('.frm');
            for (let i = 0; i < frms.length; i++) {
                frms[i].style.display = 'none';
            }
            frms[key].style.display = "flex";
        } else {
            toast["error"](chh);
        }
    }


    useEffect(() => {
        Axios.get(`https://restcountries.com/v3.1/all`)
            .then(data => {
                const datta = data.data
                const ele = document.querySelector('.elsex').options
                for (let i = 0; i < datta.length; i++) {
                    ele.add(new Option(datta[i].name.common, datta[i].name.common));
                }
                const hel = document.querySelectorAll('.elsex option')
                for (let i = 0; i < datta.length; i++) {
                    hel[i].name = datta[i].name.common
                }
            }).catch(erro => {
                console.log(erro)
                window.alert("becuase of some errors, your can't chose your country now!")
            })
    }, [])

    const save = (e) => {
        if (e === 'skip') {
            setData({ ...data, ['country']: null, ['birthday']: null });
        } else {
            data.country === '' ? setData({ ...data, ['country']: null }) : '';
            data.birthday === '' ? setData({ ...data, ['birthday']: null }) : '';
        }
        // console.log(data);
        Inertia.post('/register', data, { onSuccess: () => Inertia.get('/dashboard') });
    }



    // errors section :

    const errorsSc = (e) => {
        // e = 1/-1 | length = 1 | indice = 0
        // retult should be 0
        let lem = document.getElementsByClassName('errors-e');
        let a = indice + e <= 0 ? 0 : indice + e >= lem.length ? lem.length - 1 : indice + e;
        console.log(a,e,indice,lem.length);
        if (a !== indice || (a === 0 && indice === 0)) {
        console.log('eqq');

            setIndice(a)
            setErrorDiv(a);
        }
    }

    const setErrorDiv = (e) => {
        let lem = document.getElementsByClassName('errors-e');
        for (let i = 0; i < lem.length; i++) {
            lem[i].style.display = 'none';
        }
        console.log(e,lem[e]);
        lem[e].style.display = 'initial';
    }



    return (
        <>
            <Toaster position='top-center' duration='4000' />
            <Head title={"Register - AllAcc"} />
            <div className="h-screen w-full bg-[url(/imgs/app/Auth/register.jpg)] bg-cover bg-no-repeat " >
                <div id={"colorcont"} className="h-screen bg-[linear-gradient(143deg,white,#ffffff21)]" >


                    <div className="sm:container h-full m-auto p-3 flex flex-col justify-between " >

                        <div className="w-full space-y-2">
                            <Link href="/">
                                <img src="/AllAcc-logo-gray-c.svg" className="h-[1.4em] my-0 m-auto" />
                            </Link>
                            <h3 className=" font-extrabold text-black text-xl sm:text-3xl text-center" id="contforyou" >Made for <span className=" text-black" id="foryour">you</span>, not for your money</h3>
                            {(errors.email || errors.username) &&
                                <div style={{marginTop:'1.2em'}} class="py-0  px-1 bg-[#00000079] w-full opacity-80 flex flex-col my-4 items-center justify-center space-y-1 rounded-lg">
                                    <svg onClick={() => { errorsSc(-1) }} style={{marginTop:'-0.7em'}} className="cursor-pointer w-[1.7em] rounded-full mt-[-0.7em] fill-white bg-[#00000079]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g data-name="90-Arrow Up">
                                            <path d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm0 30a14 14 0 1114-14 14 14 0 01-14 14z" />
                                            <path d="M15.29 10.29l-8 8L8.7 19.7l7.3-7.29 7.29 7.29 1.41-1.41-8-8a1 1 0 00-1.41 0z" />
                                        </g>
                                    </svg>
                                    {errors.email !== undefined &&
                                        <div className="errors-e h-[2em] text-center hidden text-sm font-bold" style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>Email : <code className="text-red-500 ">{errors.email}</code></div>
                                    }
                                    {errors.username !== undefined &&
                                        <div className={`errors-e h-[2em] text-center ${errors.email === undefined ? 'block' : 'hidden'} text-sm font-bold`} style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>Username : <code className="text-red-500 ">{errors.username}</code></div>
                                    }
                                    {errors.name !== undefined &&
                                        <div className="errors-e h-[2em] text-center hidden text-sm font-bold" style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>Name : <code className="text-red-500 ">{errors.name}</code></div>
                                    }
                                    {errors.password !== undefined &&
                                        <div className="errors-e h-[2em] text-center hidden text-sm font-bold" style={{ 'display': 'Webkit-box', 'WebkitLineClamp': '2', 'WebkitBoxOrient': 'vertical' }}>Name : <code className="text-red-500 ">{errors.name}</code></div>
                                    }
                                    <svg onClick={() => { errorsSc(1) }} style={{marginBottom:'-0.7em'}} className="cursor-pointer w-[1.7em] rounded-full mb-[-0.7em] fill-white bg-[#00000079]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                                        <g data-name="93-Arrow Down">
                                            <path d="M16 0a16 16 0 1016 16A16 16 0 0016 0zm0 30a14 14 0 1114-14 14 14 0 01-14 14z" />
                                            <path d="M16 19.59l-7.29-7.3-1.42 1.42 8 8a1 1 0 001.41 0l8-8-1.41-1.41z" />
                                        </g>
                                    </svg>
                                </div>
                            }
                        </div>

                        <div className={`h-full flex flex-col-reverse sm:flex-row justify-center items-stretch`} >

                            <div className="frm sm:w-1/2 w-full fade-in-left p-3 text-center flex flex-col items-center justify-center content-center space-y-4">
                                <img className="w-auto h-[9em]" alt="allacc illustration" src="/AllAcc-logo-red-c.svg" />
                                <h3 className=" font-bold text-2xl text-black" >Here where <span className="text-primary font-meduim">all acc</span>ounts meet</h3>
                            </div>

                            <div style={{ display: 'none' }} className="frm sm:w-1/2 w-full fade-in-left p-3 text-center flex flex-col items-center justify-center content-center space-y-4">
                                <svg
                                    width="154px"
                                    height="154px"
                                    viewBox="0 -7.5 154 154"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)" fill="#fff">
                                        <path d="M95.544 138.156c-14.193 0-28.386-.069-42.578.022-11.41.073-22.815.403-34.224.482-3.21 0-6.415-.241-9.59-.717-6.836-.981-9.557-5.021-7.28-11.539a62.99 62.99 0 016.067-12.468c10.488-16.794 25.748-27.7 44.036-34.725a88.738 88.738 0 0131.147-6.115c15.948-.138 30.63 3.9 43.168 14.395a80.11 80.11 0 0120.542 25.732c1.388 2.767 2.953 5.47 4.065 8.346a35.93 35.93 0 012.224 8.259c.548 4.242-1.821 7.054-6.066 7.588a74.764 74.764 0 01-8.934.668c-14.192.065-28.385.031-42.577.031v.041zm46.626-10.353a5.138 5.138 0 00-.013-1.357c-4.521-11.712-10.767-22.297-20.418-30.589-7.445-6.396-15.796-11-25.717-12.248-11.431-1.438-22.759-1.136-33.932 2.004-21.139 5.942-38.004 17.638-49.554 36.493-1.314 2.145-2.357 4.454-3.565 6.756.367.201.75.371 1.145.509 3.955.867 7.899.357 11.887.135 8.288-.464 16.6-.663 24.903-.706 27.163-.139 54.327-.129 81.491-.258 4.522-.024 9.036-.474 13.775-.739h-.002zM80.054.454c10.935-.266 20.071 4.94 27.007 14.404 1.635 2.23 3.608 4.302 4.802 6.75 2.669 5.469 4.879 11.088 3.461 17.471-1.332 5.995-3.068 11.767-6.937 16.68-6.881 8.728-15.653 14.124-26.864 15.466-10.091 1.208-19.687-.283-28.646-5.02C43.65 61.326 38.4 53.432 36.494 43.289c-2.869-15.27 5.138-28.964 17.773-36.245C61.912 2.637 70.168.415 80.054.454zm23.96 31.022c.501-3.85-1.043-6.924-3.436-9.725-.934-1.093-1.778-2.266-2.75-3.323-3.517-3.826-7.528-6.853-12.864-7.654a38.437 38.437 0 00-22.067 2.886c-8.634 3.96-15.075 10-16.559 20.042-1.73 11.714 4.329 22.197 15.106 25.658a46.866 46.866 0 0019.986 1.734c9.171-1.048 19.967-10.453 21.426-20.107.476-3.157.777-6.342 1.158-9.515v.004z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path fill="#000" transform="translate(.777)" d="M0 0H153V139H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className=" font-bold text-xl text-ap3" >Let start by your name</h3>
                                <input onChange={changeHandler} placeholder="name" value={data.name} className={`input bg-ap3 text-black text-bold`} type="text" name="name" id={`name`} />
                            </div>

                            <div style={{ display: 'none' }} className="frm sm:w-1/2 w-full fade-in-left p-3 text-center flex flex-col items-center justify-center content-center space-y-4">
                                <svg
                                    width="156px"
                                    height="156px"
                                    viewBox="0 -3.5 156 156"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M110.45 7.88C78.586-8.456 37.114 1.66 18 30.438c-.526.79-1.065 1.573-1.604 2.355-1.02 1.48-2.076 3.012-3.02 4.585C3.142 54.416-.543 70.867 2.111 87.663c4.387 27.769 19.816 46.87 45.857 56.77a65.15 65.15 0 0023.307 4.023 112.57 112.57 0 0020.737-2.187 9.41 9.41 0 002.358-.815c2.62-1.275 4.013-3.559 3.631-5.964-.376-2.378-2.496-4.115-5.404-4.423a10.13 10.13 0 00-2.478.13c-.875.123-1.748.268-2.62.413-.77.129-1.54.259-2.313.369-11.682 1.7-21.737 1.242-30.737-1.4-17.633-5.178-38.989-22.038-41.139-52.513-1.452-20.583 6.092-39.041 22.425-54.862C50.11 13.28 68.626 8.482 90.77 12.952c13.739 2.773 25.859 9.989 37.05 22.062 8.324 8.98 12.808 16.998 14.54 25.996 2.194 11.402.696 21.095-4.58 29.637-4.763 7.709-11.302 11.621-19.437 11.621h-.21c-7.379-.061-11.734-3.536-13.314-10.625a41.23 41.23 0 01-.951-6.789 1670.37 1670.37 0 01-1.15-26.227c-.08-2.196-.591-4.872-3.854-6.07a7.053 7.053 0 01-2.189-1.554c-2.667-2.52-6.027-4.23-10.271-5.225-12.228-2.863-23.795-.582-35.364 6.986a23.877 23.877 0 00-9.525 11.346 52.008 52.008 0 00-3.253 11.258c-1.27 8.448.186 15.235 4.454 20.75 5.325 6.88 12.116 10.947 20.185 12.08a75.42 75.42 0 0011.03.859c7.116-.054 15.324-.948 22.51-7.061.095.129.176.243.253.362 4.693 7.238 11.786 11.006 21.077 11.197 11.927.246 21.868-5.198 28.745-15.743 11.131-17.066 11.602-35.436 1.399-54.598-7.831-14.715-20.438-26.604-37.466-35.334zM92.954 69.534c.03 1.027.065 2.084.072 3.127a.663.663 0 00-.33.575c0 1.306.004 2.612.01 3.919.01 2.846.022 5.79-.02 8.68-.096 6.452-3.148 10.259-9.332 11.64a42.607 42.607 0 01-21.695-.527c-9.627-2.875-14.467-10.106-13.277-19.836l.045-.38c.142-1.16.287-2.361.51-3.515 1.32-6.825 4.9-11.735 10.945-15.01 6.203-3.36 12.246-5.023 18.316-5.023 2.182.002 4.36.213 6.502.63 1.792.376 3.539.938 5.213 1.68 2.252.952 3.666 2.233 3.247 5.392a53.564 53.564 0 00-.206 8.648z"
                                            fill="#fff"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path fill="#000" transform="translate(.777)" d="M0 0H155V149H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className=" font-bold text-xl text-ap3" >hello let us know your email</h3>
                                <input onChange={changeHandler} placeholder="email" value={data.email} className={`input bg-ap3 text-black text-bold`} type="text" name="email" id={`email`} />
                            </div>

                            <div style={{ display: 'none' }} className="frm sm:w-1/2 w-full fade-in-left p-3 text-center flex flex-col items-center justify-center content-center space-y-4">
                                <svg
                                    width="186px"
                                    height="186px"
                                    viewBox="0 -7.5 186 186"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path
                                            d="M185.696 74.219c-.321-18.996-8.037-35.209-22.952-48.185-11.96-10.416-26.647-18.003-43.643-22.557C112.524 1.719 105.574.214 98.304.214a47.725 47.725 0 00-11.353 1.333c-17.062 4.178-29.575 9.005-40.56 15.668-16.43 9.966-26.861 19.866-33.825 32.106C3.154 65.844-.274 82.9 2.087 101.46c1.395 10.927 5.403 21.709 12.62 33.929 5.69 9.628 12.987 16.537 22.312 21.112 4.902 2.414 9.725 4.748 14.72 6.876 13.227 5.636 26.795 7.917 43.997 7.393 1.074-.146 2.388-.305 3.882-.484 3.989-.478 9.452-1.127 14.767-2.089 14.855-2.678 27.021-7.22 37.195-13.884a47.442 47.442 0 009.231-7.758 89.439 89.439 0 0012.853-18.659c8.43-16.108 12.365-33.666 12.032-53.677zM32.336 36.398c12.827-11.644 26.755-19.74 42.576-24.746l2.741-.868-2.08 1.976c-9.726 9.27-16.03 20.82-20.438 29.844l-.18.378-.427-.006c-5.436-.053-17.389-3.037-22.051-5.504l-.834-.444.693-.63zM8.651 84.665c1.54-15.456 7.257-29.175 17.476-41.932l.28-.345 25.48 7.526-.247.663a160.65 160.65 0 00-8.544 33.67l-.08.564-34.439.596.074-.742zm12.44 48.616l-.307-.471C12.273 119.595 8.21 106.155 8.37 91.727l.006-.657h33.258l.767 33.147-21.311 9.064zm29.649 22.12c-9.4-4.137-19.117-8.414-26.095-17.08l-.493-.611.686-.377c6.237-3.495 12.674-5.53 18.143-7.062l.727-.199.114.736c1.594 9.906 4.322 17.531 8.578 23.989l1.24 1.877-2.9-1.273zm34.984 8.002l-.593.046c-1.104.093-2.195.14-3.276.14a64.088 64.088 0 01-13.28-1.672 3.315 3.315 0 01-1.9-1.511l-.962-1.558c-2.531-4.118-5.082-6.265-7.603-12.632-2.512-6.345-4.53-12.4-5.183-17.955l-.065-.591.58-.129a188.05 188.05 0 0132.917-4.522l.728-.04-1.363 40.424zm1.668-47.032l-35.345 5.066-.093-.656c-1.462-10.171-1.234-20.529-.821-29.32l.027-.63h37.292l-1.06 25.54zm1.267-32.337H52.093l.065-.723c.94-10.025 3.355-20.403 7.377-31.727l.174-.485 28.95 2.301v30.634zm.213-37.417l-26.58-1.613.38-.869C69.61 28.197 78.42 16.81 90.413 8.322l1.154-.816-2.695 39.111zm31.45-33.67c10.865 3.195 24.826 8.235 36.485 18.971l.701.645-1.721.875c-5.51 2.805-10.71 5.451-16.995 6.433l-.441.073-.233-.388c-.921-1.499-1.818-3.017-2.715-4.535-4.409-7.413-8.965-15.085-15.708-20.94l-2.302-1.996 2.929.862zM97.69 14.319c.08-1.651.16-3.315.234-4.98l.046-.96.888.377c13.159 5.63 22.558 15.576 30.475 32.252l.367.774-3.101.577c-9.785 1.837-19.03 3.574-28.886 3.892l-.674.02-.013-.67c-.31-10.498.164-20.595.665-31.283l-.001.001zm-.779 39.314l36.156-5.451.2.464c4.296 9.654 6.324 20.462 6.197 33.038v.636l-42.556 1.585.003-30.272zm-.407 36.932l42.856-1.346-.02.71a174.753 174.753 0 01-3.181 28.207l-.114.577-40.56-2.892 1.019-25.256zm15.889 70.802c-4.403.71-8.818 1.307-13.487 1.936-1.595.219-3.215.438-4.877.664l-.793.112 1.794-41.342.614-.02c11.273-.425 22.892.445 37.666 2.811l.807.13-.287.756c-.3.795-.6 1.585-.893 2.374-2.597 6.929-5.765 13.056-9.032 19.407-3.591 6.982-10.311 12.979-11.514 13.171l.002.001zm48.885-27.802c-6.53 12.532-17.789 18.108-28.975 22.272l-1.848.69 1.047-1.665c4.896-7.743 8.091-16.185 11.473-25.123l.894-2.366 17.776 5.489-.367.703zm15.881-44.983c-1.18 14.137-4.608 25.979-10.778 37.265l-.248.457-20.11-5.238 3.449-32.272 27.747-.954-.06.742zm.354-8.275l-.074.564-28.02.982-.081-.597c-.24-1.807-.454-3.634-.667-5.405-.466-4.004-.954-8.135-1.787-12.1-.827-3.906-1.994-7.665-3.236-11.644-.526-1.71-1.08-3.474-1.594-5.245l-.166-.57 20.697-8.533.307.225c9.39 6.935 16.494 27.511 14.62 42.322l.001.001z"
                                            fill="#fff"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path fill="#000" transform="translate(.777)" d="M0 0H185V171H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className=" font-bold text-xl text-ap3" >all right! select your username that will been in your public link</h3>
                                <input onChange={changeHandler} value={data.username} placeholder="username" className={`input bg-ap3 text-black text-bold`} type="text" name="username" id={`username`} />
                            </div>

                            <div style={{ display: 'none' }} className="frm sm:w-1/2 w-full fade-in-left p-3 text-center items-center justify-center content-center space-y-4 flex flex-col">
                                <svg
                                    width="149px"
                                    height="149px"
                                    viewBox="0 -4.5 149 149"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0)" fill="#fff">
                                        <path d="M50.265 78.945c4.544-4.737 8.727-9.497 13.323-13.82 13.984-13.158 28.13-26.142 42.209-39.197 7.895-7.32 15.857-14.57 22.655-22.975 2.195-2.714 4.803-3.306 7.608-1.196a94.69 94.69 0 0110.406 9.261c1.131 1.147 1.681 3.137 1.922 4.823.39 2.702-1.563 4.397-4.094 3.46a25.449 25.449 0 01-6.238-3.6c-1.938-1.448-3.585-3.287-5.349-4.944-6.301 6.504-12.744 13.157-19.486 20.119 2.856 2.587 6.342 5.763 9.85 8.917.99.89 2.126 1.631 3.032 2.593.834.88 1.536 1.879 2.082 2.962a4.274 4.274 0 01-.9 5.19 4.12 4.12 0 01-4.928.888 15.515 15.515 0 01-4.514-3.288c-3.007-3.26-5.784-6.731-8.655-10.116-.702-.828-1.407-1.653-2.303-2.703-17.43 15.577-34.715 30.982-50.729 47.93.68.907 1.281 1.686 1.854 2.48 6.785 9.433 9.617 19.857 6.158 31.101-3.894 12.662-13.436 19.336-26.046 22.055a35.19 35.19 0 01-19.343-1.417c-9.378-3.285-15.024-9.942-17.064-19.599-1.63-7.713-.683-15.224 2.296-22.49 2.137-5.208 5.518-9.282 10.69-11.797 3.868-1.88 7.46-4.508 11.496-5.825 8.09-2.636 16.334-3.2 24.068 1.188zM30.79 131.642c2.085-.289 3.965-.46 5.809-.818 13.64-2.653 22.207-13.731 19.717-26.744-2.123-11.093-9.246-20.334-23.758-18.579-3.733.454-7.43 1.198-11.16 1.678-4.227.543-7.082 2.905-9.077 6.488a29.878 29.878 0 00-3.796 14.984c.135 11.723 4.084 19.25 15.566 21.945 2.25.532 4.581.725 6.7 1.048v-.002z" />
                                        <path d="M31.493 121.782c-4.15-.129-8.576-2.61-11.24-7.591-2.73-5.105-1.622-10.176 1.375-14.8 1.764-2.727 4.304-4.416 7.896-3.801.917.157 1.942-.233 2.904-.438a18.12 18.12 0 0110.468.788c3.525 1.358 5.429 4.118 6.055 7.739 1.68 9.694-5.795 18.163-17.458 18.103zm.368-6.966c5.258.07 8.604-2.44 9.367-6.204.523-2.584-.51-4.903-2.85-5.619a58.336 58.336 0 00-8.385-1.948c-1.008-.151-2.676.316-3.154 1.066-1.656 2.592-2.348 5.579-.916 8.509a7.155 7.155 0 005.938 4.196z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <path fill="#000" transform="translate(.777)" d="M0 0H148V140H0z" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h3 className=" font-bold text-xl text-ap3" >almost finish, it's password time</h3>
                                <div className="flex flex-col items-stretch space-y-2 justify-center content-center">
                                    <input onChange={changeHandler} className={`input bg-ap3 text-black text-bold`} placeholder="password" type="password" name="password" id="password" />
                                    <div className="flex space-x-2">
                                        <div className="passindex w-1/5 rounded-lg bg-[#1eeb4b] opacity-10 p-1"></div>
                                        <div className="passindex w-1/5 rounded-lg bg-[#1eeb4b] opacity-10 p-1"></div>
                                        <div className="passindex w-1/5 rounded-lg bg-[#1eeb4b] opacity-10 p-1"></div>
                                        <div className="passindex w-1/5 rounded-lg bg-[#1eeb4b] opacity-10 p-1"></div>
                                        <div className="passindex w-1/5 rounded-lg bg-[#1eeb4b] opacity-10 p-1"></div>
                                    </div>
                                    <input className="input bg-ap3 text-black text-bold" type="password" placeholder="retype the password" name="repassword" id="repassword" />
                                </div>
                            </div>

                            <div style={{ display: 'none' }} className="frm sm:w-1/2 w-full fade-in-left p-3 text-center flex flex-col items-center justify-center content-center space-y-4">
                                {
                                    (!errors.email || !errors.username) &&
                                    <svg
                                        className={`sm:h-auto h-[8em] `}
                                        width="158px"
                                        height="158px"
                                        viewBox="0 -17 158 158"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0)">
                                            <path
                                                d="M46.133 81.523c-5.782 0-11.452-.053-17.12.015-5.906.071-11.81.315-17.716.364a28.578 28.578 0 01-5.636-.565c-4.699-.91-6.033-3.935-3.48-8.032 1.76-2.824 3.71-5.541 5.691-8.22 10.707-14.481 21.48-28.913 32.163-43.411 3.098-4.204 6.018-8.541 8.93-12.877a21.786 21.786 0 002.067-4.14c1.697-4.294 5.527-5.334 8.96-2.267a28.402 28.402 0 013.294 3.744A8702.945 8702.945 0 0182.593 30.84c.404.52.871.984 1.405 1.581a54.427 54.427 0 0123.536-8.83c17.279-2.255 30.829 3.73 40.282 18.403 4.74 7.357 8.078 15.29 9.036 24.098 1.502 13.835-2.37 26.115-11.749 36.231-13.3 14.347-30.097 21.791-49.717 21.28-16.946-.441-30.15-8.616-39.609-22.552-3.864-5.692-7.323-11.672-9.096-18.434a5.488 5.488 0 00-.548-1.094zm10.71-.287c.919 2.13 1.564 4.013 2.508 5.732a87.742 87.742 0 004.98 8.272c6.579 9.363 15.405 15.6 26.95 16.634 18.622 1.67 34.331-4.848 46.949-18.523a30.787 30.787 0 007.955-18.344c1.307-13.867-3.835-25.4-13.481-35.13-3.323-3.35-7.577-4.996-12.084-6.02-7.027-1.597-13.952-.714-20.794 1.114a37.605 37.605 0 00-10.923 4.486c.86 1.271 1.586 2.365 2.333 3.444 5.694 8.225 11.264 16.526 15.579 25.58a36.271 36.271 0 012.437 6.167c1.377 5.164-1.251 8.022-6.623 7.815-14.136-.545-28.28-.96-42.422-1.405-.976-.036-1.957.098-3.364.177zm41.525-7.172C86.113 51.082 69.981 32.119 53.976 12.652 41.117 33.904 26.022 53.396 11.33 74.19c29.311-.95 57.802-1.739 87.035-.127h.003z"
                                                fill="#fff"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <path fill="#000" transform="translate(.777)" d="M0 0H157V124H0z" />
                                            </clipPath>
                                        </defs>
                                    </svg>

                                }
                                <h3 className=" font-bold text-xl text-ap3" >We finished, a little bit about your self</h3>
                                <div className="form-control w-full m-0" style={{ margin: '0' }}>
                                    <label className="label">
                                        <span className="label-text ">Your birthday?</span>
                                    </label>
                                    <input onChange={changeHandler} value={data.birthday} id='birthday' max={`${new Date().getFullYear() - 5}-01-01`} type="date" className="input input-accent bg-white text-black w-auto" />
                                </div>
                                <div className="form-control w-full m-0" style={{ margin: '0' }}>
                                    <label className="label">
                                        <span className="label-text ">Your location?</span>
                                    </label>
                                    <select value={data.country} onChange={changeHandler} id="country" className="select select-accent bg-ap3 w-auto text-black elsex">
                                        <option disabled selected>Select your country</option>
                                    </select>
                                </div>
                            </div>

                        </div>


                        <div className="flex flex-col space-y-3 justify-center items-center content-center">
                            <div className="flex flex-row space-x-3 items-center justify-center">
                                <button disabled={index === 0 ? true : false} onClick={() => { setDiv(-1) }} type="button" className="btn btn-accent text-black">Back</button>
                                {
                                    index === 5 ?
                                        <>
                                            <button onClick={() => { save('skip') }} type="button" className="btn btn-accent text-black">Skip</button>
                                            <button onClick={() => { save() }} type="button" className="btn btn-accent text-black">Save</button>
                                        </>
                                        :
                                        <button disabled={index === 5 ? true : false} onClick={() => { setDiv(1) }} type="button" className="btn btn-accent text-black">Next</button>
                                }
                            </div>
                        </div>


                        {
                            index <= 1 ?
                                <span className="text-sm text-ap3 my-2 text-center">already have an account <Link href="/login" className="btn btn-sm btn-ghost font-bold" >Login</Link></span>
                                : ''
                        }


                    </div>
                </div>
            </div>
        </>
    );
}
