import React, {useState} from 'react'
import './toDoItem.css'

const ToDoItem = (props) => {
  const [status, setStatus] = useState({
    statusDone: 'Pendente',
    statusFlag: false
  })


  return (
    <div>

      <div className='itemContainer focus:outline-none flex mb-4'
      >
        <div className='w-full h-full  mx-2 rounded bg-gray-200 '>
          <div className='item max-w-sm rounded overflow-hidden shadow-lg'>
            <div className='px-6 py-4'>
              <div className='font-bold text-xl mb-2'>{props.title}</div>
              <p className='text-gray-700 text-base'>
                {props.text}
              </p>
            </div>
            <div className='px-6 py-4'>
              <p className='text-gray-700 text-base'>
            Prazo:
                <span className='inline-block bg-gray-400 rounded px-1 py-0 text-sm font-semibold text-gray-700 mr-2'>{props.dueDate}</span>
              </p>
              <p className='text-gray-700 text-base'>
            Prioridade:
                <span className='inline-block bg-gray-400 rounded px-1 py-0 text-sm font-semibold text-gray-700'>{props.priority}</span>
              </p>
              <p className='ml-2 statusDone'>Status: 
                <button onClick={() => {
                  if (status.statusDone === 'Pendente') {
                    setStatus({statusDone: 'Feito', statusFlag: true})
                  }
                  if (status.statusDone === 'Feito') {
                    setStatus({statusDone: 'Pendente', statusFlag: false})
                  }

                }} className={`btnDone font-bold text-white rounded ${status.statusFlag ? 'bg-green-400' : 'bg-blue-400'} `}>{status.statusDone}</button>
              </p>
              <button className="btnDelete rounded font-bold text-white bg-red-600">Excluir</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem
