import {useState} from 'react';
import './IssueSection.css'

const IssueSection = ({status, amount = 0, children}) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div className={`issue-section ${collapsed ? 'collapsed' : ''}`}>
      <div className="issue-section_header">
        <div className="issue-section_title">{status} ({amount})</div>
        {amount > 0 && 
          <svg className="issue-section_toggle" onClick={toggleCollapsed} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 17l5-5-5-5v10z"></path>
          </svg>
        }
      </div>
      <div className="issue-section_item-wrapper">
        {children}
      </div>
    </div>
  )
}

export default IssueSection;