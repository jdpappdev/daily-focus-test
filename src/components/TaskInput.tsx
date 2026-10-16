import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TaskInput({ onAdd }: { onAdd: (text: string) => void }) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card flex gap-2 p-2">
      <label htmlFor="new-task" className="sr-only">New task</label>
      <input
        id="new-task"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs your focus?"
        className="min-w-0 flex-grow bg-transparent px-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white dark:placeholder:text-slate-500"
      />
      <button type="submit" aria-label="Add task" className="rounded-xl bg-blue-500 p-2.5 text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500">
        <Plus size={20} />
      </button>
    </form>
  );
}
