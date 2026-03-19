import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

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

const COLORS = ['#00f0ff', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899'];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#06102b]/90 border border-[#00f0ff]/50 p-3 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-sm">
        <p className="text-[#00f0ff] font-mono mb-2 border-b border-[#1d3b8e] pb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm my-1">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-gray-300">{entry.name}:</span>
            <span className="text-white font-mono font-bold">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function SpendTrendChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={spendTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorFuel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.6}/>
            <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorVeh" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorMaint" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6}/>
            <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorIT" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.6}/>
            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#1d3b8e" vertical={false} opacity={0.5} />
        <XAxis dataKey="month" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
        <Tooltip content={<CustomTooltip />} />
        <Legend wrapperStyle={{ fontSize: '12px', color: '#94a3b8', paddingTop: '10px' }} iconType="circle" />
        <Area type="monotone" dataKey="燃油" stackId="1" stroke="#00f0ff" strokeWidth={2} fill="url(#colorFuel)" activeDot={{ r: 6, fill: '#00f0ff', stroke: '#fff', strokeWidth: 2 }} />
        <Area type="monotone" dataKey="车辆" stackId="1" stroke="#3b82f6" strokeWidth={2} fill="url(#colorVeh)" activeDot={{ r: 6, fill: '#3b82f6', stroke: '#fff', strokeWidth: 2 }} />
        <Area type="monotone" dataKey="维保" stackId="1" stroke="#6366f1" strokeWidth={2} fill="url(#colorMaint)" activeDot={{ r: 6, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }} />
        <Area type="monotone" dataKey="IT" stackId="1" stroke="#8b5cf6" strokeWidth={2} fill="url(#colorIT)" activeDot={{ r: 6, fill: '#8b5cf6', stroke: '#fff', strokeWidth: 2 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#06102b]/90 border border-[#00f0ff]/50 p-3 rounded-md shadow-[0_0_15px_rgba(0,240,255,0.2)] backdrop-blur-sm">
        <div className="flex items-center gap-2 text-sm">
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: payload[0].payload.fill }} />
          <span className="text-gray-300">{payload[0].name}:</span>
          <span className="text-white font-mono font-bold">{payload[0].value}%</span>
        </div>
      </div>
    );
  }
  return null;
};

export function CategoryPieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <defs>
          {categoryData.map((entry, index) => (
            <filter id={`glow-${index}`} key={index}>
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          ))}
        </defs>
        <Pie
          data={categoryData}
          cx="40%"
          cy="50%"
          innerRadius={55}
          outerRadius={75}
          paddingAngle={5}
          dataKey="value"
          stroke="none"
          cornerRadius={4}
        >
          {categoryData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={COLORS[index % COLORS.length]} 
              filter={`url(#glow-${index})`}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            />
          ))}
        </Pie>
        <Tooltip content={<CustomPieTooltip />} />
        <Legend 
          layout="vertical" 
          verticalAlign="middle" 
          align="right"
          wrapperStyle={{ fontSize: '12px', color: '#94a3b8' }}
          iconType="circle"
        />
        {/* Center Text */}
        <text x="40%" y="45%" textAnchor="middle" fill="#94a3b8" fontSize="12">总计</text>
        <text x="40%" y="58%" textAnchor="middle" fill="#00f0ff" fontSize="20" fontWeight="bold" className="font-mono">100%</text>
      </PieChart>
    </ResponsiveContainer>
  );
}

