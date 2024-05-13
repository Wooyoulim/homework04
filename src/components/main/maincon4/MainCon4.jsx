import './MainCon4.scss';
import MainCon4Sub from './MainCon4Sub';
import con4 from './../../../assets/api/data3';

const MainCon4 = () => {
    console.log(con4);
    return (
        <>
            <div className="con-box con4 box2">
                <div className="inner">
                    <div className="left">
                        <h2>
                            ABOUT
                            <span>KYUNGDONG</span>
                        </h2>
                        <p>
                            서민연료인 연탄에서 신재생 에너지까지 에너지를 통한 따뜻한 삶의
                            <br />
                            공간 창조 바로 경동이 함께합니다.
                        </p>
                        <p className="more">
                            <a href="#">
                                <span>View more</span>
                            </a>
                        </p>
                    </div>
                    {/* <MainCon4Sub /> */}
                    <MainCon4Sub con4={con4} />
                </div>
            </div>
        </>
    );
};

export default MainCon4;
