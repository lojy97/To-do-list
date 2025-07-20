import useTaskStore from "../store/taskStore";
import { useTranslation } from 'react-i18next';
function FilterControls() {
  const { statusFilter, setStatusFilter } = useTaskStore();
const { t, i18n } = useTranslation();
  return (
    <div>
      <label className="block mb-1 font-medium">Filter by Status</label>
      <select
        value={statusFilter}
        onChange={(e) =>  setStatusFilter(e.target.value as 'All' | 'Complete' | 'Incomplete')}
        className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
      >
        <option value="All">🌈 {t('all')}</option>
        <option value="Complete">✅ {t('complete')}</option>
        <option value="Incomplete">⏳ {t('incomplete')}</option>
      </select>
    </div>
  );
}

export default FilterControls;
