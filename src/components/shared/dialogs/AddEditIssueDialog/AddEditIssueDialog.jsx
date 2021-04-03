import {useState, useEffect} from 'react';
import Dialog from '../Dialog';
import {statusesMap, isStatusDisabled} from 'src/utils/issue'
import useInput from 'src/utils/useInput'
import {useStore} from 'src/Store';
import './AddEditIssueDialog.css'

const AddEditIssueDialog = () => {
  const {state, dispatch} = useStore();
  const {issue, opened} = state.dialog;
  const isEditMode = !!issue;

  const title = useInput('');
  const description = useInput('');
  const status = useInput(statusesMap.open);
  const [addAnother, setAddAnother] = useState(false);

  useEffect(() => {
    if (isEditMode) {
      title.setValue(issue.title);
      description.setValue(issue.description);
      status.setValue(issue.status);
    }
    return () => {
      title.reset();
      description.reset();
      status.setValue(statusesMap.open);
      setAddAnother(false);
    }
  }, [opened])

  const formValues = {
    title: title.value.trim(),
    description: description.value.trim(),
    status: status.value,
  }

  const onConfirm = () => {
    if (isEditMode) {
      dispatch({
        type: 'EDIT_ISSUE',
        payload: {issue, newValues: formValues}
      });
    } else {
      dispatch({type: 'ADD_ISSUE', payload: formValues});
    }

    if (!addAnother) {
      dispatch({type: 'CLOSE_DIALOG'})
    } else {
      title.reset();
      description.reset();
    }
  }

  const keys = Object.keys(formValues);
  const isConfirmDisabled = isEditMode
    ? keys.every((key) => formValues[key] === issue[key])
    : keys.some((key) => !formValues[key])

  return (
    <Dialog
      title={isEditMode ? "Edit issue" : "Add issue"}
      confirmation={{
        onClick: onConfirm,
        disabled: isConfirmDisabled,
      }}
    >
      <input
        type="text"
        placeholder="Title"
        {...title.bind}
      />
      <textarea
        placeholder="Description"
        rows="5"
        {...description.bind}
      ></textarea>
      <div>
        <label htmlFor="status">Status:</label>
        <select name="status" {...status.bind}>
          {Object.values(statusesMap).map((status) =>
            <option
              key={status}
              disabled={isEditMode ? isStatusDisabled(status, issue.status) : false}
              value={status}
            >{status}</option>
          )}
        </select>
      </div>
      <div className={`checkbox-wrapper ${isEditMode ? 'hidden' : ''}`}>
        <label htmlFor="add-another">Add another?</label>
        <input
          id="add-another"
          type="checkbox"
          name="add-another"
          checked={addAnother}
          onChange={(e) => setAddAnother(e.target.checked)}/>
      </div>
    </Dialog>
  )
}

export default AddEditIssueDialog;