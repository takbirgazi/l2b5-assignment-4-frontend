import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";


const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/books",
                element: <div>Books List</div>
            },
            {
                path: "/create-book",
                element: <div>Create Book</div>
            },
            {
                path: "/books/:id",
                element: <div>Book Details</div>
            },
            {
                path: "/edit-book/:id",
                element: <div>Edit Book</div>
            },
            {
                path: "/borrow/:bookId",
                element: <div>Borrow Book</div>
            },
            {
                path: "/borrow-summary",
                element: <div>Borrow Summary</div>
            }
        ]
    },
]);

export default router;