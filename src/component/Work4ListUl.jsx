import Work4ListItem from './Work4ListItem';

const Work4ListUl = ({ data, onCount }) => {
    return (
        <ul>
            {data.map((item) => (
                <Work4ListItem key={item.id} item={item} onCount={onCount} />
            ))}
        </ul>
    );
};

export default Work4ListUl;
