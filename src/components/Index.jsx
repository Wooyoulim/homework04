import Footer from './footer/Footer';
import Header from './header//Header';
import Main from './main/Main';
import Visual from './visual/Visual';

import './Index.scss';

const Index = () => {
    return (
        <div id="wrap">
            <Header />
            <Visual />

            <Main />
            <Footer />
        </div>
    );
};

export default Index;
