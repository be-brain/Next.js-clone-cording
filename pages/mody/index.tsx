const App = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-400 p-5 focus-within:bg-blue-300">
      <input
        type="text"
        placeholder="User"
        className="required:border-2 border-yellow-400 invalid:bg-red-300 placeholder:text-blue-800 peer"
        required
      ></input>
      <span className="hidden peer-invalid:block text-red-500">
        This is invalid
      </span>
      {/* peer는 peer selector보다 앞에 있어야한다 */}
      <input type="text" placeholder="password"></input>
      <input type="submit" value="Login"></input>
    </form>
  );
};

export default App;
