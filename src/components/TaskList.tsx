import { motion, AnimatePresence } from 'motion/react';
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
      <AnimatePresence initial={false}>
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, height: 0, marginBottom: 0, scale: 0.96 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            className="glass-card flex items-center justify-between p-3.5"
          >
          <div className="flex items-center gap-3">
            <button onClick={() => onToggle(task.id)} className="text-blue-500">
              {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>
              <span className={task.completed ? 'line-through text-slate-400' : 'text-slate-700 dark:text-slate-200'}>
                {task.text}
              </span>
            </div>
            <button onClick={() => onDelete(task.id)} aria-label={`Delete ${task.text}`} className="rounded-lg p-2 text-slate-400 transition hover:bg-red-500/10 hover:text-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500">
              <Trash2 size={18} />
            </button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
}
