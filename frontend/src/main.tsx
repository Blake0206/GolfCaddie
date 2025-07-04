import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/AppLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import RoundPage from './pages/RoundPage.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'round/:courseId',
				element: <RoundPage />,
			},
		],
	},
]);

const rootElement = document.getElementById('root');

if (rootElement) {
	createRoot(rootElement).render(
		// <StrictMode>
		<RouterProvider router={router} />,
		// </StrictMode>,
	);
} else {
	console.error('Root container not found');
}
