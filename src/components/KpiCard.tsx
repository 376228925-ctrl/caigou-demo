import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, AlertTriangle } from 'lucide-react';

export default function KpiCard({ data, index }: { data: any, index: number }) {
  const isAlert = data.isAlert;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative overflow-hidden rounded-xl border p-5 flex flex-col justify-between group ${
        isAlert 
          ? 'bg-red-950/20 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]' 
          : 'bg-slate-900/40 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
      }`}
    >
      {/* Animated border for alert */}
      {isAlert && (
        <div className="absolute inset-0 border-2 border-red-500/40 rounded-xl animate-[pulse_2s_ease-in-out_infinite]" />
      )}

      <div className="flex justify-between items-start mb-2 relative z-10">
        <h3 className="text-sm font-medium text-slate-400">{data.title}</h3>
        {isAlert && (
          <div className="relative">
            <div className="absolute inset-0 bg-red-500 blur-md opacity-60 animate-pulse" />
            <AlertTriangle className="w-5 h-5 text-red-500 relative z-10 animate-bounce" style={{ animationDuration: '2s' }} />
          </div>
        )}
      </div>
      <div className="flex items-end gap-3 relative z-10">
        <span className={`text-3xl font-bold font-mono ${isAlert ? 'text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'text-cyan-50'}`}>
          {data.value}
        </span>
        <div className={`flex items-center text-sm font-medium mb-1 ${
          data.isPositive ? 'text-emerald-400' : 'text-rose-400'
        }`}>
          {data.isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          <span>{data.trend}</span>
        </div>
      </div>
      
      {/* Decorative background glow */}
      <div className={`absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 transition-opacity duration-500 ${
        isAlert ? 'bg-red-500 group-hover:opacity-40' : 'bg-cyan-500 group-hover:opacity-30'
      }`} />
    </motion.div>
  );
}
