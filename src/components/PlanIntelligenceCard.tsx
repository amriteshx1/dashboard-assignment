import { MoreHorizontal, Layers, CheckSquare, AlertCircle, TrendingUp, TrendingDown} from "lucide-react";

export const PlanIntelligenceCard = ({ plan }: { plan: any }) => {

  return (
    <div className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/5 transition-all cursor-pointer relative overflow-hidden">
      {/* Top Action Row */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex gap-2">
          <span className={`px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase  ${
            plan.status === 'Active' ? 'bg-blue-50 text-blue-600' : 'bg-slate-100 text-slate-600'
          }`}>
            {plan.status}
          </span>
         
        </div>
        <button className="text-slate-400 hover:text-slate-600 transition-colors">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Title & Description */}
      <h4 className="font-medium text-slate-900 text-md mb-1 group-hover:text-blue-600 transition-colors leading-tight">
        {plan.title}
      </h4>
      <p className="text-[13px] text-slate-500 line-clamp-2 mb-6 min-h-10">
        {plan.desc}
      </p>

      {/* Structural Intelligence Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2 border-y border-slate-50 py-4 mb-4">
        <div className="flex items-center gap-2 text-slate-500">
          <Layers className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium">{plan.sections} Sections</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <CheckSquare className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium">{plan.tasks} Tasks</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          <AlertCircle className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-medium">{plan.dependencies} Dep.</span>
        </div>
        <div className="flex items-center gap-2 text-slate-500">
          {plan.velocity === 'up' ? <TrendingUp className="w-4 h-4 text-emerald-500" /> : <TrendingDown className="w-4 h-4 text-rose-500" />}
          <span className="text-xs font-medium">Velocity</span>
        </div>
      </div>

      {/* Progress & Meta */}
      <div className="space-y-3">
        <div className="flex justify-between text-xs font-medium">
          <span className="text-slate-400 italic font-light">Updated {plan.lastUpdated}</span>
          <span className="text-slate-900">{plan.progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-full rounded-full transition-all duration-1000" 
            style={{ width: `${plan.progress}%` }} 
          />
        </div>
        <div className="flex items-center gap-2 pt-1">
          <div className="w-5 h-5 rounded-full bg-slate-200 border border-white" />
          <span className="text-[11px] font-medium text-slate-500">{plan.owner}</span>
        </div>
      </div>
    </div>
  );
};