import React, {useState} from 'react';
import './App.css';
import {NewItem, newObjs} from './components/newItem'
import ToDoItem from './components/toDoItem'
import DatePicker, {registerLocale} from "react-datepicker";

function App() {
  const [startDate, setStartDate] = useState (null)

  const monthsBG = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const daysBG = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

registerLocale('bg', {
  localize: {
    month: n => monthsBG[n],
    day: n => daysBG[n]
  }, 
  formatLong:{} 
});



  const datePicker = <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        withPortal
                        placeholderText="Selecionar o prazo"
                        showTimeSelect
                        locale='bg'
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        timeCaption="Hora"
                        dateFormat="d MMMM, yyyy HH:mm"
                        className='datepicker'
                    />
   


  for (let i of newObjs) {
    console.log(i)
  }


  
  return (
    
    <div className='content-center'>
      <NewItem
        datePick = {datePicker}
      />
      <div className="App flex container mx-auto">
          <ToDoItem
            title = 'Lorem Ipsum'
            description= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            dueDate= '22 Maio, 2020 16:15'
            priority='Alta'
          />
      </div>
    </div>
  )
}

export default App;
