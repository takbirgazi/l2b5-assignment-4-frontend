import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import type { BorrowWithBook } from '../types/BorrowWithBook';
import { useCreateBorrowMutation, useGetSingleBookQuery } from '../redux/api/baseApi';
import toast from 'react-hot-toast';

const GetBorrow = () => {
    const { bookId } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(bookId as string, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });
    const [createBorrow] = useCreateBorrowMutation();

    const [borrow, setBorrow] = useState<BorrowWithBook | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [dueDate, setDueDate] = useState("");

    // Populate form data when API data is loaded
    useEffect(() => {
        if (data && data.data) {
            setBorrow({
                _id: data.data._id || '',
                quantity: 1,
                dueDate: "",
                book: {
                    title: data.data.title || '',
                    author: data.data.author || '',
                    genre: data.data.genre || '',
                    isbn: data.data.isbn || '',
                    description: data.data.description || '',
                    copies: data.data.copies || 0,
                    available: data.data.available ?? true,
                }
            });
        }
    }, [data]);

    // for loading
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='font-bold text-center'>Loading...</p>
        </div>
    };
    // for no data
    if (!data || !data.data) {
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='font-bold text-center'>No Data Found</p>
        </div>
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!quantity || !dueDate) {
            alert("Please enter both quantity and due date.");
            return;
        }
        const borrowData = {
            book: bookId,
            quantity,
            dueDate,
        };
        createBorrow(borrowData);
        toast.success('Book Borrowed successfully!');
    };

    if (!borrow) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-lg text-gray-600">Loading book details...</p>
            </div>
        );
    }

    const { book } = borrow;

    return (
        <div className="min-h-screen bg-white p-6">
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 shadow rounded-xl border border-gray-200">
                <NavLink
                    to="/books"
                    className="inline-flex items-center mb-6 text-indigo-600 hover:text-indigo-800 font-medium transition"
                >
                    <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    Back
                </NavLink>
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Borrow Book</h1>

                {/* Book Info */}
                <div className="space-y-4 mb-6">
                    <div>
                        <h2 className="text-xl font-semibold text-purple-700">{book.title}</h2>
                        <p className="text-sm text-indigo-600 mb-1">by {book.author}</p>
                        <p className="text-gray-700 text-sm">{book.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                        <p><strong>Genre:</strong> {book.genre}</p>
                        <p><strong>ISBN:</strong> {book.isbn}</p>
                        <p><strong>Copies:</strong> {book.copies}</p>
                        <p>
                            <strong>Available:</strong>{" "}
                            <span className={`font-medium ${book.available ? "text-green-600" : "text-red-600"}`}>
                                {book.available ? "Yes" : "No"}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Borrow Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Quantity</label>
                        <input
                            type="number"
                            min={1}
                            max={book.copies}
                            value={quantity}
                            onChange={(e) => setQuantity(parseInt(e.target.value))}
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Due Date</label>
                        <input
                            type="date"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                            required
                            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
                        disabled={!book.available}
                    >
                        Borrow Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetBorrow;