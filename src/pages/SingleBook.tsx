// src/pages/SingleBook.tsx

import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router';
import type { Book } from '../types/Book';

const mockBook: Book = {
    _id: "685c2d4bec16ffe4976918c1",
    title: 'The Theory of Everything',
    author: 'Stephen Hawking',
    genre: 'Science',
    isbn: '9780553380167',
    description: 'An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.An overview of cosmology and black holes.',
    copies: 5,
    available: true,
};

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState<Book | null>(null);
    console.log(id)
    useEffect(() => {
        // Simulate API fetch
        if (id === mockBook._id) {
            setBook(mockBook);
        }
    }, [id]);

    if (!book) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <p className="text-lg text-gray-600">Loading book details...</p>
            </div>
        );
    }

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
                <h1 className="text-2xl font-bold text-indigo-700 mb-4">Book Details</h1>

                <div className="space-y-4">
                    <div>
                        <h2 className="text-xl font-semibold text-purple-700">{book.title}</h2>
                        <p className="text-sm text-indigo-600 mb-1">by {book.author}</p>
                        <p className="text-gray-700 text-sm mt-2">{book.description}</p>
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
                    </div>

                    <div className="pt-4 flex gap-4">
                        {book.available && <NavLink to={`/borrow/${book._id}`}
                            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                        >
                            {book.available ? 'Borrow This Book' : 'Not Available'}
                        </NavLink>}
                        <NavLink
                            to={`/edit-book/${book._id}`}
                            className="px-5 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition cursor-pointer flex items-center gap-2"
                            title="Edit this book"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13l6.586-6.586a2 2 0 112.828 2.828L11.828 15.828a2 2 0 01-1.414.586H7v-3a2 2 0 01.586-1.414z" />
                            </svg>
                            Edit Book
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;