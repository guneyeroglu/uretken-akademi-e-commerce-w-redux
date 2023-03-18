import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Spinner from '../components/Spinner/Spinner';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/NotFound/NotFound';

const Home = lazy(() => import('../pages/Home/Home'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const Product = lazy(() => import('../pages/Product/Product'));

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

const Router = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default Router;
