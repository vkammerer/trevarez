import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { should } from 'chai';
import { Text } from '../Text';

should();

describe('Text', () => {

	it('should render ok', () => {
		let props = {
			name: 'chambre',
			top: 26,
			left: 50,
			content: { chambre: { en: 'en', fr: 'fr', bz: 'bz' } },
			segment: 80
		};
		let renderer = TestUtils.createRenderer();
		renderer.render(<Text room={props} />);
		let result = renderer.getRenderOutput();
		// root object of component should be a div
		result.type.should.equal('div');
		result.props.children.length.should.equal(5);
	});
});
