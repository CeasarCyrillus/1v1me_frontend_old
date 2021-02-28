import {render, RenderResult} from "@testing-library/react";
import {NanoAddressInput} from "../../components/NanoAddressInput";
import React, {useState} from "react";
import userEvent from "@testing-library/user-event";

export class NanoAddressInputPageObject {
	private component: RenderResult;
	constructor(options?: { initialValue?: string, onChangeCallback?: (newValue: string) => void}) {
		this.component = render(
			<NanoAddressInputWrapper
				initialValue={options?.initialValue}
				callBack={options?.onChangeCallback ?? jest.fn()}
			/>);
	}

	writeAddress = (addresss: string) => userEvent.type(this.addressInput(), addresss);
	addressInput = (): HTMLInputElement => this.component.getByTestId("address-input") as HTMLInputElement;
}

const NanoAddressInputWrapper = (props: { initialValue?: string, callBack: (newValue: string) => void; }) => {
	const [currentValue, setCurrentValue] = useState(props.initialValue ?? "");
	return <NanoAddressInput currentAddress={currentValue} onChangeCallback={(newValue => {
		setCurrentValue(newValue);
		props.callBack(newValue);
	})} />
}