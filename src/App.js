import { useState, useEffect } from 'react';
import Form from './components/Form';
import Add from './components/Add';

const App = () => {
	// Check Local Storage - Save Local Storage
	const initialData = () => JSON.parse(window.localStorage.getItem('orderList')) || [];
	const [orderList, setOrderList] = useState(initialData);

	useEffect(() => {
		window.localStorage.setItem('orderList', JSON.stringify(orderList));
	}, [orderList])

	const [value, setValue] = useState('');

	// State Functions
	const update = item => {
		const list = orderList.map(e => e.id === item.id ? e = { val:e.val, id:e.id, complete:!e.complete } : e); 
		setOrderList(list);
	}

	const remove = () => {
		const list = orderList.filter(item => item.complete === false);
		setOrderList(list);
	}

	// Map List Data
	const list = orderList.map(item => {
		return <div className="line">
			<li key={item.id} unselectable="on" onClick={() => {update(item)}} style={{opacity : item.complete ? .2 : 1}}>{item.val}</li>
		</div>
	});

	return (
		<div className="App">
			<div className="background-design">
				<div className="skew"></div>
				<div className="skewed-background"></div>
			</div>
			{ !orderList.length ? 
				<div>
					<Form 
						value={value} 
						setValue={setValue} 
						orderList={orderList} 
						setOrderList={setOrderList} 
					/> 
				</div>
			: 	<div className="list">
					<Add
						value={value} 
						setValue={setValue} 
						orderList={orderList} 
						setOrderList={setOrderList} 
					/>
					<ul>{list}</ul> 
					<button className="btn butt" onClick={remove}>remove</button>
				</div>
			}
		</div>
	);
}

export default App;