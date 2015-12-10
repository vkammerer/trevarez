import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
import { App } from '../App';

should();

describe('App', () => {

	it('should render ok', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<App />);
		let result = renderer.getRenderOutput();
		// root object of component should be a div
		result.type.should.equal('div');
		// App component should have 1 LangSelector and 8 Room children and 2 othr stuff
		result.props.children.length.should.equal(10);
	});
});
