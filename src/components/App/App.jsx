import React from 'react';
import { connect } from 'react-redux';
import Isvg from 'react-inlinesvg';
import Room from '../Room/Room';
import LangSelector from '../LangSelector/LangSelector';
import AppCss from './App.css';
import content from '../../content/content';

// exported so we can write tests
// see: https://github.com/rackt/redux/blob/master/docs/recipes/WritingTests.md#connected-components
export class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div
				className={AppCss.app}>
				<Isvg src="img/roomsLayer.svg" className={AppCss.roomsLayer} uniquifyIDs={false}></Isvg>
				<div
					className={AppCss.hand}>
				</div>
				<Room
					room={{
						name: 'argenterie',
						top: 53,
						left: 23,
						content: content.argenterie,
						segment: 30
					}}>
				</Room>
				<Room
					room={{
						name: 'chambre',
						top: 26,
						left: 50,
						content: content.chambre,
						segment: 80
					}}>
				</Room>
				<Room
					room={{
						name: 'grande_cuisine',
						top: 78,
						left: 18,
						content: content.grande_cuisine,
						segment: -45
					}}>
				</Room>
				<Room
					room={{
						name: 'lingerie',
						top: 29,
						left: 15,
						content: content.lingerie,
						segment: 38
					}}>
				</Room>
				<Room
					room={{
						name: 'salle_a_manger',
						top: 80,
						left: 52,
						content: content.salle_a_manger,
						segment: -120
					}}>
				</Room>
				<Room
					room={{
						name: 'salle_de_bain',
						top: 26,
						left: 34,
						content: content.salle_de_bain,
						segment: 120
					}}>
				</Room>
				<Room
					room={{
						name: 'salle_de_reunion',
						top: 80,
						left: 90,
						content: content.salle_de_reunion,
						segment: -130
					}}>
				</Room>
				<Room
					room={{
						name: 'salle_des_fermiers',
						top: 83,
						left: 8,
						content: content.salle_des_fermiers,
						segment: -90
					}}>
				</Room>
			</div>
		);
	}
};

export default connect((state) => { return state; })(App);
