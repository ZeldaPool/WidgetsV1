import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Accordion from './components/Accordion.js';
import Search from './components/Search.js';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const items = [
	{
		title: 'Mcree',
		desc: 'Former Deadlock gang, Former Overwatch'
	},
	{
		title: 'Moira',
		desc: 'Former Blackwatch, Current Talon'
	},
	{
		title: 'Tracer',
		desc: "Cheers love! The cavalry's here"
	}
];

const options = [
	{
		label: 'The Color Red',
		value: 'red'
	},
	{
		label: 'The Color Green',
		value: 'green'
	},
	{
		label: 'The Color Blue',
		value: 'blue'
	}
];

export default () => {
	const [ selected, setselected ] = useState(options[0]);
	const [ showdrop, setshowdrop ] = useState(true);

	return (
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path="/" exact render={() => <Accordion items={items} />} />
				</Switch>
				<Switch>
					<Route path="/search" render={() => <Search />} />
				</Switch>
				<Switch>
					<Route path="/translate" render={() => <Translate />} />
				</Switch>
				<Switch>
					<Route
						path="/dropdown"
						render={() => <Dropdown selected={selected} onSelectedChange={setselected} options={options} />}
					/>
				</Switch>
			</div>

			{/* //Accordion */}
			{/* <Accordion items={items} /> */}

			{/* //Search */}
			{/* <Search /> */}

			{/* //Dropdown */}
			{/* <button onClick={() => setshowdrop(!showdrop)}>Toggle Dropdown</button>
			{showdrop ? <Dropdown selected={selected} onSelectedChange={setselected} options={options} /> : null} */}

			{/* //Translate */}
			{/* <Translate /> */}
		</Router>
	);
};
