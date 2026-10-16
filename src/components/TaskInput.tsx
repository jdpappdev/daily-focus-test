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
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new task..."
        className="flex-grow p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
        <Plus size={20} />
      </button>
    </form>
  );
}
