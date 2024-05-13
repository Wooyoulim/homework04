import VisualBanner from './VisualBanner';
import visual from './../../assets/api/data';
import './Visual.scss';

const Visual = () => {
    return (
        <>
            <section id="visual">
                <VisualBanner visual={visual} />

                <p className="btn-wrap">
                    <button className="btn prev">
                        <img src="./images/main/btn_prev2.png" />
                    </button>
                    <button className="btn next">
                        <img src="./images/main/btn_next2.png" alt="" />
                    </button>
                </p>
                <p className="scroll">
                    <img src="./images/main/scroll.png" alt="" />
                </p>
            </section>
        </>
    );
};

export default Visual;
