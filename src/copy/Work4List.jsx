import { FaShoppingBasket } from 'react-icons/fa';
import Work4Cart from './Work4Cart';
import Work4ListUl from './Work4ListUl';
import './Work4List.scss';

const Work4List = ({
    data,
    popup,
    isSelect,
    select,
    current,
    onCount,
    amount,
    setAmount,
    count,
    onSubmit,
    onEdit,
}) => {
    return (
        <div className="List">
            <div className="img">
                <h2>
                    상품리스트
                    <p className="icon" onClick={popup}>
                        <FaShoppingBasket />
                        <span>{count ? amount : 0}</span>
                    </p>
                </h2>
                <Work4ListUl data={data} isSelect={isSelect} />
            </div>
            {select ? (
                <Work4Cart
                    current={current}
                    onCount={onCount}
                    setAmount={setAmount}
                    amount={amount}
                    onSubmit={onSubmit}
                    onEdit={onEdit}
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Work4List;
