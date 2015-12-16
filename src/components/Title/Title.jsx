import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import TitleCss from './Title.css';

export class Title extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 0 };
	}
	componentDidMount() {
		setInterval(() => {
			let i = ++this.state.index % 3;
			this.setState({ index: i });
		}, 5000);
	}
	render() {
		let titleFrClass, titleEnClass, titleBzClass = classNames({ [TitleCss.active] : false });
		switch (this.state.index) {
			case 0:
				titleFrClass = classNames({ [TitleCss.active] : true });
				break;
			case 1:
				titleEnClass = classNames({ [TitleCss.active] : true });
				break;
			case 2:
				titleBzClass = classNames({ [TitleCss.active] : true });
				break;
		}
		return (
			<div className={TitleCss.title}>
				<h1 className={titleFrClass}>
					Découvrez les pièces cachées réservées au travail ou au repos des domestiques.
				</h1>
				<h1 className={titleEnClass}>
					Discover the hidden rooms reserved for servants’ work or relaxation.
				</h1>
				<h1 className={titleBzClass}>
					Dizoloit ar zalioù koachet, a zo miret evit al labour pe evit diskuizh ar vevelien.
				</h1>
			</div>
		);
	}
}

export default connect((state) => { return state; })(Title);
