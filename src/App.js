import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Gantt from './components/pages/gantt/ganttPage';
import LandingPage from './components/pages/welcomePage/welcomePage';
import TaskForm from './components/pages/taskForm/taskForm';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/form' element={<TaskForm />} />
          <Route path='/gantt' element={<Gantt />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
