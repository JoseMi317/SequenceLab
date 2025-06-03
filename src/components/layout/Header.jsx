const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">My News Ticker</h1>
      <div className="space-x-2">
        <button className="bg-indigo-900 px-4 py-1 rounded">Publish</button>
        <button className="bg-blue-500 px-4 py-1 rounded">Save Changes</button>
      </div>
    </header>
  );
};

export default Header;
