import React, { FC } from "react";
import Link from "next/link";

import FacebookIcon from "../icons/socials/FacebookIcon";
import YoutubeIcon from "../icons/socials/YoutubeIcon";
import TwitterIcon from "../icons/socials/TwitterIcon";
import PinterestIcon from "../icons/socials/PinterestIcon";
import InstagramIcon from "../icons/socials/InstagramIcon";

interface ISocialIconProps {
	icon: JSX.Element;
}

const socialsIcons: ISocialIconProps[] = [
	{ icon: <FacebookIcon /> },
	{ icon: <YoutubeIcon /> },
	{ icon: <TwitterIcon /> },
	{ icon: <PinterestIcon /> },
	{ icon: <InstagramIcon /> },
];

const SocialIcons: FC = (): JSX.Element => {
	return (
		<div className="flex justify-between gap-4">
			{socialsIcons.map(({ icon }, index) => (
				<Link href="/" key={index}>
					{icon}
				</Link>
			))}
		</div>
	);
};

export default SocialIcons;
