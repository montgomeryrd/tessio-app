import React from 'react';
import SupplyList from '../supplylist/SupplyList';

const Toadhouse = (props) => {
    const list = props.toad.length ? (
        props.toad.map((item, index) => {
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
                toad={props.toad}
                handleChange={props.handleChange}
                handleToadSubmit={props.handleToadSubmit}
            />
        </div>
    )
    
    return (
        <div className="toad-container">
            {list}
        </div>
    )
}
export default Toadhouse;