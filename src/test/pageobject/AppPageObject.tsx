import {render, RenderResult} from "@testing-library/react";
import {ICreateMatchService} from "../../services/CreateMatchService";
import {store} from "../../store";
import React from "react";
import {App} from "../../App";
import {Provider} from "react-redux";

export class AppPageObject {
	public readonly component: RenderResult
	constructor(options?: {createMatchService?: ICreateMatchService}) {
		this.component = render(
			<Provider store={store}>
				<React.StrictMode>
					<App createMatchService={options?.createMatchService}/>
				</React.StrictMode>
			</Provider>)
	}
}