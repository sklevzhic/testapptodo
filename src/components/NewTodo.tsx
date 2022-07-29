import React, {ChangeEvent, useState} from "react";
import {TodoListContextInterface, TodoListCtx} from "../context/context";

const NewTodo = () => {
    const {addTodo} = React.useContext(TodoListCtx) as TodoListContextInterface;

    const [text, setText] = useState<string>("")
    const handleTodoText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    const handleAddToDo = () => {
        addTodo(text)
    }


    return <div className={"newTodo"}>
        <input
            className="input"
            type="text" aria-label="Filter projects" value={text} onChange={handleTodoText}
            placeholder="Text..."/>
        <button onClick={handleAddToDo}>send</button>
    </div>
}

export default NewTodo