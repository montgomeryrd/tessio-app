import React from 'react';
import SupplyList from '../supplylist/SupplyList';

const Tessio = (props) => {
    const list = props.tessio.length ? (
        props.tessio.map((item, index) => {
            return (
                <div className="item-container" key={index}>
                    <div className="blue-line">
                        <span className="item">{item}</span>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="supplylist-container">
            <SupplyList 
                value={props.value}
                page={props.page}
                tessio={props.tessio}
                handleChange={props.handleChange}
                handleTessioSubmit={props.handleTessioSubmit}
            />
        </div>
    )
    
    return (
        <div className="tessio-container">
            {list}
        </div>
    )
}
export default Tessio;