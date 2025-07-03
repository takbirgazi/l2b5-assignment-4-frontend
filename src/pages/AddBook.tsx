import { useState } from 'react';
import { useCreateBookMutation } from '../redux/api/baseApi';
import toast from 'react-hot-toast';

interface BookFormData {
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available: boolean;
}

const initialFormData: BookFormData = {
    title: '',
    author: '',
    genre: '',
    isbn: '',
    description: '',
    copies: 1,
    available: true,
};

const AddBook = () => {
    const [formData, setFormData] = useState<BookFormData>(initialFormData);
    const [createBook, { isLoading }] = useCreateBookMutation();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'number' ? parseInt(value) : value,
        }));
    };

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setFormData((prev) => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        createBook(formData);
        toast.success('Book added successfully!');
        setFormData(initialFormData);
    };
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-2xl mx-auto bg-white shadow-md rounded-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Add a New Book</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            placeholder='e.g The Theory of Everything'
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Author</label>
                        <input
                            type="text"
                            name="author"
                            value={formData.author}
                            onChange={handleChange}
                            placeholder='e.g Stephen Hawking'
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            placeholder='e.g Science'
                            value={formData.genre}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">ISBN</label>
                        <input
                            type="text"
                            name="isbn"
                            placeholder='e.g 9780553380167'
                            value={formData.isbn}
                            onChange={handleChange}
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            placeholder='text...'
                            value={formData.description}
                            onChange={handleChange}
                            rows={3}
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Copies</label>
                        <input
                            type="number"
                            name="copies"
                            value={formData.copies}
                            onChange={handleChange}
                            required
                            min={1}
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            name="available"
                            checked={formData.available}
                            onChange={handleCheckbox}
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="ml-2 text-sm text-gray-700">Available</label>
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBook;