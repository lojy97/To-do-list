import useTaskStore from "../store/taskStore";
function FilterControls() {
  const { statusFilter, setStatusFilter } = useTaskStore();

  return (
    <div>
      <label className="block mb-1 font-medium">Filter by Status</label>
      <select
        value={statusFilter}
        onChange={(e) =>  setStatusFilter(e.target.value as 'All' | 'Complete' | 'Incomplete')}
        className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
      >
        <option value="All">🌈 All</option>
        <option value="Complete">✅ Complete</option>
        <option value="Incomplete">⏳ Incomplete</option>
      </select>
    </div>
  );
}

export default FilterControls;
