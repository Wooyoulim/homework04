import Work4ListItem from './Work4ListItem';

const Work4ListUl = ({ data, isSelect }) => {
    return (
        <ul>
            {data.map((item) => (
                <Work4ListItem key={item.id} item={item} isSelect={isSelect} />
            ))}
        </ul>
    );
};

export default Work4ListUl;
