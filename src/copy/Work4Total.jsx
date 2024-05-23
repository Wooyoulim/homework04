import './Work4Total.scss';

const Work4Total = ({ data, current, amount, hap, onDel, onEdit, isEdit, list }) => {
    const { id, title, price, imgurl } = current;

    const done = () => {
        alert('주문이 완료되었습니다');
    };

    return (
        <div className="Total">
            <table>
                <colgroup>
                    <col className="text" />
                    <col className="amount" />
                    <col className="price" />
                </colgroup>
                <thead>
                    <th>상품</th>
                    <th>수량</th>
                    <th>금액</th>
                </thead>
                <tbody>
                    {data
                        .filter((item) => item.id === id)
                        .map(({ id, title, price, imgurl }, idx) => (
                            <tr key={idx}>
                                <td>
                                    <img src={imgurl} alt={title} />
                                    상품명 : {title}
                                </td>
                                <td>{`${
                                    isEdit ? (
                                        //<input type="text" value={amount} />
                                        <select>
                                            <option value="num">수량을 선택</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    ) : (
                                        amount
                                    )
                                }개`}</td>
                                <td>{Number(parseInt(price) * amount)}</td>
                                <button onClick={() => onEdit(id)}>수정</button>
                                <button onClick={() => onDel(id)}>삭제</button>
                            </tr>
                        ))}
                </tbody>
            </table>
            <p className="hap">총금액 : {hap}원</p>
            <button onClick={done} className="order">
                주문하기
            </button>
        </div>
    );
};

export default Work4Total;
