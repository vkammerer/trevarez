import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
import { Title } from '../Title';

should();

describe('Title', () => {

	it('should render ok', () => {
		let renderer = TestUtils.createRenderer();
		renderer.render(<Title />);
		let result = renderer.getRenderOutput();
		// root object of component should be a div
		result.type.should.equal('div');
		result.props.children.length.should.equal(3);
		result.props.children.forEach((child) => {
			child.type.should.equal('h1');
		});
	});
});
