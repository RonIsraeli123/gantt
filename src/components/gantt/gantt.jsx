import { Gantt } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { tasks } from './config'


const Gantting = () => {
  return (
    <div className="App">
      <Gantt tasks={tasks} />
    </div>
  );
}

export default Gantting;
