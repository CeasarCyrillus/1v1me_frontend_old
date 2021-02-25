import React from 'react';
import {render} from '@testing-library/react';
import {Create1v1Page} from "../pages/Create1v1Page";

describe("Create1v1Page.tsx", () => {
    test("Has input for nano address", () => {
        const component = render(<Create1v1Page/>);

        expect(component.queryByTestId("address-input")).not.toBeNull();
    });

    test("Has input for bet amount", () => {
        const component = render(<Create1v1Page/>);

        expect(component.queryByTestId("bet-amount-input")).not.toBeNull();
    });

    test("Has button for creating the 1v1", () => {
        const component = render(<Create1v1Page/>);

        expect(component.queryByTestId("create-1v1-button")).not.toBeNull();
    });
})

