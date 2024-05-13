const MainCon1SubLi = ({ lis }) => {
    const { id, imgurl, kor, eng, desc } = lis;
    return (
        <>
            <li key={id}>
                <a href="#">
                    <div>
                        <img src={imgurl} />
                    </div>
                    <h3>
                        {kor}
                        <span>{eng} </span>
                    </h3>
                    <p>{desc}</p>
                </a>
            </li>
        </>
    );
};

export default MainCon1SubLi;
