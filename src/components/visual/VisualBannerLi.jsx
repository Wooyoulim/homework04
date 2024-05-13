const VisualBannerLi = ({ item }) => {
    const { id, imgurl, title, desc } = item;
    return (
        <>
            <li key={id} className="on">
                <div className="inner">
                    <div className="txt">
                        <h2>{title}</h2>
                        <p>{desc}</p>
                        <p className="more">
                            <a href="#">
                                Learn More<i className="xi-angle-right-thin"></i>
                            </a>
                        </p>
                    </div>
                </div>
            </li>
        </>
    );
};

export default VisualBannerLi;
