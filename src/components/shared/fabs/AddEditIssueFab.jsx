import Fab from './Fab';
import {useStore} from 'src/Store'

const AddEditIssueFab = () => {
  const {dispatch} = useStore();
  return <Fab onClick={() => dispatch({type: 'OPEN_DIALOG'})} />
}

export default AddEditIssueFab;