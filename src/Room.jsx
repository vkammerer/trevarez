import React from 'react';
import classNames from 'classnames';
import Teleporter from 'teleporter';
import RoomCss from './css/Room.css';

export default class Room extends React.Component {
	constructor(props) {
		super(props);
		this.expand = this.expand.bind(this);
		this.contract = this.contract.bind(this);
		this.imageStyle = {backgroundImage: `url(img/${this.props.room.name}.jpg)`};
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
	insertContent(lang) {
		return {__html: this.props.room.content[lang]};
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
		let textClass = classNames({
			[RoomCss.text]: true,
			[RoomCss.langFr]: this.props.rooms.selectedLang === 'fr',
			[RoomCss.langEn]: this.props.rooms.selectedLang === 'en',
			[RoomCss.langBz]: this.props.rooms.selectedLang === 'bz'
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
					<div className={textClass}>
						<div
							dangerouslySetInnerHTML={this.insertContent('fr')}
							className={RoomCss.textFr}>
						</div>
						<div
							dangerouslySetInnerHTML={this.insertContent('en')}
							className={RoomCss.textEn}>
						</div>
						<div
							dangerouslySetInnerHTML={this.insertContent('bz')}
							className={RoomCss.textBz}>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
