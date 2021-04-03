export const statusesMap = {
  open: 'Open',
  pending: 'Pending',
  closed: 'Closed',
}

export const statuses = [statusesMap.open, statusesMap.pending, statusesMap.closed];

export const isStatusDisabled = (status, issueStatus) => {
  const disabledStatuses = {
    [statusesMap.open]: [],
    [statusesMap.pending]: [statusesMap.open],
    [statusesMap.closed]: [statusesMap.open, statusesMap.pending]
  }
  return disabledStatuses[issueStatus].includes(status);
}

export class Issue {
  constructor({title, description, status, createdAt}) {
    this.title = title || '';
    this.description = description || '';
    this.status = status || statusesMap.open;
    this.createdAt = createdAt || Date.now();
    this.id = Math.floor(Math.random() * 1000000 + 1)
  }
}

export const predefinedIssues = [
  new Issue({
    title: 'Implement add/edit of issue',
    description: 'Need to implement creation and editing of issue',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement Board view',
    description: 'Need to implement Board view',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement drag-n-drop for Board view',
    description: 'Need to implement drag-n-drop for Board view',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement List view',
    description: 'Need to implement List view',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement collapsing/expanding of sections for List view',
    description: 'Need to implement collapsing/expanding of sections in List view',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement saving of issues and current view to local storage',
    description: 'Need to implement saving of issues and current view to local storage',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Implement logic of issue status update according to requirements',
    status: statusesMap.closed
  }),
  new Issue({
    title: 'Check creation and editing of issues',
    description: 'Need to check whether creation and editing of issues works',
    status: statusesMap.open
  }),
  new Issue({
    title: 'Check drag-n-drop in Board view',
    description: 'Need to check whether drag-n-drop works',
    status: statusesMap.open
  }),
  new Issue({
    title: 'Check collapse/expand of sections in List view',
    description: 'Need to check collapse/expand of sections works',
    status: statusesMap.open
  }),
  new Issue({
    title: 'Check saving of issues and view',
    description: 'Need to check whether issues and view persists after page refresh',
    status: statusesMap.open
  }),
];