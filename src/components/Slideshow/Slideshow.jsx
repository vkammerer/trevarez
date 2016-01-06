import React from 'react';
import { connect } from 'react-redux';
import SlideshowCss from './Slideshow.css';
import {
	Slider,
	Slides,
	PrevArrow,
	NextArrow
} from 'react-flex-slick';

export class Slideshow extends React.Component {
	constructor(props) {
		super(props);
	}
	componentDidUpdate(prevProps) {
		if (
			(prevProps.selectedRoom === this.props.room.name) &&
			(this.props.selectedRoom === '')
		){
			this.refs.slider.setState({ currentSlide: 0 });
		}
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
			<div className={SlideshowCss.sliderContainer}>
				<Slider infinite swipe draggable ref='slider'>
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
			</div>
		);
	}
}

export default connect((state) => { return state; })(Slideshow);
