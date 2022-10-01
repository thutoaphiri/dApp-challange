import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScholarshipPools from './screens/ScholarshipPools/ScholarshipPools';
import MyTransactions from './screens/MyTransactions/MyTransactions';
import ScholarsProgress from './screens/ScholarsProgress/ScholarsProgress';
import Header from './navigation-components/Header/Header';
import { EHeaderNavigatorRoutesTitles, EHeaderNavigatorRoutes } from './navigation-components/models';

function App() {
  const [headerNavCurrentRoute, setHeaderNavCurrentRoute] = useState<EHeaderNavigatorRoutesTitles>(
    EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS
  );
  return (
    <Router>
      <Header
        currrentRoute={headerNavCurrentRoute}
        setHeaderNavCurrentRoute={setHeaderNavCurrentRoute}
      />
      <Routes>
        <Route
          path={EHeaderNavigatorRoutes.SCHOLARSHIP_POOLS}
          element={<ScholarshipPools />}
        />
        <Route
          path={EHeaderNavigatorRoutes.MY_TRANSACTIONS}
          element={<MyTransactions />}
        />
        <Route
          path={EHeaderNavigatorRoutes.SCHOLARS_PROGRESS}
          element={<ScholarsProgress />}
        />
      </Routes>
    </Router>
  );
}

export default App;
