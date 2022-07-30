import React from "react";
import {ITodo, TodoListContextInterface, TodoListCtx} from "../context/context";

interface TodoItemProps {
    todo: ITodo
}

export const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    const {id, visible, text, completed} = todo
    const {updateTodo} = React.useContext(TodoListCtx) as TodoListContextInterface;

    if (visible) {
        return <div className={`todo ${completed ? "done" : ""}`}>
            <label className="todo__label"  data-testid="checkbox">
                <input type="checkbox" className="todo__checkbox" checked={completed} onChange={() => updateTodo(id)}/>
                <span className="todo__text">{text}</span>
            </label>
        </div>;
    }
    return <></>

};

