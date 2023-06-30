import { MantineProvider } from '@mantine/core';
import LoginPage from './views/LoginPage';
import HomePage from './views/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useGenresStore } from './stores/genres';

export default function App() {
	const { getGenres } = useGenresStore();

	useEffect(() => {
		getGenres()
			.then(() => {
				console.log(useGenresStore.getState())
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS>
			<Router>
				<Routes>
					<Route path="/" element={<LoginPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/home" element={<HomePage />} />
				</Routes>
			</Router>
		</MantineProvider>
	);
}