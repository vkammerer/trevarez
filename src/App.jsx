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
						name: 'lingerie',
						top: 29,
						left: 15,
						content: content.lingerie
					}}>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'argenterie',
						top: 55,
						left: 23,
						content: content.argenterie
					}}>
				</Room>
			</div>
		);
	}
}
