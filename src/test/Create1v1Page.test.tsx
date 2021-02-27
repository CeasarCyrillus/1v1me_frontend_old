import React from 'react';
import {render} from '@testing-library/react';
import {CreateMatchPage} from "../pages/CreateMatchPage";
import {MemoryRouter} from 'react-router-dom';

const renderCreateMatchPage = () => render(
	<MemoryRouter>
		<CreateMatchPage/>
	</MemoryRouter>);

describe("Create1v1Page.tsx", () => {
	test("Has input for nano address", () => {
		const component = renderCreateMatchPage();

		expect(component.queryByTestId("address-input")).not.toBeNull();
	});

	test("Has input for bet amount", () => {
		const component = renderCreateMatchPage()

		expect(component.queryByTestId("bet-amount-input")).not.toBeNull();
	});

	test("Has button for creating the 1v1", () => {
		const component = renderCreateMatchPage()

		expect(component.queryByTestId("create-1v1-button")).not.toBeNull();
	});
})

