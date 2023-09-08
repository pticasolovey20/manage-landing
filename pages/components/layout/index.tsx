import React, { FC, ReactNode } from "react";

import Header from "../header";
import Footer from "../footer";

interface ILayoutProps {
	children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps): JSX.Element => {
	return (
		<div className="min-h-screen flex flex-col items-center">
			<Header />
			<main className="w-full md:w-[90%] xl:w-[80%] h-full flex-1 px-6">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
