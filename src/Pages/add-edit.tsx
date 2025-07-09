import React from 'react';
import TaskForm from '../components/TaskForm';

function AddEditTask() {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 border border-pink-200 mb-8">
      <TaskForm />
    </div>
  );
}

export default AddEditTask;
