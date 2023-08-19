import { Link, usePage } from "@inertiajs/inertia-react";
import Base from "../../Layouts/Base";

export default function AdminActivities() {

    const { usersF,usersL,mostV,lastUP,oldestU, } = usePage().props;

    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full pb-[1.3em] flex flex-col'>
                <h2 className='text-2xl font-extrabold py-4'>AllAcc Activities :</h2>

                <h3 className='text-xl font-bold pt-3'>Older accounts created</h3>
                <div class="overflow-x-auto">
                    <table class="table table-normal w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>name</th>
                                <th>username</th>
                                <th>visits</th>
                                <th>created at</th>
                                <th>AsSeem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersF.map((user,i) => (
                                <tr>
                                    <th>{i}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.name}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.username}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.visit}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.created_at !== null ? user.created_at.split('T')[0] +' '+user.created_at.split('T')[1].split(':')[0]+':'+user.created_at.split('T')[1].split(':')[1]:'null'}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis"><Link href={`/${user.username}`}>AsSeem</Link></th>
                                </tr>
                            ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>name</th>
                                <th>username</th>
                                <th>visit</th>
                                <th>created at</th>
                                <th>AsSeem</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <h3 className='text-xl font-bold pt-3'>Latest accounts created</h3>
                <div class="overflow-x-auto">
                    <table class="table table-normal w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>name</th>
                                <th>username</th>
                                <th>visits</th>
                                <th>created at</th>
                                <th>AsSeem</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersL.map((user,i) => (
                                <tr>
                                    <th>{i}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.name}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.username}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.visit}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.created_at !== null ? user.created_at.split('T')[0] +' '+user.created_at.split('T')[1].split(':')[0]+':'+user.created_at.split('T')[1].split(':')[1]:'null'}</th>
                                    <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis"><Link href={`/${user.username}`}>AsSeem</Link></th>
                                </tr>
                            ))
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th></th>
                                <th>name</th>
                                <th>username</th>
                                <th>visit</th>
                                <th>created at</th>
                                <th>AsSeem</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <h3 className='text-xl font-bold pt-3'>Most users public page visited</h3>
                <div className='bg-slate-700 rounded-lg space-x-2 flex flex-col sm:flex-row p-4 items-center justify-center content-center'>
                            {mostV.map(user=>(
                                <div className="bg-slate-900 rounded-lg p-[3em] w-full space-y-3 flex flex-col justify-center items-center">
                                    <h2 className="sm:text-2xl text-xl font-extrabold">{user.name}</h2>
                                    <h2 className="sm:text-xl text-lg font-light">{user.username}</h2>
                                    <div className="sm:text-xl text-lg rounded-lg font-bold bg-yellow-500 text-black text-center p-[1em] w-full">{user.visit} visit</div>
                                </div>
                            ))}
                </div>

                <h3 className='text-xl font-bold pt-3'>Recent accounts updated</h3>
                <div className='flex flex-col space-x-2 sm:flex-row items-stretch p-4 rounded-lg bg-[#0000002e] justify-center content-center'>
                            {lastUP.map((user , i)=>(
                                <div className={`bg-yellow-200 rounded-lg text-black p-[3em] h-[13em]  w-full space-y-3 flex flex-col justify-center items-center`}>
                                    <h2 className="sm:text-2xl text-xl font-extrabold">{user.name}</h2>
                                    <h2 className="sm:text-xl text-lg font-light">@{user.username}</h2>
                                    <div className="rounded-lg sm:text-xl text-lg text-center font-bold bg-yellow-500 text-black p-[1em] w-full">last update on {user.updated_at.split('T')[0] +' '+user.updated_at.split('T')[1].split(':')[0]+':'+user.updated_at.split('T')[1].split(':')[1]}</div>
                                </div>

                            ))}
                </div>

                <h3 className='text-xl font-bold pt-3'>Oldert users</h3>
                <div className='flex flex-col space-x-2 sm:flex-row items-stretch p-4 rounded-lg bg-[#0000002e] justify-center content-center'>
                            {oldestU.map((user , i)=>(
                                <div className={`bg-yellow-200 rounded-lg text-black p-[3em] h-[13em]  w-full space-y-3 flex flex-col justify-center items-center`}>
                                    <h2 className="sm:text-2xl text-xl font-extrabold">{user.name}</h2>
                                    <h2 className="sm:text-xl text-lg font-light">@{user.username}</h2>
                                    <div className="rounded-lg sm:text-xl text-lg text-center font-bold bg-yellow-500 text-black p-[1em] w-full">birth on {user.birthday}</div>
                                </div>

                            ))}
                </div>

            </div>
        </>
    );
}


AdminActivities.layout = (page) => <Base children={page} title={'AllAcc ActiviAdminActivities'} />
