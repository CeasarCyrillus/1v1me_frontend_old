import {render, RenderResult} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {CreateMatchPage} from "../../pages/CreateMatchPage";
import React from "react";

export class CreateMatchPageObject {
	private component: RenderResult;
	constructor() {
		this.component = render(
			<MemoryRouter>
				<CreateMatchPage/>
			</MemoryRouter>);
	}

	addressInput = () => this.component.queryByTestId("address-input");
	betAmountInput = () => this.component.queryByTestId("bet-amount-input");
	createMatchButton = () => this.component.queryByTestId("create-1v1-button");
}