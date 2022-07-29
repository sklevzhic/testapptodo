import React from "react";

const TodoList = () => {
    return <div className={"todos"}>
        {
            [1, 2, 3, 4, 5, 6, 7, 8, 9].map(el => {
                return <div className={"todo"}>
                    <label className="todo__label">
                        <input type="checkbox" className="todo__checkbox"/>
                        <span className="todo__text">Option 1</span>
                    </label>
                </div>
            })
        }
        <div className={"todo done"}>
            <label className="todo__label">
                <input type="checkbox" className="todo__checkbox"/>
                <span className="todo__text">Option 1</span>
            </label>
        </div>
    </div>
}

export default TodoList