import React from "react";

export interface NanoAddressInputProps {
	currentAddress: string;
	onChangeCallback: (newValue: string) => void;
}

export const NanoAddressInput = (props: NanoAddressInputProps) => {
	return (
		<input
			className={"addressInput"}
			data-testid={"address-input"}
			type={"text"}
			placeholder={"nano address"}
			value={props.currentAddress}
			onChange={event => {
				props.onChangeCallback(event.target.value);
			}}
		/>
	)
}