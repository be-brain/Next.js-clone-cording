import { NextPage } from "next";

const CommunityPostDetail: NextPage = () => {
    return (
        <div>
            {/* 그냥 flex로 하면 block처리되어 가로길이가 화면전체가 되어버리므로 inline-flex로 */}
            <span className="my-3 ml-4 inline-flex items-center px-4 py-1 rounded-full bg-gray-100 text-gray-900 text-xs">
                동네질문
            </span>
            <div className="px-4 flex mb-3 py-3 border-b items-center space-x-3 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-slate-300" />
                <div>
                    <p className="text-gray-700 text-sm font-semibold">
                        Steve Jebs
                    </p>
                    <p className="text-gray-500 text-xs font-medium">
                        View profile &rarr;
                    </p>
                </div>
            </div>
            <div>
                <span className="ml-4 my-3 flex items-center  text-gray-800">
                    <span className="text-purple-800 text-lg font-bold mr-2">
                        Q.
                    </span>{" "}
                    What is the best mandu restaurant?
                </span>
            </div>
            <div className="flex space-x-5 text-gray-800 border-t w-full border-b-2 py-2">
                <span className="flex space-x-2 items-center text-sm">
                    <svg
                        className="w-4 h-4 ml-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                    </svg>
                    <span>궁금해요 1</span>
                </span>
                <span className="flex space-x-2 items-center text-sm">
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                    </svg>
                    <span>답변 1</span>
                </span>
            </div>
            <div className="mx-4 py-3">
                <div className="flex items-start space-x-3 my-4">
                    <div className="w-8 h-8 bg-slate-200 rounded-full" />
                    <div>
                        <span className="text-sm block font-medium text-gray-700 mb-1">
                            Bella Harward
                        </span>
                        <span className="text-sm block font-medium text-gray-700 mb-3">
                            2시간전
                        </span>
                        <p>
                            The best mandu restaurant is the one next to my
                            house.
                        </p>
                    </div>
                </div>
                <textarea
                    rows={4}
                    placeholder="Answer this question!"
                    className="appearance-none w-full shadow-sm border border-gray-300 rounded-md focus:outline-none focus:ring-purple-600 focus:border-purple-800 mt-3"
                ></textarea>
                <button className="w-full mt-5 bg-purple-800 hover:bg-purple-900 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 focus:outline-none">
                    Reply
                </button>
            </div>
        </div>
    );
};

export default CommunityPostDetail;
