import {fireEvent, render, RenderResult} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {CreateMatchPage, MatchState} from "../../pages/CreateMatchPage";
import React from "react";
import {reducers} from "../../store";
import {combineReducers, createStore, Store} from "redux";
import {ICreateMatchService} from "../../services/CreateMatchService";
import {Provider} from "react-redux";

type CreateMatchPageObjectOptions = Partial<{
	createMatchService: ICreateMatchService,
	initialState: MatchState,
	component: RenderResult
}>;

export class CreateMatchPageObject {
	private component: RenderResult;
	private readonly store: Store;
	constructor(options?: CreateMatchPageObjectOptions) {
		const matchReducer = {matchState: reducers.matchState};
		const preloadedState = {matchState: options?.initialState};
		this.store = createStore(combineReducers(matchReducer), preloadedState);
		this.component = options?.component ?? render(
			<Provider store={this.store}>
				<MemoryRouter>
					<CreateMatchPage createMatchService={options?.createMatchService}/>
				</MemoryRouter>
			</Provider>);
	}

	addressInput = () => this.component.getByTestId("address-input");
	betAmountInput = () => this.component.getByTestId("bet-amount-input");
	createMatchButton = () => this.component.getByTestId("create-1v1-button");

	mockDispatch = () => {
		const mockedDispatch = jest.fn();
		this.store.dispatch = mockedDispatch;
		return mockedDispatch;
	}
}