import { AlertCircle, Clock, ShieldAlert, TrendingUp } from 'lucide-react';

const anomalies = [
  { id: 1, type: '价格异常', desc: '华东区柴油采购单价偏离基准 +4.2%', time: '10分钟前', level: 'high', icon: TrendingUp },
  { id: 2, type: '交期延误', desc: '供应商A（轮胎）预计延期交付 3 天', time: '1小时前', level: 'medium', icon: Clock },
  { id: 3, type: '质量预警', desc: '入库质检：润滑油批次抽检不合格', time: '2小时前', level: 'high', icon: ShieldAlert },
  { id: 4, type: '合规风险', desc: '供应商B资质文件即将过期 (剩余5天)', time: '5小时前', level: 'low', icon: AlertCircle },
  { id: 5, type: '合同违约', desc: '承运商C未按约定比例提供新能源车辆', time: '12小时前', level: 'medium', icon: AlertCircle },
];

export default function AnomalyList() {
  return (
    <div className="bg-slate-900/40 border border-red-500/30 rounded-xl p-6 flex flex-col h-full shadow-[0_0_20px_rgba(239,68,68,0.05)]">
      <h2 className="text-lg font-semibold text-red-100 mb-4 flex items-center gap-2">
        <div className="w-2 h-4 bg-red-500 rounded-sm animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
        实时异常监控预警
      </h2>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {anomalies.map((item) => {
            const Icon = item.icon;
            const isHigh = item.level === 'high';
            const isMedium = item.level === 'medium';
            
            return (
              <div 
                key={item.id} 
                className={`p-3 rounded-lg border ${
                  isHigh ? 'bg-red-950/30 border-red-500/40 hover:bg-red-950/50' : 
                  isMedium ? 'bg-amber-950/30 border-amber-500/40 hover:bg-amber-950/50' : 
                  'bg-blue-950/30 border-blue-500/40 hover:bg-blue-950/50'
                } flex gap-3 items-start transition-colors cursor-pointer`}
              >
                <div className={`mt-0.5 p-1.5 rounded-md ${
                  isHigh ? 'bg-red-500/20 text-red-400' : 
                  isMedium ? 'bg-amber-500/20 text-amber-400' : 
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm font-medium ${
                      isHigh ? 'text-red-300' : isMedium ? 'text-amber-300' : 'text-blue-300'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{item.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
