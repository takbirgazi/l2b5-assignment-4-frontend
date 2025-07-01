

const HomePage = () => {
    return (
        <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-100 flex flex-col">
            <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-8 py-16 max-w-7xl mx-auto w-full">
                <div className="flex-1 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-indigo-800 leading-tight">
                        Welcome to <span className="text-purple-500">LibraEase</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 max-w-xl">
                        Manage your library with ease. Discover, borrow, and organize books seamlessly with our minimal and modern Library Management System.
                    </p>
                    <div className="flex space-x-4">
                        <button className="px-6 py-3 bg-indigo-700 text-white rounded-lg shadow hover:bg-purple-500 transition font-semibold">
                            Get Started
                        </button>
                        <button className="px-6 py-3 bg-white border border-indigo-200 text-indigo-700 rounded-lg shadow hover:bg-indigo-50 transition font-semibold">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="flex-1 flex justify-center mt-12 md:mt-0">
                    <div className="relative w-80 h-80">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-purple-200 via-indigo-100 to-white shadow-2xl"></div>
                        <img
                            src="https://img.icons8.com/ios-filled/250/4F46E5/books.png"
                            alt="Library Illustration"
                            className="relative z-10 w-60 h-60 mx-auto mt-10"
                        />
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-12 px-8 max-w-6xl mx-auto w-full">
                <h2 className="text-3xl font-bold text-center text-indigo-800 mb-10">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition">
                        <span className="text-4xl mb-4 text-purple-500">
                            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect x="8" y="8" width="24" height="24" rx="4" />
                                <path d="M16 16h8M16 20h8" />
                            </svg>
                        </span>
                        <h3 className="font-semibold text-xl mb-2 text-indigo-700">Easy Catalog</h3>
                        <p className="text-gray-500 text-center">Browse and search books with advanced filters and categories.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition">
                        <span className="text-4xl mb-4 text-purple-500">
                            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="20" cy="20" r="12" />
                                <path d="M20 16v4l2 2" />
                            </svg>
                        </span>
                        <h3 className="font-semibold text-xl mb-2 text-indigo-700">Smart Borrowing</h3>
                        <p className="text-gray-500 text-center">Borrow and return books with a single click and track your history.</p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition">
                        <span className="text-4xl mb-4 text-purple-500">
                            <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 20h16M12 16h16M12 12h16M8 8v24" />
                            </svg>
                        </span>
                        <h3 className="font-semibold text-xl mb-2 text-indigo-700">Minimal Dashboard</h3>
                        <p className="text-gray-500 text-center">Clean and intuitive dashboard for managing your library efficiently.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;