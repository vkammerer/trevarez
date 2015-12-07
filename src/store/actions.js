// action types
export const SELECTED_LANG = 'SELECTED_LANG';
export const SELECTED_ROOM = 'SELECTED_ROOM';

// lang constants
export const Lang = {
	FR: 'fr',
	EN: 'en',
	BZ: 'bz'
};

// action creators
export function selectLang(lang) {
	return { type: SELECTED_LANG, lang }
};

export function selectRoom(room) {
	return { type: SELECTED_ROOM, room }
};
