import React from 'react';
import Room from './Room';
import AppCss from './css/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedRoom: ''
		}
	}
	roomSelection(roomName) {
		this.setState({selectedRoom: roomName});
	}
	render() {
		let rooms = {
			selectedRoom: this.state.selectedRoom,
			roomSelection: this.roomSelection.bind(this)
		}
		return (
			<div
				className={AppCss.app}>
				<Room
					rooms={rooms}
					room={{
						name: 'lingerie',
						top: 29,
						left: 15
					}}>
					<div>
						<h1>Lingerie</h1>
					</div>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'argenterie',
						top: 56,
						left: 24
					}}>
					<div>
						<h1>Argenterie</h1>
					</div>
				</Room>
			</div>
		);
	}
}
