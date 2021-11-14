import React from 'react';
import './sass/main.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './router/routes';

import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  const showContentMenus = (routes) => {
    let result = null;

    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={route.element}
        />
      ));
    }

    return <Routes>{result}</Routes>;
  };
  return (
    <BrowserRouter>
      <>
        <Header />
        <div className='container'>
          <div className='main'>{showContentMenus(routes)}</div>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
