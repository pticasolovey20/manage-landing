import React, { FC, ReactNode } from "react";

import Header from "../header";
import Footer from "../footer";

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps): JSX.Element => {
	return (
		<div className="w-full min-h-screen flex flex-col">
			<Header />
			<main className="flex-1 flex items-center">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
