import React from 'react';
import { Route, Routes, BrowserRouter, Navigate  } from 'react-router-dom';

import { Dashboard, Products, Customers, Income, Promote, Help } from './Pages';
import { Routes as RoutesLink } from './constants/routes';

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={RoutesLink.dashboard} element={<Dashboard />} />
				<Route path={RoutesLink.products} element={<Products />} />
				<Route path={RoutesLink.customers} element={<Customers />} />
				<Route path={RoutesLink.income} element={<Income />} />
				<Route path={RoutesLink.promote} element={<Promote />} />
				<Route path={RoutesLink.help} element={<Help />} />
				<Route path="*" element={<Navigate to={RoutesLink.dashboard} />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
