const MainCon2SubLi = ({ item }) => {
    return (
        <>
            <li>
                <div>
                    <a href="#">
                        <img src={item.imgurl} />
                        <h3>
                            {item.kor}
                            <span>{item.eng}</span>
                        </h3>
                        <b>
                            <i className="xi-arrow-down"></i>
                        </b>
                    </a>
                </div>

                <p>{item.desc}</p>
                <p className="more">
                    <a href="#">
                        <span>View more</span>
                    </a>
                </p>
            </li>
        </>
    );
};

export default MainCon2SubLi;
