import MainCon1SubLi from './MainCon1SubLi';

const MainCon1Sub = ({ mainCon1 }) => {
    return (
        <ul>
            {mainCon1.map((lis) => (
                <MainCon1SubLi key={lis.id} lis={lis} />
            ))}
        </ul>
    );
};

export default MainCon1Sub;
