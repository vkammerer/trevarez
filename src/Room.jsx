import React from 'react';
import classNames from 'classnames';
import Teleporter from 'teleporter';
import RoomCss from './css/Room.css';

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.expand = this.expand.bind(this);
		this.contract = this.contract.bind(this);
		this.imageStyle = {backgroundImage: `url(img/${this.props.room.name}.jpg)`}
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
		return false;
	}
	componentDidMount() {
		this.teleporter = new Teleporter({
			selector: `#${this.refs.roomRoot.id}`,
			sizeClass: RoomCss.expanded,
			animation: {
				duration: 600,
				easing: 'cubic-bezier(0,0,0.32,1)'
			}
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
				['', {
					class: RoomCss.expanded,
					animation: {
						duration: 600,
						easing: 'cubic-bezier(0,0,0.32,1)'
					}
				}] : [RoomCss.expanded, ''];
			this.teleporter.teleport(steps);
		}
	}
	render() {
		let roomClass = classNames({
			[RoomCss.room]: true,
			[RoomCss.selected]: this.props.rooms.selectedRoom === this.props.room.name
		});
		return (
			<div
				onClick={this.expand}
				ref='roomRoot'
				id={this.props.room.name}
				className={roomClass}
				style={{
					top: `${this.props.room.top}%`,
					left: `${this.props.room.left}%`
				}}>
				<div
					className={RoomCss.content}
						style={this.imageStyle}>
					<div
						className={RoomCss.expand}>
						Expand
					</div>
					<div
						onClick={this.contract}
						className={RoomCss.contract}>
						Close
					</div>
					<div className={RoomCss.text}>
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
}
