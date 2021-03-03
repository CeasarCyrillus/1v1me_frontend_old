import {MatchPageObject} from "../pageobject/MatchPageObject";

describe("MatchPage.tsx", () => {
	test("Shows a loading icon", () => {
		const page = new MatchPageObject();

		expect(page.isShowingLoadingIcon()).toBe(true);
	})
})