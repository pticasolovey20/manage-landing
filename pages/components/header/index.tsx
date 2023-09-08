import React, { FC, useState } from "react";
import { classNames } from "@/utils";

import Logo from "../icons/Logo";
import Navigation from "../navigation";
import Button from "../button";

import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";

const Header: FC = (): JSX.Element => {
	const [open, setOpen] = useState(false);

	return (
		<header
			className={classNames(
				"w-full md:w-[90%] xl:w-[80%]",
				"flex flex-col gap-4 z-10",
				"px-6 py-10 sm:py-4 md:py-6 lg:py-10"
			)}
		>
			<div
				className={classNames(
					"flex w-full",
					"justify-between items-center",
					"sm:justify-center md:justify-between"
				)}
			>
				<div className="flex sm:hidden lg:flex">
					<Logo />
				</div>
				<Navigation />
				<Button shadow label="Get Started" styles="hidden md:flex" />

				<button className="flex sm:hidden z-20" onClick={() => setOpen(!open)}>
					{open ? <CloseIcon /> : <MenuIcon />}
				</button>
			</div>

			{open && (
				<div className="absolute left-0 top-24 w-full px-6 z-10">
					<div className="fixed inset-0 bg-neutral-very-dark-blue opacity-10 -z-10"></div>
					<Navigation styles="!flex sm:!hidden" />
				</div>
			)}
		</header>
	);
};

export default Header;
