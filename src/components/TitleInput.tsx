import React from 'react';

interface TitleInputProps {
  value: string;
  onChange: (value: string) => void;
}

const TitleInput: React.FC<TitleInputProps> = ({ value, onChange }) => (
  <div>
    <label className="block mb-1 font-medium">Title</label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50 focus:ring-2 focus:ring-pink-300"
      required
    />
  </div>
);

export default TitleInput;
