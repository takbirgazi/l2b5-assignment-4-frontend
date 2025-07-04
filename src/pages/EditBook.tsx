import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useEditBookMutation, useGetSingleBookQuery } from '../redux/api/baseApi';
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
    copies: 0,
    available: true,
};

const EditBook = () => {
    const [formData, setFormData] = useState<BookFormData>(initialFormData);
    const { id } = useParams();
    const { data, isLoading } = useGetSingleBookQuery(id as string);
    const [editBook, { isLoading: editLoading }] = useEditBookMutation();

    // Populate form data when API data is loaded
    useEffect(() => {
        if (data && data.data) {
            setFormData({
                title: data.data.title || '',
                author: data.data.author || '',
                genre: data.data.genre || '',
                isbn: data.data.isbn || '',
                description: data.data.description || '',
                copies: data.data.copies || 0,
                available: data.data.available ?? true,
            });
        }
    }, [data]);

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

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value, type } = e.target;

        setFormData((prev) => {
            let newValue: string | number | boolean = value;
            if (type === 'number') {
                newValue = parseInt(value);
            }
            const updatedForm = {
                ...prev,
                [name]: newValue,
            };
            if (name === 'copies') {
                updatedForm.available = (typeof newValue === 'number') ? newValue > 0 : prev.available;
            }
            return updatedForm;
        });
    };

    const handleSubmit = async (e: React.FormEvent, id: string | undefined) => {
        e.preventDefault();
        if (!id) {
            toast.error('Book ID is missing!');
            return;
        }
        try {
            await editBook({ _id: id, bookData: formData }).unwrap();
            toast.success('Book updated successfully!');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
                <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">Edit Book</h2>
                <form onSubmit={(e) => handleSubmit(e, id as string)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
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
                            required
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Genre</label>
                        <input
                            type="text"
                            name="genre"
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
                            min={0}
                            className="mt-1 w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={editLoading}
                        className="w-full bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-md transition"
                    >
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditBook;