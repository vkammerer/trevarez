import React from 'react';
import Room from './Room';
import AppCss from './css/App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.flipExpand = this.flipExpand.bind(this)
		this.flipReduce = this.flipReduce.bind(this)
		this.state = {
			isFlipped: false
		}
	}
	flipExpand() {
		this.setState({isFlipped: !this.state.isFlipped});
	}
	flipReduce() {
		this.setState({isFlipped: false});
	}
	render() {
		return (
			<div
				className={AppCss.app}>
				<Room>
					<div
						onClick={this.flipExpand}>
						<div>expand</div>
						<div>reduce</div>
					</div>
				</Room>
			</div>
		);
	}
}
