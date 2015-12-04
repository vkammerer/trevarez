import { combineReducers } from 'redux';
import { SELECTED_LANG, SELECTED_ROOM, Lang } from './actions';

// reducer dedicated to lang selection
function selectedLang(state = Lang.FR, action) {
	switch (action.type) {
		case SELECTED_LANG:
			return action.lang;
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

const reducers = combineReducers({
	selectedLang,
	selectedRoom
})

export default reducers;
