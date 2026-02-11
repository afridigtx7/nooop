import React, { useState } from 'react';
import { Plus, Minus, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col items-center justify-center p-4 selection:bg-indigo-500/30">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
            Counter Pro
          </h1>
          <p className="text-zinc-500 mt-2">Precision counting at your fingertips</p>
        </div>

        {/* Counter Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="relative flex justify-center items-center h-32 mb-8">
            <AnimatePresence mode="wait">
              <motion.span
                key={count}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="text-7xl font-mono font-bold tracking-tighter"
              >
                {count}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={decrement}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
              aria-label="Decrement"
            >
              <Minus className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-[10px] mt-2 uppercase tracking-widest text-zinc-500 font-bold">Decrease</span>
            </button>

            <button
              onClick={reset}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
              aria-label="Reset"
            >
              <RotateCcw className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
              <span className="text-[10px] mt-2 uppercase tracking-widest text-zinc-500 font-bold">Reset</span>
            </button>

            <button
              onClick={increment}
              className="group flex flex-col items-center justify-center p-4 rounded-2xl bg-indigo-500 border border-indigo-400 hover:bg-indigo-400 transition-all active:scale-95"
              aria-label="Increment"
            >
              <Plus className="w-6 h-6 text-white" />
              <span className="text-[10px] mt-2 uppercase tracking-widest text-indigo-100 font-bold">Increase</span>
            </button>
          </div>
        </div>

        {/* Stats footer */}
        <div className="mt-6 flex justify-between px-2">
          <div className="text-xs text-zinc-500 font-medium">
            STATUS: <span className="text-emerald-500">ACTIVE</span>
          </div>
          <div className="text-xs text-zinc-500 font-medium uppercase tracking-tighter">
            V1.0.0 Stable
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;