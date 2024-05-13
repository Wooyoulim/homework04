const MainCon4SubLi = ({ item }) => {
    const { id, imgurl, kor, eng } = item;
    return (
        <>
            <li>
                <a href="#">
                    <span>
                        <img src={imgurl} />
                    </span>
                    <strong>
                        {kor}
                        <span>{eng}</span>
                    </strong>
                </a>
            </li>
        </>
    );
};

export default MainCon4SubLi;
