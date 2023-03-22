import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Link
} from 'react-router-dom';

const TaskForm = () => {
  return (
    <div className='tasksFormCenter'>
      <div className='formComponents'>
        <div className='taskForm'>
          <TextField
            required
            id="filled-required"
            label="required parameter 1"
            defaultValue=""
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="required parameter 2"
            defaultValue=""
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="required parameter 3"
            defaultValue=""
            variant="filled"
          />
          <TextField
            required
            id="filled-required"
            label="required parameter 4"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="filled-required"
            label="parameter 5"
            defaultValue=""
            variant="filled"
          />
          <TextField
            id="filled-required"
            label="parameter 6"
            defaultValue=""
            variant="filled"
          />
        </div>
        <div className='addTaskButton'>
          <Button onClick={() => alert("Task added")} variant="contained" color="primary">add tasks</Button>
        </div>
        <div className='showGanttButton'>
          <Button component={Link} to="/gantt" variant="contained" color="secondary">show gantt</Button>
        </div>
      </div>
    </div>
  )
}

export default TaskForm