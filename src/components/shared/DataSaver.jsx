import {useEffect} from 'react';
import {useStore} from 'src/Store'
import dataStorage from 'src/utils/DataStorage/DataStorage';

const DataSaver = ({view}) => {
  const {state} = useStore();
  const {issues} = state.issues;

  useEffect(() => {
    dataStorage.save('issues', JSON.stringify(issues));
  }, [issues]);

  useEffect(() => {
    dataStorage.save('view', view);
  }, [view]);

  return null;
}

export default DataSaver;