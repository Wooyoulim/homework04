const Work4ListItem = ({ item, isSelect }) => {
    const { id, imgurl, title } = item;
    return (
        <>
            <li onClick={() => isSelect(id)}>
                <img src={imgurl} alt={title} />
            </li>
        </>
    );
};

export default Work4ListItem;
