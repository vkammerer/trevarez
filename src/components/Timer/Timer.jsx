import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Lang, selectRoom, delayTimer } from '../../store/actions';
import TimerCss from './Timer.css';

export class Timer extends React.Component {
	constructor(props) {
		super(props);
		this.delayQuestion = this.delayQuestion.bind(this);
		this.delayClose = this.delayClose.bind(this);
		this.resetTimer = this.resetTimer.bind(this);
		this.dispatchDelayTimer = this.dispatchDelayTimer.bind(this);
		this.state = { displayQuestion: false };
	}
	delayQuestion() {
		this.questionTimer = setTimeout(()=>{
			this.setState({ displayQuestion: true });
			this.delayClose();
		}, 60000);
	}
	delayClose() {
		this.closeTimer = setTimeout(()=>{
			this.props.dispatch(selectRoom(''));
		}, 8000);
	}
	resetTimer() {
		clearTimeout(this.questionTimer);
		clearTimeout(this.closeTimer);
		this.setState({ displayQuestion: false });
	}
	dispatchDelayTimer(){
		this.props.dispatch(delayTimer());
	}
	componentDidUpdate(prevProps) {
		// Room change
		if (prevProps.selectedRoom !== this.props.selectedRoom) {
			if (prevProps.selectedRoom === this.props.room.name) {
				this.resetTimer();
			}
			else if (this.props.selectedRoom === this.props.room.name) {
				this.delayQuestion();
			}
		}
		// delayedTimer Change in selected room
		else if (
			(this.props.selectedRoom === this.props.room.name) &&
			(this.props.delayedTimer) &&
			(prevProps.delayedTimer !== this.props.delayedTimer)
		) {
			this.resetTimer();
			this.delayQuestion();
		}
	}
	render() {
		let questionClass = classNames({
			[TimerCss.question]: true,
			[TimerCss.displayed]: this.state.displayQuestion,
			[TimerCss.langFr]: this.props.selectedLang === Lang.FR,
			[TimerCss.langEn]: this.props.selectedLang === Lang.EN,
			[TimerCss.langBz]: this.props.selectedLang === Lang.BZ
		});
		return (
			<div className={questionClass}>
				<div className={TimerCss.textFr}>
					<h2>
						Voulez vous continuer à consulter cette pièce?
					</h2>
					<div
						className={TimerCss.button}
						onClick={this.dispatchDelayTimer}>Oui</div>
				</div>
				<div className={TimerCss.textEn}>
					<h2>
						Would you like to keep looking at this room?
					</h2>
					<div
						className={TimerCss.button}
						onClick={this.dispatchDelayTimer}>Yes</div>
				</div>
				<div className={TimerCss.textBz}>
					<h2>
						Kenavo?
					</h2>
					<div
						className={TimerCss.button}
						onClick={this.dispatchDelayTimer}>Asterix</div>
				</div>
			</div>
		);
	}
}

export default connect((state) => { return state; })(Timer);
