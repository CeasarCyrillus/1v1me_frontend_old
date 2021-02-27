import {render, RenderResult} from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import {PaymentPage} from "../../pages/PaymentPage";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

const reducer = combineReducers({})
export class PaymentPageObject {
	private component: RenderResult;
	constructor(options?: {initialState: ReturnType<typeof reducer>;}) {
		const store = createStore(reducer, options?.initialState);
		this.component = render(
			<Provider store={store}>
				<MemoryRouter>
					<PaymentPage />
				</MemoryRouter>
			</Provider>
		)
	}
}