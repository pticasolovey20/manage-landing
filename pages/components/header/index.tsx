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
				"relative flex flex-col gap-4",
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
				<Logo />
				<Navigation />
				<Button label="Get Started" styles="hidden md:flex" />

				{open ? (
					<button className="flex sm:hidden" onClick={() => setOpen(!open)}>
						<CloseIcon />
					</button>
				) : (
					<button className="flex sm:hidden" onClick={() => setOpen(!open)}>
						<MenuIcon />
					</button>
				)}
			</div>

			{open && <Navigation styles="!flex sm:!hidden" />}
		</header>
	);
};

export default Header;
