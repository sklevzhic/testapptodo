import React from "react";

const Information = () => {
    return <div className={"info"}>
        <div>2 items left</div>
        <div className={"buttons"}>
            <button className={"btn"}>All</button>
            <button className={"btn"}>Active</button>
            <button className={"btn btn--active"}>Completed</button>
        </div>
        <button className={"btn"}>Clear completed</button>
    </div>
}

export default Information