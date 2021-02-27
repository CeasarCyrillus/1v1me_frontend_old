import {render, RenderResult} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import {CreateMatchPage, ICreateMatchPageProps} from "../../pages/CreateMatchPage";
import React from "react";

export class CreateMatchPageObject {
	private component: RenderResult;
	constructor(options?: Partial<ICreateMatchPageProps>) {
		this.component = render(
			<MemoryRouter>
				<CreateMatchPage createMatchService={options?.createMatchService}/>
			</MemoryRouter>);
	}

	addressInput = () => this.component.queryByTestId("address-input");
	betAmountInput = () => this.component.queryByTestId("bet-amount-input");
	createMatchButton = () => this.component.getByTestId("create-1v1-button");
}