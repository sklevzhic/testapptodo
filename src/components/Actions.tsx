import React, {useState} from "react";
import {TodoListContextInterface, TodoListCtx} from "../context/context";
import {Buttons} from "../consts/buttons";

let buttons = [Buttons.all, Buttons.active, Buttons.completed]

const Actions = () => {
    const {todos, clearTodos, visibleTodos} = React.useContext(TodoListCtx) as TodoListContextInterface;
    let [activeButton, setActiveButton] = useState<string>(buttons[0])

    const handleButton = (button: string) => {
        setActiveButton(button)
        visibleTodos(button)
    }

    return <div className={"info"}>
        <div>{todos.length} items left</div>
        <div className={"buttons"}>
            {
                buttons.map(button => {
                    return <button
                        className={`btn ${activeButton === button ? "btn--active" : ""}`}
                        onClick={() => handleButton(button)}
                    > {button} </button>
                })
            }
        </div>
        <button className={"btn"} onClick={() => clearTodos()}>Clear completed</button>
    </div>
}

export default Actions