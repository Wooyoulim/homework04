// import './Work4Cart.scss';
const Work4Cart = ({ data, setAmount, amount, onDel, isShow, list }) => {
    const { title, price, imgurl, desc } = list;
    const numChange = (e) => {
        setAmount(e.target.value);
    };
    return (
        <div className="Total">
            <table>
                <colgroup>
                    <col className="text" />
                    <col className="amount" />
                    <col className="price" />
                </colgroup>
                <thead></thead>
                <tbody>
                    {list.map(({ id, title, price, imgurl, desc }, idx) => (
                        <tr key={idx}>
                            <td>
                                <img src={imgurl} alt={title} />
                            </td>
                            <td>
                                상품명 : {title}
                                <br />
                                <br />
                                {desc}
                            </td>
                            <td>
                                {
                                    <select onChange={numChange}>
                                        <option value="num">수량을 선택</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                }
                            </td>
                            <td>
                                금액 :
                                {amount === 0 ? price : `${Number(parseInt(price) * amount)}원`}
                            </td>
                            <td>
                                <button onClick={isShow}>장바구니 담기</button>
                                <button onClick={() => onDel(id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Work4Cart;
