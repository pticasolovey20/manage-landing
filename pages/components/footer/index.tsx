import React, { FC } from "react";
import { classNames } from "@/utils";
import { footerLinks } from "@/constants";

import Link from "next/link";
import Button from "../button";
import Logo from "../icons/Logo";

import FacebookIcon from "../icons/socials/FacebookIcon";
import YoutubeIcon from "../icons/socials/YoutubeIcon";
import TwitterIcon from "../icons/socials/TwitterIcon";
import PinterestIcon from "../icons/socials/PinterestIcon";
import InstagramIcon from "../icons/socials/InstagramIcon";

const socialsIcons: any[] = [
	{ icon: <FacebookIcon /> },
	{ icon: <YoutubeIcon /> },
	{ icon: <TwitterIcon /> },
	{ icon: <PinterestIcon /> },
	{ icon: <InstagramIcon /> },
];

const Footer: FC = (): JSX.Element => {
	return (
		<footer className={classNames("w-full flex justify-center text-white bg-neutral-very-dark-blue")}>
			<div
				className={classNames(
					"w-full md:w-[90%] xl:w-[80%]",
					"flex flex-col-reverse lg:flex-row",

					"justify-between px-6 py-12",
					"gap-8 sm:gap-10 lg:gap-20 xxl:gap-32"
				)}
			>
				<span className="flex lg:hidden justify-center text-sm text-neutral-dark-grayish-blue tracking-tight">
					Copyright 2020. All Rights Reserved
				</span>
				<div
					className={classNames(
						"h-full flex flex-col-reverse lg:flex-col",
						"gap-8 sm:justify-between items-center"
					)}
				>
					<Logo />
					<div className="flex justify-between gap-4">
						{socialsIcons.map(({ icon }, index) => (
							<Link href="/" key={index}>
								{icon}
							</Link>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between xs:justify-evenly md:justify-between">
					<div className="grid grid-rows-4 gap-4">
						{footerLinks.slice(0, 4).map((link, index) => (
							<Link href="/" key={index}>
								{link}
							</Link>
						))}
					</div>
					<div className="grid grid-rows-4 gap-4">
						{footerLinks.slice(4, 7).map((link, index) => (
							<Link href="/" key={index}>
								{link}
							</Link>
						))}
					</div>
				</div>
				<div className="h-full flex flex-col justify-between lg:items-end">
					<div className="flex flex-col xs:flex-row gap-4 justify-between xs:justify-evenly sm:justify-center">
						<input
							placeholder="Updates in your inbox…"
							className="px-4 py-3 rounded-full text-black placeholder:text-sm focus:ring-none focus:outline-none"
						/>
						<Button label="Go" styles="!self-end" />
					</div>
					<span className="hidden lg:flex text-sm text-neutral-dark-grayish-blue tracking-tight">
						Copyright 2020. All Rights Reserved
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
