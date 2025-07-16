// Modular Process Timeline Modal
function renderProcessTimelineModal(process) {
  // Example: contextual steps for a generic process management system
  const steps = [
    {
      name: 'Initiation',
      tag: 'Initiation',
      assignee: 'Unassigned',
      comments: [],
      active: false
    },
    {
      name: 'Planning',
      tag: 'Planning',
      assignee: 'Unassigned',
      comments: [],
      active: false
    },
    {
      name: 'Execution',
      tag: 'Execution',
      assignee: process.assignee,
      start: process.startDate || '2024-05-01 09:00',
      due: process.dueDate || '2024-05-10 18:00',
      comments: [
        'Initial tasks assigned',
        'Kickoff meeting held'
      ],
      active: true
    },
    {
      name: 'Monitoring',
      tag: 'Monitoring',
      assignee: 'Unassigned',
      comments: [],
      active: false
    },
    {
      name: 'Closure',
      tag: 'Closure',
      assignee: 'Unassigned',
      comments: [],
      active: false
    }
  ];
  return `
    <div class="modal-content" style="background:#181f36;padding:2em 2.5em;border-radius:1em;max-width:600px;width:95vw;box-shadow:0 8px 32px rgba(29,78,216,0.18);position:relative;max-height:90vh;overflow-y:auto;">
      <button onclick="closeProcessTimelineModal()" style="position:absolute;top:1em;right:1em;background:none;border:none;color:#fff;font-size:1.5em;cursor:pointer;">&times;</button>
      <h2 style="margin-top:0;font-size:1.3em;">Process Timeline</h2>
      <div style="margin-bottom:2em;">
        <span style="font-weight:600;">Task:</span> ${process.title}<br/>
        <span style="font-weight:600;">ID:</span> ${process.id}
      </div>
      <div>
        ${steps.map((step, i) => `
          <div style="margin-bottom:2em;display:flex;align-items:flex-start;">
            <div style="width:1.2em;height:1.2em;border:2px solid ${step.active ? '#3B82F6' : '#888'};background:${step.active ? '#3B82F6' : 'transparent'};border-radius:50%;margin-right:1em;margin-top:0.2em;"></div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <div style="font-weight:600;">${step.name}</div>
                <button style="background:#23283a;color:#fff;border:none;padding:0.4em 1.2em;border-radius:1em;cursor:pointer;">Reassign</button>
              </div>
              <div style="color:#bfc6d1;font-size:0.98em;margin-bottom:0.5em;">
                Assignee: <span style="font-weight:500;">${step.assignee}</span>
                ${step.start ? `<br/>Started: ${step.start}` : ''}
                ${step.due ? `<br/>Due: ${step.due}` : ''}
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
// Export for use in other scripts
window.renderProcessTimelineModal = renderProcessTimelineModal; 