import React, { FC } from "react";
import { NAVIGATION } from "@/pages/constants";
import { classNames } from "@/utils";

import Link from "next/link";

interface INavigationProps {
	styles?: string;
}

const Navigation: FC<INavigationProps> = ({ styles }: INavigationProps): JSX.Element => {
	return (
		<nav
			className={classNames(
				"hidden sm:flex",
				"justify-center md:justify-between",
				"rounded-md font-semibold sm:font-normal",
				"shadow-neutral-dark-grayish-blue shadow-sm sm:shadow-none",
				"bg-neutral-very-pale-red sm:bg-transparent",
				styles
			)}
		>
			<ul className={classNames("flex flex-col sm:flex-row", "items-center gap-4 md:gap-2", "p-4 lg:p-4")}>
				{NAVIGATION.map((item, index) => (
					<li key={index}>
						<Link
							href="/"
							className={classNames("px-2 duration-200", "hover:text-neutral-dark-grayish-blue")}
						>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;
