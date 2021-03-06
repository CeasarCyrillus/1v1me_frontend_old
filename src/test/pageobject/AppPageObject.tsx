import {render, RenderResult} from "@testing-library/react";
import {ICreateMatchService} from "../../services/CreateMatchService";
import {createStoreWithState, RootState, store} from "../../store";
import React from "react";
import {App} from "../../App";
import {Provider} from "react-redux";
import { MemoryRouter } from "react-router-dom";

export class AppPageObject {
	public readonly component: RenderResult
	constructor(options?: Partial<{createMatchService: ICreateMatchService, initialState: RootState}>) {
		const storeToRenderWith = options?.initialState !== undefined ?
			createStoreWithState(options.initialState)
			: store;
		this.component = render(
			<MemoryRouter initialEntries={["/"]} initialIndex={0}>
				<Provider store={storeToRenderWith}>
					<React.StrictMode>
						<App createMatchService={options?.createMatchService}/>
					</React.StrictMode>
				</Provider>
			</MemoryRouter>)
	}
}