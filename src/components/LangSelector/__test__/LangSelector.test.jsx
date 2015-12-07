import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
import { LangSelector } from '../LangSelector';

should();

describe('LangSelector', () => {

	it('should render ok', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<LangSelector />);
		let result = renderer.getRenderOutput();
		// root object of component should be a div
		result.type.should.equal('div');
		result.props.children.length.should.equal(5);
	});
});
