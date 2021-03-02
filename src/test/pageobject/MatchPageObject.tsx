import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {MatchPage} from "../../pages/MatchPage";

export class MatchPageObject {
	private component: RenderResult;
	constructor(options?: { component: RenderResult }) {
		this.component = options?.component ?? render(<MatchPage />)
	}
}