function renderMetrics() {
  const metrics = [
    {
      value: '12',
      label: 'Active Processes',
      trend: '+12%',
      trendType: 'up'
    },
    {
      value: '8',
      label: 'Active Tasks',
      trend: '+3%',
      trendType: 'up'
    },
    {
      value: '2',
      label: 'Suspended Complaints',
      trend: '-3%',
      trendType: 'down'
    },
    {
      value: '145',
      label: 'Completed This Month',
      trend: '+28%',
      trendType: 'up'
    }
  ];

  return `
    <div class="metrics-grid">
      ${metrics.map(metric => `
        <div class="metric-card">
          <div class="metric-value">${metric.value}</div>
          <div class="metric-label">${metric.label}</div>
          <div class="metric-trend ${metric.trendType === 'up' ? 'trend-up' : 'trend-down'}">
            <svg class="trend-icon" viewBox="0 0 24 24">
              ${metric.trendType === 'up' 
                ? '<path d="M7 14l5-5 5 5z"/>'
                : '<path d="M7 10l5 5 5-5z"/>'
              }
            </svg>
            ${metric.trend}
          </div>
        </div>
      `).join('')}
    </div>
  `;
} 