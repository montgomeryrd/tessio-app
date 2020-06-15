import React, { useState } from 'react';

const AddForm = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    return (
        <div>
            <h2 className="add" onClick={toggle}>+ item</h2>
            { show ?
                <form className="add-input" onClick={props.handleItemSubmit}>
                    <input
                        id="name"
                        name="name"
                        autoComplete="off"
                        value={props.value}
                        onChange={props.handleChange}
                        required={true}
                        placeholder="add item"
                    />
                    <button className="add-input-btn" onClick={toggle} onSubmit={props.handleItemSubmit}>add</button>
                </form>
                :
                <div></div>    
            }
        </div>
    )
}
export default AddForm;