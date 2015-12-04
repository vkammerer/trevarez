import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { selectLang, Lang } from './actions';
import LangCss from './css/Lang.css';

class LangSelector extends React.Component {
	constructor(props) {
		super(props);
	}
	setLang(lang) {
		this.props.dispatch(selectLang(lang));
	}
	render() {
		let langSelectorClass = classNames({
			[LangCss.lang]: true,
			[LangCss.room]: this.props.room
		});
		return (
			<div
				className={langSelectorClass}>
				<a href='#' onClick={ this.setLang.bind(this, Lang.FR) }>Fr</a>
				-
				<a href='#' onClick={ this.setLang.bind(this, Lang.EN) }>En</a>
				-
				<a href='#' onClick={ this.setLang.bind(this, Lang.BZ) }>Bz</a>
			</div>
		);
	}
};

export default connect((state) => { return state; })(LangSelector);
