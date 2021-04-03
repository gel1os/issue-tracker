import {useState} from 'react';
import IssueColumn from './IssueColumn';
import IssueCard from './IssueCard';
import Drag from 'src/components/shared/drag-n-drop/Drag';

import {statuses, isStatusDisabled} from 'src/utils/issue';
import useFilteredIssues from 'src/utils/useFilteredIssues';
import NoIssuesMessage from 'src/components/shared/NoIssuesMessage';
import DropTarget from 'src/components/shared/drag-n-drop/DropTarget';
import {useStore} from 'src/Store'
import './IssueBoard.css';

const IssueBoard = () => {
  const issues = useFilteredIssues();
  const {dispatch} = useStore();

  const [draggable, setDraggable] = useState(null);

  if (issues.empty) {
    return <NoIssuesMessage />
  }

  const onDrop = (status) => {
    dispatch({
      type: 'EDIT_ISSUE',
      payload: {
        issue: draggable,
        newValues: {status}
      }
    })
  }

  const canDrop = (status) => {
    return status !== draggable.status &&
      !isStatusDisabled(status, draggable.status);
  }

  return (
    <div className="issue-board">
      {statuses.map(status =>
        <DropTarget
          canDrop={() => canDrop(status)}
          onDrop={() => onDrop(status)}
          key={status}
        >
          <IssueColumn status={status} amount={issues[status].length}>
            {issues[status].map((issue) =>
              <Drag
                key={issue.id}
                onDragStart={() => setDraggable(issue)}
              >
                <IssueCard issue={issue}/>
              </Drag>
            )}
          </IssueColumn>
        </DropTarget>)}
    </div>
  )
}

export default IssueBoard;