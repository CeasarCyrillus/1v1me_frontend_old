import React from 'react';
import {render} from '@testing-library/react';
import {App} from '../App';

describe("App.tsx", () => {
    test("Has input for nano address", () => {
        const app = render(<App/>);

        expect(app.queryByTestId("address-input")).not.toBeNull();
    });

    test("Has input for bet amount", () => {
        const app = render(<App/>);

        expect(app.queryByTestId("bet-amount-input")).not.toBeNull();
    });

    test("Has button for creating the 1v1", () => {
        const app = render(<App/>);

        expect(app.queryByTestId("create-1v1-button")).not.toBeNull();
    });
})

