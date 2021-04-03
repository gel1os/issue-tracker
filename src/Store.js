import {createContext, useContext, useMemo, useReducer} from 'react';
import dataStorage from 'src/utils/DataStorage/DataStorage';
import {predefinedIssues, Issue} from 'src/utils/issue';

const combineReducers = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

const Store = createContext();
Store.displayName = 'Store';

const IssueReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ISSUE': {
      const issue = new Issue(action.payload);
      return { issues: [...state.issues, issue] };
    }

    case 'EDIT_ISSUE': {
      const {issue, newValues} = action.payload;
      const newIssue = new Issue({...issue, ...newValues});
      let issues = [];

      if (issue.status !== newIssue.status) {
        issues = state.issues.filter((i) => i.id !== issue.id);
        issues.push(newIssue);
      } else {
        const index = state.issues.findIndex((i) => i.id === issue.id);
        issues = [
          ...state.issues.slice(0, index),
          newIssue,
          ...state.issues.slice(index + 1)
        ]
      }

      return { issues };
    }
    default:
      return state;
  }
}

const DialogReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_DIALOG':
      return {opened: true, issue: action.payload || null};
    case 'CLOSE_DIALOG':
      return {opened: false, issue: null};
    default:
      return state;
  }
}

const issueData = JSON.parse(dataStorage.get('issues'));

const initialState = {
  issues: {
    issues: issueData ? issueData.map(data => new Issue(data)) : predefinedIssues,
  },
  dialog: {
    opened: false,
    issue: null
  }
}

const rootReducer = combineReducers({
  issues: IssueReducer,
  dialog: DialogReducer
});

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  const store = useMemo(() => ({state, dispatch}), [state]);

  return (
    <Store.Provider value={store}>{children}</Store.Provider>
  );
};