import React, {ChangeEvent, useState} from "react";
import {TodoListContextInterface, TodoListCtx} from "../context/context";

const NewTodo = () => {
    const {addTodo} = React.useContext(TodoListCtx) as TodoListContextInterface;

    const [text, setText] = useState<string>("")

    const handleTodoText = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const handleAddToDo = () => {
        setText("")
        addTodo(text)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13 && text) {
            setText("")
            addTodo(text)
        }
    }

    return <div className={"newTodo"}>
        <input
            className="input"
            type="text" aria-label="Filter projects" value={text} onChange={handleTodoText} onKeyDown={handleKeyDown}
            placeholder="Text..."/>
        <button className={`btn ${ !text ? "pointer-events-none" : "bg-gray-100" }`} onClick={handleAddToDo}>Add</button>
    </div>
}

export default NewTodo