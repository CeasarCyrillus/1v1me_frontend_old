import React from "react";

export const JoinLink = (props: {link: string}) => {
	return (
		<div>
			<p>
				Share this link to player 2
			</p>
			<p data-testid={"join-link"}>
				{props.link}
			</p>
		</div>);
}