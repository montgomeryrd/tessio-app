import React from 'react';

const SupplyList = (props) => {
    return (
        <div>
            <label className="list" name="list">copy and paste</label>
            <form className="form-container" onSubmit={ props.page ? props.handleTessioSubmit : props.handleToadSubmit }>
                <textarea 
                    id="list" 
                    name="list" 
                    rows="10" 
                    cols="33"
                    autoComplete="off"
                    value={props.value}
                    onChange={props.handleChange}
                    required={true}
                    placeholder="3x Basil">
                </textarea>
                <button type="submit" onSubmit={ props.page ? props.handleTessioSubmit : props.handleToadSubmit }>add</button>
            </form>
        </div>
    )
}
export default SupplyList;