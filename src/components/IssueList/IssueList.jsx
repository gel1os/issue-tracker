import IssueSection from './IssueSection';
import IssueItem from './IssueItem';

import {statuses} from 'src/utils/issue';
import useFilteredIssues from 'src/utils/useFilteredIssues';
import NoIssuesMessage from 'src/components/shared/NoIssuesMessage';
import './IssueList.css';

const IssueList = () => {
  const issues = useFilteredIssues();

  if (issues.empty) {
    return <NoIssuesMessage />
  }

  return (
    <div className="issue-list">
      {statuses.map(status =>
        <IssueSection key={status} status={status} amount={issues[status].length}>
          {issues[status].map((issue) =>
            <IssueItem key={issue.id} issue={issue}/>
          )}
        </IssueSection>
      )}
    </div>
  )
}

export default IssueList;