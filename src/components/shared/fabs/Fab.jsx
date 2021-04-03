import './Fab.css';

const Fab = ({onClick}) => {
  return (
    <div className="fab" onClick={onClick}>
      <svg viewBox="0 0 24 24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
      </svg>
    </div>
  )
}

export default Fab;