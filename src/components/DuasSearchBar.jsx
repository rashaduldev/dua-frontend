// components/DuasSearchBar.js
export default function DuasSearchBar() {
    return (
      <div className="flex items-center w-full justify-between bg-gray-100 p-4 rounded-md shadow-md">
        <h1 className="text-lg font-medium text-gray-700">Duas Page</h1>
        <div className="relative w-64 sm:w-80">
          <input
            type="text"
            placeholder="Search by Dua Name"
            className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:ring focus:ring-blue-300 focus:outline-none"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012.5 15m4.15 1.65L21 21z"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
  