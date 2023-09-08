import React, { FC } from "react";
import { footerLinks } from "@/constants";
import { classNames } from "@/utils";

import Link from "next/link";

const FooterLinks: FC = (): JSX.Element => {
	return (
		<div
			className={classNames(
				"flex flex-1 sm:gap-48 lg:gap-0 text-sm",
				"justify-between sm:justify-evenly lg:justify-around"
			)}
		>
			<div className="sm:absolute lg:static left-[5%]">
				<ul className={classNames("grid grid-rows-4 gap-4 pl-2 md:p-0", "justify-items-start")}>
					{footerLinks.slice(0, 4).map((link, index) => (
						<li key={index}>
							<Link href="/">{link}</Link>
						</li>
					))}
				</ul>
			</div>
			<div className="sm:absolute lg:static right-[5%]">
				<ul
					className={classNames(
						"grid grid-rows-4 gap-4 pr-2 md:p-0",
						"justify-items-end lg:justify-items-start"
					)}
				>
					{footerLinks.slice(4, 7).map((link, index) => (
						<li key={index}>
							<Link href="/">{link}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default FooterLinks;
