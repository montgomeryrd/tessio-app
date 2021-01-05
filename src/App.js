import { useState, useEffect } from 'react';
import Form from './components/Form';

function App() {

	const initialData = () => JSON.parse(window.localStorage.getItem('orderList')) || [];
	const [orderList, setOrderList] = useState(initialData);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		window.localStorage.setItem('orderList', JSON.stringify(orderList));
	}, [orderList]);

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
		);
	});

	return (
		<div className="app">
			<h1 className="kirk">Kirk's App</h1>
			<button id={orderList.length > 0 ? "add-showing" : "add-hiding"} onClick={() => setToggle(true)}>+</button>
			{!orderList.length ? 
				<Form toggle={toggle} setToggle={setToggle} orderList={orderList} setOrderList={setOrderList} /> 
			:
				<section className="list" style={{opacity: toggle ? .2 : 1}}>
					{toggle ? <Form toggle={toggle} setToggle={setToggle} orderList={orderList} setOrderList={setOrderList} /> : '' }
					<ul>{list}</ul>
					<button className="btn butt" onClick={remove}>remove</button>
				</section>
			}
		</div>
	);
}

export default App;