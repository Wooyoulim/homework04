import MainCon4SubLi from './MainCon4SubLi';

const MainCon4Sub = ({ con4 }) => {
    return (
        <ul>
            {/* <MainCon4SubLi /> */}
            {con4.map((item) => (
                <MainCon4SubLi key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MainCon4Sub;
