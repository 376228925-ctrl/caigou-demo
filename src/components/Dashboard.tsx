import Header from './Header';
import KpiCard from './KpiCard';
import LifecyclePipeline from './LifecyclePipeline';
import AnomalyList from './AnomalyList';
import { SpendTrendChart, CategoryPieChart, SupplierBarChart } from './Charts';

const kpiData = [
  { title: '年度采购总额', value: '¥ 12.4B', trend: '+5.2%', isPositive: false },
  { title: '累计节约成本', value: '¥ 350M', trend: '+12.5%', isPositive: true },
  { title: '活跃供应商数', value: '1,245', trend: '+3.1%', isPositive: true },
  { title: '订单准交率', value: '96.8%', trend: '-0.5%', isPositive: false },
  { title: '当前异常告警', value: '24', trend: '+4', isPositive: false, isAlert: true },
];

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-[#020617] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-[#020617] overflow-x-hidden">
      <Header />
      
      <main className="flex-1 p-6 flex flex-col gap-6 max-w-[1920px] mx-auto w-full">
        {/* Top KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kpiData.map((kpi, idx) => (
            <KpiCard key={idx} data={kpi} index={idx} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1 min-h-0">
          
          {/* Left Column: Analysis */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex-1 min-h-[300px]">
              <CategoryPieChart />
            </div>
            <div className="flex-1 min-h-[300px]">
              <SupplierBarChart />
            </div>
          </div>

          {/* Center Column: Core Pipeline & Trends */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="shrink-0">
              <LifecyclePipeline />
            </div>
            <div className="flex-1 min-h-[300px]">
              <SpendTrendChart />
            </div>
          </div>

          {/* Right Column: Anomalies & Risks */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex-1 min-h-[300px]">
              <AnomalyList />
            </div>
            {/* Additional small card for compliance or efficiency */}
            <div className="h-1/3 min-h-[200px] bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 flex flex-col justify-center relative overflow-hidden">
              <h2 className="text-sm font-semibold text-cyan-100 mb-4 flex items-center gap-2 relative z-10">
                <div className="w-2 h-4 bg-cyan-500 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                采购周期效率 (PR to PO)
              </h2>
              <div className="flex items-end gap-4 relative z-10">
                <div className="text-4xl font-mono font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">4.2</div>
                <div className="text-slate-400 mb-1">天 / 平均</div>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full mt-6 overflow-hidden relative z-10">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 w-[75%] h-full rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              </div>
              <div className="flex justify-between text-xs text-slate-500 mt-2 relative z-10">
                <span>目标: 5天</span>
                <span className="text-emerald-400">达标率 92%</span>
              </div>
              
              {/* Decorative background */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-10 bg-blue-500" />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
