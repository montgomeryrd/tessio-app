import React, { useState } from 'react';
import SupplyList from '../supplylist/SupplyList';
import '../../styles/dashboard.css';

const Tessio = (props) => {

    const [show, setShow] = useState(false);
    const toggle = () => setShow(!show);

    const list = !props.tessio ? window.location.reload(true) : props.tessio.length ? (
        props.tessio.map((item, index) => {
            return (
                <div className="item-container" key={index}>
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
                page={props.page}
                tessio={props.tessio}
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
            />
        </div>
    )
    
    return (
        <div className="tessio-container">
            <div className="example-container">
                <span>
                    <span className={ show ? "weak" : "strong"} onClick={toggle}>show</span>/
                    <span className={ show ? "strong" : "weak"} onClick={toggle}>hide</span> example
                </span>
                <div className="example-modal" style={{display : show ? "block" : "none"}}> 
                    <span>example list:</span>
                    <br></br>
                    <br></br>
                    <ul>
                        <li>3 Bags of Basil</li>
                        <li>4 Packs of 10" Pizza Boxes</li>
                        <li>1 Pack of #3 To-Go Boxes</li>
                        <li>5 Fresh Mozzarella</li>
                        <li>40lbs Chicken</li>
                        <li>12x Butterhead Lettuce</li>
                        <li>6x Romaine Lettuce</li>
                    </ul>
                </div>
            </div>
            <div className="list">
                {list}
            </div>
        </div>
    )
}
export default Tessio;