import type { NextPage } from "next";

const Upload: NextPage = () => {
    return (
        <div className="px-4 py-16">
            <div>
                <label className="w-full h-48 rounded-md text-gray-400 hover:text-purple-800 hover:border-purple-800 flex items-center justify-center border-2 border-dashed border-gray-300 cursor-pointer">
                    <svg
                        className="h-12 w-12 "
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                    >
                        <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <input className="hidden" type="file" />
                </label>
            </div>
            <div className="my-5">
                <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                >
                    Name
                </label>
                <div className="rounded-md shadow-sm relative flex items-center">
                    <input
                        id="name"
                        type="text"
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-800"
                    />
                </div>
            </div>
            <div className="my-5">
                <label
                    htmlFor="price"
                    className="text-sm font-medium text-gray-700 mb-2 block"
                >
                    Price
                </label>
                {/* $를 input안에 넣기위해 부모div에 relative적용 */}
                <div className="rounded-md shadow-sm relative flex items-center">
                    {/* pointer-events-none : 커서로 못긁게 하기 */}
                    <div className="absolute items-center justify-center pl-3 left-0 pointer-events-none">
                        <span className="text-sm text-gray-400">$</span>
                    </div>
                    <input
                        id="price"
                        type="text"
                        placeholder="0.00"
                        className="appearance-none w-full px-3 py-2 pl-7 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-600 focus:border-purple-800"
                    />
                    <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-400">USD</span>
                    </div>
                </div>
            </div>
            <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Description
                </label>
                <textarea
                    rows={4}
                    className="appearance-none w-full shadow-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-600 focus:border-purple-800"
                />
            </div>
            <button className="w-full mt-5 bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
                Upload product
            </button>
        </div>
    );
};

export default Upload;
