import TaskItem from './TaskItem';
import useTaskStore from '../store/taskStore';

function TaskList({ tasks, searchQuery, statusFilter, editTask, deleteTask, toggleTaskStatus }) {
  const filteredTasks = tasks.filter((task) => {
    if (!task) return false;
    const matchTitle = task.title?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === 'All' || task.status === statusFilter;
    return matchTitle && matchStatus;
  });

  return (
    <div className="space-y-4">
      {filteredTasks.map((task, index) => (
         <TaskItem key={index} task={task} index={index} />
      ))}
    </div>
  );
}

export default TaskList;
