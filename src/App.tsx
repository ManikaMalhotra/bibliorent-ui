import { MantineProvider } from '@mantine/core';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Router>
				<Routes>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</Router>
		</MantineProvider>
	);
}