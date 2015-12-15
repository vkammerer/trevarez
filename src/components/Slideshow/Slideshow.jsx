import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import SlideshowCss from './Slideshow.css';
import {
	Slider,
	Slides,
	PrevArrow,
	NextArrow,
	Dots
} from 'react-flex-slick';

export class Slideshow extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let images = this.props.room.images.map((image, index) => {
			let bgStyle = {
				backgroundImage : `url('img/${this.props.room.name}/${image}.jpg')`
			};
			return (
				<div
					key={index}
					className={SlideshowCss.slide}
					style={bgStyle} />
			);
		});
		return (
			<Slider infinite swipe draggable >
				<PrevArrow
					activeClassName={SlideshowCss.prevArrow}
					inactiveClassName={SlideshowCss.prevArrow} />
				<Slides {...this.props}  >
					{images}
				</Slides>
				<NextArrow
					activeClassName={SlideshowCss.nextArrow}
					inactiveClassName={SlideshowCss.nextArrow} />
			</Slider>
		);
	}
}

export default connect((state) => { return state; })(Slideshow);
