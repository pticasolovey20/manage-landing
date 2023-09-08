import React, { FC } from "react";
import Button from "../button";

const Input: FC = (): JSX.Element => {
	return (
		<div className="flex flex-col xs:flex-row gap-4 justify-center">
			<input
				placeholder="Updates in your inbox…"
				className="px-4 py-3 rounded-full text-black text-sm focus:ring-none focus:outline-none"
			/>
			<Button label="Go" styles="!self-end" />
		</div>
	);
};

export default Input;
