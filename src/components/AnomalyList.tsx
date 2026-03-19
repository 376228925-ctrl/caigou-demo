import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Clock, ShieldAlert, TrendingUp, X, Info } from 'lucide-react';

const anomalies = [
  { id: 1, type: '价格异常', desc: '华东区柴油采购单价偏离基准 +4.2%', time: '10分钟前', level: 'high', icon: TrendingUp, details: '供应商报价 ¥7,850/吨，超出本月基准价 ¥7,530/吨。受国际原油波动影响，建议启动备用供应商询价或使用锁价协议。', handler: '张三 (能源采购部)', impact: '预计增加单批次成本 ¥32,000' },
  { id: 2, type: '交期延误', desc: '供应商A（轮胎）预计延期交付 3 天', time: '1小时前', level: 'medium', icon: Clock, details: '因供应商产线设备故障，原定于本月15日交付的500条重卡轮胎将延期至18日。', handler: '李四 (车辆配件部)', impact: '可能影响华南车队20辆车的正常维保计划' },
  { id: 3, type: '质量预警', desc: '入库质检：润滑油批次抽检不合格', time: '2小时前', level: 'high', icon: ShieldAlert, details: '批次号 #LUB-202310-04 粘度指标低于标准值 15%，已触发自动冻结入库流程。', handler: '王五 (品控部)', impact: '需紧急调拨库存，存在断供风险' },
  { id: 4, type: '合规风险', desc: '供应商B资质文件即将过期 (剩余5天)', time: '5小时前', level: 'low', icon: AlertCircle, details: '道路运输经营许可证将于5天后到期，系统已自动发送续期提醒邮件。', handler: '赵六 (合规风控部)', impact: '若未及时更新，将触发系统自动停单' },
  { id: 5, type: '合同违约', desc: '承运商C未按约定比例提供新能源车辆', time: '12小时前', level: 'medium', icon: AlertCircle, details: '本月实际提供新能源城配车辆占比 15%，低于合同约定的 30% 绿色物流指标。', handler: '钱七 (运力采购部)', impact: '影响公司本季度 ESG 减碳目标达成' },
];

export default function AnomalyList() {
  const [selected, setSelected] = useState<typeof anomalies[0] | null>(null);

  return (
    <>
      <div className="flex-1 overflow-hidden relative z-10 h-full">
        {/* Background warning glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

        <div className="absolute inset-0 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
          {anomalies.map((item) => {
            const Icon = item.icon;
            const isHigh = item.level === 'high';
            const isMedium = item.level === 'medium';
            
            return (
              <div 
                key={item.id} 
                onClick={() => setSelected(item)}
                className={`p-3 rounded-sm border ${
                  isHigh ? 'bg-red-950/40 border-red-500/50 hover:bg-red-900/60 shadow-[inset_0_0_10px_rgba(239,68,68,0.15)]' : 
                  isMedium ? 'bg-amber-950/30 border-amber-500/40 hover:bg-amber-900/50' : 
                  'bg-[#0a1945]/50 border-[#1d3b8e]/50 hover:border-[#00f0ff]/50'
                } flex gap-3 items-start transition-all cursor-pointer hover:scale-[1.02] group`}
              >
                <div className={`mt-0.5 p-1.5 rounded-md relative ${
                  isHigh ? 'bg-red-500/20 text-red-400' : 
                  isMedium ? 'bg-amber-500/20 text-amber-400' : 
                  'bg-[#00f0ff]/20 text-[#00f0ff]'
                }`}>
                  {isHigh && <div className="absolute inset-0 bg-red-500/20 animate-ping rounded-md" />}
                  <Icon className="w-4 h-4 relative z-10" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-sm font-bold tracking-wide ${
                      isHigh ? 'text-red-300' : isMedium ? 'text-amber-300' : 'text-[#00f0ff]'
                    }`}>
                      {item.type}
                    </span>
                    <span className="text-xs text-[#94a3b8] font-mono group-hover:text-slate-300 transition-colors">{item.time}</span>
                  </div>
                  <p className="text-xs text-[#e2e8f0] leading-relaxed line-clamp-2">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="absolute inset-0 bg-[#02091c]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className={`relative w-full max-w-lg bg-[#06102b] border rounded-sm shadow-2xl overflow-hidden ${
                selected.level === 'high' ? 'border-red-500/50 shadow-[0_0_40px_rgba(239,68,68,0.2)]' :
                selected.level === 'medium' ? 'border-amber-500/50 shadow-[0_0_40px_rgba(245,158,11,0.2)]' :
                'border-[#00f0ff]/50 shadow-[0_0_40px_rgba(0,240,255,0.2)]'
              }`}
            >
              {/* Modal Header */}
              <div className={`px-6 py-4 border-b flex items-center justify-between ${
                selected.level === 'high' ? 'bg-red-950/30 border-red-500/20' :
                selected.level === 'medium' ? 'bg-amber-950/30 border-amber-500/20' :
                'bg-[#0d2361] border-[#1d3b8e]/50'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${
                    selected.level === 'high' ? 'bg-red-500/20 text-red-400' :
                    selected.level === 'medium' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-[#00f0ff]/20 text-[#00f0ff]'
                  }`}>
                    <selected.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">{selected.type}详情</h3>
                </div>
                <button 
                  onClick={() => setSelected(null)}
                  className="p-2 text-[#94a3b8] hover:text-white hover:bg-[#1d3b8e]/50 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 space-y-6">
                <div>
                  <div className="text-sm text-[#94a3b8] mb-1">告警描述</div>
                  <div className="text-slate-200 font-medium">{selected.desc}</div>
                </div>
                
                <div className="bg-[#0a1945] rounded-sm p-4 border border-[#1d3b8e]/50">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[#00f0ff] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm text-[#94a3b8] mb-1">详细情况与建议</div>
                      <div className="text-sm text-slate-300 leading-relaxed">{selected.details}</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0a1945]/50 rounded-sm p-3 border border-[#1d3b8e]/30">
                    <div className="text-xs text-[#94a3b8] mb-1">业务影响评估</div>
                    <div className={`text-sm font-medium ${selected.level === 'high' ? 'text-red-400' : 'text-amber-400'}`}>
                      {selected.impact}
                    </div>
                  </div>
                  <div className="bg-[#0a1945]/50 rounded-sm p-3 border border-[#1d3b8e]/30">
                    <div className="text-xs text-[#94a3b8] mb-1">跟进责任人</div>
                    <div className="text-sm font-medium text-[#00f0ff]">
                      {selected.handler}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 bg-[#0a1945]/30 border-t border-[#1d3b8e]/50 flex justify-end gap-3">
                <button 
                  onClick={() => setSelected(null)}
                  className="px-4 py-2 rounded-sm text-sm font-medium text-[#94a3b8] hover:bg-[#1d3b8e]/50 transition-colors"
                >
                  关闭
                </button>
                <button className={`px-4 py-2 rounded-sm text-sm font-medium text-white transition-colors shadow-lg ${
                  selected.level === 'high' ? 'bg-red-600 hover:bg-red-500 shadow-red-500/20' :
                  selected.level === 'medium' ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-500/20' :
                  'bg-blue-600 hover:bg-blue-500 shadow-blue-500/20'
                }`}>
                  立即处理
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
