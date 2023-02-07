import type { NextPage } from "next";

const Prac: NextPage = () => {
    return (
        <div className="dark bg-slate-500 px-20 py-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen xl:place-content-center">
            <div className="bg-slate-100 dark:text-white dark:bg-black sm:bg-red-400 2xl:bg-indigo-400 p-10 rounded-3xl shadow-xl flex flex-col justify-between">
                <span className="font-bold text-2xl">Select Item</span>
                <ul>
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div
                            key={i}
                            className="flex justify-between my-2  first:bg-blue-100 last:bg-blue-100 only:bg-red-200 odd:bg-yellow-100 even:bg-green-200"
                        >
                            <span className="text-gray-600">Grey Chair</span>
                            <span className="font-semibold">$18</span>
                        </div>
                    ))}
                </ul>
                <ul>
                    {["a", "b", "c", ""].map((friend, i) => (
                        <li
                            key={i}
                            className="flex justify-between my-2 empty:hidden bg-purple-200 py-2"
                        >
                            <span className="text-gray-600">{friend}</span>
                            {/* <span className="font-semibold">$20</span> */}
                        </li>
                    ))}
                </ul>
                <div className="flex justify-between mt-2 pt-2 border-t-4 border-dashed">
                    <span>Total</span>
                    <span className="font-semibold">$38</span>
                </div>
                <button className="mt-5 bg-blue-500 text-[#fff] p-2 mx-auto block text-center rounded-lg w-3/4 dark:hover:bg-black hover:bg-teal-500 dark:hover:text-white hover:text-black active:bg-yellow-400 focus:border-4 border-blue-900">
                    Checkout
                </button>
            </div>
            <div className="bg-slate-100 rounded-3xl shadow-xl overflow-hidden group">
                <div className="bg-blue-500 p-6 pb-14 portrait:bg-cyan-500 landscape:bg-teal-400">
                    <span className="text-white text-2xl">Profile</span>
                </div>
                {/* landscape : 모바일가로화면 portrait : 모바일세로화면 */}
                <div className="rounded-3xl p-6 relative -top-5 bg-slate-100">
                    <div className="flex justify-between items-end relative -top-16">
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-600">
                                Orders
                            </span>
                            <span className="font-semibold">340</span>
                        </div>
                        <div className="bg-gray-300 h-24 w-24 rounded-full group-hover:bg-red-500 transition-colors"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-sm text-gray-600">Spent</span>
                            <span className="font-semibold">$2,310</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-center relative -mt-10 -mb-5">
                        <span className="text-lg font-medium">Tony Molloy</span>
                        <span className="text-sm text-gray-600">
                            New York, USA
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-slate-100 p-6 rounded-3xl shadow-xl group lg:col-span-2 xl:col-span-1">
                <div className="flex justify-between items-center mb-5">
                    <span>⬅</span>
                    <div className="space-x-3">
                        {/* space는 margin left, right를 알아서 계산해준다 */}
                        <span>⭐ 4.9</span>
                        <span className="shadow-lg p-2 rounded-md">💗</span>
                    </div>
                </div>
                <div className="bg-red-300 h-56 mb-5 bg-[url('/vercel.svg')]"></div>
                <div className="flex flex-col">
                    <span className="text-lg font-semibold">Swoon Lounge</span>
                    <span className="text-gray-500">Chair</span>
                    <div className="flex justify-between mt-3 mb-5 items-center">
                        <div className="space-x-2">
                            <button className="w-5 h-5 rounded-full bg-red-400 focus:ring-2 ring-offset-2 ring-red-400 ring-opacity-50 transition"></button>
                            <button className="w-5 h-5 rounded-full bg-pink-800 focus:ring-2 ring-offset-2"></button>
                            <button className="w-5 h-5 rounded-full bg-purple-500 focus:ring-2 ring-offset-2"></button>
                        </div>
                        <div className="flex items-center space-x-5">
                            <button className="p-1.5 bg-blue-200 rounded-lg flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-600">
                                -
                            </button>
                            <span>1</span>
                            <button className="p-1.5 bg-blue-200 rounded-lg flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-600">
                                +
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="font-bold text-2xl">$450</span>
                    <button className="bg-blue-500 rounded-lg text-white px-8 py-2">
                        Add to cart
                    </button>
                </div>
            </div>
            {/* lg:col-span-2 = 칸(열) 2개 차지하게 만들기 */}
        </div>
    );
};

export default Prac;
