import React from 'react';
import './App.css';
import NewTodo from "./components/NewTodo";
import Information from "./components/Information";
import TodoList from './components/TodoList';
import TodoProvider, {useTodoContext} from "./context/context";

const App = () => {
    // const {  } = useContext(TodoListCtx)
    // const addToDo = (todo: ITodo) => {
    //     initialValue.todos.push(todo)
    // }
    //
    // const deleteToDo = (id: number) => {
    //     initialValue.todos.filter(el => el.id !== id)
    // }

    // const completeToDo = (id: number) => {
    //
    // }

    const fff = useTodoContext()
    debugger
    return (<TodoProvider>
            <div className={"container"}>
                <div className={"title"}>todos</div>

                <div className={"wrapper"}>
                    <NewTodo/>
                    <TodoList/>
                    <Information/>
                </div>

            </div>
    </TodoProvider>

    )

}

export default App;
