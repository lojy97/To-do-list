import useTaskStore from "../store/taskStore";
import { useTranslation } from 'react-i18next';
function SearchBar() {
  const { searchQuery, setSearchQuery } = useTaskStore();
  const { t, i18n } = useTranslation();
  return (
    <input
      type="text"
      placeholder={t('search')}
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="w-full border border-pink-200 rounded-xl px-3 py-2 mb-4 bg-pink-50"
    />
  );
}

export default SearchBar;
