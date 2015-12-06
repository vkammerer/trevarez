import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Teleporter from 'teleporter';
import { selectLang, selectRoom, Lang } from './actions';
import Text from './Text';
import LangSelector from './LangSelector';
import RoomCss from './css/Room.css';
import TextCss from './css/Text.css';

// exported so we can write tests
// see: https://github.com/rackt/redux/blob/master/docs/recipes/WritingTests.md#connected-components
export class Room extends React.Component {
	constructor(props) {
		super(props);
		this.expand = this.expand.bind(this);
		this.contract = this.contract.bind(this);
		this.imageStyle = {backgroundImage: `url(img/${this.props.room.name}.jpg)`};
		this.segmentStyle = {transform: `rotate(${this.props.room.segment}deg)`};
	}
	expand(){
		if (this.props.selectedRoom !== this.props.room.name) {
			this.props.dispatch(selectRoom(this.props.room.name));
		}
	}
	contract(){
		if (this.props.selectedRoom === this.props.room.name) {
			this.props.dispatch(selectRoom(''));
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
			let steps = this.props.selectedRoom === this.props.room.name ?
				['', {
					class: RoomCss.expanded,
					animation: {
						duration: 600,
						easing: 'cubic-bezier(0,0,0.32,1)',
						delay: 400
					}
				}] : [RoomCss.expanded, ''];
			this.teleporter.teleport(steps);
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
					className={RoomCss.content}
					style={this.imageStyle}>
					<div
						className={RoomCss.expand}>
						Expand
					</div>
					<div
						onClick={this.contract}
						className={RoomCss.contract}>
					</div>
					<Text room={this.props.room}>
					</Text>
				</div>
			</div>
		);
	}
};

export default connect((state) => { return state; })(Room);
