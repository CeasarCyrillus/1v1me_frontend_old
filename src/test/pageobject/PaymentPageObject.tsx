import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {MemoryRouter} from "react-router-dom";
import {PaymentPage} from "../../pages/PaymentPage";
import {Provider} from "react-redux";
import {reducers} from "../../store";
import {MatchState} from "../../pages/CreateMatchPage";
import {combineReducers, createStore} from "redux";

export class PaymentPageObject {
	private component: RenderResult;

	constructor(options?: { initialState: MatchState }) {
		const matchReducer = {matchState: reducers.matchState};
		const preloadedState = {matchState: options?.initialState};

		const newStore = createStore(combineReducers(matchReducer), preloadedState);

		this.component = render(
			<Provider store={newStore}>
				<MemoryRouter>
					<PaymentPage/>
				</MemoryRouter>
			</Provider>
		)
	}

	paymentAddressQr = () => this.component.getByTestId("payment-address-qr");
	paymentAddress = () => this.component.getByTestId("payment-address");
}