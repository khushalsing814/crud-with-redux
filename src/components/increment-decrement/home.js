import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  decrement, increment } from '../../redux-toolkit/features/counterSlice';

function Home() {
    const dispatch = useDispatch();
    const select = useSelector(state => state);
    // console.log(select.counter.value);

    const Handleincrement = (e) => {
        e.preventDefault();
        dispatch(increment());
        
    }
    const Handledecrement = (e) => {
        e.preventDefault();
        if (select.counter.value > 0) {
            dispatch(decrement());
        }
    }

    return (
        <>
            <div className='w-25 mt-5 m-auto form_shadow min_width'>
                <h1 style={{ display: "block", textAlign: "center" }}>Counter</h1>
                <div className='d-flex justify-content-around'>
                    <button className='btn btn-primary' onClick={Handleincrement} >+</button>
                    <h2>{select.counter.value}</h2>
                    <button className='btn btn-warning' onClick={Handledecrement}>-</button>
                </div>
            </div>

        </>
    )
}

export default Home
