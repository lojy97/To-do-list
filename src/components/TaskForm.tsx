import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useTaskStore from '../store/taskStore';
import Task from '../task';
import TitleInput from './TitleInput';
import DueDateInput from './DueDateInput';
import PrioritySelect from './PrioritySelect';
import CategorySelect from './CategorySelect';
import DescriptionTextarea from './DescriptionTextarea';
import FormButtons from './FormButtons';

function TaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    addTask,
    updateTask,
    selectedTask,
    selectTaskForEdit,
    clearSelectedTask,
  } = useTaskStore();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [category, setCategory] = useState('work');

  useEffect(() => {
    if (id !== undefined) {
      selectTaskForEdit(Number(id));
    } else {
      clearSelectedTask();
    }
  }, [id, selectTaskForEdit, clearSelectedTask]);

  useEffect(() => {
    if (selectedTask) {
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
  }, [selectedTask]);

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
      updateTask(Number(id), {
        ...newTask,
        dueDate: newTask.dueDate ? newTask.dueDate.toISOString() : null,
      });
    } else {
      addTask({
        ...newTask,
        dueDate: newTask.dueDate ? newTask.dueDate.toISOString() : null,
      });
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
        <TitleInput value={title} onChange={setTitle} />
        <DueDateInput value={dueDate} onChange={setDueDate} />
        <PrioritySelect value={priority} onChange={setPriority} />
        <CategorySelect value={category} onChange={setCategory} />
        <DescriptionTextarea value={description} onChange={setDescription} />
        <FormButtons isEdit={id !== undefined} onCancel={() => navigate('/')} />
      </form>
    </div>
  );
}

export default TaskForm;
