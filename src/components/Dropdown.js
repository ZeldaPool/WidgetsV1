import React, { useState, useEffect, useRef } from 'react';
import styles from './colorchange.css';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
	const [ open, setopen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setopen(false);
		};

		document.body.addEventListener('click', onBodyClick);
		document.documentElement.style.setProperty(`--variablename`, selected.value);

		return () => {
			document.body.removeEventListener('click', onBodyClick);
		};
	}, []);

	const renderedOptions = options.map((option) => {
		if (option.value === selected.value) {
			return null;
		}

		return (
			<div
				key={option.value}
				className="item"
				onClick={() => {
					onSelectedChange(option);
					document.documentElement.style.setProperty(`--variablename`, option.value);
				}}
			>
				{option.label}
			</div>
		);
	});

	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div onClick={() => setopen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>

			{/* <button onClick={() => documentclick(selected.value)}>Button</button> */}
			<div className="colorcolor">Code: {selected.value}</div>
			{/* {<div style={{ color: `${selected.value}` }}>This text is: {selected.value}</div>} */}
		</div>
	);
};

export default Dropdown;
