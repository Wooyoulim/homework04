import './Footer.scss';
import FooterText from './FooterText';

const Footer = () => {
    return (
        <>
            <footer id="footer">
                <div className="inner">
                    <FooterText />

                    <p className="top">
                        <a href="">
                            <img
                                // src="http://www.kyungdong.co.kr/en/front/image/common/top.png"
                                src="./images/common/top.png"
                                alt="맨 위로 이동"
                            />
                        </a>
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
