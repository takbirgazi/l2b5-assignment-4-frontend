
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import type { BorrowWithBook } from '../types/BorrowWithBook';

const mockBorrow: BorrowWithBook = {
    _id: "borrow-id-123",
    quantity: 1,
    dueDate: "2025-07-15",
    book: {
        title: "The Theory of Everything",
        author: "Stephen Hawking",
        genre: "Science",
        isbn: "9780553380167",
        description: "An overview of cosmology and black holes.",
        copies: 5,
        available: true,
    },
};

const GetBorrow = () => {
    const { id } = useParams();
    const [borrow, setBorrow] = useState<BorrowWithBook | null>(null);

    useEffect(() => {
        // Simulate fetching from API by ID
        if (id === mockBorrow._id) {
            setBorrow(mockBorrow);
        }
    }, [id]);

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
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Borrow Details</h1>

                <div className="space-y-4">
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
                            <span
                                className={`font-medium ${book.available ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {book.available ? "Yes" : "No"}
                            </span>
                        </p>
                        <p><strong>Borrowed Quantity:</strong> {borrow.quantity}</p>
                        <p><strong>Due Date:</strong> {new Date(borrow.dueDate).toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetBorrow;