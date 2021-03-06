import {render, RenderResult} from "@testing-library/react";
import React from "react";
import { Store } from "redux";
import {MatchPage} from "../../pages/MatchPage";
import {Provider} from "react-redux";
import {store} from "../../store";

export class MatchPageObject {
	private component: RenderResult;
	constructor(options?: Partial<{ component: RenderResult, store: Store }>) {
		this.component = options?.component ?? render(
			<Provider store={options?.store ?? store}>
				<MatchPage />
			</Provider>)
	}

	isShowingLoadingIcon = () => this.component.queryByTestId("loading-icon") !== null;
}