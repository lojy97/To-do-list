export default class Task {
  title: string;
  description: string;
  dueDate: Date | null;
  priority: 'Low' | 'Medium' | 'High';
  category: string;
  status: 'Complete' | 'Incomplete';
constructor(
    title: string,
    description: string = '',
    dueDate: Date | null = null,
    priority: 'Low' | 'Medium' | 'High',
    category: string = '',
    status: 'Complete' | 'Incomplete' = 'Incomplete'
  ) {
    if (!title || title.length < 1 || title.length > 100) {
      throw new Error('Title is required and must be between 1 and 100 characters.');
    }
    if (description && description.length > 500) {
      throw new Error('Description must not exceed 500 characters.');
    }
    if (dueDate && new Date(dueDate) < new Date()) {
      throw new Error('Due date cannot be in the past.');
    }
    if (!['Low', 'Medium', 'High'].includes(priority)) {
      throw new Error('Priority must be one of: Low, Medium, High.');
    }
    if (category && category.length > 50) {
      throw new Error('Category must not exceed 50 characters.');
    }

    this.title = title;
    this.description = description;
    this.dueDate = dueDate ? new Date(dueDate) : null;
    this.priority = priority;
    this.category = category;
    this.status = status;
  }
}


