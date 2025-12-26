import { dashboardData } from '../lib/mockData';
import { Sidebar } from '../components/Sidebar';

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { 
  ArrowUpRight, ArrowDownRight, AlertCircle, Clock, 
  Layers, MoreHorizontal, Filter, 
  MoveRightIcon,
  CloudUpload,
  Bell,
  ChevronDown
} from 'lucide-react';

// --- Sub-Components ---

const MetricCard = ({ stat }: { stat: any }) => (
  <div className="bg-white flex flex-col gap-1 justify-between p-1.5 rounded-xl border border-slate-200 shadow-sm hover:border-indigo-200 transition-colors">
    <div className='flex flex-col justify-between p-3 border-2 border-slate-200 rounded-lg'>
    <div className="flex justify-between items-start">
      <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">{stat.label}</span>
    </div>
    <div className="mt-2 flex justify-start items-center gap-2.5">
      <h3 className="text-2xl font-semibold text-slate-900">{stat.value}</h3>
      <div className={`flex items-center text-[10px] p-1 border border-slate-400 rounded-full bg-slate-100 font-medium ${
        stat.trend === 'up' ? 'text-emerald-600' : stat.trend === 'down' ? 'text-rose-800' : 'text-slate-400'
      }`}>
        {stat.change}
        {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 ml-0.5" /> : <ArrowDownRight className="w-3 h-3 ml-0.5" />}
      </div>
    </div>
    </div>
    {/* {stat.sparkline && (
      <div className="h-8 mt-2 w-full opacity-50">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={stat.sparkline.map((v: number) => ({ v }))}>
            <Line type="monotone" dataKey="v" stroke="#6366f1" strokeWidth={1.5} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )} */}
    <div className='mt-2 flex justify-between items-center px-1.5'>
        <p className='font-light text-sm'><span className='font-semibold'>{stat.lastMonth}</span> from last month</p>
        <MoveRightIcon />
    </div>
  </div>
);

// --- Main Page ---

export default function ProductionDashboard() {
  return (
    <div className="flex">
      <Sidebar />

      {/* everything he wrote goes inside here */}
      <div className="flex-1">
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans pb-12">
      {/* Top Header Section */}
      <header className="flex justify-between items-center px-8 py-5  border-b  border-slate-200 sticky top-0 z-10 bg-white">
          <h1 className="text-xl font-semibold tracking-wide border-b-2 border-b-slate-400">Dashboard</h1>
          <div className="flex items-center space-x-6">
            <CloudUpload className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
            <div className="relative">
              <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </div>
            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="w-9 h-9 flex justify-center items-center text-white rounded-full bg-blue-500 object-cover">A</div>
              <div className="hidden lg:block text-left">
                <p className="text-sm font-medium leading-none">Admin</p>
                <p className="text-xs text-gray-400 mt-1">admin@blueprint.ai</p>
              </div>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </header>
      <header className="px-8 py-2 border-b border-slate-200 bg-white flex justify-between items-center">
        <div>
          <h1 className="text-lg font-semibold text-slate-900">Executive Overview</h1>
          <p className="text-sm text-slate-500">Planning intelligence & execution health across 12 teams</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-2.5 py-1.5 bg-white border border-slate-200 rounded-md text-sm font-medium hover:bg-slate-50">
            <Filter className="w-3.5 h-3.5" /> Filter
          </button>
          <button className="px-2.5 py-1.5 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-blue-600 shadow-sm">
            Generate Report
          </button>
        </div>
      </header>

      <main className="max-w-400 mx-auto p-8 space-y-10">
        
        {/* Section 1: Executive Metrics Grid */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[13px] font-semibold  text-slate-500">Core Performance Indicators</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dashboardData.executiveMetrics.map((stat, i) => (
              <MetricCard key={i} stat={stat} />
            ))}
          </div>
        </section>

        {/* Section 2: Deep Analytics Layer */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Main Execution Chart */}
          <div className="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm">
            <div className='flex flex-col p-3 rounded-lg border border-slate-200 shadow-sm'>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-semibold text-slate-900 text-md">Execution Velocity vs. Bottlenecks</h3>
                <p className="text-sm text-slate-500">Weekly plan transition volume</p>
              </div>
              <div className="flex gap-2">
                <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-1 bg-blue-50 text-indigo-700 rounded-md">
                   <div className="w-2 h-2 rounded-full bg-blue-400" /> Started
                </span>
                <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md">
                   <div className="w-2 h-2 rounded-full bg-emerald-500" /> Completed
                </span>
              </div>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={dashboardData.executionSeries}>
                  <defs>
                    <linearGradient id="colorStart" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11}} dy={10} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94A3B8', fontSize: 11}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                  <Area type="monotone" dataKey="started" stroke="#6366f1" strokeWidth={2.5} fill="url(#colorStart)" />
                  <Area type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={2.5} fill="transparent" strokeDasharray="5 5" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            </div>
          </div>

          {/* Operational Insights Card */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <div className="bg-white border border-slate-200 rounded-xl p-1.5 shadow-sm h-full">
            <div className='flex flex-col justify-between p-3 border border-slate-200 rounded-lg shadow-sm'>
              <h3 className="font-semibold text-md text-slate-900 mb-6 flex items-center gap-2">
                System Bottlenecks
              </h3>
              <div className="space-y-5">
                {dashboardData.bottlenecks.map((item, i) => (
                  <div key={i} className="group cursor-pointer">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-medium text-slate-700">{item.category}</span>
                      <span className="text-slate-400 font-medium">{item.count} plans</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full">
                      <div 
                        className={`h-full rounded-full transition-all duration-700 ${
                          item.status === 'critical' ? 'bg-blue-400 w-[90%]' : 
                          item.status === 'warning' ? 'bg-blue-400 w-[40%]' : 'bg-blue-400 w-[65%]'
                        }`} 
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button className="w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                  View Full Diagnostics →
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>

        {/* Section 3: Activity & Monitoring */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Activity Feed */}
          <div className="col-span-12 lg:col-span-7 bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
              <h3 className="font-semibold text-sm text-slate-700 flex items-center gap-2">
              Live Planning Activity
              </h3>
              <span className="text-[10px] bg-blue-50 text-emerald-700 px-2 py-0.5 rounded-md font-semibold">LIVE</span>
            </div>
            <div className="divide-y divide-slate-100 max-h-100 overflow-y-auto">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="p-4 flex gap-4 items-start hover:bg-slate-50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm font-normal text-slate-900">
                      <span className="font-semibold">Sarah Chen</span> promoted <span className="text-blue-600 font-medium">Q1 Infrastructure Hub</span> to <span className="px-2 py-0.5 bg-indigo-50 text-blue-600 rounded text-xs font-semibold">Execution</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 12 minutes ago
                    </p>
                  </div>
                  <button className="text-slate-300 hover:text-slate-600">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Risk Summary */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
               <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900">Critical Regression</h4>
                  <p className="text-xs text-slate-500 mt-1">3 plans downgraded to 'Draft' status due to structural errors.</p>
               </div>
               <button className="mt-4 text-left text-xs font-bold text-blue-600 underline underline-offset-4">Audit Changes</button>
            </div>
            <div className="bg-blue-600 rounded-2xl p-6 text-white flex flex-col justify-between shadow-sm shadow-blue-100">
               <div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-blue-50 mb-4">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold">Blueprint Insights</h4>
                  <p className="text-xs text-indigo-200/80 mt-1">Teams with &gt;4 contributors are completing plans 22% faster.</p>
               </div>
               <button className="mt-4 text-left text-xs font-semibold text-blue-50 underline underline-offset-4 hover:text-white transition-colors">View Benchmarks</button>
            </div>
          </div>

        </div>
      </main>
    </div>
    </div>
    </div>
  );
}