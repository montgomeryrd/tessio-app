import { useState } from 'react';
import React from 'react'

const Add = ({ orderList, setOrderList, toggle, setToggle }) => {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const list = [...orderList, ...value.match(/(.+)/g).filter(item => item !== '').map((item, index) => item = { val: item, id: Math.randon() * index, complete: false })];
        setOrderList(list);
        setValue('');
    };

    return (
        <form className="list addlist" onSubmit={handleSubmit}>
            <textarea
                id="list"
                name="list"
                rows="25"
                cols="33"
                autoComplete="off"
                onChange={handleChange}
                required={true}
                placeholder="Add more items to list...">
            </textarea>
            <button className="btn butt" type="submit" onClick={() => {setToggle(!toggle)}} onSubmit={handleSubmit}>append</button>
        </form>
    );
}

export default Add
