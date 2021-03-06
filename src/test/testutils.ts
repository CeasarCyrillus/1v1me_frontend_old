export const goToPath = (path: string = "/") => {
	window.history.pushState({}, 'Title', path);
}

export const resetUrl = () => goToPath("/");