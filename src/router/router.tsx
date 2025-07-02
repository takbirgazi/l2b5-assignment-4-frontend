import { createBrowserRouter } from "react-router";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import AllBooks from "../pages/AllBooks";
import AddBook from "../pages/AddBook";
import GetBorrow from "../pages/GetBorrow";
import BorrowSummary from "../pages/BorrowSummary";


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
                Component: AllBooks
            },
            {
                path: "/create-book",
                Component: AddBook
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
                Component: GetBorrow
            },
            {
                path: "/borrow-summary",
                Component: BorrowSummary
            }
        ]
    },
]);

export default router;