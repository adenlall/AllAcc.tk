import Base from '../../Layouts/Base'
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
                    <h1 className='text-2xl font-extrabold text-accent'>Mr. SuperUser Config Dashboard</h1>
                    <h4 className="text-xl font-bold">Config user's dashboard</h4>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    );
}
AdminAuth.layout = (page) => <Base children={page} title={"AdminAuth"} />

