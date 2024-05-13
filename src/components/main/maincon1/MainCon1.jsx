import './MainCon1.scss';
import MainCon1Sub from './MainCon1Sub';
const MainCon1 = () => {
    const mainCon1 = [
        {
            id: 1,
            // imgurl: './images/main/sec01_img01.jpg',
            imgurl: './images/content/sec01_img01.jpg',
            kor: '국내자원개발',
            eng: 'Domestic resource',
            desc: '경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.',
        },
        {
            id: 2,
            imgurl: './images/content/sec01_img02.jpg',
            kor: '해외자원개발',
            eng: 'Oversea resource',
            desc: '호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고 있습니다.',
        },
        {
            id: 3,
            imgurl: './images/content/sec01_img03.jpg',
            kor: '엔지니어링사업',
            eng: 'Engineering',
            desc: '축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종 Plant 설계 및 시공 기술을 보유하고 있습니다.',
        },
        {
            id: 4,
            imgurl: './images/content/sec01_img04.jpg',
            kor: '임대사업',
            eng: 'Building Lease',
            desc: '쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.',
        },
    ];
    return (
        <>
            <div className="con-box con1 box1">
                <div className="inner">
                    <h2>BUSINESS</h2>
                    <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

                    <MainCon1Sub mainCon1={mainCon1} />

                    <p className="more">
                        <a href="#">
                            <span>
                                View more <i className="xi-angle-right-min"></i>
                            </span>
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default MainCon1;
