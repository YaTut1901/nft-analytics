import React from 'react';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Trends from './components/Trends';
import Explore from './components/Explore';
import Marketplace from './components/Marketplace';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Wrapper />,
    children:[
         {
             path: "/",
             element: <Homepage />
         },
         {
              path: "/trends",
              element: <Trends />
          },
          {
              path: "/explore",
              element: <Explore />
          },
          {
            path: "/marketplace",
            element: <Marketplace />
          },
          {
              path: "*",
              element: <NotFound />
          },
    ]
  }
]);

function Wrapper(){
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-tr from-indigo-900 via-indigo-600 to-violet-500">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
};

export default router;
