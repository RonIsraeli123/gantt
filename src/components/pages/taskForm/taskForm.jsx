import React, { useState } from 'react'
import Button from '@mui/material/Button';
import {
  Link
} from 'react-router-dom';
import { FormDialog } from '../../dialogs'

const TaskForm = () => {

  const basicInitialValues = {
    taskName: "",
    description: "",
  };

  const [basicValues, setBasicValues] = useState(basicInitialValues);
  const [showData, setShowData] = useState(false);

  return (
    <div className='tasksFormCenter'>
      <div className='formComponents left'>
        <div className='taskForm'>
          <FormDialog basicValues={basicValues} setBasicValues={setBasicValues} />
        </div>
        <div className='addTaskButton'>
          <Button onClick={() => { setShowData(true); alert("Task added") }} variant="contained" color="primary">add tasks</Button>
        </div>
        <div className='showGanttButton'>
          <Button component={Link} to="/gantt" variant="contained" color="secondary">show gantt</Button>
        </div>
      </div>
      <div className='dataView right'>
        <h1>Data Result</h1>
        <div className='tasksDataResult'>
          {showData && Object.entries(basicValues).map(([key, val]) => {
            return <p> <div style={{ fontWeight: 'bold' }}>{key} - </div>{val}</p>;
          })}
        </div>

      </div>
    </div>
  )
}

export default TaskForm