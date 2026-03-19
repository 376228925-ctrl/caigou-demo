import { Info, ChevronsRight } from 'lucide-react';
import { ReactNode } from 'react';

interface TechCardProps {
  title: string;
  children: ReactNode;
  hasLink?: boolean;
  className?: string;
}

export default function TechCard({ title, children, hasLink = false, className = '' }: TechCardProps) {
  return (
    <div className={`relative bg-[#06102b]/90 border border-[#1d3b8e] rounded-sm flex flex-col shadow-[0_4px_20px_rgba(0,0,0,0.5)] group ${className}`}>
      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00f0ff] z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00f0ff] z-20 pointer-events-none" />

      {/* Top glowing line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent opacity-80 z-10" />
      
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2.5 bg-gradient-to-r from-[#0d2361] to-transparent border-b border-[#1d3b8e]/50 shrink-0 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-[#e2e8f0] font-bold tracking-wider text-sm drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{title}</span>
          <Info className="w-3.5 h-3.5 text-[#00f0ff]/70 cursor-pointer hover:text-[#00f0ff] transition-colors" />
        </div>
        {hasLink && (
          <div className="text-[#00f0ff] text-xs flex items-center gap-1 cursor-pointer hover:text-white transition-colors group-hover:translate-x-1 duration-300">
            进入看板 <ChevronsRight className="w-3 h-3" />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 flex-1 overflow-hidden flex flex-col relative z-10">
        {children}
      </div>

      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
    </div>
  );
}
