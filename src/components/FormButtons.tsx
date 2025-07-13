interface FormButtonsProps {
  isEdit: boolean;
  onCancel: () => void;
}

const FormButtons: React.FC<FormButtonsProps> = ({ isEdit, onCancel }) => (
  <div className="sm:col-span-2 flex items-center justify-center gap-4">
    <button
      type="submit"
      className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 shadow-md transition"
    >
      {isEdit ? '💾 Save Task' : '➕ Add Task'}
    </button>
    <button
      type="button"
      onClick={onCancel}
      className="text-pink-600 hover:underline"
    >
      ❌ Cancel
    </button>
  </div>
);

export default FormButtons;
