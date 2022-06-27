import { Link, useForm, usePage } from '@inertiajs/inertia-react'
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Base from '../Layouts/Base'
// torch_LYiqtLKeEkj8OSpNxMoHYIs9ELId2de0MNKeuCjl

export default function Admin() {
    const { admin, users } = usePage().props;
    console.log(users);
    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full flex flex-col'>
                <h2 className='text-2xl font-extrabold pt-2'>Welcome Mr. {admin.username}</h2>
                <section className='my-4'>
                    <h2 className='text-2xl font-extrabold'>Users :</h2>
                    <div class="overflow-x-auto">
                        <table class="table table-normal w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>country</th>
                                    <th>birthday</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data.map(user => (
                                    <tr>
                                        <th>{user.id}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.name}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.username}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.email}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.country}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{user.birthday}</th>

                                    </tr>
                                ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>username</th>
                                    <th>email</th>
                                    <th>country</th>
                                    <th>birthday</th>
                                </tr>
                            </tfoot>
                        </table>

                    </div>
                    <div className='w-full my-1 p-2 flex flex-row items-center justify-center content-center space-x-2'>
                        {
                            users.links.map((link, i) => (
                                <>
                                    {
                                        link.url === null || link.label === "&laquo;" || link.label === "&raquo;"
                                            ?
                                            ''
                                            :
                                            < Link preserveScroll key={i} as="button" href={'?' + link.url.split('?')[1]}><button className={link.active ? 'btn btn-sm btn-secondary' : 'btn btn-sm'}>{i}</button></Link>
                                    }
                                </>
                            ))
                        }
                    </div>
                </section>
            </div >
        </>
    );
}
Admin.layout = (page) => <Base children={page} title={'SuperUser Dashboard'} />


