import { Clock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-cyan-500/30 bg-slate-900/50 backdrop-blur-md relative z-10">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-cyan-400/20 animate-pulse" />
          <div className="w-4 h-4 bg-cyan-400 rounded-sm shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </div>
        <h1 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          物流企业采购全生命周期数字化看板
        </h1>
      </div>
      <div className="flex items-center gap-6 text-cyan-100/70 text-sm font-mono">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-cyan-400" />
          <span>{time.toLocaleDateString()} {time.toLocaleTimeString()}</span>
        </div>
        <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.2)]">
          XO / 处室负责人 视图
        </div>
      </div>
    </header>
  );
}
