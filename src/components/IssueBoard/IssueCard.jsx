import {useStore} from 'src/Store';
import './IssueCard.css'

const IssueCard = (props) => {
  const {dispatch} = useStore();
  const {issue, ...rest} = props;

  return (
    <div
      {...rest}
      className="issue-card"
      onClick={() => dispatch({type: 'OPEN_DIALOG', payload: issue})}
    >
      <div className="issue-card_title line-clamp">{issue.title}</div>
      <div className="issue-card_description line-clamp">{issue.description}</div>
    </div>
  )
}

export default IssueCard;