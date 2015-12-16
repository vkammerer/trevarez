// action types
export const SELECTED_LANG = 'SELECTED_LANG';
export const SELECTED_ROOM = 'SELECTED_ROOM';
export const DISPLAYED_TEXT = 'DISPLAYED_TEXT';
export const DELAYED_TIMER = 'DELAYED_TIMER';

// lang constants
export const Lang = {
	FR: 'fr',
	EN: 'en',
	BZ: 'bz'
};

// action creators
export function selectLang(lang) {
	return { type: SELECTED_LANG, lang };
}

export function selectRoom(room) {
	return { type: SELECTED_ROOM, room };
}

export function displayText(isDisplayed) {
	return { type: DISPLAYED_TEXT, isDisplayed };
}

export function delayTimer() {
	return {
		type: DELAYED_TIMER,
		timestamp: Date.now()
	};
}
