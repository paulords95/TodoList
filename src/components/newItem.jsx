import React, {useState} from 'react'
import item from './itemFactory'
import './newItem.css'


let newObjs = []

const NewItem = (props) => {
    const [state, setState] = useState ({
        add: true,
    })


    const [itens, setItens] = useState({
        title: '',
        text: '',
        dueDate: '',
        priority: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        let itemAdded = new item(itens.title, itens.text, document.querySelector('.datepicker').value, itens.priority)
        newObjs.push(itemAdded)
    }



    return (
    <div className="header mx-auto rounded flex mb-4">
            <button onClick={() => {
                if (state.add === false) {
                    setState({
                        add: true
                    })
                } else {
                    setState({
                        add: false
                    })
                }  
                }} className={`image btnAdd bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${state.add ? " " : "clickedBackColor"}`}>
                    Novo Item
            </button>
            <div className={`addItem mx-auto rounded ${state.add ? " " : "hideExpand"}`}>
                <div className={`createItem rounded ${state.add ? "hideContent " : ""}`}>
                <form onSubmit={handleSubmit} className='form'>
                    <div className={` inputs ${state.add ? "" : "fadeIn"}`}>
                    <input value={itens.title}  onChange={(e) => {
                        setItens({
                            title: e.target.value,
                            text: itens.text,
                            dueDate: itens.dueDate,
                            priority: itens.priority
                        })
                    }} className="title bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" type="text" placeholder="Título">
                    </input>
                    <textarea value={itens.text} onChange={(e => {
                        setItens({
                            title: itens.title,
                            text: e.target.value,
                            dueDate: itens.dueDate,
                            priority: itens.priority
                        })
                    })} type='text' className="description bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal" placeholder="Descrição">
                    </textarea>
                    <div className='duePriorBox'>         
                        <label className='text dueDate' htmlFor="date">
                            {props.datePick}
                        </label>
                            <label className='rounded priority'>
                                <select  onChange={(e => {
                                    setItens({
                                        title: itens.title,
                                        text: itens.text,
                                        dueDate: itens.dueDate,
                                        priority: e.target.value
                                    })
                    })} defaultValue={'DEFAULT'} className="select rounded block appearance-none w-full bg-gray-400 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                    <option value="DEFAULT" disabled>Prioridade</option>
                                    <option className='bg-green-200'>Baixa</option>
                                    <option className='bg-yellow-300'>Média</option>
                                    <option className='bg-red-600'>Alta</option>
                                </select>
                            </label>
                            <input type="submit" value="Inserir" className='saveBtn mx-auto text-white font-bold py-2 px-4 rounded' />
                    </div>
                    
                    </div>
                </form>
                </div>
            </div>
    </div>
)
}

export  {NewItem, newObjs}