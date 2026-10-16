/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TaskInput from '@/src/components/TaskInput';
import TaskList from '@/src/components/TaskList';
import ProgressRing from '@/src/components/ProgressRing';
import ThemeToggle from '@/src/components/ThemeToggle';

interface Task {
  id: string;
  text: string;
  completed: boolean;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now().toString(), text, completed: false }]);
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0;

  return (
    <main className="min-h-screen px-4 py-8 text-slate-900 md:px-8 md:py-12 dark:text-white">
      <div className="mx-auto max-w-md">
        <header className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.24em] text-blue-500">Your daily ritual</p>
            <h1 className="text-3xl font-bold tracking-tight">Daily Focus</h1>
          </div>
          <ThemeToggle />
        </header>

        <section className="glass-card mb-5 flex flex-col items-center px-6 py-8" aria-label="Daily progress">
          <ProgressRing progress={progress} />
          <p className="mt-4 text-sm font-medium text-slate-500 dark:text-slate-400">
            {tasks.length === 0 ? 'Start with one small win' : `${completedCount} of ${tasks.length} ${tasks.length === 1 ? 'task' : 'tasks'} complete`}
          </p>
        </section>

        <TaskInput onAdd={addTask} />
        <div className="mt-6">
          <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        </div>
      </div>
    </main>
  );
}

