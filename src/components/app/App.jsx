import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoutes } from '../../consts/AppRoutes';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={AppRoutes.CALC} element={<PageWrapper />}>
          <Route index element={<CalcPage />} />

          <Route path={AppRoute.RESULT_INFO} element={<ResultInfoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}