import React from 'react';
import Slick from 'react-slick';
import { connect } from 'react-redux';
import classNames from 'classnames';
import SliderCss from './Slider.css';

export class Slider extends React.Component {
	constructor(props) {
		super(props);
		let settings = {
			dots: false,
			infinite: true,
			speed: 500
		};
		this.settings = settings;
	}
	render() {
		return (
			<Slick {...this.settings}>
				{images.map((image) => {
					let imagePath = 'img/' + image + '.jpg';
					return <img key={image} src={imagePath} />;
				})}
			</Slick>
		);
	}
}

export default connect((state) => { return state; })(Slider);
