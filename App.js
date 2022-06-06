import Header from './components/Header';
import Tasks from './components/Tasks';
import './App.css';
import {useState } from "react";


function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Consulta médica',
      day: '6 de junho as 08:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Festa Junina',
      day: '11 de Junho as 18:30',
      reminder: true,
    },
  ]);

  function deleteTarefa(id){
    setTasks(tasks.filter((task) => task.id !==id));
  }

  return (
    <div className='container'>
      <Header title="tarefas" />
      <Tasks tasks={tasks} onDelete={deleteTarefa} />
          </div>
  );
}

export default App