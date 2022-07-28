import React from 'react';
import './App.css';

function App() {
    return (

        <div className={"container"}>
            <div className={"title"}>todos</div>

            <div className={"wrapper"}>
                <div className={"newTodo"}>
                    <input
                        className="input"
                        type="text" aria-label="Filter projects" placeholder="Filter projects..."/>
                </div>
                <div className={"todos"}>
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
                <div className={"info"}>
                    <div>2 items left</div>
                    <div className={"buttons"}>
                        <button className={"btn"}>All</button>
                        <button className={"btn"}>Active</button>
                        <button className={"btn btn--active"}>Completed</button>
                    </div>
                    <button className={"btn"}>Clear completed</button>
                </div>
            </div>

        </div>
    )

}

export default App;
