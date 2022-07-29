import React from "react";
import {TodoListContextInterface, TodoListCtx} from "../context/context";
import {TodoItem} from "./TodoItem";

const TodoList = () => {
    const { todos } = React.useContext(TodoListCtx) as TodoListContextInterface;

    return <div className={"todos"}>
        {
            todos?.map(el => {
                return <TodoItem key={el.id} todo={el} />
            })
        }
    </div>
}

export default TodoList