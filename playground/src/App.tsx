
import Button from "@dse/react/lib/atoms/Button";
import Margin from "@dse/react/lib/atoms/margin"

import './App.css';

const colorOptions = [
	{ label: 'Red', value: 'Red' },
	{ label: 'Green', value: 'Green' },
	{ label: 'Blue', value: 'Blue' },
	{ label: 'Yellow', value: 'Yellow' },
	{ label: 'Black', value: 'Black' },
];

const App = () => {
	const onclick=()=>{
		alert('hello button')
	}
	return (
		<div className='app'>
			<Margin >
				<Button title="hello" children="hello" onClick={onclick} />
			</Margin>
		</div>
	);
};

export default App;