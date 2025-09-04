import { motion } from "framer-motion";

interface ScoreDialProps {
  score: number | undefined;
  size?: number;
}

const ScoreDial = ({ score, size = 250 }: ScoreDialProps) => {
  if (!score) {
    return (
      <div className="flex flex-1 items-center justify-center min-h-screen p-8">
        <p>No score selected</p>
      </div>
    );
  }

  const radius = size / 2 - 20;
  const circumference = 2 * Math.PI * radius;
  const scorePercentage = Math.max(0, Math.min(100, score));
  const dashOffset = circumference - (scorePercentage / 100) * circumference;

  return (
    <div className="flex flex-1 flex-col items-center gap-6 justify-center min-h-screen p-8">
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-xl font-medium font-poppins text-black"
      >
        SCORE
      </motion.h1>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          className="absolute top-0 left-0 transform -rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
        </svg>

        <svg width={size} height={size} className="absolute top-0 left-0">
          <defs>
            <linearGradient
              id="scoreGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#1BC76D" />
              <stop offset="25%" stopColor="#9ED042" />
              <stop offset="50%" stopColor="#EEC000" />
              <stop offset="75%" stopColor="#ED9A33" />
              <stop offset="100%" stopColor="#E23E44" />
            </linearGradient>
          </defs>
        </svg>

        {/* Animated progress circle */}
        <svg
          width={size}
          height={size}
          className="absolute top-0 left-0 transform -rotate-90"
        >
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#scoreGradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: dashOffset }}
            transition={{
              duration: 2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15))",
            }}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-[32px] font-bold font-grotesk text-[#000000CC] mb-2">
              {score}
              <span className="text-[#00000033] ml-1">/100</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScoreDial;
