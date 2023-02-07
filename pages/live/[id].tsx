import type { NextPage } from "next";

const LiveDetail: NextPage = () => {
    return (
        <div className="px-4 py-10 space-y-7">
            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
            <h3 className="text-gray-700 text-2xl font-semibold mt-2">
                Let&apos;s try Eat!
            </h3>
            <div className="h-[50vh] space-y-4 overflow-y-scroll">
                <div className="flex items-start space-x-2">
                    <div className="rounded-full bg-slate-300 w-8 h-8" />
                    <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md">
                        Hi how much are you selling them for?
                    </div>
                </div>
                <div className="flex flex-row-reverse items-start space-x-2 space-x-reverse">
                    <div className="rounded-full bg-slate-300 w-8 h-8" />
                    <div className="w-1/2 text-sm text-gray-700 p-2 border rounded-md">
                        I want ￦20,000
                    </div>
                </div>
            </div>
            <div className="fixed w-full mx-auto max-w-xl bottom-7 inset-x-0">
                <div className="flex items-center">
                    <input
                        type="text"
                        className="shadow-sm rounded-full w-full border-gray-300 focus:ring-purple-500 focus:outline-none focus:border-purple-800 pr-12"
                    />
                    <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
                        <button className="flex items-center bg-purple-700 text-white rounded-full px-3 text-sm hover:bg-purple-900 hover:scale-110 focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                            &rarr;
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveDetail;
