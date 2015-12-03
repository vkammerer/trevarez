import React from 'react';
import Room from './Room';
import AppCss from './css/App.css';

import content from './content/content';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.roomSelection = this.roomSelection.bind(this);
		this.state = {
			selectedRoom: '',
			selectedLang: 'en'
		}
	}
	roomSelection(roomName) {
		this.setState({selectedRoom: roomName});
	}
	render() {
		let rooms = {
			selectedRoom: this.state.selectedRoom,
			selectedLang: this.state.selectedLang,
			roomSelection: this.roomSelection
		}
		return (
			<div
				className={AppCss.app}>
				<Room
					rooms={rooms}
					room={{
						name: 'argenterie',
						top: 55,
						left: 23,
						content: content.argenterie,
						segment: 38
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'chambre',
						top: 26,
						left: 50,
						content: content.chambre,
						segment: 80
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'grande_cuisine',
						top: 78,
						left: 18,
						content: content.grande_cuisine,
						segment: -45
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'lingerie',
						top: 29,
						left: 15,
						content: content.lingerie,
						segment: 38
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'salle_a_manger',
						top: 80,
						left: 52,
						content: content.salle_a_manger,
						segment: -120
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'salle_de_bain',
						top: 26,
						left: 34,
						content: content.salle_de_bain,
						segment: 120
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'salle_de_reunion',
						top: 80,
						left: 90,
						content: content.salle_de_reunion,
						segment: -130
					}}>
				</Room>
				<Room
					rooms={rooms}
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
}
