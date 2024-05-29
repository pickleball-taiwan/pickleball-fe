export default function Header() {
    return (
        <header className="sticky z-50 bg-stone-800 top-0 p-4">
            <div className="flex text-white items-center">
                <h1 className="me-2">test1</h1>
                <div className="grow"></div>
                <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    Login
                </button>
            </div>
        </header>
    );
}
