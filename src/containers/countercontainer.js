import React from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, setDiff } from '../modules/counter';

const Countercontainer = () => {
    //useSelector()는 리덕스 스토어의 상태를 조회하는 Hook입니다.
    const { number, diff} = useSelector(state=>state.counter);
    const dispatch = useDispatch();
    //각 액션들을 디스패치하는 함수
    const onIcrease = () => dispatch(increment());
    const onDerease = () => dispatch(decrement());
    const onsetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter number={number} diff={diff}
        onIcrease={onIcrease}
        onDecrease={onDerease}
        onSetDiff={onsetDiff}/>
        
    );
};

export default Countercontainer;