// import type { FC } from 'react'

// import { 
//   LayoutDashboard, 
//   BarChart3, 
//   ArrowRightLeft, 
//   TrendingUp, 
//   Target, 
//   HelpCircle, 
//   Settings, 
//   CloudUpload, 
//   Bell, 
//   Search,
//   ChevronDown,
//   Filter,
//   FileText
// } from 'lucide-react';
// import { 
//   LineChart, 
//   Line, 
//   XAxis, 
//   YAxis, 
//   CartesianGrid, 
//   Tooltip, 
//   ResponsiveContainer, 
//   AreaChart, 
//   Area 
// } from 'recharts';

// // --- Mock Data ---
// const spendData = [
//   { name: 'Jan', revenue: 100, spend: 80 },
//   { name: 'Feb', revenue: 450, spend: 380 },
//   { name: 'Mar', revenue: 300, spend: 500 },
//   { name: 'Apr', revenue: 480, spend: 109 },
//   { name: 'May', revenue: 600, spend: 400 },
//   { name: 'Jun', revenue: 950, spend: 600 },
// ];

// const sparklineData = [
//   { value: 40 }, { value: 35 }, { value: 55 }, { value: 45 }, { value: 60 }, { value: 50 }, { value: 70 }
// ];

// // --- Sub-Components ---

// const SidebarItem: FC<{
//   icon: any
//   label: string
//   active?: boolean
// }> = ({ icon: Icon, label, active = false }) => (
//   <div className={`flex items-center space-x-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
//     active ? 'bg-gray-100 text-gray-900 font-semibold' : 'text-gray-500 hover:bg-gray-50'
//   }`}>
//     <Icon size={20} />
//     <span className="text-sm">{label}</span>
//   </div>
// );

// const StatCard: FC<{
//   title: string
//   amount: string
//   change: number
//   color: 'red' | 'green'
// }> = ({ title, amount, change, color }) => {
//   const isPositive = change > 0;
//   const chartColor = color === 'red' ? '#EF4444' : '#22C55E';
  
//   return (
//     <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full">
//       <div className="flex justify-between items-start mb-2">
//         <span className="text-gray-500 text-sm font-medium">{title}</span>
//         <button className="text-xs text-gray-400 font-semibold uppercase tracking-wider">View more</button>
//       </div>
//       <div className="text-2xl font-bold mb-1">{amount}</div>
//       <div className={`text-xs font-bold ${isPositive ? 'text-green-500' : 'text-red-500'} mb-4`}>
//         {isPositive ? '+' : ''}{change}% <span className="text-gray-400 font-normal">vs last month</span>
//       </div>
//       <div className="h-10 w-full mt-auto">
//         <ResponsiveContainer width="100%" height="100%">
//           <LineChart data={sparklineData}>
//             <Line type="monotone" dataKey="value" stroke={chartColor} strokeWidth={2} dot={false} />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// };

// // --- Main Component ---

// export default function FinelessDashboard() {
//   return (
//     <div className="flex min-h-screen bg-[#F7F8FA] font-[Inter] text-gray-900">
      
//       {/* 1. Sidebar */}
//       <aside className="w-64 bg-white border-r border-gray-100 flex flex-col p-6 fixed h-full">
//         <div className="flex items-center space-x-2 mb-10 px-2">
//           <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
//             <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
//           </div>
//           <span className="text-xl font-bold tracking-tight">BluePrint AI</span>
//         </div>

//         <nav className="flex-1 space-y-1">
//           <SidebarItem icon={LayoutDashboard} label="Dashboard" active />
//           <SidebarItem icon={BarChart3} label="Analytics" />
//           <SidebarItem icon={ArrowRightLeft} label="Transactions" />
//           <SidebarItem icon={TrendingUp} label="Investment" />
//           <SidebarItem icon={Target} label="Goals" />
//           <SidebarItem icon={FileText} label='Plans' />
//         </nav>

