import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTaskStore from '../store/taskStore';
import Task from '../task'; 

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    tasks,
    addTask,
    updateTask,
    selectedTask,
    clearSelectedTask,
  } = useTaskStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
 const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [category, setCategory] = useState('work');

  // Load task if editing
  useEffect(() => {
    if (id !== undefined && selectedTask) {
      setTitle(selectedTask.title || '');
      setDescription(selectedTask.description || '');
      setDueDate(
        selectedTask.dueDate
          ? new Date(selectedTask.dueDate).toISOString().split('T')[0]
          : ''
      );
      setPriority(selectedTask.priority || 'Low');
      setCategory(selectedTask.category || 'work');
    }
  }, [id, selectedTask]);

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = new Task(
      title.trim(),
      description.trim(),
      dueDate ? new Date(dueDate) : null,
      priority,
      category.trim()
    );

    if (id !== undefined) {
      updateTask(Number(id), newTask);
    } else {
      addTask(newTask);
    }

    clearSelectedTask();
    navigate('/');
  };


  return (
    <div className="bg-white shadow-xl rounded-3xl p-6 border border-pink-200 mb-8">
      <h2 className="text-2xl font-semibold text-pink-500 mb-4 text-center">
        {id !== undefined ? 'Edit Task ✏️' : 'Add a New Task 🧁'}
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50 focus:ring-2 focus:ring-pink-300"
            required
          />
        </div>

        {/* Due Date */}
        <div>
          <label className="block mb-1 font-medium">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50 focus:ring-2 focus:ring-pink-300"
          />
        </div>

        {/* Priority */}
        <div>
          <label className="block mb-1 font-medium">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as 'Low' | 'Medium' | 'High')}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
          >
            <option value="Low">🌸 Low</option>
            <option value="Medium">🌷 Medium</option>
            <option value="High">💥 High</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
          >
            <option value="work">🧠 Work</option>
            <option value="personal">💅 Personal</option>
            <option value="other">🎀 Other</option>
          </select>
        </div>

        {/* Description */}
        <div className="sm:col-span-2">
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-pink-200 rounded-xl px-3 py-2 bg-pink-50"
            rows={3}
          />
        </div>

        {/* Buttons */}
        <div className="sm:col-span-2 flex items-center justify-center gap-4">
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 shadow-md transition"
          >
            {id !== undefined ? '💾 Save Task' : '➕ Add Task'}
          </button>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="text-pink-600 hover:underline"
          >
            ❌ Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
