// src/pages/AllBooks.tsx

import { useEffect, useState } from 'react';
import type { Book } from '../types/Book';


// src/data/mockBooks.ts
const mockBooks: Book[] = [
    {
        _id: "685c2d4bec16ffe4976918c1",
        title: "The Theory of Everything",
        author: "Stephen Hawking",
        genre: "SIXPACK",
        isbn: "192648735",
        description: "An overview of cosmology and black holes.",
        copies: 5,
        available: true,
        createdAt: "2025-06-25T17:09:31.509Z",
        updatedAt: "2025-06-25T17:09:31.509Z",
    },
    {
        _id: "685c2d4bec16ffe4976918c1",
        title: "The Theory of Everything",
        author: "Stephen Hawking",
        genre: "SIXPACK",
        isbn: "192648735",
        description: "An overview of cosmology and black holes.",
        copies: 5,
        available: true,
        createdAt: "2025-06-25T17:09:31.509Z",
        updatedAt: "2025-06-25T17:09:31.509Z",
    },
    {
        _id: "685c2d4bec16ffe4976918c1",
        title: "The Theory of Everything",
        author: "Stephen Hawking",
        genre: "SIXPACK",
        isbn: "192648735",
        description: "An overview of cosmology and black holes.",
        copies: 5,
        available: false,
        createdAt: "2025-06-25T17:09:31.509Z",
        updatedAt: "2025-06-25T17:09:31.509Z",
    },
];


const AllBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        // Replace with actual API call
        setBooks(mockBooks);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">All Books</h1>

                {books.length === 0 ? (
                    <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
                        <p className="text-center text-gray-600 font-bold text-lg">No books available.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {books.map((book) => (
                            <div
                                key={book._id}
                                className="relative bg-white border border-gray-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between hover:shadow-md transition group overflow-hidden"
                            >
                                {/* Book Info */}
                                <div>
                                    <h2 className="text-xl font-semibold text-purple-700 mb-1">{book.title}</h2>
                                    <p className="text-sm text-indigo-600 mb-2">by {book.author}</p>
                                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                                        {book.description.length > 40
                                            ? book.description.slice(0, 40) + '...'
                                            : book.description}
                                    </p>

                                    <div className="text-sm text-gray-500 space-y-1">
                                        <p><strong>Genre:</strong> {book.genre}</p>
                                        <p><strong>ISBN:</strong> {book.isbn}</p>
                                        <p><strong>Copies:</strong> {book.copies}</p>
                                    </div>
                                </div>

                                {/* Availability */}
                                <div className="mt-4">
                                    <span
                                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${book.available
                                            ? 'bg-green-100 text-green-700'
                                            : 'bg-red-100 text-red-700'
                                            }`}
                                    >
                                        {book.available ? 'Available' : 'Unavailable'}
                                    </span>
                                </div>

                                {/* Hover effect and show buttons */}
                                <div className="absolute inset-0 backdrop-blur-xs bg-indigo-600/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                    <div className="flex space-x-4">
                                        {
                                            book.available && <button className="px-4 py-2 cursor-pointer bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition">
                                                Borrow
                                            </button>
                                        }
                                        <button className="px-4 py-2 cursor-pointer bg-white text-indigo-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition">
                                            View
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllBooks;