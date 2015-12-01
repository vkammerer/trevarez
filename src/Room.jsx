import React from 'react';
import classNames from 'classnames';
import Teleporter from 'teleporter';
import RoomCss from './css/Room.css';

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.expand = this.expand.bind(this);
		this.contract = this.contract.bind(this);
	}
	expand(){
		if (this.props.rooms.selectedRoom !== this.props.room.name) {
			this.props.rooms.roomSelection(this.props.room.name);
		}
	}
	contract(){
		if (this.props.rooms.selectedRoom === this.props.room.name) {
			this.props.rooms.roomSelection('');
		}
	}
	componentDidMount() {
		this.teleporter = new Teleporter({
			selector: `#${this.refs.roomRoot.id}`,
			sizeClass: RoomCss.expanded
		})
	}
	componentDidUpdate(prevProps){
		if (
			(prevProps.rooms.selectedRoom !== this.props.rooms.selectedRoom) &&
			(
				(prevProps.rooms.selectedRoom === this.props.room.name) ||
				(this.props.rooms.selectedRoom === this.props.room.name)
			)
		) {
			let steps = this.props.rooms.selectedRoom === this.props.room.name ?
				['', RoomCss.expanded] : [RoomCss.expanded, ''];
			this.teleporter.teleport(steps);
		}
	}
	render() {
		let roomClass = classNames({
			[RoomCss.common]: true,
			[RoomCss.selected]: this.props.rooms.selectedRoom === this.props.room.name
		});
		return (
			<div
				ref='roomRoot'
				id={this.props.room.name}
				className={roomClass}
				style={{
					top: `${this.props.room.top}%`,
					left: `${this.props.room.left}%`
				}}>
				<div>
					<div
						onClick={this.expand}
						className={RoomCss.expand}>
						Expand
					</div>
					<div
						onClick={this.contract}
						className={RoomCss.contract}>
						Contract
					</div>
					{this.props.children}
				</div>
			</div>
		);
	}
}
