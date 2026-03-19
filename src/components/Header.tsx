import { useEffect, useState } from 'react';

export default function Header() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const dateStr = time.toLocaleDateString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '-');
  const timeStr = time.toLocaleTimeString('zh-CN', { hour12: false });

  return (
    <header className="relative h-20 flex items-center justify-between px-6 bg-[#02091c] border-b border-[#1d3b8e] z-20 shadow-[0_4px_20px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Top glowing line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-80" />

      {/* Left */}
      <div className="w-1/3 flex items-center gap-4 z-10">
        <div className="text-[#00f0ff] font-bold text-xl tracking-widest flex items-center gap-3">
          <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 border-2 border-[#00f0ff] rounded-full animate-[spin_4s_linear_infinite] border-t-transparent" />
            <div className="absolute inset-1 border-2 border-[#3b82f6] rounded-full animate-[spin_3s_linear_infinite_reverse] border-b-transparent" />
            <div className="w-2 h-2 bg-[#00f0ff] rounded-full shadow-[0_0_10px_#00f0ff]" />
          </div>
          <span className="drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">LOGISTICS PRO</span>
        </div>
      </div>

      {/* Center Title */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full flex items-center justify-center px-24">
        {/* Decorative background shape */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d2361] to-transparent opacity-80" style={{ clipPath: 'polygon(10% 0, 90% 0, 100% 100%, 0% 100%)' }} />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent" />
        
        {/* Side decorative lines */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#00f0ff]/50 -translate-x-full" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-[2px] bg-[#00f0ff]/50 translate-x-full" />
        
        <h1 className="text-3xl font-black tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] z-10">
          采购中心全景概览
        </h1>
      </div>

      {/* Right */}
      <div className="w-1/3 flex justify-end items-center gap-6 z-10">
         <div className="flex flex-col items-end">
           <div className="text-[#00f0ff] font-black italic text-2xl tracking-wider font-mono drop-shadow-[0_0_8px_rgba(0,240,255,0.6)] leading-none">
             {timeStr}
           </div>
           <div className="text-[#94a3b8] text-sm font-mono mt-1">
             {dateStr}
           </div>
         </div>
      </div>
    </header>
  );
}
