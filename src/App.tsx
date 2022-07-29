import React, {useEffect} from 'react';
import './App.css';
import NewTodo from "./components/NewTodo";
import Actions from "./components/Actions";
import TodoList from './components/TodoList';
import {TodoListContextInterface, TodoListCtx} from "./context/context";

const App = () => {
    const { setTodosLS } = React.useContext(TodoListCtx) as TodoListContextInterface;
    useEffect(() => {
        let todos = localStorage.getItem("todos")
        if (todos) {
            setTodosLS(JSON.parse(todos))
        }
    }, [])
    return (
        <div className={"container"}>
            <div className={"title"}>todos</div>
            <div className={"wrapper"}>
                <NewTodo/>
                <TodoList/>
                <Actions/>
            </div>
        </div>
    )
}

export default App;
