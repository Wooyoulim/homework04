import HeaderNav from './HeaderNav';
import HeaderUtil from './HeaderUtil';
import './Header.scss';

const Header = () => {
    return (
        <>
            <header id="header">
                <div className="inner">
                    <h1>
                        <a href="index.jsx">
                            <img src="./images/common/logo_pc.png" alt="경동 로고" />
                        </a>
                    </h1>
                    <HeaderNav />
                    <HeaderUtil />
                </div>
            </header>
        </>
    );
};

export default Header;
