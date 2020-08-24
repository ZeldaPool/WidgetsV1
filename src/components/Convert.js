import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [ translated, settranslated ] = useState('');
	const [ searchtxt, setsearchtxt ] = useState(text);

	useEffect(
		() => {
			const timeID = setTimeout(() => {
				setsearchtxt(text);
			}, 500);

			return () => {
				clearTimeout(timeID);
			};
		},
		[ text ]
	);

	useEffect(
		() => {
			const dotranslate = async () => {
				const { data } = await axios.post(
					'https://translation.googleapis.com/language/translate/v2',
					{},
					{
						params: {
							q: searchtxt,
							target: language.value,
							key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
						}
					}
				);

				settranslated(data.data.translations[0].translatedText);
			};

			dotranslate();
		},
		[ language, searchtxt ]
	);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
