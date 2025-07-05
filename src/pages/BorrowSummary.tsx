
import type { BorrowSummaryType } from '../types/BorrowSummaryType';
import { useGetBorrowsQuery } from '../redux/api/baseApi';


const BorrowSummary = () => {
    const { data, isLoading } = useGetBorrowsQuery(undefined)

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
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Borrow Summary</h1>

                {data?.data.length === 0 ? (
                    <p className="text-center text-gray-600">No borrowed books found.</p>
                ) : (
                    <div className="space-y-4">
                        {data?.data.map((item: BorrowSummaryType, index: number) => (
                            <div
                                key={index}
                                className="bg-white shadow-sm rounded-xl border border-gray-200 p-6 hover:shadow-md transition"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div>
                                        <h2 className="text-lg font-semibold text-purple-700">
                                            {item.book.title}
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            ISBN: <span className="font-medium">{item.book.isbn}</span>
                                        </p>
                                    </div>
                                    <div className="mt-3 md:mt-0">
                                        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-semibold">
                                            Borrowed: {item.totalQuantity} {item.totalQuantity === 1 ? 'copy' : 'copies'}
                                        </span>
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

export default BorrowSummary;