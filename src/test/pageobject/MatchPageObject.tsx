import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Store} from "redux";
import {MatchPage} from "../../pages/MatchPage";
import {Provider} from "react-redux";
import {createAppStore} from "../../store";
import {IMatchService} from "../../services/MatchService";
import {getMockedMatchService} from "../TestFixtures";

export class MatchPageObject {
	private component: RenderResult;
	constructor(options?: Partial<{ component: RenderResult, store: Store, matchService: IMatchService }>) {
		this.component = options?.component ?? render(
			<Provider store={options?.store ?? createAppStore()}>
				<MatchPage matchService={options?.matchService ?? getMockedMatchService()}/>
			</Provider>)
	}

	isShowingLoadingIcon = () => this.component.queryByTestId("loading-icon") !== null;
	queryPaymentQrCode = () => this.component.queryByTestId("payment-address-qr");
}