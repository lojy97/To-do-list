import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useTaskStore from '../store/taskStore';
import SearchBar from '../components/SearchBar';
import FilterControls from '../components/FilterControls';
import TaskList from '../components/TaskList';

function Home() {
  const {
    tasks,
    searchQuery,
    statusFilter,
    selectTaskForEdit,
  } = useTaskStore();

  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-between mb-6">
        <Link
          to="/addTask"
          className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 shadow-md transition"
        >
          ➕ Add New Task
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-2xl p-4 border border-pink-200 mb-8">
        <SearchBar />       {/* ✅ No props */}
        <FilterControls />  {/* ✅ No props */}
      </div>

      <TaskList
        tasks={tasks}
        searchQuery={searchQuery}
        statusFilter={statusFilter}
        editTask={(task) => {
          selectTaskForEdit(task.id); // ✅ use correct method
          navigate(`/editTask/${task.id}`);
        }}
        deleteTask={() => {}}
        toggleTaskStatus={() => {}}
      />
    </>
  );
}

export default Home;
