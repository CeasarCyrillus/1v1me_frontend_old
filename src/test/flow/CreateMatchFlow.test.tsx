import {fireEvent, RenderResult, waitFor} from "@testing-library/react";
import {AppPageObject} from "../pageobject/AppPageObject";
import {getMockCreateMatchService} from "../TestFixtures";
import {CreateMatchPageObject} from "../pageobject/CreateMatchPageObject";
import {MatchPageObject} from "../pageobject/MatchPageObject";

describe("create a match flow", () => {
	const createMatchService = getMockCreateMatchService();

	test(
		"on create match page," +
		"when clicking 'Create Match'," +
		"page redirect to match page", async () => {
			const app = new AppPageObject({createMatchService});
			const createMatchPage = new CreateMatchPageObject({component: app.component})

			fireEvent.click(createMatchPage.createMatchButton());

			await waitFor(() => {
				expect(window.location.pathname).toEqual("/match")
			})
	})

	test(
		"on match page," +
		"if there is no match," +
		"show a loading icon", async () => {
			const app = new AppPageObject({createMatchService});
			const matchPage = new MatchPageObject({component: app.component});
			await waitFor(() => {
				expect(app.component.getByTestId("supsup"))
			})

	})
});