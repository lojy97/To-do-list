interface DueDateInputProps {
  value: string;
  onChange: (value: string) => void;
}

const DueDateInput: React.FC<DueDateInputProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">Due Date</label>
    <input
      type="date"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50 focus:ring-2 focus:ring-pink-300"
    />
  </div>
);

export default DueDateInput;
