import './App.css';
import { Route, Routes} from 'react-router-dom'
import {useEffect, useState} from 'react';
import Header from './pages/Header/Header'
import Home from './pages/Home/Home'
import Nav from './pages/Nav/Nav'
import Footer from './pages/Footer/Footer'
import Tasks from './pages/Tasks/Tasks'
import Websites from './pages/Websites/Websites'
import Spellbook from './pages/Spellbook/Spellbook'


function App() {
  const [tasks, setTasks] = useState([])
  useEffect(()=>{
    fetch('./resources/Task.json').then((response)=>response.json())
    .then((taskjson) => setTasks(taskjson) )
  },[])
  // const [completedTasks, setCompletedTask] = useState([])
  // const [incompleteTasks, setIncompleteTask] = useState([])
  // const [isInitialCall, setInitialCall] = useState(true)
  // const [refreshCall, setRefreshCall] = useState(false)

  return (
    <div className="App">

      <Header/>
      <Nav />
      <div className="margin routecontainer">
      <Routes>
      
        <Route path='/' element={<Home
                tasks = {tasks}
                setTasks = {setTasks}
        />}/>
        <Route path='/Tasks' element={<Tasks 
        tasks = {tasks}
        setTasks = {setTasks}
        />} />
        <Route path='/Websites' element={<Websites />}/>
        <Route path='/Spellbook' element={<Spellbook />}/>

      </Routes>      
      </div>
      <Footer />

    </div>
  );
}

export default App;
