import { NavLink } from "react-router";
import { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const handleMenuToggle = () => setIsMobileMenuOpen((prev) => !prev);

    return (
        <nav className="sticky top-0 z-20 bg-white shadow-md">
            <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between py-4">
                <NavLink to="/" className="text-2xl font-bold text-indigo-700 tracking-tight">
                    Libra<span className="text-purple-500">Ease</span>
                </NavLink>
                <div className="space-x-6 hidden md:flex">
                    <NavLink to="/" className="text-indigo-700 hover:text-purple-500 transition">Home</NavLink>
                    <NavLink to="/books" className="text-indigo-700 hover:text-purple-500 transition">All Books</NavLink>
                    <NavLink to="/create-book" className="text-indigo-700 hover:text-purple-500 transition">Add Book</NavLink>
                    <NavLink to="/borrow-summary" className="text-indigo-700 hover:text-purple-500 transition">Borrow Summary</NavLink>
                </div>
                <button onClick={handleMenuToggle} className={`${isMobileMenuOpen ? "hidden" : "block"} md:hidden text-indigo-700 focus:outline-none`}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 7h20M4 14h20M4 21h20" />
                    </svg>
                </button>
                <>
                    {/* Mobile menu */}
                    <div
                        className={`fixed top-0 right-0 h-72 bg-white rounded-bl-2xl w-64 z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                            } md:hidden`}
                    >
                        <button
                            className="fixed top-5 right-4 text-indigo-700"
                            onClick={handleMenuToggle}
                            aria-label="Close menu"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 6l12 12M6 18L18 6" />
                            </svg>
                        </button>
                        <nav className="flex flex-col mt-16 space-y-2 px-8 py-4 bg-white">
                            <NavLink to="/" className="text-indigo-700 text-xl border-b-2 pb-1.5 hover:text-purple-500 transition" onClick={handleMenuToggle}>Home</NavLink>
                            <NavLink to="/books" className="text-indigo-700 text-xl border-b-2 pb-1.5 hover:text-purple-500 transition" onClick={handleMenuToggle}>All Books</NavLink>
                            <NavLink to="/create-book" className="text-indigo-700 text-xl border-b-2 pb-1.5 hover:text-purple-500 transition" onClick={handleMenuToggle}>Add Book</NavLink>
                            <NavLink to="/borrow-summary" className="text-indigo-700 text-xl border-b-2 pb-1.5 hover:text-purple-500 transition" onClick={handleMenuToggle}>Borrow Summary</NavLink>
                        </nav>
                    </div>
                    {/* Overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="fixed inset-0  z-40 md:hidden"
                            onClick={handleMenuToggle}
                            aria-label="Close menu overlay"
                        />
                    )}
                </>
            </div>
        </nav>
    );
};

export default Navbar;