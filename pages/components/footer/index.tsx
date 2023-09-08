import React, { FC } from "react";
import { classNames } from "@/utils";

import Input from "../input";
import Logo from "../icons/Logo";
import FooterLinks from "./FooterLinks";
import SocialIcons from "./SocialIcons";

const Footer: FC = (): JSX.Element => {
	return (
		<footer className={classNames("w-full flex justify-center text-white bg-neutral-very-dark-blue")}>
			<div
				className={classNames(
					"w-full md:w-[90%] xl:w-[80%]",
					"flex flex-col-reverse lg:flex-row",
					"justify-between px-6 py-12",
					"gap-6 lg:gap-10 xxl:gap-32"
				)}
			>
				<span className="block lg:hidden text-center text-sm text-neutral-dark-grayish-blue tracking-tight">
					Copyright 2020. All Rights Reserved
				</span>

				<div
					className={classNames(
						"h-full flex flex-col-reverse lg:flex-col",
						"gap-8 sm:justify-between items-center"
					)}
				>
					<Logo fill="white" />
					<SocialIcons />
				</div>

				<FooterLinks />

				<div className="h-full flex flex-col justify-between lg:items-end">
					<Input />

					<span className="hidden lg:flex text-sm text-neutral-dark-grayish-blue tracking-tight">
						Copyright 2020. All Rights Reserved
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
