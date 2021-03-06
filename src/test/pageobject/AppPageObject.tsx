import {render, RenderResult} from "@testing-library/react";
import {IMatchService} from "../../services/MatchService";
import {createAppStore, createStoreWithState, RootState} from "../../store";
import React from "react";
import {App} from "../../App";
import {Provider} from "react-redux";
import {MemoryRouter} from "react-router-dom";

export class AppPageObject {
	public readonly component: RenderResult
	constructor(options?: Partial<{createMatchService: IMatchService, initialState: RootState}>) {
		const storeToRenderWith = options?.initialState !== undefined ?
			createStoreWithState(options.initialState)
			: createAppStore();
		this.component = render(
			<MemoryRouter initialEntries={["/"]} initialIndex={0}>
				<Provider store={storeToRenderWith}>
					<React.StrictMode>
						<App matchService={options?.createMatchService}/>
					</React.StrictMode>
				</Provider>
			</MemoryRouter>)
	}
}