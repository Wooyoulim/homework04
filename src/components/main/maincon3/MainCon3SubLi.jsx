const MainCon3SubLi = ({ item }) => {
    const { name, imgurl } = item;
    return (
        <>
            <li>
                <a href="#">
                    <div>
                        <img src={imgurl} alt={name} />
                    </div>
                    <strong>{name}</strong>
                </a>
            </li>
        </>
    );
};

export default MainCon3SubLi;
