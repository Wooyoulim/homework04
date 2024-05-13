import './MainCon2.scss';
import MainCon2Sub from './MainCon2Sub';

const MainCon2 = () => {
    const mainCon2 = [
        {
            id: 1,
            imgurl: './images/content/sec02_img01.jpg',
            kor: '경동의 신기술',
            eng: 'Technology',
            desc: '경동은 지속적인 기술개발과 투자로 국내광산 최고의 기술력을 자랑하고 있습니다.',
        },
        {
            id: 2,
            imgurl: './images/content/sec02_img02.jpg',
            kor: '광산안전시스템',
            eng: 'A.B.C Safety',
            desc: '거대한 자연을 상대로 운영되는 광산에서의 안전은 아무리 강조해도 지나침이 없을 것입니다.',
        },
    ];
    return (
        <>
            <div className="con-box con2 box1">
                <div className="inner">
                    <h2>TECHNOLOGICAL INNOVATION</h2>

                    {/* <MainCon2Sub {...mainCon2} /> */}
                    <MainCon2Sub mainCon2={mainCon2} />
                </div>
            </div>
        </>
    );
};

export default MainCon2;
