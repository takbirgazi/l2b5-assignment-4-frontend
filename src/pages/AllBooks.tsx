import type { Book } from '../types/Book';
import { NavLink } from 'react-router';
import { useGetBooksQuery } from '../redux/api/baseApi';


const AllBooks = () => {
    const { isLoading, data } = useGetBooksQuery(undefined);

    // for loading
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='font-bold text-center'>Loading...</p>
        </div>
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">All Books</h1>

                {data.length === 0 ? (
                    <div className="flex justify-center items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
                        <p className="text-center text-gray-600 font-bold text-lg">No books available.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {data.data.map((book: Book) => (
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
                                            book.available && <NavLink to={`/borrow/${book._id}`} className="px-4 py-2 cursor-pointer bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition">
                                                Borrow
                                            </NavLink>
                                        }
                                        <NavLink to={`/books/${book._id}`} className="px-4 py-2 cursor-pointer bg-white text-indigo-700 text-sm font-semibold rounded-lg hover:bg-gray-100 transition">
                                            View
                                        </NavLink>
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