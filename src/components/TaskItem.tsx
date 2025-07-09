import { Link } from 'react-router-dom';
import useTaskStore from '../store/taskStore';

function TaskItem({ task, index }) {
  const { toggleTaskStatus, deleteTask, selectTaskForEdit } = useTaskStore();
  return (
    <div className="bg-white shadow rounded-2xl p-4 border border-pink-100">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-bold text-pink-700">{task.title}</h3>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            task.status === 'Complete'
              ? 'bg-green-200 text-green-800'
              : 'bg-yellow-100 text-yellow-700'
          }`}
        >
          {task.status}
        </span>
      </div>
      <p className="text-sm text-gray-600">{task.description}</p>
      <p className="text-xs mt-2 text-gray-500">
        📅 {task.dueDate instanceof Date && !isNaN(task.dueDate)
          ? task.dueDate.toLocaleDateString()
          : 'No due date'} | 🎀 {task.category} | 🔥 {task.priority}
      </p>
      <div className="flex gap-3 mt-3">
        <Link
          to={`/editTask/${index}`}
          onClick={() => selectTaskForEdit(index)}
          className="bg-yellow-400 text-white px-3 py-1 rounded-full hover:bg-yellow-500 shadow-sm"
        >
          ✏️ Edit
         </Link>
        <button onClick={() => deleteTask(index)}
          className="bg-red-400 text-white px-3 py-1 rounded-full hover:bg-red-500 shadow-sm">
          🗑️ Delete
        </button>
        <button onClick={() => toggleTaskStatus(index)}
          className={`px-3 py-1 rounded-full text-white shadow-sm ${
            task.status === 'Complete'
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-400 hover:bg-gray-500'
          }`}>
          {task.status === 'Complete' ? '↩️ Incomplete' : '✅ Complete'}
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
