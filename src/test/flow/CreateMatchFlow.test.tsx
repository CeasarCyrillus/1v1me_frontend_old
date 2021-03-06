import {fireEvent, render, RenderResult, waitFor} from "@testing-library/react";
import {AppPageObject} from "../pageobject/AppPageObject";
import {getMockCreateMatchService} from "../TestFixtures";
import {CreateMatchPageObject} from "../pageobject/CreateMatchPageObject";
import {MatchPageObject} from "../pageobject/MatchPageObject";
import {goToPath, resetUrl} from "../testutils";

describe("create a match flow", () => {
	const createMatchService = getMockCreateMatchService();
	afterEach(() => {
		resetUrl();
	})

	test(
		"on create match page, " +
		"when clicking 'Create Match', " +
		"page redirect to match page", async () => {
			const app = new AppPageObject({createMatchService});
			const createMatchPage = new CreateMatchPageObject({component: app.component})

			fireEvent.click(createMatchPage.createMatchButton());

			await waitFor(() => {
				expect(window.location.pathname).toEqual("/match")
			})
	})

	describe("on match page ", () => {
		beforeEach(() => {
			goToPath("/match")
		})

		test(
			"if there is no match, " +
			"show a loading icon", async () => {
				const app = new AppPageObject({createMatchService});

				const matchPage = new MatchPageObject({component: app.component});
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(true);
				})
			})

		test(
			"once there is a match, " +
			"show QR code for paying", async () => {
				const app = new AppPageObject({createMatchService});
				const matchPage = new MatchPageObject({component: app.component});
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(false);
				})
			})

	});
});