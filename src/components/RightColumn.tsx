import TechCard from './TechCard';
import { Users, UserX, UserCheck, Percent } from 'lucide-react';

export default function RightColumn() {
  return (
    <>
      <TechCard title="供应商数据" hasLink>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-3 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-2.5 bg-blue-500/10 rounded-lg border border-blue-500/30 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all relative z-10">
              <Users className="w-6 h-6 text-blue-400 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" />
            </div>
            <div className="relative z-10">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">在库供应商数量</div>
              <div className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400 font-mono leading-none drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]">11400 <span className="text-[10px] text-blue-400 not-italic font-sans">个</span></div>
            </div>
          </div>
          <div className="bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-3 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-2.5 bg-emerald-500/10 rounded-lg border border-emerald-500/30 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all relative z-10">
              <UserCheck className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_5px_rgba(52,211,153,0.5)]" />
            </div>
            <div className="relative z-10">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">有支出供应商</div>
              <div className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400 font-mono leading-none drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">2106 <span className="text-[10px] text-emerald-400 not-italic font-sans">个</span></div>
            </div>
          </div>
          <div className="bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-3 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-2.5 bg-rose-500/10 rounded-lg border border-rose-500/30 group-hover:border-rose-500/50 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all relative z-10">
              <UserX className="w-6 h-6 text-rose-400 drop-shadow-[0_0_5px_rgba(244,63,94,0.5)]" />
            </div>
            <div className="relative z-10">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">黑名单供应商</div>
              <div className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-rose-400 font-mono leading-none drop-shadow-[0_0_5px_rgba(244,63,94,0.3)]">441 <span className="text-[10px] text-rose-400 not-italic font-sans">个</span></div>
            </div>
          </div>
          <div className="bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-3 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-2.5 bg-[#00f0ff]/10 rounded-lg border border-[#00f0ff]/30 group-hover:border-[#00f0ff]/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all relative z-10">
              <Percent className="w-6 h-6 text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
            </div>
            <div className="relative z-10">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">供应商使用率</div>
              <div className="text-2xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] font-mono leading-none drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]">82.97 <span className="text-[10px] text-[#00f0ff] not-italic font-sans">%</span></div>
            </div>
          </div>
        </div>
      </TechCard>

      <TechCard title="基础数据">
        <div className="grid grid-cols-3 gap-2 mb-4 relative z-10">
           <div className="text-center bg-[#0a1945]/50 py-3 rounded-sm border border-[#1d3b8e]/30 hover:border-[#00f0ff]/50 transition-colors group">
             <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">大品类数据</div>
             <div className="text-2xl font-bold text-[#00f0ff] font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] group-hover:scale-110 transition-transform">12 <span className="text-xs text-[#94a3b8] font-sans">个</span></div>
           </div>
           <div className="text-center bg-[#0a1945]/50 py-3 rounded-sm border border-[#1d3b8e]/30 hover:border-[#00f0ff]/50 transition-colors group">
             <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">中品类数据</div>
             <div className="text-2xl font-bold text-[#00f0ff] font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] group-hover:scale-110 transition-transform">45 <span className="text-xs text-[#94a3b8] font-sans">个</span></div>
           </div>
           <div className="text-center bg-[#0a1945]/50 py-3 rounded-sm border border-[#1d3b8e]/30 hover:border-[#00f0ff]/50 transition-colors group">
             <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">小品类数据</div>
             <div className="text-2xl font-bold text-[#00f0ff] font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.5)] group-hover:scale-110 transition-transform">128 <span className="text-xs text-[#94a3b8] font-sans">个</span></div>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-3 relative z-10">
           <div className="bg-[#0a1945]/80 p-4 rounded-sm text-center border border-[#1d3b8e]/50 hover:border-[#00f0ff]/50 transition-all duration-300 group overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-xs text-[#94a3b8] mb-2 tracking-wider relative z-10">SKU数量</div>
             <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] relative z-10">12610 <span className="text-xs text-[#00f0ff] not-italic font-sans">个</span></div>
           </div>
           <div className="bg-[#0a1945]/80 p-4 rounded-sm text-center border border-[#1d3b8e]/50 hover:border-[#00f0ff]/50 transition-all duration-300 group overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="text-xs text-[#94a3b8] mb-2 tracking-wider relative z-10">有效合同数量</div>
             <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.3)] relative z-10">2139 <span className="text-xs text-[#00f0ff] not-italic font-sans">个</span></div>
           </div>
        </div>
      </TechCard>
    </>
  )
}
