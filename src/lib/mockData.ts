// lib/mockData.ts
export const dashboardData = {
  executiveMetrics: [
    { label: 'Active Plans', value: '142', change: '+12%', trend: 'up', sparkline: [40, 52, 48, 70, 65, 80, 92], lastMonth: "+18" },
    { label: 'Completion Rate', value: '88.4%', change: '+2.1%', trend: 'up', lastMonth: "+2.1%" },
    { label: 'Execution Velocity', value: '1.4/day', change: '-5%', trend: 'down', lastMonth: "-0.24/day" },
    { label: 'Blocked Items', value: '12', change: '+2', trend: 'down', inverse: true, lastMonth: "+2" },
    { label: 'Plans At Risk', value: '4', change: '-2', trend: 'up', lastMonth: "-2" },
    { label: 'Avg. Plan Duration', value: '18d', change: '0d', trend: 'neutral', lastMonth: "+od" },
    { label: 'Collab Intensity', value: '4.8', change: '+0.4', trend: 'up', lastMonth: "+0.4" },
    { label: 'Change Rate', value: '12%', change: '+1%', trend: 'down', lastMonth: "+1%" },
  ],
  executionSeries: [
    { name: 'Week 1', started: 20, completed: 12, blocked: 2 },
    { name: 'Week 2', started: 35, completed: 18, blocked: 4 },
    { name: 'Week 3', started: 25, completed: 22, blocked: 3 },
    { name: 'Week 4', started: 45, completed: 30, blocked: 5 },
  ],
  bottlenecks: [
    { category: 'Resource Gap', count: 45, status: 'critical' },
    { category: 'Scope Creep', count: 32, status: 'warning' },
    { category: 'Dependency Lag', count: 18, status: 'stable' },
  ]
};