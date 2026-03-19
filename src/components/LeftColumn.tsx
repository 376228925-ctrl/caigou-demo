import TechCard from './TechCard';

export default function LeftColumn() {
  return (
    <>
      <TechCard title="采委会" hasLink>
        <div className="flex gap-3 h-full items-center">
          <div className="flex-1 bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-4 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/30 shrink-0 group-hover:border-[#00f0ff]/50 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-all relative z-10">
              <span className="text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">🏛️</span>
            </div>
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">采委会数量</div>
              <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-[#00f0ff] font-mono leading-none drop-shadow-[0_0_5px_rgba(0,240,255,0.3)]">12 <span className="text-xs text-[#00f0ff] not-italic font-sans">个</span></div>
              <div className="text-[10px] text-rose-400 mt-2 font-mono bg-rose-500/10 inline-block px-1.5 py-0.5 rounded border border-rose-500/20">同比 -10%</div>
            </div>
          </div>
          <div className="flex-1 bg-[#0a1945]/80 p-4 rounded-sm border border-[#1d3b8e]/50 flex items-center gap-4 hover:bg-[#0d2361] hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/30 shrink-0 group-hover:border-emerald-500/50 group-hover:shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-all relative z-10">
              <span className="text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">💰</span>
            </div>
            <div className="relative z-10 flex flex-col items-start">
              <div className="text-xs text-[#94a3b8] mb-1 tracking-wider">采委会金额</div>
              <div className="text-3xl font-black italic text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-400 font-mono leading-none drop-shadow-[0_0_5px_rgba(52,211,153,0.3)]">45 <span className="text-xs text-emerald-400 not-italic font-sans">亿元</span></div>
              <div className="text-[10px] text-emerald-400 mt-2 font-mono bg-emerald-500/10 inline-block px-1.5 py-0.5 rounded border border-emerald-500/20">同比 +8%</div>
            </div>
          </div>
        </div>
      </TechCard>

      <TechCard title="寻源概览" hasLink className="flex-1">
        <div className="flex flex-col gap-4 h-full justify-center">
           {/* Item 1 */}
           <div className="flex items-center gap-5 bg-[#0a1945]/50 p-5 rounded-sm border border-[#1d3b8e]/30 hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="w-24 h-24 rounded-full border-4 border-[#1d3b8e] flex items-center justify-center relative shrink-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_15px_rgba(0,240,255,0.2)] transition-shadow">
                <div className="text-xs text-center text-[#94a3b8] z-10">寻源金额<br/>分布</div>
                <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">
                  <circle cx="44" cy="44" r="42" fill="none" stroke="#00f0ff" strokeWidth="4" strokeDasharray="180 264" className="transition-all duration-1000 ease-out" />
                </svg>
             </div>
             <div className="flex-1 relative z-10">
                <div className="flex justify-between items-end mb-4 border-b border-[#1d3b8e]/30 pb-2">
                  <span className="text-sm text-[#e2e8f0] font-medium tracking-wide">年度累计完成寻源金额</span>
                  <span className="text-2xl text-[#00f0ff] font-black italic font-mono drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]">128 <span className="text-xs not-italic font-sans text-[#94a3b8]">亿元</span></span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-[#94a3b8] bg-[#06102b]/80 p-2 rounded-sm border border-[#1d3b8e]/30">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_5px_#00f0ff] animate-pulse"></div> 集采</span>
                    <span className="font-mono text-[#e2e8f0]">85亿元 <span className="text-[#00f0ff] ml-1">66%</span></span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#94a3b8] bg-[#06102b]/80 p-2 rounded-sm border border-[#1d3b8e]/30">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-600"></div> 分采</span>
                    <span className="font-mono text-[#e2e8f0]">43亿元 <span className="text-blue-400 ml-1">34%</span></span>
                  </div>
                </div>
             </div>
           </div>
           
           {/* Item 2 */}
           <div className="flex items-center gap-5 bg-[#0a1945]/50 p-5 rounded-sm border border-[#1d3b8e]/30 hover:border-[#00f0ff]/50 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="w-24 h-24 rounded-full border-4 border-[#1d3b8e] flex items-center justify-center relative shrink-0 shadow-[inset_0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_15px_rgba(59,130,246,0.2)] transition-shadow">
                <div className="text-xs text-center text-[#94a3b8] z-10">寻源数量<br/>分布</div>
                <svg className="absolute inset-0 w-full h-full -rotate-90 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                  <circle cx="44" cy="44" r="42" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="200 264" className="transition-all duration-1000 ease-out" />
                </svg>
             </div>
             <div className="flex-1 relative z-10">
                <div className="flex justify-between items-end mb-4 border-b border-[#1d3b8e]/30 pb-2">
                  <span className="text-sm text-[#e2e8f0] font-medium tracking-wide">年度累计完成寻源数量</span>
                  <span className="text-2xl text-blue-400 font-black italic font-mono drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">452 <span className="text-xs not-italic font-sans text-[#94a3b8]">个</span></span>
                </div>
                <div className="space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-[#94a3b8] bg-[#06102b]/80 p-2 rounded-sm border border-[#1d3b8e]/30">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_5px_#60a5fa] animate-pulse"></div> 集采</span>
                    <span className="font-mono text-[#e2e8f0]">320个 <span className="text-blue-400 ml-1">70%</span></span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-[#94a3b8] bg-[#06102b]/80 p-2 rounded-sm border border-[#1d3b8e]/30">
                    <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-indigo-600"></div> 分采</span>
                    <span className="font-mono text-[#e2e8f0]">132个 <span className="text-indigo-400 ml-1">30%</span></span>
                  </div>
                </div>
             </div>
           </div>
        </div>
      </TechCard>
    </>
  )
}
