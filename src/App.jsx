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
		console.log(roomName)
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
						name: 'cuisine',
						top: 20,
						left: 20
					}}>
					<div>
						Cuisine
					</div>
				</Room>
				<Room
					rooms={rooms}
					room={{
						name: 'garage',
						top: 10,
						left: 0
					}}>
					<div>
						Garage
					</div>
				</Room>
			</div>
		);
	}
}
