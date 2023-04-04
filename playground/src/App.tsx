
import Button from "@dse/react/lib/atoms/Button";
import Margin from "@dse/react/lib/atoms/margin";
import Select from "@dse/react/lib/molecules/Select"
import Text from "@dse/react/lib/atoms/text"

import './App.css'

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
			<Margin space="lg" >
				<Button title="hello" children="hello" onClick={onclick} />
			</Margin>
				<Text size="base">hello select </Text>
			<Select 
				label="iam a select button"
				option={colorOptions}
				onOptionSelected={console.log}
				// renderOption={({
				// 	option,
				// 	getOptionRecommendProps,

				// })=>(<li {...getOptionRecommendProps()}>{option.label}</li>)}
				/>
			
		</div>
	);
};

export default App;