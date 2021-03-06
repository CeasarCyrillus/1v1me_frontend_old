import {fireEvent, waitFor} from "@testing-library/react";
import {AppPageObject} from "../pageobject/AppPageObject";
import {getMatch, getMockCreateMatchService} from "../TestFixtures";
import {CreateMatchPageObject} from "../pageobject/CreateMatchPageObject";
import {MatchPageObject} from "../pageobject/MatchPageObject";
import {goToPath, resetUrl} from "../testutils";
import {createStoreWithState, RootState, store} from "../../store";

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
			"if there is not a match, show a loading icon", async () => {
				const matchPage = new MatchPageObject();
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(true);
				})
			})

		test(
			"once there is a match, hide loading icon and show QR code for paying", async () => {
				const initialState: RootState = {
					matchState: {
						createMatchInProgress: false,
						match: getMatch()
					}
				}
				const store = createStoreWithState(initialState);

				const matchPage = new MatchPageObject({store});
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(false);
				})
			})
	});
});