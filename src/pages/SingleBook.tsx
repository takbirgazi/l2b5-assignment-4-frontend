import { NavLink, useParams } from 'react-router';
import { useGetSingleBookQuery } from '../redux/api/baseApi';


const SingleBook = () => {
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id as string);

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
                        <h2 className="text-xl font-semibold text-purple-700">{data?.data?.title}</h2>
                        <p className="text-sm text-indigo-600 mb-1">by {data.data?.author}</p>
                        <p className="text-gray-700 text-sm mt-2">{data.data?.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                        <p><strong>Genre:</strong> {data.data?.genre}</p>
                        <p><strong>ISBN:</strong> {data.data?.isbn}</p>
                        <p><strong>Copies:</strong> {data.data?.copies}</p>
                        <p>
                            <strong>Available:</strong>{" "}
                            <span
                                className={`font-medium ${data.data?.available ? "text-green-600" : "text-red-600"
                                    }`}
                            >
                                {data.data?.available ? "Yes" : "No"}
                            </span>
                        </p>
                    </div>

                    <div className="pt-4 flex gap-4">
                        {data.data?.available && <NavLink to={`/borrow/${data.data?._id}`}
                            className="px-5 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                        >
                            {data.data?.available ? 'Borrow This Book' : 'Not Available'}
                        </NavLink>}
                        <NavLink
                            to={`/edit-book/${data.data?._id}`}
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