import { useState } from 'react';

const Add = ({ orderList, setOrderList, setToggle }) => {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const list = value.match(/(.+)/g).filter(item => item !== '').map(item => item = { val: item, id: Math.random(), complete: false });
        setOrderList([...orderList, ...list]);
        setValue('');
        setToggle(false);
    };

    return (
        <form className="list-add" style={{zIndex: 100}} onSubmit={handleSubmit}>
            <textarea
                id="list-add"
                name="list-add"
                rows="25"
                cols="33"
                autoComplete="off"
                onChange={handleChange}
                required={true}
                placeholder="Input list...">
            </textarea>
            <button className="btn butt-add" type="submit" onSubmit={handleSubmit}>append</button>
        </form>
    );
}

export default Add;