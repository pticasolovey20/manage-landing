import React, { FC } from "react";
import { classNames } from "@/utils";

import Button from "../button";

const IntroSection: FC = (): JSX.Element => {
	return (
		<section className="flex flex-col-reverse md:flex-row">
			<div
				className={classNames(
					"w-full md:w-1/2 flex flex-col gap-4 md:gap-8 py-6 md:py-16",
					"lg:justify-between text-center md:text-start"
				)}
			>
				<h1
					className={classNames(
						"text-4xl lg:text-[50px] font-semibold",
						"text-primary-dark-blue leading-none tracking-tighter"
					)}
				>
					Bring everyone together to build better products.
				</h1>

				<p className={classNames("w-full lg:w-[65%]", "text-neutral-dark-grayish-blue")}>
					Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team
					goals in view.
				</p>

				<Button shadow label="Get Started" styles="!self-center md:!self-start" />
			</div>
		</section>
	);
};

export default IntroSection;
