import { fireEvent, waitFor } from "@testing-library/react";
import {AppPageObject} from "../pageobject/AppPageObject";
import {getMockCreateMatchService} from "../TestFixtures";

describe("create a match flow", () => {
	test("on create match page, when clicking 'Create Match', page redirect to match page", async () => {
		const createMatchService = getMockCreateMatchService();
		const app = new AppPageObject({createMatchService});
		const createMatchPage = app.getCreateMatchPage();

		fireEvent.click(createMatchPage.createMatchButton());

		await waitFor(() => {
			expect(window.location.pathname).toEqual("/match")
		})
	})
});