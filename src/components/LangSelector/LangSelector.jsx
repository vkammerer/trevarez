import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { selectLang, Lang } from '../../store/actions';
import LangCss from './LangSelector.css';

// exported so we can write tests
// see: https://github.com/rackt/redux/blob/master/docs/recipes/WritingTests.md#connected-components
export class LangSelector extends React.Component {
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
				<span>-</span>
				<a href='#' onClick={ this.setLang.bind(this, Lang.EN) }>En</a>
				<span>-</span>
				<a href='#' onClick={ this.setLang.bind(this, Lang.BZ) }>Bz</a>
			</div>
		);
	}
}

export default connect((state) => { return state; })(LangSelector);
