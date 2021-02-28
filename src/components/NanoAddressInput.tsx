import React, {useState} from "react";
import {tools} from "nanocurrency-web";

export interface NanoAddressInputProps {
	currentAddress: string;
	onChangeCallback: (newValue: string) => void;
}

export const NanoAddressInput = (props: NanoAddressInputProps) => {
	const [showValidationMessage, setShowValidationMessage] = useState(false);

	const validateAddress = (address: string) => {
		const addressIsEmpty = address === "";
		setShowValidationMessage(!addressIsEmpty && !tools.validateAddress(address))
	};


	const validateAddressOnChange = (address: string) => {
		const addressIsEmpty = address === "";
		if (addressIsEmpty)
			setShowValidationMessage(false);
		props.onChangeCallback(address);
	};

	return (
		<>
		<input
			className={"addressInput"}
			data-testid={"address-input"}
			type={"text"}
			placeholder={"nano address"}
			value={props.currentAddress}
			onChange={event => {
				validateAddressOnChange(event.target.value);
			}}
			onBlur={event => {
				const address = event.target.value;
				validateAddress(address);
			}}
		/>
			{showValidationMessage ?
				<p data-testid={"address-validation-message"}>
					Nano address is invalid
				</p>
				:
				<></>
			}

		</>
	)
}