import { useRef, useState } from 'react';
import Work4List from './Work4List';
import Work4Total from './Work4Total';
import dataList from './../assets/api/data';
import { useEffect } from 'react';
import './styles.scss';
import Work4Cart from './Work4Cart';

const Work4 = () => {
    const [data, setData] = useState(dataList);
    const { id, price, title } = data;

    // const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || dataList);
    const [current, setCurrent] = useState(data[0]);
    const [list, setList] = useState([]);
    const [select, setSelect] = useState(false);
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);
    const [hap, setHap] = useState(0);

    const isShow = () => {
        setShow(true);
        // setCurrent(data.find((item) => item.id === id));
    };

    //장바구니
    const onCount = (id) => {
        setList([...list, current]);
        setCurrent(data.find((item) => item.id === id));
        setSelect(true);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        data.total = Number(price * amount);
    };

    //삭제
    const onDel = (idx) => {
        data.filter((item) => item.id !== idx);
        console.log(id);
        console.log(list);
        console.log(idx);
    };

    useEffect(() => {
        setHap(
            list.reduce((acc, curr) => {
                return acc + parseInt(curr.price) * amount;
            }, 0)
        );
    }, [amount]);

    return (
        <div className="content">
            <Work4List data={data} onCount={onCount} />
            {select && (
                <Work4Cart
                    data={data}
                    amount={amount}
                    setAmount={setAmount}
                    onDel={onDel}
                    isShow={isShow}
                    list={list}
                    hap={hap}
                />
            )}
            {show && (
                <Work4Total
                    current={current}
                    onCount={onCount}
                    setAmount={setAmount}
                    amount={amount}
                    onSubmit={onSubmit}
                    hap={hap}
                />
            )}
        </div>
    );
};

export default Work4;
