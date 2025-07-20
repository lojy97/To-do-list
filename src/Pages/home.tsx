import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTaskStore from '../store/taskStore';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import TaskList from '../components/TaskList';
import { useTranslation } from 'react-i18next';
function Home() {
  const {
    tasks,
    searchQuery,
    statusFilter,
    selectTaskForEdit,
  } = useTaskStore();

  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
    

      <div className="flex justify-between mb-6">
        <Link
          to="/addTask"
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 shadow-md transition"
        >
          ➕ {t('add_new_task')}
        </Link>
        <img src="/hk.png" alt="Logo" className="h-12 w-auto" />  
        
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 border border-pink-200 mb-8">
        <SearchBar />     
        <FilterControls /> 
      </div>

      <TaskList
        tasks={tasks}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        editTask={(task) => {
          selectTaskForEdit(task.id);
          navigate(`/editTask/${task.id}`);
        }}
        deleteTask={() => {}}
        toggleTaskStatus={() => {}}
      />
    </>
  );
}

export default Home;
