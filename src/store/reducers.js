import { combineReducers } from 'redux';
import {
	SELECTED_LANG,
	SELECTED_ROOM,
	DISPLAYED_TEXT,
	DELAYED_TIMER,
	Lang
} from './actions';

// reducer dedicated to lang selection
function selectedLang(state = Lang.FR, action) {
	switch (action.type) {
		case SELECTED_LANG:
			let found = false;
			for (let key in Lang) {
				if (Lang[key] === action.lang) {
					found = true;
				}
			}
			return found ? action.lang : state;
		default:
			return state;
	}
}

// reducer dedicated to room selection
function selectedRoom(state = '', action) {
	switch (action.type) {
		case SELECTED_ROOM:
			return action.room;
		default:
			return state;
	}
}

function displayedText(state = false, action) {
	switch (action.type) {
		case DISPLAYED_TEXT:
			return action.isDisplayed;
		default:
			return state;
	}
}

function delayedTimer(state = false, action) {
	switch (action.type) {
		case DELAYED_TIMER:
			return action.timestamp;
		default:
			return state;
	}
}

const reducers = combineReducers({
	selectedLang,
	selectedRoom,
	displayedText,
	delayedTimer
});

export default reducers;
