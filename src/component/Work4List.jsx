import Work4ListUl from './Work4ListUl';
// import './Work4List.scss';

const Work4List = ({ data, onCount }) => {
    return (
        <div className="List">
            <div className="img">
                <h2>편안한 나만의 공간, 휴식을 위한 선택</h2>
                <Work4ListUl data={data} onCount={onCount} />
            </div>
        </div>
    );
};

export default Work4List;
