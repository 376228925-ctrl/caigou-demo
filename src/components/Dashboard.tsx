import Header from './Header';
import TechCard from './TechCard';
import CenterKpis from './CenterKpis';
import AnomalyList from './AnomalyList';
import { SpendTrendChart, CategoryPieChart } from './Charts';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#02091c] bg-tech-grid text-slate-200 font-sans overflow-x-hidden flex flex-col">
      <Header />
      
      <main className="flex-1 p-4 grid grid-cols-1 lg:grid-cols-12 gap-4 max-w-[1920px] mx-auto w-full">
        {/* Left Column */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
           <LeftColumn />
        </div>
        
        {/* Center Column */}
        <div className="col-span-1 lg:col-span-6 flex flex-col gap-4">
           <CenterKpis />
           <div className="grid grid-cols-2 gap-4 flex-1 min-h-[300px]">
              <TechCard title="采购支出" hasLink>
                 <SpendTrendChart />
              </TechCard>
              <TechCard title="业务时效" hasLink>
                 <CategoryPieChart />
              </TechCard>
           </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-4">
           <RightColumn />
           <TechCard title="异常监控" hasLink className="flex-1 min-h-[300px]">
              <AnomalyList />
           </TechCard>
        </div>
      </main>
    </div>
  );
}

