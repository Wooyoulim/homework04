import MainCon3SubLi from './MainCon3SubLi';

const MainCon3Sub = ({ data }) => {
    return (
        <ul>
            {data.map((item) => (
                <MainCon3SubLi key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MainCon3Sub;
