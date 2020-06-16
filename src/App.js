import React, { Component } from 'react';
class App extends Component {
  state = { todos: [
    { id: 1, todosName: 'Learn Rails', complete: true },
    { id: 2, todosName: 'Learn ReactJS', complete: false },
    { id: 3, todosName: 'Graduate', complete: false },
  ]}
  
  allTodos = () => {
    const { todos } = this.state
    return todos.map( t => {
      return (
        <li key={t.id}>{t.todosName}</li>
      )
    })

  }
  
  render() {
    return(
      <div>
        <ul>

          {this.allTodos()}
        </ul>
      </div>
    )
  }
}
export default App;