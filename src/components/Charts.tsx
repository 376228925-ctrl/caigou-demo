import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, Legend } from 'recharts';

const spendTrendData = [
  { month: '1月', 燃油: 400, 车辆: 240, 维保: 100, IT: 50 },
  { month: '2月', 燃油: 420, 车辆: 130, 维保: 110, IT: 40 },
  { month: '3月', 燃油: 450, 车辆: 280, 维保: 120, IT: 60 },
  { month: '4月', 燃油: 480, 车辆: 190, 维保: 105, IT: 55 },
  { month: '5月', 燃油: 510, 车辆: 320, 维保: 130, IT: 45 },
  { month: '6月', 燃油: 490, 车辆: 250, 维保: 140, IT: 70 },
];

const categoryData = [
  { name: '燃油及能源', value: 45 },
  { name: '运输车辆', value: 25 },
  { name: '维保及配件', value: 15 },
  { name: 'IT与设备', value: 10 },
  { name: '其他服务', value: 5 },
];

const supplierData = [
  { name: 'S级', 数量: 45, 占比: 15 },
  { name: 'A级', 数量: 120, 占比: 40 },
  { name: 'B级', 数量: 90, 占比: 30 },
  { name: 'C级', 数量: 30, 占比: 10 },
  { name: 'D级', 数量: 15, 占比: 5 },
];

const COLORS = ['#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899'];

export function SpendTrendChart() {
  return (
    <div className="bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
        <div className="w-2 h-4 bg-cyan-500 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        采购支出趋势分析 (百万)
      </h2>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={spendTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorFuel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorVeh" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc' }}
              itemStyle={{ color: '#e2e8f0' }}
            />
            <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }} />
            <Area type="monotone" dataKey="燃油" stackId="1" stroke="#06b6d4" fill="url(#colorFuel)" />
            <Area type="monotone" dataKey="车辆" stackId="1" stroke="#3b82f6" fill="url(#colorVeh)" />
            <Area type="monotone" dataKey="维保" stackId="1" stroke="#6366f1" fill="#6366f1" fillOpacity={0.2} />
            <Area type="monotone" dataKey="IT" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function CategoryPieChart() {
  return (
    <div className="bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
        <div className="w-2 h-4 bg-cyan-500 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        采购品类结构
      </h2>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px' }}
              itemStyle={{ color: '#e2e8f0' }}
              formatter={(value) => `${value}%`}
            />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              wrapperStyle={{ fontSize: '12px', color: '#cbd5e1' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export function SupplierBarChart() {
  return (
    <div className="bg-slate-900/40 border border-cyan-500/30 rounded-xl p-6 h-full flex flex-col">
      <h2 className="text-lg font-semibold text-cyan-100 mb-4 flex items-center gap-2">
        <div className="w-2 h-4 bg-cyan-500 rounded-sm shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
        供应商绩效评级分布
      </h2>
      <div className="flex-1 min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={supplierData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={true} vertical={false} />
            <XAxis type="number" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis dataKey="name" type="category" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
            <Tooltip 
              cursor={{ fill: '#1e293b', opacity: 0.4 }}
              contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', color: '#f8fafc', borderRadius: '8px' }}
            />
            <Bar dataKey="数量" fill="#3b82f6" radius={[0, 4, 4, 0]}>
              {supplierData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.name === 'D级' || entry.name === 'C级' ? '#ef4444' : '#3b82f6'} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
