import React, { FC } from "react";
import Layout from "./components/layout";
import IntroSection from "./components/intro";

const Home: FC = (): JSX.Element => {
	return (
		<Layout>
			<IntroSection />
		</Layout>
	);
};

export default Home;
