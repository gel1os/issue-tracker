import {useStore} from 'src/Store';
import './IssueItem.css'

const IssueItem = (props) => {
  const {dispatch} = useStore();
  const {issue} = props;

  return (
    <div className="issue-item">
      <div
        className="issue-item_title"
        onClick={() => dispatch({type: 'OPEN_DIALOG', payload: issue})}
      >
        {issue.title}
      </div>
      <div className="issue-item_description">{issue.description}</div>
    </div>
  )
}

export default IssueItem;