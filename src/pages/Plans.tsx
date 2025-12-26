import { useState } from "react";
import { plans } from "../lib/plansData";
import { PlanIntelligenceCard } from "../components/PlanIntelligenceCard";
import { Sidebar } from "../components/Sidebar";
import { LayoutGrid, List, Plus } from "lucide-react";

export default function PlansPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-slate-50 min-h-screen">
        <header className="bg-white border-b border-slate-200 px-8 py-5 sticky top-0 z-20 flex justify-between items-center">
          <h2 className="font-semibold text-xl text-slate-900 border-b-2 border-b-slate-400">Plans Workspace</h2>

          <div className="flex items-center gap-3">
            <div className="flex bg-slate-100 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-md ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg ${viewMode === 'table' ? 'bg-white shadow text-blue-600' : 'text-slate-500'}`}
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>

            <button className="flex items-center gap-2 px-3.5 py-1.75 bg-blue-600 text-white rounded-lg text-[13px] font-medium">
              <Plus className="w-3.5 h-3.5" /> Create Plan
            </button>
          </div>
        </header>

        <main className="p-8">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {plans.map(plan => (
                <PlanIntelligenceCard key={plan.id} plan={plan} />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <p className="text-slate-500 text-sm">Table view will be implemented further</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
