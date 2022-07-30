import React from 'react';
import {fireEvent, render} from "@testing-library/react";
import TodoProvider from "../context/context";
import NewTodo from "./NewTodo";

describe(" newTodo", () => {
    test('renders button add', () => {
        const NewTodoTemp = render(
            <TodoProvider>
                <NewTodo/>
            </TodoProvider>
        )

        expect(NewTodoTemp.getByText(/^Add/)).toBeInTheDocument()
    });
    test('renders placeholder in input', () => {
        const NewTodoTemp = render(
            <TodoProvider>
                <NewTodo/>
            </TodoProvider>
        )

        expect(NewTodoTemp.getByPlaceholderText("Text...")).toBeInTheDocument()
    });
    test('button add disable without text', () => {
        const NewTodoTemp = render(
            <TodoProvider>
                <NewTodo/>
            </TodoProvider>
        )

        fireEvent.change(NewTodoTemp.getByRole("textbox"), {
            target: {value: "11111"}
        })
        expect(NewTodoTemp.container.getElementsByClassName("bg-gray-100").length).toBe(1)
        expect(NewTodoTemp.container.getElementsByClassName("pointer-events-none").length).toBe(0)
    });
    test('button not disable with text', () => {
        const NewTodoTemp = render(
            <TodoProvider>
                <NewTodo/>
            </TodoProvider>
        )

        fireEvent.change(NewTodoTemp.getByRole("textbox"), {
            target: {value: ""}
        })
        expect(NewTodoTemp.container.getElementsByClassName("bg-gray-100").length).toBe(0)
        expect(NewTodoTemp.container.getElementsByClassName("pointer-events-none").length).toBe(1)
    });
})


