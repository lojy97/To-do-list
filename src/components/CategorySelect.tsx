interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const CategorySelect: React.FC<CategorySelectProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">Category</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
    >
      <option value="work">🧠 Work</option>
      <option value="personal">💅 Personal</option>
      <option value="other">🎀 Other</option>
    </select>
  </div>
);

export default CategorySelect;
