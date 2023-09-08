import React, { FC } from "react";
import { classNames } from "@/utils";

interface IButtonProps {
	label: string;
	shadow?: boolean;
	styles?: string;
}

const Button: FC<IButtonProps> = ({ label, shadow = false, styles }: IButtonProps): JSX.Element => {
	return (
		<button
			className={classNames(
				"px-7 py-3 rounded-full duration-200",
				"text-white text-sm",
				shadow && "shadow-primary-bright-red shadow-[1px_5px_15px]",
				"bg-primary-bright-red hover:bg-primary-bright-red/75",
				styles
			)}
		>
			{label}
		</button>
	);
};

export default Button;
