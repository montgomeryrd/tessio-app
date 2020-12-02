import { useState } from 'react';

function Form({ setOrderList }) {

    const [value, setValue] = useState('');

    const handleChange = e => {
        setValue(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        const list = value.match(/(.+)/g).filter(item => item !== '').map((item, index) => item = { val: item, id: Math.random() * index, complete: false });
        setOrderList(list);
        setValue('');
    };

    return (
        <div>
            <label className="kirk" htmlFor="list">Kirk's App</label>
            <form className="list" onSubmit={handleSubmit}>
                <textarea
                    id="list"
                    name="list"
                    rows="25"
                    cols="33"
                    autoComplete="off"
                    onChange={handleChange}
                    required={true}
                    placeholder="Input list...">
                </textarea>
                <button className="btn butt" type="submit" onSubmit={handleSubmit}>create</button>
            </form>
        </div>
    );
}

export default Form;