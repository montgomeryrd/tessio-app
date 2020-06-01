import React from 'react';

const SupplyList = (props) => {
    return (
        <div>
            <label for="list" name="list">copy and paste list</label>
            <textarea 
                id="list" 
                name="list" 
                rows="10" 
                cols="33"
                autocomplete="off"
                required={true}
                placeholder="3x Basil">
            </textarea>
        </div>
    )
}
export default SupplyList;