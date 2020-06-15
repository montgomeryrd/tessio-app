import React from 'react';
import SupplyList from '../supplylist/SupplyList';
import AddForm from '../addform/AddForm';
import '../../styles/dashboard.css';

const Tessio = (props) => {

    const list = !props.tessio ? window.location.reload(true) : props.tessio.length ? (
        props.tessio.map((item, index) => {
            return (
                <div className="item-container" unselectable="on" key={index}>
                    <div className="blue-line">
                        <span className="item-complete" style={{opacity : props.complete.includes(item) ? .2 : 1}} onClick={() => {props.completeItem(index)}}>
                            <span className="item">{item}</span>
                        </span>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="supplylist-container">
            <SupplyList 
                value={props.value}
                tessio={props.tessio}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
            />
        </div>
    )
    
    return (
        <div className="tessio-container">
            { list.length ? 
                <AddForm 
                    value={props.value}
                    tessio={props.tessio}
                    handleChange={props.handleChange}
                    handleItemSubmit={props.handleItemSubmit}
                />
            :
                <div></div>
            }
            <div className="list">
                {list}
            </div>
        </div>
    )
}
export default Tessio;