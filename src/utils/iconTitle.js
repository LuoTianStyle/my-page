export const iconTitleChange = title => {
	const hidden = document.hidden;
	if (hidden) {
		document.title = '你还要无视我多久o((⊙﹏⊙))o.';
		document.querySelector('link[rel="shortcut icon"]').href =
			'/favicon_gray.ico';
	} else {
		document.title = `洛之空的${title}`;
		document.querySelector('link[rel="shortcut icon"]').href =
			'/favicon.ico';
	}
};
