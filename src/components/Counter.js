import React from 'react';

const Counter = ({ number ,diff, onIcrease, onDecrease , onSetDiff}) => {
    const onChange = (e) =>{
        onSetDiff(Number(e.target.value))
    }
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIcrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default Counter;