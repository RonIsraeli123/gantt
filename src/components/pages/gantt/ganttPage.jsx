import Gantting from '../../gantt/gantt'
import Button from '@mui/material/Button';
import {
  Link
} from 'react-router-dom';

const Gantt = () => {
  return (
    <div className="App">
      <h1>Final Gantt</h1>
      <div><Gantting /></div>
      <div className='addTaskButton'>
        <Button component={Link} to="/form" variant="contained" color="primary">go back</Button>
      </div>

    </div>
  );
}

export default Gantt;
