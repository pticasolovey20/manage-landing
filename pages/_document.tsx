import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
	return (
		<Html lang="en">
			<Head />
			<title>Manage Landing Page</title>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
			<link
				href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600&display=swap"
				rel="stylesheet"
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
