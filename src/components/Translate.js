import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const options = [
	{
		label: 'Afrikaan',
		value: 'af'
	},
	{
		label: 'Arabic',
		value: 'ar'
	},
	{
		label: 'Hindi',
		value: 'hi'
	}
];

const Translate = () => {
	const [ language, setlanguage ] = useState(options[0]);
	const [ text, settext ] = useState('');

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Text</label>
					<input value={text} onChange={(e) => settext(e.target.value)} />
				</div>
			</div>
			<Dropdown selected={language} onSelectedChange={setlanguage} options={options} label="Select a Language" />
			<hr />
			<h3 className="ui header">Output</h3>
			<Convert language={language} text={text} />
		</div>
	);
};

export default Translate;
