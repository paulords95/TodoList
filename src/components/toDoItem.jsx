import React from 'react'
import './toDoItem.css'

const ToDoItem = (props) => {
  return (
    <div>

      <button
        onClick={() => {
          console.log('Ainda não!')
        }} className='itemContainer focus:outline-none flex mb-4'
      >
        <div className='w-full  mx-2 rounded bg-gray-200 '>
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

            </div>
          </div>
        </div>
      </button>
    </div>
  )
}

export default ToDoItem
