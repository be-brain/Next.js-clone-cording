const list = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <input
        type="file"
        className="file:cursor-pointer file:transition-colors file:border-0 file:rounded-xl file:px-5 file:py-3 file:bg-purple-500 file:text-white file:hover:text-purple-500 file:hover:bg-white file:hover:border-2 file:hover:border-purple-500"
      ></input>
      <ul className="list-decimal marker:text-teal-500">
        <li>hi</li>
        <li>hi</li>
        <li>hi</li>
      </ul>
      <p className="first-letter:text-7xl">Love ya!</p>
    </div>
  );
};

export default list;
