// src/store/taskStore.ts
import { create } from 'zustand';


export interface TaskType {
  id?: number;
  title: string;
  description?: string;
  dueDate?: string | null;  
  priority: 'Low' | 'Medium' | 'High';
  category: string;
  status: 'Complete' | 'Incomplete';
}

interface TaskStore {
  tasks: TaskType[];
  selectedTask: TaskType | null;
  searchQuery: string;
  statusFilter: 'All' | 'Complete' | 'Incomplete';

  addTask: (task: TaskType) => void;
  updateTask: (id: number, updatedTask: TaskType) => void;
  deleteTask: (id: number) => void;
  toggleTaskStatus: (id: number) => void;

  selectTaskForEdit: (id: number) => void;
  clearSelectedTask: () => void;

  setSearchQuery: (query: string) => void;
  setStatusFilter: (filter: 'All' | 'Complete' | 'Incomplete') => void;
}


const savedTasks: TaskType[] = JSON.parse(localStorage.getItem('tasks') || '[]');

const useTaskStore = create<TaskStore>((set, get) => {
  const persistTasks = (tasks: TaskType[]) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  return {
    tasks: savedTasks,
    selectedTask: null,
    searchQuery: '',
    statusFilter: 'All',

    addTask: (task) => {
      const updated = [...get().tasks, task];
      persistTasks(updated);
      set({ tasks: updated });
    },

    updateTask: (id, updatedTask) => {
      const updated = get().tasks.map((task, index) =>
        index === id ? updatedTask : task
      );
      persistTasks(updated);
      set({ tasks: updated, selectedTask: null });
    },

    deleteTask: (id) => {
      const updated = get().tasks.filter((_, index) => index !== id);
      persistTasks(updated);
      set({ tasks: updated });
    },

   toggleTaskStatus: (id) =>
  set((state) => {
    const updated = state.tasks.map((task, index) =>
      index === id
        ? {
            ...task,
            status: task.status === 'Complete' ? 'Incomplete' : 'Complete',
          } as TaskType
        : task
    );
    persistTasks(updated);
    return { tasks: updated };
  }),


    selectTaskForEdit: (id) => {
      const task = get().tasks[id];
      set({ selectedTask: { ...task, id } });
    },

    clearSelectedTask: () => set({ selectedTask: null }),

    setSearchQuery: (query) => set({ searchQuery: query }),
    setStatusFilter: (filter) => set({ statusFilter: filter }),
  };
});

export default useTaskStore;
