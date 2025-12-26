
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line
} from 'recharts';
import { 
  Clock, 
  ChevronRight, Lightbulb, Split, Link2, RotateCcw, 
  ChartLineIcon
} from 'lucide-react';
import { diagnosticInsights } from '../lib/flowData';

// --- Section 1: Interpretive Insight Cards ---
const InsightCard = ({ narrative }: any) => (
  <div className="bg-white flex flex-col justify-between p-4 rounded-lg border border-slate-200 shadow-sm hover:border-indigo-300 transition-all cursor-pointer group">
    <div className="flex justify-between items-start mb-3">
      <div className="p-2 rounded-lg">
        <ChartLineIcon className="w-5 h-5 font-light" />
      </div>
      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors" />
    </div>
    <h4 className="font-medium text-slate-900 leading-snug mb-1">{narrative.text}</h4>
    <p className="text-xs text-slate-500">{narrative.detail}</p>
  </div>
);

// --- Main Page Component ---
export default function FlowMap() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="py-1.5 bg-white border-b border-slate-200">
        <div className="flex items-center gap-3 mb-1">
          <h1 className="text-xl font-semibold text-slate-900 border-b-2 border-b-slate-400">Planning Intelligence</h1>
        </div>
        <p className="text-sm text-slate-500">Diagnostic patterns and root-cause analysis for current workspace.</p>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content: Diagnostics */}
        <main className="flex-1 overflow-y-auto p-6 py-8 space-y-8">
          
          {/* Summary Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {diagnosticInsights.narratives.map(n => (
              <InsightCard key={n.id} narrative={n} />
            ))}
          </div>

          {/* Diagnostic Core Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Complexity vs Completion Time */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="font-medium text-slate-900 flex items-center gap-2">
                   Complexity vs. Speed
                </h3>
                <p className="text-xs text-slate-500 mt-1">Correlation between plan depth (sections) and completion time (days).</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={diagnosticInsights.complexityData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="sections" axisLine={false} tickLine={false} label={{ value: 'Sections', position: 'insideBottom', offset: -5, fontSize: 10 }} />
                    <YAxis axisLine={false} tickLine={false} label={{ value: 'Days', angle: -90, position: 'insideLeft', fontSize: 10 }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                    <Line type="monotone" dataKey="days" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', strokeWidth: 2, r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottleneck Impacts */}
            <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
               <div className="mb-6">
                <h3 className="font-medium text-slate-900 flex items-center gap-2">
                  Bottleneck Volume
                </h3>
                <p className="text-xs text-slate-500 mt-1">Frequency of blocked items categorized by planning domain.</p>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={diagnosticInsights.bottlenecks} layout="vertical">
                    <XAxis type="number" hide />
                    <YAxis dataKey="category" type="category" axisLine={false} tickLine={false} width={80} style={{ fontSize: '12px', fontWeight: 'medium' }} />
                    <Tooltip cursor={{fill: 'transparent'}} />
                    <Bar dataKey="count" fill="#2563eb" radius={[0, 4, 4, 0]} barSize={20}>
                      {diagnosticInsights.bottlenecks.map((entry, index) => (
                        <Bar key={index} fill={entry.impact === 'High' ? '#f43f5e' : '#6366f1'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Section 3: Pattern Detection (Narrative Layer) */}
          <div className="bg-blue-600 rounded-lg p-8 text-white relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/3">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-blue-300" />
                </div>
                <h3 className="text-xl font-medium mb-2">Automated Pattern Detection</h3>
                <p className="text-indigo-200 text-sm">Our intelligence engine identified 3 core behaviors that correlate with planning success this month.</p>
              </div>
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: "High Frequency Edits", insight: "Plans edited daily finish 2× faster than weekly edits.", icon: Clock },
                  { label: "Dependency Cap", insight: "Plans with >3 dependencies show an 18% delay risk.", icon: Link2 },
                  { label: "Depth Threshold", insight: "Splitting sections at 5+ tasks reduces stall time by 30%.", icon: Split }
                ].map((p, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-2xl backdrop-blur-sm">
                    <p className="text-blue-100 font-medium text-[10px]  mb-2 flex items-center gap-2">
                      {p.label}
                    </p>
                    <p className="text-[13px] font-medium">{p.insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel: Recommendations & Alerts */}
        <aside className="w-72 bg-white border-l border-slate-200 py-8 px-4 flex flex-col">
          <h3 className="text-xs font-medium text-slate-400 mb-6 flex items-center gap-2">
             Actionable Intelligence
          </h3>

          <div className="space-y-6 flex-1 overflow-y-auto">
            {/* Attention Required */}
            <div>
              <p className="text-sm font-medium text-slate-900 mb-4">Urgent Interventions</p>
              <div className="space-y-3">
                <div className="p-4 bg-rose-50 border border-rose-100 rounded-lg">
                  <p className="text-xs font-medium text-rose-900">Infrastructure Hub</p>
                  <p className="text-[11px] text-red-500 mt-1">High Risk: Stalled for 4 days with 3 dependencies.</p>
                  <button className="mt-3 text-[10px] font-medium text-red-500 bg-white px-3 py-1.5 rounded-lg border border-rose-200 hover:bg-rose-100 transition-colors">
                    Re-activate Plan
                  </button>
                </div>
                <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg">
                  <p className="text-xs font-medium text-amber-900">EMEA GTM Strategy</p>
                  <p className="text-[11px] text-red-500 mt-1">Anti-pattern: "Mega-section" detected (14 tasks).</p>
                  <button className="mt-3 text-[10px] font-medium text-red-500 bg-white px-3 py-1.5 rounded-lg border border-amber-200 hover:bg-amber-100 transition-colors flex items-center gap-1">
                    <Split className="w-3 h-3" /> Split Sections
                  </button>
                </div>
              </div>
            </div>

            {/* Quality Radar */}
            <div className="pt-6 border-t border-slate-100">
               <p className="text-sm font-medium text-slate-900 mb-4">Structural Quality</p>
               <div className="space-y-4">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Plan Clarity Score</span>
                    <span className="font-normal text-slate-500">88%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: '88%' }} />
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Dependency Health</span>
                    <span className="font-normal text-slate-500">62%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full" style={{ width: '62%' }} />
                  </div>
               </div>
            </div>
          </div>

          <button className="mt-8 w-full py-2 border text-white rounded-lg bg-blue-600 font-medium text-xs flex items-center justify-center gap-2 hover:bg-blue-700 hover:text-white transition-all">
            <RotateCcw className="w-4 h-4" /> Recalculate Insights
          </button>
        </aside>
      </div>
    </div>
  );
}