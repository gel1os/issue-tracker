import './IssueColumn.css'

const IssueColumn = (props) => {
  const {status, amount = 0, children, ...rest} = props;
  return (
    <div className="issue-column" {...rest}>
      <div className="issue-column_header">{status} ({amount})</div>
      <div className="issue-column_card-wrapper">
        {children}
      </div>
    </div>
  )
}

export default IssueColumn;