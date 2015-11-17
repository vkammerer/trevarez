import React from 'react';
import Room from './Room';
import AppCss from './css/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.openPreview = this.openPreview.bind(this)
	}
	openPreview() {
		console.log(this);
	}
	render() {
		return (
			<div className={AppCss.app} onClick={this.openPreview} >
				<Room></Room>
			</div>
		);
	}
}
