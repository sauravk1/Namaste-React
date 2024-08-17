import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import AppStore from './utils/appStore';
import Cart from './components/Cart';


//  JSX => Babel transpiles it to react.createElement => ReactElement JS Object => HTMLElement(render
const Grocery = lazy(() => import('./components/Grocery'));
const About = lazy(() => import('./components/About'));
const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "saurav kumar"
        }
        setUserName(data.name);
    },[])
    return (
      <Provider store ={AppStore}>
        <UserContext.Provider value={{ loggedIn: userName, setUserName }}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </Provider>
    );
}
const appRouter = createBrowserRouter([
    {path: '/', element: <AppLayout />,
        children: [
            {path: '/', element: <Body />},
            {path: '/grocery', element: <Suspense fallback={<div>Loading...</div>}><Grocery /></Suspense> },
            {path: '/about', element: <Suspense fallback={<div>Loading...</div>}><About /></Suspense> },
            {path: '/contact', element: <Contact />},
            {path: '/cart', element: <Cart />},
            {path: '/restaurant/:resId', element: <RestaurantMenu />}
        ],
     errorElement: <Error />},
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);