import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white text-gray-800 p-6">
            <div className="text-center max-w-lg">
                <h1 className="text-8xl font-extrabold text-indigo-600 drop-shadow-sm">404</h1>
                <p className="text-2xl font-bold mt-4">Page Not Found</p>
                <p className="mt-2 text-gray-600">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="mt-6 inline-flex items-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;