import Guest   from '../Layouts/Guest'
import Faq     from "../Components/Guest/Faq";
import Team from '../Components/Guest/Team';

export default function About() {
    return (
        <>
        <Faq     />
        <Team />
        </>
     );
}

About.layout = (page) => <Guest children={page} title={"About"} />
