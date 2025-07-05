import type { Book } from '../types/Book';
import { NavLink } from 'react-router';
import { useDeleteBookMutation, useGetBooksQuery } from '../redux/api/baseApi';
import toast from 'react-hot-toast';
import { useState } from 'react';

const AllBooks = () => {
    const { isLoading, data } = useGetBooksQuery(undefined, {
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
        refetchOnReconnect: true
    });
    const [deleteBook, { isLoading: deleteLoading }] = useDeleteBookMutation();
    const [showConfirm, setShowConfirm] = useState(false);
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const handleDeleteBook = (id: string) => {
        setSelectedId(id);
        setShowConfirm(true);
    };

    // Confirm Modal Start
    const confirmDelete = async () => {
        if (selectedId) {
            await toast.promise(
                deleteBook(selectedId),
                {
                    loading: 'Deleting...',
                    success: <b>Deleted Successfully!</b>,
                    error: <b>Could not Delete.</b>,
                }
            );
            setShowConfirm(false);
            setSelectedId(null);
        }
    };
    const cancelDelete = () => {
        setShowConfirm(false);
        setSelectedId(null);
    };
    const ConfirmModal = () => (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-xs">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4 text-gray-800">Confirm Deletion</h2>
                <p className="mb-6 text-gray-600">Are you sure you want to delete this book? This action cannot be undone.</p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={cancelDelete}
                        className="px-4 py-2 rounded-lg cursor-pointer bg-gray-100 text-gray-700 font-semibold hover:bg-gray-200 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmDelete}
                        disabled={deleteLoading}
                        className="px-4 py-2 rounded-lg cursor-pointer bg-red-600 text-white font-semibold hover:bg-red-700 transition disabled:opacity-60"
                    >
                        {deleteLoading ? 'Deleting...' : 'Delete'}
                    </button>
                </div>
            </div>
        </div>
    );
    // Confirm Modal End
    
   // Loading State
    if (isLoading) {
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='font-bold text-center'>Loading...</p>
        </div>
    }
    if (!data || !data.data) {
        return <div className='min-h-screen flex justify-center items-center'>
            <p className='font-bold text-center'>No Data Found.</p>
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
                                        <NavLink to={`/edit-book/${book._id}`} className="px-4 py-2 cursor-pointer bg-white text-blue-500 text-sm font-semibold rounded-lg hover:bg-gray-100 transition">
                                            Edit
                                        </NavLink>
                                        <button disabled={deleteLoading} onClick={() => handleDeleteBook(book._id)} className="px-4 py-2 cursor-pointer bg-white text-red-500 text-sm font-semibold rounded-lg hover:bg-gray-100 transition">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {showConfirm && <ConfirmModal />}
        </div>
    );
};

export default AllBooks;
