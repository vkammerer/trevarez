import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Teleporter from '../../teleporter';
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
		this.expand = this.expand.bind(this);
		this.contract = this.contract.bind(this);
		this.segmentStyle = { transform: `rotate(${this.props.room.segment}deg)` };
	}
	expand(){
		if (this.props.selectedRoom !== this.props.room.name) {
			this.props.dispatch(selectRoom(this.props.room.name));
		}
		else {
			this.props.dispatch(delayTimer());
		}
	}
	contract(){
		if (this.props.selectedRoom === this.props.room.name) {
			this.props.dispatch(selectRoom(''));
		}
		return false;
	}
	setTeleporter() {
		this.teleporter = new Teleporter({
			selector: `#${this.refs.roomRoot.id}`,
			sizeClass: RoomCss.expanded,
			animation: {
				duration: 600,
				easing: 'cubic-bezier(0,0,0.32,1)'
			}
		});
	}
	fixChromeTransform() {
		let el = document.querySelector(`#${this.refs.roomRoot.id} > .teleporter-container`);
		let me = el.style.transform;
		el.style.transform = null;
		el.style.opacity = 0.01;
		setTimeout(() => {
			el.style.transform = me;
			el.style.opacity = 1;
		}, 1000);
	}
	componentDidMount() {
		this.setTeleporter();
		this.fixChromeTransform();
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
				this.teleporter.teleport(['', {
					class: RoomCss.expanded,
					animation: {
						duration: 600,
						easing: 'cubic-bezier(0,0,0.32,1)',
						delay: 400
					}
				}]).then(()=>{
					setTimeout(() => {
						this.props.dispatch(displayText(true));
					}, 1000);
				});
			}
			else {
				this.teleporter.teleport([RoomCss.expanded, '']).then(()=>{
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
				onClick={this.expand}
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
						onClick={this.contract}
						className={RoomCss.contract}>
					</div>
					<Slideshow room={this.props.room}>
					</Slideshow>
					<Text room={this.props.room}>
					</Text>
					<Timer room={this.props.room}>
					</Timer>
				</div>
			</div>
		);
	}
}

export default connect((state) => { return state; })(Room);
