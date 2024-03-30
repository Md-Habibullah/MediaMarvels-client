import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddReview from "../Pages/AddReview";
import MyCart from "../Pages/MyCart";
import About from "../Pages/About";
import PrivateRoute from "./PrivateRoute";
import Profile from "../Pages/Profile";
import BrandProducts from "../Pages/BrandProducts";
import ProductDetails from "../Pages/ProductDetails";
import UpdatedProduct from "../Components/UpdatedProduct";
import CategoryProducts from "../Pages/CategoryProduct";
import ErrorPage from "./ErrorPage";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                loader: () => fetch('https://media-marvels-server.vercel.app/users'),
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/products',
                element: <PrivateRoute><AddReview /></PrivateRoute>
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile /></PrivateRoute>
            },
            {
                path: '/brand/:brandName',
                loader: async ({ params }) => fetch(`https://media-marvels-server.vercel.app/products/${params.brandName}`),
                element: <PrivateRoute> <BrandProducts /></PrivateRoute>
            },
            {
                path: '/products/:brandName/:id',
                loader: async ({ params }) => fetch(`https://media-marvels-server.vercel.app/products/${params.brandName}/${params.id}`),
                element: <PrivateRoute><ProductDetails /></PrivateRoute>
            },
            {
                path: '/updateProduct/:brand/:id',
                loader: async ({ params }) => fetch(`https://media-marvels-server.vercel.app/products/${params.brand}/${params.id}`),
                element: <PrivateRoute><UpdatedProduct /></PrivateRoute>
            },
            {
                path: '/cart/:email',
                loader: async ({ params }) => fetch(`https://media-marvels-server.vercel.app/cart/${params.email}`),
                element: <PrivateRoute><MyCart /></PrivateRoute>
            },
            {
                path: '/category/:categoryName',
                loader: async ({ params }) => fetch(`https://media-marvels-server.vercel.app/products/category/${params.categoryName}`),
                element: <PrivateRoute> <CategoryProducts /></PrivateRoute>
            },
        ]
    }
])

export default Router