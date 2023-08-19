import { usePage } from '@inertiajs/inertia-react';
import Base from '../../Layouts/Base'


export default function AdminStatistic() {
    const {is_admin, pages} = usePage().props
    console.log(pages);
    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] pb-[1.3em] space-y-3 h-full flex flex-col'>
                <h2 className='text-2xl font-extrabold py-4'>AllAcc Statistic :</h2>

                <div class="overflow-x-auto">
                        <table class="table table-normal w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>page</th>
                                    <th>visits</th>
                                    <th>as guest</th>
                                    <th>as loged in</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pages.map((page,i) => (
                                    <tr>
                                        <th>{i}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{page.page}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{page.visits}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{page.guest_v}</th>
                                        <th className="md:max-w-[4em] max-w-fit overflow-hidden text-ellipsis">{page.auth_v}</th>

                                    </tr>
                                ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th></th>
                                    <th>page</th>
                                    <th>visits</th>
                                    <th>as guest</th>
                                    <th>as loged in</th>
                                </tr>
                            </tfoot>
                        </table>

                    </div>

            </div>
        </>
    );
}

AdminStatistic.layout = (page) => <Base children={page} title={'AllAcc statistic'} />
