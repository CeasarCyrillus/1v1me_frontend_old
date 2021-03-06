import {fireEvent, waitFor} from "@testing-library/react";
import {AppPageObject} from "../pageobject/AppPageObject";
import {getMatch, getMockedMatchService} from "../TestFixtures";
import {CreateMatchPageObject} from "../pageobject/CreateMatchPageObject";
import {MatchPageObject} from "../pageobject/MatchPageObject";
import {goToPath, resetUrl} from "../testutils";
import {createStoreWithState, RootState} from "../../store";
import {IMatchService} from "../../services/MatchService";

describe("create a match flow", () => {
	let matchService: IMatchService;

	beforeEach(() => {
		matchService = getMockedMatchService();
	});

	afterEach(() => {
		resetUrl();
	})

	test(
		"on create match page, " +
		"when clicking 'Create Match', " +
		"page redirect to match page", async () => {
			const app = new AppPageObject({createMatchService: matchService});
			const createMatchPage = new CreateMatchPageObject({component: app.component})

			fireEvent.click(createMatchPage.createMatchButton());

			await waitFor(() => {
				expect(window.location.pathname).toEqual("/match")
			})
		})

	describe("on match page", () => {
		beforeEach(() => {
			goToPath("/match")
		})

		test(
			"if there is not a match, show a loading icon", async () => {
				const matchPage = new MatchPageObject();
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(true);
					expect(matchPage.queryPaymentQrCode()).toBeNull();
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

				const matchPage = new MatchPageObject({store, matchService});
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(false);
					expect(matchPage.queryPaymentQrCode()).not.toBeNull();
					expect(matchService.getMatch).not.toHaveBeenCalled()
				})
			})

		test(
			"if there is no match, and a request to create match is NOT in progress, get match from BE", async () => {
				const initialState: RootState = {
					matchState: {
						createMatchInProgress: true,
						match: null
					}
				}

				const store = createStoreWithState(initialState);

				const matchPage = new MatchPageObject({store, matchService});
				await waitFor(() => {
					expect(matchPage.isShowingLoadingIcon()).toBe(true);
					expect(matchService.getMatch).toHaveBeenCalled();
				})
			})

	});
});