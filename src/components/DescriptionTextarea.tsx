interface DescriptionTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const DescriptionTextarea: React.FC<DescriptionTextareaProps> = ({ value, onChange }) => (
  <div className="sm:col-span-2">
    <label className="block mb-1 font-medium">Description</label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
      rows={3}
    />
  </div>
);

export default DescriptionTextarea;