//         <div className="pt-6 border-t border-gray-100 space-y-1">
//           <SidebarItem icon={HelpCircle} label="Help Center" />
//           <SidebarItem icon={Settings} label="Settings" />
//         </div>
//       </aside>

//       {/* 2. Main Content Area */}
//       <main className="flex-1 ml-64 p-8">
        
//         {/* Header */}
//         <header className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold">Good Morning, Xyz</h1>
//           <div className="flex items-center space-x-6">
//             <CloudUpload className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
//             <div className="relative">
//               <Bell className="text-gray-400 cursor-pointer hover:text-gray-600" size={20} />
//               <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
//             </div>
//             <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
//               <img src="https://i.pravatar.cc/150?u=anika" alt="Avatar" className="w-9 h-9 rounded-full object-cover" />
//               <div className="hidden lg:block text-left">
//                 <p className="text-sm font-bold leading-none">Admin</p>
//                 <p className="text-xs text-gray-400 mt-1">admin@blueprint.ai</p>
//               </div>
//               <ChevronDown size={14} className="text-gray-400" />
//             </div>
//           </div>
//         </header>

//         {/* Top Row Grid */}
//         <div className="grid grid-cols-12 gap-6 mb-6">
          
//           {/* Main Balance Card */}
//           <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
//             <div className="flex justify-between mb-4">
//               <span className="text-gray-500 font-medium">Planning Overview</span>
//               <button className="text-xs text-gray-400 font-bold uppercase tracking-wider">View more</button>
//             </div>
//             <div className="text-4xl font-bold mb-2">$43,476.02</div>
//             <div className="text-sm text-gray-400 mb-6">
//               Plan performance improved by <span className="text-green-500 font-bold">$3,356.23</span> this month
//             </div>
//             <div className="h-32 w-full">
//               <ResponsiveContainer width="100%" height="100%">
//                 <AreaChart data={spendData}>
//                   <defs>
//                     <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
//                       <stop offset="5%" stopColor="#22C55E" stopOpacity={0.1}/>
//                       <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
//                     </linearGradient>
//                   </defs>
//                   <Area type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={3} fillOpacity={1} fill="url(#colorBalance)" />
//                 </AreaChart>
//               </ResponsiveContainer>
//             </div>
//           </div>

//           {/* Cashflow Card */}
//           <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <div className="flex justify-between mb-6">
//               <span className="text-gray-500 font-medium">Plan Health</span>
//               <button className="text-xs text-gray-400 font-bold uppercase tracking-wider">View more</button>
//             </div>
//             <div className="text-3xl font-bold mb-8">$7,585.18</div>
            
//             <div className="flex justify-between mb-4">
//                <div>
//                  <p className="text-xl font-bold">$6,216.54</p>
//                  <p className="text-xs text-green-500 font-bold">+3% <span className="text-gray-400 font-normal">vs last month</span></p>
//                </div>
//                <div className="text-right">
//                  <p className="text-xl font-bold">$3,212.35</p>
//                  <p className="text-xs text-green-500 font-bold">+4% <span className="text-gray-400 font-normal">vs last month</span></p>
//                </div>
//             </div>

//             {/* Custom Progress Bar */}
//             <div className="w-full h-2 bg-gray-100 rounded-full flex overflow-hidden mb-2">
//               <div className="h-full bg-green-500 transition-all duration-500" style={{ width: '80%' }} />
//               <div className="h-full bg-red-400 transition-all duration-500" style={{ width: '20%' }} />
//             </div>
//             <div className="flex justify-between text-[10px] font-bold text-gray-300 tracking-wider">
//               <span>80% MONEY IN</span>
//               <span>20% MONEY OUT</span>
//             </div>
//           </div>
//         </div>

//         {/* Small Stat Cards Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
//           <StatCard title="Checking" amount="$3,612.49" change={-4} color="red" />
//           <StatCard title="Savings" amount="$7,933.42" change={3} color="green" />
//           <StatCard title="Investment" amount="$2,133.78" change={-2} color="red" />
//         </div>

