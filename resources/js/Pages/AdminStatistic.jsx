import Base from '../Layouts/Base'


export default function AdminStatistic() {
    return (
        <>
            <div id='#head' className='w-[95%] sm:w-[72%] space-y-3 h-full flex flex-col'>
                <h2 className='text-2xl font-extrabold pt-4'>AllAcc Statistic :</h2>
            </div>
        </>
    );
}

AdminStatistic.layout = (page) => <Base children={page} title={'AllAcc statistic'} />
