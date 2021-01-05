import { useState } from 'react';

function Form({ toggle, setToggle, orderList, setOrderList }) {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const list = value.match(/(.+)/g).filter(item => item !== '').map((item, index) => item = { val: item, id: Math.random() * index, complete: false });
        setOrderList([...orderList, ...list]);
        setValue('');
        setToggle(false);
    };

    return (
        <form className={toggle ? 'add-input' : 'input-form'} onSubmit={handleSubmit}>
            <textarea
                id="list"
                name="list"
                rows="25"
                cols="33"
                autoComplete="off"
                onChange={handleChange}
                required={true}
                placeholder="input items">
            </textarea>
            <button className="btn butt" type="submit" onSubmit={handleSubmit}>{toggle ? "add" : "create"}</button>
        </form>
    );
}

export default Form;