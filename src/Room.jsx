import React from 'react';
import RoomCss from './css/Room.css';

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.openPreview = this.openPreview.bind(this)
	}
	openPreview() {
		console.log(this);
	}
	render() {
		return (
			<div className={RoomCss.common}>
				<div className={RoomCss.again}>
					${this.props.children}
				</div>
			</div>
		);
	}
}
