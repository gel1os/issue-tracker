import {useMemo} from 'react';

import {statusesMap} from 'src/utils/issue';
import {useStore} from 'src/Store'

const useFilteredIssues = () => {
  const {state} = useStore();
  const {issues} = state.issues;

  return useMemo(() => ({
    [statusesMap.open]: issues.filter(issue => issue.status === statusesMap.open),
    [statusesMap.pending]: issues.filter(issue => issue.status === statusesMap.pending),
    [statusesMap.closed]: issues.filter(issue => issue.status === statusesMap.closed),
    empty: !issues.length
  }), [issues]);
}

export default useFilteredIssues;