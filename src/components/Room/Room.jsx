import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Teleporter from 'teleporter';
import {
	selectRoom,
	displayText,
	delayTimer
} from '../../store/actions';
import Slideshow from '../Slideshow/Slideshow';
import Text from '../Text/Text';
import Timer from '../Timer/Timer';
import RoomCss from './Room.css';

// exported so we can write tests
// see: https://github.com/rackt/redux/blob/master/docs/recipes/WritingTests.md#connected-components
export class Room extends React.Component {
	constructor(props) {
		super(props);
		this.onRoomClick = this.onRoomClick.bind(this);
		this.onContractClick = this.onContractClick.bind(this);
		this.openRoom = this.openRoom.bind(this);
		this.segmentStyle = { transform: `rotate(${this.props.room.segment}deg)` };
	}
	onRoomClick(){
		if (this.props.selectedRoom !== this.props.room.name) {
			this.props.dispatch(selectRoom(this.props.room.name));
		}
		else {
			this.props.dispatch(delayTimer());
		}
	}
	onContractClick(e){
		if (this.props.selectedRoom === this.props.room.name) {
			this.props.dispatch(selectRoom(''));
		}
		e.stopPropagation();
	}
	setTeleporter() {
		this.teleporter = new Teleporter({
			selector: `#${this.refs.roomRoot.id}`,
			sizeClass: RoomCss.expandedPosition,
			animation: {
				duration: 600,
				easing: 'cubic-bezier(0,0,0.32,1)'
			}
		});
		this.openingTeleportation = {
			class: RoomCss.expandedPosition,
			animation: {
				duration: 600,
				easing: 'cubic-bezier(0,0,0.32,1)'
			}
		};
		this.closingTeleportation = RoomCss.expandedPosition;
		this.teleporter.saveSteps([this.openingTeleportation, this.closingTeleportation, '']);
	}
	fixChromeTransform() {
		let el = document.querySelector(`#${this.refs.roomRoot.id} > .teleporter-wrapper`);
		let me = el.style.transform;
		el.style.transform = null;
		el.style.opacity = 0.01;
		setTimeout(() => {
			el.style.transform = me;
			el.style.opacity = 1;
		}, 2000);
	}
	componentDidMount() {
		this.setTeleporter();
		this.fixChromeTransform();
	}
	openRoom() {
		this.teleporter.teleport(this.openingTeleportation).then(()=>{
			this.refs.roomRoot.classList.add('expanded');
			setTimeout(() => {
				this.props.dispatch(displayText(true));
			}, 1000);
		});
	}
	componentDidUpdate(prevProps) {
		if (
			(prevProps.selectedRoom !== this.props.selectedRoom) &&
			(
				(prevProps.selectedRoom === this.props.room.name) ||
				(this.props.selectedRoom === this.props.room.name)
			)
		) {
			if (this.props.selectedRoom === this.props.room.name) {
				setTimeout(this.openRoom.bind(this), 400);
			}
			else {
				this.teleporter.teleport([this.closingTeleportation, '']).then(()=>{
					this.props.dispatch(displayText(false));
				});
			}
		}
	}
	render() {
		let roomClass = classNames({
			[RoomCss.room]: true,
			[RoomCss.selected]: this.props.selectedRoom === this.props.room.name
		});
		return (
			<div
				onClick={this.onRoomClick}
				ref='roomRoot'
				id={this.props.room.name}
				className={roomClass}
				style={{
					top: `${this.props.room.top}%`,
					left: `${this.props.room.left}%`
				}}>
				<div className={RoomCss.segment}
					style={this.segmentStyle}></div>
				<div
					className={RoomCss.content}>
					<div
						className={RoomCss.expand}>
					</div>
					<div
						onClick={this.onContractClick}
						className={RoomCss.contract}>
					</div>
					<Slideshow room={this.props.room}></Slideshow>
					<Text room={this.props.room}></Text>
					<Timer room={this.props.room}></Timer>
				</div>
			</div>
		);
	}
}

export default connect((state) => { return state; })(Room);
