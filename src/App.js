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
    let titleProp
    let textProp
    let dueProp
    let priorityProp
 
    if (item.title === "") {
      titleProp = 'Sem título'
    } else {
      titleProp = item.title
    }
    if (item.text === "") {
      textProp = 'Não há nenhuma descrição.'
    } else {
      textProp = item.text
    }
    if (item.due === "") {
      dueProp = 'Sem prazo definido'
    } else {
      dueProp = item.due
    }
    if (item.priority === "") {
      priorityProp = 'Sem prioridade definida'
    } else {
      priorityProp = item.priority
    }
  

    const removeItem = (item) => {
      let arrayItens =Array.prototype.slice.call(document.querySelectorAll('.itemContainer'))
      let renderedItens = [].concat(itens)
      let index
      for(let i in arrayItens) {
        if (arrayItens[i] === item) {
          index = i
        }
      }
      renderedItens.splice(index, 1)
      setItens(renderedItens)
    }



    itemIterate.push(
      <ToDoItem
        key={index}
        title={titleProp}
        text={textProp}
        dueDate={dueProp}
        priority={priorityProp}
        removeItem={removeItem}
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
