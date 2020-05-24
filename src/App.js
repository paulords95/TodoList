import React, { useState } from 'react'
import './App.css'
import NewItem from './components/newItem'
import ToDoItem from './components/toDoItem'
import DatePicker, { registerLocale } from 'react-datepicker'

function App () {
  const [startDate, setStartDate] = useState(null)

  const monthsBG = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const daysBG = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

  registerLocale('bg', {
    localize: {
      month: n => monthsBG[n],
      day: n => daysBG[n]
    },
    formatLong: {}
  })

  const datePicker = <DatePicker
    selected={startDate}
    onChange={date => setStartDate(date)}
    withPortal
    placeholderText='Selecionar o prazo'
    showTimeSelect
    locale='bg'
    timeFormat='HH:mm'
    timeIntervals={15}
    timeCaption='Hora'
    dateFormat='d MMMM, yyyy HH:mm'
    className='datepicker'
                     />

  const [itens, setItens] = useState([])

  const itemAdd = (item) => {
    setItens(itens.concat([item]))
  }

  const itemIterate = []
  for (const [index, item] of itens.entries()) {
    console.log(item)
    itemIterate.push(
      <ToDoItem
        key={index}
        title={item.title}
        text={item.text}
        dueDate={item.dueDate}
        priority={item.priority}
      />
    )
  }

  if (itemIterate.length === 0) {
    itemIterate.push(
      <div key='Nenhum'>
        Nenhuma atividade gravada.
      </div>
    )
  }
  console.log(itemIterate)

  return (

    <div className='content-center'>
      <NewItem
        datePick={datePicker}
        onAdd={itemAdd}
      />
      <div className='App flex container mx-auto'>
        {itemIterate}
      </div>
    </div>
  )
}

export default App
