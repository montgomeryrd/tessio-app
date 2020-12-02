import { useState, useEffect } from 'react';
import Main from './components/Main';

const App = () => {

	const initialData = () => JSON.parse(window.localStorage.getItem('orderList')) || [];
	const [orderList, setOrderList] = useState(initialData);

	useEffect(() => {
		window.localStorage.setItem('orderList', JSON.stringify(orderList));
	}, [orderList]);

	return (
		<Main
			orderList={orderList}
			setOrderList={setOrderList} 
		/>
	);
}

export default App;