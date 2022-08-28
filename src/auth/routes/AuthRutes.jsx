import { Navigate, Route, Routes } from 'react-router-dom';
import { RegisterPage, LoginPages } from '../pages';

export const AuthRutes = () => {
	return (
		<Routes>
			<Route
				path="login"
				element={<LoginPages />}
			/>
			<Route
				path="register"
				element={<RegisterPage />}
			/>
			<Route
				path="/*"
				element={<Navigate to="/auth/login" />}
			/>
		</Routes>
	);
};
