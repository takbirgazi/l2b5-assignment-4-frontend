
import { useEffect, useState } from 'react';
import type { BorrowSummaryType } from '../types/BorrowSummaryType';


const mockSummary: BorrowSummaryType[] = [
    {
        totalQuantity: 2,
        book: {
            title: 'The Theory of Everything',
            isbn: '9780553380167',
        },
    },
    {
        totalQuantity: 5,
        book: {
            title: 'A Brief History of Time',
            isbn: '9780553380168',
        },
    },
];

const BorrowSummary = () => {
    const [summaryList, setSummaryList] = useState<BorrowSummaryType[]>([]);

    useEffect(() => {
        // Simulate fetching from API
        setSummaryList(mockSummary);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">Borrow Summary</h1>

                {summaryList.length === 0 ? (
                    <p className="text-center text-gray-600">No borrowed books found.</p>
                ) : (
                    <div className="space-y-4">
                        {summaryList.map((item, index) => (
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