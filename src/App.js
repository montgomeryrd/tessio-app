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
			<button id={orderList.length > 0 ? "add-showing" : "add-remove"} onClick={() => setToggle(!toggle)}>+</button>
			{!orderList.length ?
				<div className="container">
					<Form text={'input items'} toggle={toggle} setToggle={setToggle} orderList={orderList} setOrderList={setOrderList} />
				</div>
			:
				<section>
					{toggle ? 
						<div className="container">
							<Form text={'add more items'} toggle={toggle} setToggle={setToggle} orderList={orderList} setOrderList={setOrderList} />
						</div>
						:
						<div className="container">
							<ul className="list">
								{list}
							</ul>
							<button className="btn butt" onClick={remove}>remove</button>
						</div>
					}
				</section>
			}
		</div>
	);
}

export default App;