export const hearts = () => {
	const hearts = [];
	const timeHandle = function(callback) {
		setTimeout(callback, 1000 / 60);
	};
	window.requestAnimationFrame = (() =>
		window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		timeHandle)();

	const gameloop = () => {
		hearts.forEach((item, index) => {
			if (item.alpha <= 0) {
				document.body.removeChild(item.el);
				hearts.splice(index, 1);
			} else {
				item.y--;
				item.scale += 0.004;
				item.alpha -= 0.013;
				const style = item.el.style;
				style.left = `${item.x}px`;
				style.top = `${item.y}px`;
				style.opacity = `${item.alpha}`;
				style.transform = `scale(${item.scale}) rotate(45deg)`;
				style.background = `${item.color}`;
			}
		});
		requestAnimationFrame(gameloop);
	};

	const attachEvent = () => {
		const old = typeof window.onclick === 'function' && window.onclick;
		window.onclick = event => {
			old && old();
			createHeart(event);
		};
	};
	const randomColor = () =>
		`rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() *
			255})`;
	const createHeart = event => {
		var d = document.createElement('div');
		d.className = 'heart';
		hearts.push({
			el: d,
			x: event.clientX - 5,
			y: event.clientY - 5,
			scale: 1,
			alpha: 1,
			color: randomColor(),
		});
		document.body.appendChild(d);
	};
	const init = () => {
		attachEvent();
		gameloop();
	};
	init();
};
