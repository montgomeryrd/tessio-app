import React from 'react';
import '../../styles/dashboard.css';

const SupplyList = (props) => {
    return (
        <div>
            <form className="form-container" onSubmit={props.handleSubmit}>
                <textarea 
                    id="list" 
                    name="list" 
                    rows="25" 
                    cols="33"
                    autoComplete="off"
                    value={props.value}
                    onChange={props.handleChange}
                    required={true}
                    placeholder="input list">
                </textarea>
                <button className="submit" type="submit" onSubmit={props.handleSubmit}> - create list -</button>
            </form>
        </div>
    )
}
export default SupplyList;