import {render, RenderResult} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {CreateMatchPage, CreateMatchPageProps} from "../../pages/CreateMatchPage";
import React from "react";

export class CreateMatchPageObject {
	private component: RenderResult;
	constructor(options?: Partial<CreateMatchPageProps>) {
		this.component = render(
			<MemoryRouter>
				<CreateMatchPage createMatchService={options?.createMatchService}/>
			</MemoryRouter>);
	}

	addressInput = () => this.component.getByTestId("address-input");
	betAmountInput = () => this.component.getByTestId("bet-amount-input");
	createMatchButton = () => this.component.getByTestId("create-1v1-button");
}