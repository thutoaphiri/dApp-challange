import React, { useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ScholarshipPools from './screens/ScholarshipPools/ScholarshipPools';
import MyTransactions from './screens/MyTransactions/MyTransactions';
import ScholarsProgress from './screens/ScholarsProgress/ScholarsProgress';
import Header from './navigation-components/HeaderFooter/Header';
import { EHeaderNavigatorRoutesTitles, EHeaderNavigatorRoutes } from './navigation-components/models';
import Footer from './navigation-components/HeaderFooter/Footer';
import PopUp from './components/PopUp/PopUp';

function App() {
  const [headerNavCurrentRoute, setHeaderNavCurrentRoute] = useState<EHeaderNavigatorRoutesTitles>(
    EHeaderNavigatorRoutesTitles.SCHOLARSHIP_POOLS
  );
  return (
    <Router>
      <PopUp />
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
      <Footer
        currrentRoute={headerNavCurrentRoute}
        setHeaderNavCurrentRoute={setHeaderNavCurrentRoute}
      />
    </Router>
  );
}

export default App;
