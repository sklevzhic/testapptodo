import React from 'react';
import './App.css';
import NewTodo from "./components/NewTodo";
import Actions from "./components/Actions";
import TodoList from './components/TodoList';
import TodoProvider from "./context/context";

const App = () => {
    return (<TodoProvider>
            <div className={"container"}>
                <div className={"title"}>todos</div>
                <div className={"wrapper"}>
                    <NewTodo/>
                    <TodoList/>
                    <Actions/>
                </div>

            </div>
        </TodoProvider>

    )

}

export default App;
