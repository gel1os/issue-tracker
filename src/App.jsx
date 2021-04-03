import {useState} from 'react';
import IssueBoard from './components/IssueBoard/IssueBoard';
import IssueList from './components/IssueList/IssueList';
import AddEditIssueFab from './components/shared/fabs/AddEditIssueFab';
import AddEditIssueDialog from './components/shared/dialogs/AddEditIssueDialog/AddEditIssueDialog';
import DataSaver from './components/shared/DataSaver';
import {StoreProvider} from './Store';
import dataStorage from 'src/utils/DataStorage/DataStorage';

const App = () => {
  const [view, setView] = useState(dataStorage.get('view') || 'board');

  return (
    <StoreProvider>
      <header>
        <h2>Issue tracker</h2>
        <ul>
          <li className={view === 'board' ? 'active' : ''}>
            <button onClick={() => setView('board')}>Board</button>
          </li>
          <li className={view === 'list' ? 'active' : ''}>
            <button onClick={() => setView('list')}>List</button>
          </li>
        </ul>
      </header>
      <main>
        {view === 'board' && <IssueBoard />}
        {view === 'list' && <IssueList />}
        <AddEditIssueFab />
        <AddEditIssueDialog />
      </main>
      <DataSaver view={view} />
    </StoreProvider>
  );
}

export default App;