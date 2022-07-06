import Guest   from '../Layouts/Guest'
import Faq     from "../Components/Guest/Faq";
import Team from '../Components/Guest/Team';

export default function About() {
    return (
        <>
        <div className="container m-auto mt-8">
        <div className="w-[95%] m-auto rounded-lg h-[10em] bg-[url('/AllAcc-cover-plack-pink.svg')] bg-center bg-cover shadow-lg"></div>
        </div>
        <Faq  />
        <Team />
        <img src="/AllAcc-logo-complexe.svg" alt="allacc complexe logo" className="mx-auto h-[10em]"/>
        </>
     );
}

About.layout = (page) => <Guest children={page} title={"About - AllAcc"} />
