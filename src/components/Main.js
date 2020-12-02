import { useState } from 'react';
import Add from './Add';
import Form from './Form';

const Main = ({ orderList, setOrderList }) => {

    const [toggle, setToggle] = useState(false);

    // Mutations
    const update = item => {
        const list = orderList.map(e => e.id === item.id ? e = { val: e.val, id: e.id, complete: !e.complete } : e);
        setOrderList(list);
    };

    const remove = () => {
        const list = orderList.filter(item => item.complete === false);
        setOrderList(list);
    };

    // Map List Data
    const list = orderList.map(item => {
        return (
            <div className="line" key={item.id} unselectable="on">
                <li onClick={() => { update(item); } } style={{ opacity: item.complete ? .2 : 1 }}>{item.val}</li>
            </div>
        )
    });

    // Styles
    const backgroundShiftStyle = {
        opacity: toggle ? .2 : 1
    }

    return (
        <div className="App">
            <div className="background-design" style={backgroundShiftStyle}>
                <div className="skew1"></div>
                <div className="skew2"></div>
            </div>
            { !orderList.length ?
                <Form 
                    setOrderList={setOrderList}
                />            
                : <div className="list">
                    <h1 className="add" style={backgroundShiftStyle} onClick={() => {setToggle(true)}}>+</h1>
                    { toggle ? (
                        <Add
                            orderList={orderList}
                            setOrderList={setOrderList}
                            setToggle={setToggle}
                        />
                    ) : (
                        <div></div>
                    )}
                    <ul style={backgroundShiftStyle}>{list}</ul>
                    <button className="btn butt" style={backgroundShiftStyle} onClick={remove}>remove</button>
                </div>}
        </div>
    );
}

export default Main;