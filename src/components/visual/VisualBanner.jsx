import VisualBannerLi from './VisualBannerLi';

const MainBanner = ({ visual }) => {
    return (
        <>
            <ul className="main-banner">
                {visual.map((item) => (
                    <VisualBannerLi key={item.id} item={item} />
                ))}
            </ul>
        </>
    );
};

export default MainBanner;
