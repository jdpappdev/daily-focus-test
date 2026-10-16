import { motion } from 'motion/react';

export default function ProgressRing({ progress }: { progress: number }) {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative flex items-center justify-center">
      <svg className="h-32 w-32 -rotate-90 drop-shadow-lg" viewBox="0 0 96 96" aria-label={`${Math.round(progress)}% complete`} role="img">
        <circle
          className="text-gray-300 dark:text-gray-700"
          strokeWidth="8"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
        />
        <motion.circle
          className="text-blue-500"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx="48"
          cy="48"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
        />
      </svg>
      <span className="absolute text-xl font-bold text-gray-800 dark:text-gray-200">
        {Math.round(progress)}%
      </span>
    </div>
  );
}
