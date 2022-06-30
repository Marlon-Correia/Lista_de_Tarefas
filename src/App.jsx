import React, { useState } from 'react';
import * as C from './styles'
import {v4 as uuidv4} from 'uuid'
import { Route, Routes} from 'react-router-dom'

import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Study programming', completed: false},
    { id: 2, title: 'Read books', completed: true}
  ])
  
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      id: uuidv4() , title: taskTitle, completed: false
    } ]
    setTasks(newTasks)
    console.log(newTasks)
  }
  
  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map( task => {
      if(task.id === taskId) return {...task, completed: !task.completed}
      return task
    })
    setTasks(newTasks)
    console.log(tasks)
  }

  const handleTaskDelete = (taskId) => {
    let newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks)
  }

  

  return (
    <>
      <C.Container>
        <Header />
        <Routes>
          <Route path='/' element={
            <>
              <AddTask 
                taskAdd={handleTaskAddition} 
              />
              <Tasks 
                tasks={tasks} 
                taskCheck={handleTaskClick}
                taskDelete={handleTaskDelete}
              />
            </>
          } />
          <Route path='/:taskTitle' element={<TaskDetails />} />
        </Routes>
    </C.Container>
    </>
    
  )
}
export default App


// import React, { useState } from 'react';
// import * as C from './styles'
// import {v4 as uuidv4} from 'uuid'
// import { BrowserRouter, Route, Router } from 'react-router-dom'

// import Tasks from './components/Tasks';
// import AddTask from './components/AddTask';
// import Header from './components/Header';

// const App = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Study programming', completed: false},
//     { id: 2, title: 'Read books', completed: true}
//   ])
  
//   const handleTaskAddition = (taskTitle) => {
//     const newTasks = [...tasks, {
//       id: uuidv4() , title: taskTitle, check: false
//     } ]
//     setTasks(newTasks)
//     console.log(newTasks)
//   }
  
//   const handleTaskClick = (taskId) => {
//     const newTasks = tasks.map( task => {
//       if(task.id === taskId) return {...task, check: !task.check}
    
//       return task
//     })
//     setTasks(newTasks)
//     console.log(tasks)
//   }

//   const handleTaskDelete = (taskId) => {
//     let newTasks = tasks.filter(task => task.id != taskId);
//     setTasks(newTasks)
//     /*
//     let newTasks = [];
//     const verify = tasks.map( task => {
//       if(task.id != taskVerify.id) {
//         newTasks.push(task)
//       } 
//     return newTasks
//     }) 
//     */
//   }

//   return (
//     <>
//       <C.Container>
//         <Header />
//         <AddTask 
//           taskAdd={handleTaskAddition} 
//         />
//         <Tasks 
//           tasks={tasks} 
//           taskCheck={handleTaskClick}
//           taskDelete={handleTaskDelete}
//         />
//     </C.Container>
//     </>
    
//   )
// }
// export default App