// lib/insightsData.ts
export const diagnosticInsights = {
  narratives: [
    { id: 1, text: "Execution Velocity ↓ 12% this week", detail: "Primarily driven by resource lag in Technical segments.", trend: 'down' },
    { id: 2, text: "Structural Complexity vs Speed", detail: "Plans with >8 sections are 23% slower on average.", trend: 'neutral' },
    { id: 3, text: "Collaboration Boost", detail: "Plans with 3+ contributors finish 2x faster.", trend: 'up' },
    { id: 4, text: "Stale Plans Detected", detail: "14 plans have had no activity in 7+ days.", trend: 'warning' },
  ],
  bottlenecks: [
    { category: 'Technical', count: 45, impact: 'High' },
    { category: 'Marketing', count: 22, impact: 'Medium' },
    { category: 'Ops', count: 12, impact: 'Low' },
  ],
  complexityData: [
    { sections: 2, days: 5 },
    { sections: 4, days: 8 },
    { sections: 6, days: 15 },
    { sections: 8, days: 28 },
    { sections: 10, days: 35 },
  ]
};