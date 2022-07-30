import React from 'react'
import {TodoListContextInterface, TodoListCtx} from "../context/context";
import {TodoItem} from "./TodoItem";

interface TodoListProps {

}

const TodoList: React.FC<TodoListProps> = () => {
    const {todos} = React.useContext(TodoListCtx) as TodoListContextInterface;
    return <div className={"todos"}>
        {
            todos.length ? todos.map(el => {
                return <TodoItem key={el.id} todo={el}/>
            }) : <>Список задач пуст</>
        }
    </div>;
};

export default TodoList