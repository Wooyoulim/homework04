import { useState } from 'react';
import Work4List from './Work4List';
import Work4Total from './Work4Total';
import dataList from './../assets/api/data';
import { useEffect } from 'react';
import { useRef } from 'react';

const Work4 = () => {
    const [data, setData] = useState(dataList);
    const { id, price, title } = data;

    // const [data, setData] = useState(() => JSON.parse(localStorage.getItem('data')) || dataList);
    const [current, setCurrent] = useState(data[0]);
    const [list, setList] = useState([]);
    const [select, setSelect] = useState(false);
    const [count, setCount] = useState(false);
    const [show, setShow] = useState(false);
    const [amount, setAmount] = useState(0);
    const [hap, setHap] = useState(0);
    const [isEdit, setIsEdit] = useState(false);

    const popup = () => {
        if (amount > 0) {
            setShow(true);
        } else {
            alert('장바구니가 비어있습니다.');
        }
    };
    const isSelect = (id) => {
        setSelect(true);
        setCurrent(data.find((item) => item.id === id));
    };

    //장바구니
    const onCount = (cnt) => {
        setList([...list, current]);
        setAmount(cnt);
        setCount(true);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        if (price && amount < 1) return;

        if (isEdit) {
            //수정
            setCurrent(data.map((item) => (item.id === current.id ? current : item)));
            setIsEdit(false);
        }

        data.total = Number(price * amount);
    };
    const onAdd = () => {};
    const onDel = (id) => {
        data.filter((item) => item.id !== id);
    };
    const onEdit = (id) => {
        setIsEdit(true);
        setCurrent(data.find((item) => item.id === id));
    };

    // useEffect(() => {
    //     setHap(
    //         data.reduce((acc, curr) => {
    //             return acc + curr.total;
    //         }, 0)
    //     );
    // }, []);
    return (
        <div className="content">
            <Work4List
                popup={popup}
                data={data}
                isSelect={isSelect}
                current={current}
                select={select}
                onCount={onCount}
                amount={amount}
                setAmount={setAmount}
                count={count}
                onSubmit={onSubmit}
                onEdit={onEdit}
            />
            {show && (
                <Work4Total
                    data={data}
                    current={current}
                    amount={amount}
                    hap={hap}
                    onDel={onDel}
                    onEdit={onEdit}
                    isEdit={isEdit}
                    list={list}
                />
            )}
        </div>
    );
};

export default Work4;
