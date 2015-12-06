import { should } from 'chai';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import { selectLang, selectRoom, Lang } from '../src/actions';


should();

describe('reducers', () => {

	describe('selectedLang', () => {
		let store;

		beforeEach(() => {
			store = createStore(reducers);
		});

		it ('should return the initial selected lang, i.e. fr', () => {
			store.getState().selectedLang.should.equal('fr');
		});

		it('should return the correct lang', () => {
			store.dispatch(selectLang(Lang.EN));
			store.getState().selectedLang.should.equal(Lang.EN);
		});

		it('should return the initial selected lang when passing a wrong lang', () => {
			store.dispatch(selectLang('dummy'));
			store.getState().selectedLang.should.equal('fr');
		});

		it('should return the initial selected lang since the passed action is not for this reducer', () => {
			store.dispatch(selectRoom('dummy'));
			store.getState().selectedLang.should.equal('fr');
		});
	});

	describe('selectedRoom', () => {
		let store;

		beforeEach(() => {
			store = createStore(reducers);
		});

		it ('should return the initial selected room, i.e. none', () => {
			store.getState().selectedRoom.should.equal('');
		});

		it('should return the correct room', () => {
			store.dispatch(selectRoom('myRoom'));
			store.getState().selectedRoom.should.equal('myRoom');
		});

		it('should return the initial selected room since the passed action is not for this reducer', () => {
			store.dispatch(selectLang('dummy'));
			store.getState().selectedRoom.should.equal('');
		});
	});
});
