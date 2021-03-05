/**
 *
 * Welcome to the Student frontend developer challenge!
 *
 * Your task is to complete a simple Todo app in React. I've left in some partial code
 * for you to get started on.
 *
 * Once finished, users should be able to do the following:
 *
 * 1. "Add a todo". Todo is added, when the user types in a text for the todo in the form
 * and presses the "Add" button. Users should not be able to add empty todos. Text field
 * should be cleared once a todo is added. Te added todo should show up at the top of the Todo list.
 *
 * 2. "Show todos". The user should be able to see all added todos.
 *
 * 3. "Complete a todo". When user clicks a checkbox next to the todo, the "complete" state
 * of that Todo should toggle to the opposite value and that state should be reflected in the checkbox
 * i.e. if "complete" is true, checkbox is "checked", else it is "unchecked".
 *
 * 4. "Remove a todo". Once "Remove" button is clicked, the given todo should be removed
 * from the state and also disappear from the todo list.
 *
 * 5. The app should be styled, preferably using https://emotion.sh/, however, any styling
 * approach is acceptable.
 *
 * Note: As much as possible, please try to keep the given boiler plate code so that you can
 * showcase your ability to work with given parameters.
 *
 */

import React from "react";
import { v4 as uuidv4 } from "uuid";

function Todos() {
  const [todos, setTodos] = React.useState([
    {
      id: uuidv4(),
      text: "Complete assignment",
      completed: false
    },
    {
      id: uuidv4(),
      text: "Go for a walk",
      completed: false
    },
    {
      id: uuidv4(),
      text: "Get the job",
      completed: false
    }
  ]);
  const [text, setText] = React.useState("");


  const onCreate = event => {
    const trimmedText = text.split(" ").join("")
    if (trimmedText === "") {
      event.preventDefault();
      return
    }

    setTodos(prevState => ([
      {
        id: uuidv4(),
        text: text,
        completed: false
      },
      ...prevState
    ]
    ));
    setText("")
    event.preventDefault();
  };

  const onRemove = event => {
    const theState = [...todos];
    const theEntryIndex = theState.findIndex(x => x.id === event.target.id)

    theState.splice(theEntryIndex, 1)
    setTodos(theState)
    event.preventDefault();
  }

  const onChange = event => {
    setText(event.target.value);
  };

  const onToggleComplete = (event) => {
    const theState = [...todos];
    const theEntry = theState.find(x => x.id === event.target.id)
    const theEntryIndex = theState.findIndex(x => x.id === event.target.id)
    
    theEntry.completed = !theEntry.completed
    theState[theEntryIndex] = theEntry
    setTodos(theState)
  };

  return (
    <main>
      {/** Show your "Create todo" form here */}
      <CreateTodo onCreate={onCreate} onChange={onChange} text={text}/>
      <ul>
        {/** Ouput some todos here */}
        {todos.map(todo => <Todo key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} onToggleComplete={onToggleComplete} onRemove={onRemove}></Todo>)}
        
      </ul>
    </main>
  );
}

function Todo({id, text, completed, onRemove, onToggleComplete }) {
  return <li>
    {/** Implement individual todo */}
    {text}
    <input id={id} type="checkbox" checked={completed} onChange={onToggleComplete}/>
    <input type="submit" value="Remove" onClick={onRemove}/>
    </li>;
}

function CreateTodo({ onCreate, onChange, text }) {
  return <form onSubmit={onCreate}>
    {/** Implement the form */}
    <input type="text" value={text} onChange={onChange} placeholder="Create todo" />
    <input type="submit" value="Add" onSubmit={onCreate}/>
    </form>;
}

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todos />
    </div>
  );
}