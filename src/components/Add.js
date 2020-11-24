import { useState } from 'react';

const Add = ({ value, setValue, orderList, setOrderList }) => {
    const [show, setShow] = useState(false);

    const handleChange = e => {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        const item = { val:value, id:Math.random() * 10, complete:false };
        if (item.val !== '') setOrderList([item, ...orderList]);
        setValue('');
    }
       
    return (
        <div className="add-container">
            <h2 className="add" onClick={() => {setShow(!show)}} style={{display : show ? 'none' : 'block'}}>+</h2>
            { show ?
                <form className="add-input" onClick={handleSubmit}>
                    <input
                        id="name"
                        name="name"
                        autoComplete="off"
                        onChange={handleChange}
                        required={true}
                        placeholder="add item"
                    />
                    <button className="btn" onClick={() => {setShow(!show)}} onSubmit={handleSubmit}>add</button>
                </form>
                :
                <div></div>    
            }
        </div>
    )
}
export default Add;