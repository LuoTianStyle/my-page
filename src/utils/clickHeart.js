(function(window, document) {
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
				item.el.style.left =item.x
					'left:' +
					item.x +
					'px;top:' +
					item.y +
					'px;opacity:' +
					item.alpha +
					';transform:scale(' +
					item.scale +
					',' +
					item.scale +
					') rotate(45deg);background:' +
					item.color;
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
})(window, document);
