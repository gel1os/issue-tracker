import './Dialog.css';
import {useStore} from 'src/Store';

const Dialog = ({title, confirmation, children}) => {
  const {state, dispatch} = useStore();
  const {opened} = state.dialog;

  if (!opened) {
    return null;
  }

  const closeDialog = () => dispatch({type: 'CLOSE_DIALOG'})

  return (
    <>
      <div className="dialog-wrapper" onClick={closeDialog}>
        <div className="dialog" onClick={(e) => e.stopPropagation()}>
          <h2 className="dialog_title">{title}</h2>
          <div className="dialog_content">{children}</div>
          <div className="dialog_actions">
            <button className="cancel" onClick={closeDialog}>Cancel</button>
            <button {...confirmation}>Confirm</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dialog;