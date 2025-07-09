import useTaskStore from "../store/taskStore";

function SearchBar() {
  const { searchQuery, setSearchQuery } = useTaskStore();
  return (
    <input
      type="text"
      placeholder="🔍 Search by title..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 mb-4 bg-pink-50"
    />
  );
}

export default SearchBar;
