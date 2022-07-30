import React from 'react';
import {render} from "@testing-library/react";
import TodoProvider from '../context/context';
import {TodoItem} from "./TodoItem";

describe("TodoItem component", () => {
    test('should renders a completed task', () => {
        let TodoListT = render(
            <TodoProvider>
                <TodoItem todo={{ "text": "Задание 1", "visible": true, "completed": true, "id": 1 }}/>
            </TodoProvider>
        )
        expect(TodoListT.getByText("Задание 1")).toBeInTheDocument()
        expect(TodoListT.container.getElementsByClassName("done").length).toBe(1)
        expect(TodoListT.container.getElementsByClassName("done").length).not.toBe(0)
        expect(TodoListT.getByRole("checkbox")).toHaveProperty('checked', true)
    });
    test('should renders an uncompleted task', () => {
        let TodoListT = render(
            <TodoProvider>
                <TodoItem todo={{ "text": "Задание 1", "visible": true, "completed": false, "id": 1 }}/>
            </TodoProvider>
        )
        expect(TodoListT.getByText("Задание 1")).toBeInTheDocument()
        expect(TodoListT.container.getElementsByClassName("done").length).toBe(0)
        expect(TodoListT.container.getElementsByClassName("done").length).not.toBe(1)
        expect(TodoListT.getByRole("checkbox")).toHaveProperty('checked', false)
    });
    test('should hide an element', () => {
        let TodoListT = render(
            <TodoProvider>
                <TodoItem todo={{ "text": "Задание 1", "visible": false, "completed": false, "id": 1 }}/>
            </TodoProvider>
        )
        expect(TodoListT.container.getElementsByClassName("todo").length).toBe(0)
        expect(TodoListT.container.getElementsByClassName("todo").length).not.toBe(1)
    });
})
