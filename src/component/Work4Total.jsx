// import './Work4Total.scss';

const Work4Total = ({ onSubmit, hap }) => {
    const done = () => {
        alert('주문이 완료되었습니다');
    };
    return (
        <form onSubmit={onSubmit} className="cart">
            <p className="hap">총금액 :{hap}원</p>
            <button onClick={done} className="order">
                주문하기
            </button>
        </form>
    );
};

export default Work4Total;
