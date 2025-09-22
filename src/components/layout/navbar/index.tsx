export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-3 shadow-md bg-white">
            {/* Left: Logo + Search */}
            <div className="flex items-center gap-6">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img
                        src="/logo.png"
                        alt="FreshWayz Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Search Bar */}
                <div className="flex items-center border rounded-lg overflow-hidden w-80">
                    <button className="px-3 text-gray-500 hover:text-gray-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <input
                        type="text"
                        placeholder="Search for product..."
                        className="flex-1 px-3 py-2 outline-none text-sm"
                    />
                    <button className="bg-green-600 text-white px-3 hover:bg-green-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex items-center gap-6">
                <a href="#" className="text-gray-800 hover:text-green-600">
                    HOME
                </a>
                <a
                    href="#"
                    className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700"
                >
                    ABOUT US
                </a>
            </div>

            {/* Right: Contact */}
            <div className="text-sm text-gray-600">
                Need help?{" "}
                <a href="mailto:contact@example.com" className="text-green-600 hover:underline">
                    contact@example.com
                </a>
            </div>
        </nav>
    );
}
