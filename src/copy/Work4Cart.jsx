import './Work4Cart.scss';
const Work4Cart = ({ current, onCount, setAmount, amount, onSubmit }) => {
    const { id, title, price } = current;
    const numChange = (e) => {
        setAmount(e.target.value);
    };
    return (
        <form onSubmit={onSubmit} className="cart">
            <h2>상품명 : {title}</h2>
            <p className="price">판매가 : {price}</p>
            <p className="amount">
                수량 :
                <select onChange={numChange}>
                    <option value="num">수량을 선택</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </p>

            <button onClick={() => onCount(amount)} className="buy">
                장바구니
            </button>
        </form>
    );
};

export default Work4Cart;
