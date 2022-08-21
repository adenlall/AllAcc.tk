import { Link, useForm } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import Auth from '../../Layouts/Auth'

export default function Register({ errors }) {
    const { data, setData } = useForm({
        name: '', username: '', email: '', password: '',
    })

    const changeHandler = (e) => setData({ ...data, [e.target.id]: e.target.value })

    function submitHandler(e){
        Inertia.post('/register', data);
    }
    return (
        <>


            <div className='w-full flex flex-col items-center justify-center content-center'>
                <div className='w-[90%] h-[62vh] mb-[-7em]  '>
                    <img src='/imgs/app/Auth/register.jpg' alt='fuji japan' className='w-full h-full object-cover rounded-xl' />
                </div>

                <div className='flex z-10 flex-col items-center justify-center content-center p-[1.3em] py-10 bg-ago rounded-lg w-[90%] mb-10 shadow-none sm:shadow-lg sm:w-[30em]'>

                    <div className="form-control w-full mb-2 max-w-xs flex flex-col " >
                        <h2 className='text-main text-2xl font-extrabold hight w-[fit-content]'>Create an account</h2>
                        <i className='text-main text-sm'>Fill all blanks and submit.</i>
                    </div>

                    <div className="form-control w-full max-w-xs lg:space-x-4 space-x-0 flex lg:flex-row flex-col">

                        <div className="form-control w-full lg:w-1/2 max-w-xs" >
                            <label className="label">
                                <span className="label-text text-drk">What is your full name?</span>
                            </label>
                            <input value={data.name} onChange={changeHandler} name='name' id='name' type="text" placeholder="full name" className="input input-primary bg-white text-drk input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt  text-error">{errors && errors.name}</span>
                            </label>
                        </div>

                        <div className="form-control w-full lg:w-1/2 max-w-xs">
                            <label className="label">
                                <span className="label-text text-drk">Chose some userName</span>
                            </label>
                            <input value={data.username} onChange={changeHandler} name='username' id='username' type="text" placeholder="username" className="input input-primary bg-white text-drk input-bordered w-full max-w-xs" />
                            <label className="label">
                                <span className="label-text-alt text-error">{errors && errors.username}</span>
                            </label>
                        </div>

                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-drk">Tipe your email</span>
                        </label>
                        <input value={data.email} onChange={changeHandler} type="email" name='email' id='email' placeholder="adenlall@example.com" className="input input-primary bg-white text-drk input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-error">{errors && errors.email}</span>
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text text-drk">Create a strong password</span>
                        </label>
                        <input value={data.password} onChange={changeHandler} type="password" name='password' id='password' placeholder="*******" className="input input-primary bg-white text-drk input-bordered w-full max-w-xs" />
                        <label className="label">
                            <span className="label-text-alt text-error">{errors && errors.password}</span>
                        </label>
                    </div>

                    <div className="form-control mt-6 w-full max-w-xs">
                        <button  onClick={()=>{submitHandler()}} className="btn btn-primary w-fit">Sign up</button>
                    </div>

                    <div className="form-control w-full max-w-xs mt-2">
                        <div className='text-main text-sm italic'>Already have an account, <Link className='text-white hover:text-main' href="login" >Login</Link> now!</div>
                    </div>

                </div>

            </div>

        </>
    )
}

Register.layout = (page) => <Auth children={page} title={"Register - AllAcc"} />

