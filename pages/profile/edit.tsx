import type { NextPage } from "next";
import Profile from "./index";

const App: NextPage = () => {
    return (
        <div className="px-4 py-10 space-y-3">
            <div className="flex items-center space-x-3">
                <div className="w-14 h-14 bg-slate-300 rounded-full" />
                <label
                    htmlFor="picture"
                    className="cursor-pointer px-3 py-2 border border-gray-300 rounded-md text-xs text-gray-600 shadow-sm font-medium hover:ring-2 hover:ring-offset-2 hover:ring-purple-400"
                >
                    Change
                    <input
                        id="picture"
                        type="file"
                        accept="image/*"
                        // 사진파일만 넣을수있다
                        className="hidden"
                    />
                </label>
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="input"
                    className="text-sm font-medium text-gray-700"
                >
                    email address
                </label>
                <input
                    id="input"
                    type="email"
                    className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    required
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="input"
                    className="text-sm font-medium text-gray-700"
                >
                    Phone number
                </label>
                <div className="flex rounded-md shadow-sm">
                    {/* rounded-l(left)-md : 왼쪽모서리만 둥글게 처리 */}
                    <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
                        +82
                    </span>
                    <input
                        id="input"
                        type="number"
                        required
                        className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                    />
                </div>
            </div>
            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
                Update Profile
            </button>
        </div>
    );
};

export default App;
