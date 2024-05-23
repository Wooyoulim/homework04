const Work4ListItem = ({ item, isSelect, onCount }) => {
    const { id, imgurl, title } = item;
    return (
        <>
            <li onClick={() => onCount(id)}>
                <img src={imgurl} alt={title} />
            </li>
        </>
    );
};

export default Work4ListItem;
