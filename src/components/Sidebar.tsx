// components/layout/Sidebar.tsx
// import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, FileText, Lightbulb, Settings, AlignCenterHorizontalIcon } from 'lucide-react';

const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { name: 'Plans', icon: FileText, path: '/plans' },
  { name: 'Insights', icon: Lightbulb, path: '/insights' },
];

export const Sidebar = () => (
  <aside className="w-64 border-r border-slate-200 bg-white h-screen flex flex-col sticky top-0">
    <div className="p-6 flex items-center gap-3">
      <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
        <AlignCenterHorizontalIcon className="text-white w-5 h-5" />
      </div>
      <span className="font-semibold text-2xl text-slate-900">Blueprint AI</span>
    </div>
    
    <nav className="flex-1 px-4 space-y-1">
      {menuItems.map(({ name, icon: Icon, path }) => (
      <NavLink
        key={name}
        to={path}
        end
        className={({ isActive }) =>
          `w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
            isActive
              ? 'bg-blue-50 text-blue-600'
              : 'text-slate-500 hover:bg-blue-50'
          }`
        }
      >
      <Icon className="w-5 h-5" />
      {name}
      </NavLink>
      ))}
    </nav>

    <div className="p-4 border-t border-slate-100">
      <button className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-500 hover:text-slate-900 text-sm font-medium">
        <Settings className="w-5 h-5" />
        Settings
      </button>
    </div>
  </aside>
);