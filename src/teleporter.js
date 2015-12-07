import Teleporter from 'teleporter';

function transforms(rect, dimensionsRect) {
	let scX = rect.width / dimensionsRect.width;
	let scY = rect.height / dimensionsRect.height;
	let trX = rect.left - dimensionsRect.left + (rect.width - dimensionsRect.width) / 2;
	let trY = rect.top - dimensionsRect.top + (rect.height - dimensionsRect.height) / 2;
	return `
		translateX(${trX}px)
		translateY(${trY}px)
		scaleX(${scX})
		scaleY(${scY})
	`
}

class TrevarezTeleporter extends Teleporter {
	animate(index) {
		let animation = Object.assign({}, this.animation, this.teleportation.steps[index + 1].animation);
		let theseSteps = [
		  { transform: transforms(this.teleportation.steps[index].rect, this.teleportation.sizeRect) },
		  { transform: transforms(this.teleportation.steps[index + 1].rect, this.teleportation.sizeRect) }
		];
		if (
			(typeof this.teleportation.steps[index].opacity === 'number') &&
			(typeof this.teleportation.steps[index + 1].opacity === 'number')
		) {
			theseSteps[0].opacity = this.teleportation.steps[index].opacity;
			theseSteps[1].opacity = this.teleportation.steps[index + 1].opacity;
		}
		if (this.teleportation.steps[1].class === '') {
			this.innerElement.style.transform = transforms(this.teleportation.steps[index + 1].rect, this.teleportation.sizeRect);
		}
		this.teleportation.player = this.innerElement.animate(theseSteps, {
		  duration: animation.duration,
		  delay: animation.delay,
		  easing: animation.easing
		});
		let timeoutDelay = animation.delay ? animation.duration + animation.delay : animation.duration;
		setTimeout(() => {
			if (this.teleportation.steps[0].class === '') {
				this.innerElement.style.transform = transforms(this.teleportation.steps[index + 1].rect, this.teleportation.sizeRect);
			}
			if (index < this.teleportation.steps.length - 2) {
				this.animate(index + 1);
			}
			else {
				this.element.classList.remove('teleporter-active');
				this.element.classList.add('teleporter-idle');
				this.teleportation.resolve();
			}
		}, timeoutDelay)
	}
}

export default TrevarezTeleporter;
