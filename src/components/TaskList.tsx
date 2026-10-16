import { Trash2, CheckCircle, Circle } from 'lucide-react';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function TaskList({ 
  tasks, 
  onToggle, 
  onDelete 
}: { 
  tasks: Task[]; 
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <li 
          key={task.id} 
          className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <button onClick={() => onToggle(task.id)} className="text-blue-500">
              {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>
            <span className={task.completed ? 'line-through text-gray-500' : 'dark:text-white'}>
              {task.text}
            </span>
          </div>
          <button onClick={() => onDelete(task.id)} className="text-red-500">
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
}
