import MainCon1 from './maincon1/MainCon1';
import MainCon2 from './maincon2/MainCon2';
import MainCon3 from './maincon3/MainCon3';
import MainCon4 from './maincon4/MainCon4';

const Main = () => {
    return (
        <>
            <main id="container" className="main">
                <section id="content">
                    <MainCon1 />
                    <MainCon2 />
                    <MainCon3 />
                    <MainCon4 />
                </section>
            </main>
        </>
    );
};

export default Main;
