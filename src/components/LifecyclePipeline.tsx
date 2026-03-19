import { motion } from 'motion/react';
import { FileText, Search, FileSignature, ShoppingCart, Truck, CreditCard } from 'lucide-react';

const stages = [
  { id: 'demand', name: '需求提报', icon: FileText, count: 342, value: '45M', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50' },
  { id: 'sourcing', name: '寻源招标', icon: Search, count: 128, value: '120M', color: 'text-indigo-400', bg: 'bg-indigo-500/20', border: 'border-indigo-500/50' },
  { id: 'contract', name: '合同签订', icon: FileSignature, count: 85, value: '310M', color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/50' },
  { id: 'order', name: '订单执行', icon: ShoppingCart, count: 890, value: '540M', color: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/50' },
  { id: 'delivery', name: '物流收货', icon: Truck, count: 450, value: '210M', color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/50' },
  { id: 'payment', name: '结算支付', icon: CreditCard, count: 320, value: '180M', color: 'text-amber-400', bg: 'bg-amber-500/20', border: 'border-amber-500/50' },
];

export default function LifecyclePipeline() {
  return (
    <div className="bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 relative overflow-hidden">
      <h2 className="text-lg font-semibold text-cyan-100 mb-8 flex items-center gap-2">
        <div className="w-2 h-4 bg-cyan-500 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        采购全生命周期控制塔
      </h2>
      
      <div className="relative flex justify-between items-center px-4">
        {/* Connecting Line */}
        <div className="absolute top-7 left-10 right-10 h-1 bg-slate-800 -translate-y-1/2 z-0">
          <motion.div 
            className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-amber-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </div>

        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <motion.div 
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className={`w-14 h-14 rounded-full ${stage.bg} border ${stage.border} flex items-center justify-center mb-3 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform cursor-pointer`}>
                <Icon className={`w-6 h-6 ${stage.color}`} />
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-slate-300 mb-1">{stage.name}</div>
                <div className="text-xs font-mono text-slate-400">单量: <span className="text-cyan-300">{stage.count}</span></div>
                <div className="text-xs font-mono text-slate-400">金额: <span className="text-cyan-300">¥{stage.value}</span></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
