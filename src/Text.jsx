import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { selectLang, selectRoom, Lang } from './actions';
import TextCss from './css/Text.css';

class Text extends React.Component {
	constructor(props) {
		super(props);
	}
	insertContent(lang) {
		return {__html: this.props.room.content[this.props.selectedLang]};
	}
	setLang(lang) {
		this.props.dispatch(selectLang(lang));
	}
	render() {
		let textClass = classNames({
			[TextCss.text]: true,
			[TextCss.langFr]: this.props.selectedLang === Lang.FR,
			[TextCss.langEn]: this.props.selectedLang === Lang.EN,
			[TextCss.langBz]: this.props.selectedLang === Lang.BZ
		});
		return (
			<div className={textClass}>
				<div
					className={TextCss.lang}>
					<a
						onClick={ this.setLang.bind(this, Lang.FR) }
						className={ TextCss.langOptionFr }>
							<img src="img/flag_fr.svg" />
						</a>
					<a
						onClick={ this.setLang.bind(this, Lang.EN) }
						className={ TextCss.langOptionEn }>
							<img src="img/flag_uk.svg" />
						</a>
					<a
						onClick={ this.setLang.bind(this, Lang.BZ) }
						className={ TextCss.langOptionBz }>
							<img src="img/flag_bz.svg" />
						</a>
				</div>
				<div
					dangerouslySetInnerHTML={this.insertContent('fr')}
					className={TextCss.textFr}>
				</div>
				<div
					dangerouslySetInnerHTML={this.insertContent('en')}
					className={TextCss.textEn}>
				</div>
				<div
					dangerouslySetInnerHTML={this.insertContent('bz')}
					className={TextCss.textBz}>
				</div>
			</div>
		);
	}
};

export default connect((state) => { return state; })(Text);
