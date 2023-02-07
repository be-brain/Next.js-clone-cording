import type { NextPage } from "next";
import Layout from "../components/layout";

const Live: NextPage = () => {
    return (
        <Layout title="Chats" hasTabBar>
            <div className="py-10 space-y-7 divide-y-2">
                {[1, 1, 1, 1, 1].map((_, i) => {
                    return (
                        <div key={i} className="pt-4 px-4">
                            <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
                            <h3 className="text-gray-700 text-lg mt-2">
                                Let&apos;s try Eat!
                            </h3>
                        </div>
                    );
                })}
                <button className="fixed bottom-24 right-5 hover:bg-purple-500 cursor-pointer transition-colors bg-purple-400 rounded-full shadow-lg p-3 text-white border-transparent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            stroke-linecap="round"
                            d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                        />
                    </svg>
                </button>
            </div>
        </Layout>
    );
};

export default Live;