//         {/* Spend Activity Chart Section */}
//         <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-6">
//           <div className="flex justify-between items-center mb-8">
//             <h3 className="font-bold text-gray-700">Execution Activity</h3>
//             <div className="flex items-center space-x-4">
//               <div className="flex bg-gray-50 p-1 rounded-lg">
//                 {['1W', '1M', '6M', '1Y'].map((t) => (
//                   <button key={t} className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all ${t === '6M' ? 'bg-white shadow-sm' : 'text-gray-400'}`}>
//                     {t}
//                   </button>
//                 ))}
//               </div>
//               <button className="flex items-center space-x-2 border border-gray-200 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-50">
//                 <Filter size={16} />
//                 <span>Filter</span>
//               </button>
//             </div>
//           </div>
          
//           <div className="h-75 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <LineChart data={spendData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F4F6" />
//                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
//                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} />
//                 <Tooltip 
//                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
//                   cursor={{ stroke: '#E5E7EB', strokeWidth: 1, strokeDasharray: '5 5' }}
//                 />
//                 <Line type="monotone" dataKey="revenue" stroke="#22C55E" strokeWidth={3} dot={{ r: 4, fill: '#22C55E', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
//                 <Line type="monotone" dataKey="spend" stroke="#EF4444" strokeWidth={3} dot={{ r: 4, fill: '#EF4444', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Bottom Row: Transactions & Goals */}
//         <div className="grid grid-cols-12 gap-6">
          
//           {/* Recent Transactions */}
//           <div className="col-span-12 lg:col-span-8 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//             <div className="flex justify-between items-center mb-6">
//               <h3 className="font-bold text-gray-700">Recent Actions</h3>
//               <div className="relative">
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
//                 <input 
//                   type="text" 
//                   placeholder="Search actions" 
//                   className="bg-gray-50 pl-10 pr-4 py-2 rounded-xl text-sm border-none focus:ring-2 focus:ring-gray-200 w-64"
//                 />
//               </div>
//             </div>
            
//             <table className="w-full text-left">
//               <thead>
//                 <tr className="text-gray-400 text-xs font-semibold uppercase tracking-wider border-b border-gray-50">
//                   <th className="pb-4 font-medium">Date</th>
//                   <th className="pb-4 font-medium">Merchant</th>
//                   <th className="pb-4 font-medium">Card</th>
//                   <th className="pb-4 font-medium">Amount</th>
//                   <th className="pb-4 font-medium">Status</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-gray-50">
//                 <tr className="group">
//                   <td className="py-4 text-sm font-medium text-gray-600">Dec 25, 2025 - 11:46</td>
//                   <td className="py-4">
//                     <div className="flex items-center space-x-3">
//                       <img src="https://i.pravatar.cc/150?u=gustavo" className="w-8 h-8 rounded-full" alt="" />
//                       <span className="text-sm font-bold">Flevaris Gonse</span>
//                     </div>
//                   </td>
//                   <td className="py-4 text-sm font-bold text-gray-600">••• 7836</td>
//                   <td className="py-4 text-sm font-bold">$350</td>
//                   <td className="py-4 text-sm font-bold text-green-500">Success</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Savings Goals */}
//           <div className="col-span-12 lg:col-span-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
//              <div className="flex justify-between items-center mb-6">
//                 <h3 className="font-bold text-gray-700">Goals & Outcomes</h3>
//                 <button className="text-xs text-gray-400 font-bold uppercase">View more</button>
//              </div>
             
//              <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between group cursor-pointer hover:bg-gray-100 transition-colors">
//                 <div className="flex items-center space-x-4">
//                   <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">
//                     🏠
//                   </div>
//                   <div>
//                     <p className="text-sm font-bold">To Dream Home</p>
//                     <p className="text-xs text-gray-400">Achieved in 1 years!</p>
//                   </div>
//                 </div>
//                 <div className="text-lg font-bold text-gray-800">$3,300</div>
//              </div>
//           </div>

//         </div>
//       </main>
//     </div>
//   );
// }