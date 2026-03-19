import { Info } from 'lucide-react';

const kpis = [
  { title: '降本金额', value: '12.4', unit: '亿元', target: '15.0', yoy: '-12%', color: 'from-[#00f0ff] to-blue-600', icon: '💰', glow: 'shadow-[0_0_30px_rgba(0,240,255,0.4)]' },
  { title: '交付及时率', value: '96.8', unit: '%', target: '98.0', yoy: '+2.1%', color: 'from-emerald-400 to-teal-600', icon: '⚡', glow: 'shadow-[0_0_30px_rgba(52,211,153,0.4)]' },
  { title: '物资满意度', value: '94.5', unit: '%', target: '95.0', yoy: '+1.5%', color: 'from-purple-400 to-indigo-600', icon: '🛡️', glow: 'shadow-[0_0_30px_rgba(167,139,250,0.4)]' },
];

export default function CenterKpis() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {kpis.map((kpi, idx) => (
        <div key={idx} className="bg-[#06102b]/90 border border-[#1d3b8e] rounded-sm p-5 relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />

          {/* Highlight top */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-80 z-10" />
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMxZDNiOGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+PC9zdmc+')] opacity-30 pointer-events-none" />

          {/* 3D Icon Placeholder */}
          <div className="flex justify-center mb-6 mt-2 relative z-10">
             <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${kpi.color} p-[1px] ${kpi.glow} transform group-hover:-translate-y-2 transition-all duration-500`}>
                <div className="w-full h-full bg-[#02091c] rounded-2xl flex items-center justify-center text-4xl relative overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                   {kpi.icon}
                </div>
             </div>
          </div>

          <div className="text-center mb-4 flex items-center justify-center gap-2 relative z-10">
            <h3 className="text-[#e2e8f0] font-bold text-lg tracking-widest drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{kpi.title}</h3>
            <Info className="w-4 h-4 text-[#00f0ff]/70 cursor-pointer hover:text-[#00f0ff] transition-colors" />
          </div>

          <div className="bg-[#0a1945]/80 backdrop-blur-sm rounded-sm p-4 flex flex-col gap-3 border border-[#1d3b8e]/50 relative z-10 group-hover:border-[#00f0ff]/50 transition-colors duration-500">
             <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] drop-shadow-[0_0_15px_rgba(0,240,255,0.6)] font-mono tracking-tight">{kpi.value}</span>
                <span className="text-[#00f0ff] text-sm font-bold ml-1">{kpi.unit}</span>
             </div>
             <div className="flex justify-between text-xs text-[#94a3b8] px-2 mt-2 pt-3 border-t border-[#1d3b8e]/30">
                <span className="flex items-center gap-1.5 font-mono">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] shadow-[0_0_5px_#00f0ff] animate-pulse" />
                  年目标 {kpi.target}{kpi.unit}
                </span>
                <span className={`font-mono font-bold ${kpi.yoy.startsWith('+') ? 'text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]' : 'text-rose-400 drop-shadow-[0_0_5px_rgba(251,113,133,0.5)]'}`}>
                  同比 {kpi.yoy}
                </span>
             </div>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      ))}
    </div>
  )
}
