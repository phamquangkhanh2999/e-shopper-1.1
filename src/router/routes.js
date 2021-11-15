import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Catalog from "../pages/Catalog";
import Payment from "../components/Payment";
import Login from "../pages/Login";
import OrderComplete from "../components/OrderComplete";

const routes = [
  {
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    path: "/login",
    exact: false,
    element: <Login />,
  },
  {
    path: "/catalog",
    exact: false,
    element: <Catalog />,
  },
  {
    path: "/catalog/:id",
    exact: false,
    element: <Product />,
  },
  {
    path: "/cart",
    exact: false,
    element: <Cart />,
  },
  {
    path: "/payment",
    exact: false,
    element: <Payment />,
  },
  {
    path: "/order-complete",
    exact: false,
    element: <OrderComplete />,
  },
];

export default routes;
