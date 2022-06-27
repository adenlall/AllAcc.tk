import Base from '../Layouts/Base'
import { Link, useForm, usePage } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia';

export default function AdminAuth() {

      const { auth, errors } = usePage().props;
      const { data, setData } = useForm({
          username: null,
          nickname: null,
          token: null,
          secret: null,
      })


    console.log(errors);
    const changeHandler = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault()
        Inertia.get('/admin/verify', data);
    }

    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full flex flex-col'>

                <div className="p-4 w-full">
                    <h1 className='text-2xl font-extrabold text-accent'>Welcome Mr. SuperUser</h1>
                    <h4 className="text-xl font-bold">A more fiew verification setup</h4>
                </div>
                <form onSubmit={submit} className="bg-ago p-2 rounded-lg w-full flex flex-col items-center justify-center cintent-cente space-y-2">

                    <h2 className="text-drk font-bold text-xl">Make sure that you write the correct information</h2>
                    <h2 className="text-drk font-bold text-lg italic">{''}</h2>

                    <div className="form-control w-full lg:w-1/2 max-w-xs" >
                        <label className="label">
                            <span className="label-text text-drk">username</span>
                        </label>
                        <input onChange={changeHandler} name='username' id='username' type="text" placeholder="your username" className="input input-primary text-drk input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full lg:w-1/2 max-w-xs" >
                        <label className="label">
                            <span className="label-text text-drk">Private token</span>
                        </label>
                        <input onChange={changeHandler} name='token' id='token' type="password" placeholder="your private token" className="input input-primary text-drk input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full lg:w-1/2 max-w-xs" >
                        <label className="label">
                            <span className="label-text text-drk">Private nickname</span>
                        </label>
                        <input onChange={changeHandler} name='nickname' id='nickname' type="password" placeholder="your private nickname" className="input input-primary text-drk input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full lg:w-1/2 max-w-xs" >
                        <label className="label">
                            <span className="label-text text-drk">Secret number</span>
                        </label>
                        <input onChange={changeHandler} name='secret' id='secret' type="number" placeholder="your secret number" className="input input-primary text-drk input-bordered w-full max-w-xs" />
                    </div>

                    <span className="label-text-alt text-error">{errors && errors.username}</span>
                    <div className='flex flex-row items-center space-x-3'>
                    <button type="submit" className="btn">Enter</button>
                    <h4 className="text-lg italic">{''}</h4>
                    </div>

                </form>
            </div>
        </>
    );
}
AdminAuth.layout = (page) => <Base children={page} title={"AdminAuth"} />

