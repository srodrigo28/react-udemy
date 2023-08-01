import React from 'react'

export default class TodoApp extends React.Component{
    render() {
        return (
            <div>
                <h1>Nosso TodoApp</h1>
                <input type="text" placeholder='Digite seu texto'/>
                <button>Salvar</button>
            </div>
        )
    }
}