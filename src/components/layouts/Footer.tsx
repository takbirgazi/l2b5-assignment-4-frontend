

const Footer = () => {
    return (
        <footer className="py-6 text-center text-gray-400 border-t border-gray-200 text-sm mt-auto">
            <div className="max-w-[1440px] mx-auto px-4">
                © {new Date().getFullYear()} LibraEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;