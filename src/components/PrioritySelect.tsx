interface PrioritySelectProps {
  value: 'Low' | 'Medium' | 'High';
  onChange: (value: 'Low' | 'Medium' | 'High') => void;
}

const PrioritySelect: React.FC<PrioritySelectProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">Priority</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as 'Low' | 'Medium' | 'High')}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
    >
      <option value="Low">🌸 Low</option>
      <option value="Medium">🌷 Medium</option>
      <option value="High">💥 High</option>
    </select>
  </div>
);

export default PrioritySelect;
 