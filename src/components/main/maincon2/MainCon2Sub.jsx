import MainCon2SubLi from './MainCon2SubLi';

const MainCon2Sub = ({ mainCon2 }) => {
    return (
        <ul className="innovation">
            {mainCon2.map((item) => (
                <MainCon2SubLi key={item.id} item={item} />
            ))}
        </ul>
    );
};

export default MainCon2Sub;
