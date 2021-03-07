import fetchMock from "fetch-mock";

export const goToPath = (path: string = "/") => {
	window.history.pushState({}, 'Title', path);
}

export const resetUrl = () => goToPath("/");

export const getLastCallToFetch = () => {
	const call = fetchMock.lastCall();
	if (!call)
		throw new Error("No call to fetch was made")
	const url = call[0]
	const body = JSON.parse(call[1]?.body?.toString() ?? "{}");

	return {url, body};
};