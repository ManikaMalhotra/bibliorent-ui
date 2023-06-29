import { MantineProvider } from '@mantine/core';
// import LoginPage from './views/LoginPage';
// import HomePage from './views/HomePage';
import CartPage from './views/CartPage';

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			{/* <LoginPage /> */}
			{/* <HomePage /> */}
			<CartPage />
		</MantineProvider>
	);
}