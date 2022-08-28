import { Route, Routes } from 'react-router-dom';
import { AuthRutes } from '../auth/routes/AuthRutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
export const AppRouter = () => {
	return (
		<Routes>
			{/* Login y registro */}
			<Route
				path="/auth/*"
				element={<AuthRutes />}
			/>

			{/* JournalApp */}
			<Route
				path="/*"
				element={<JournalRoutes />}
			/>
		</Routes>
	);
};
