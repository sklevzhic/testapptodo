import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import TodoProvider from "../context/context";
import App from './App';

describe("App component", () => {
    test('should renders the title', () => {
        render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )
        expect(screen.getByText("todos")).toBeInTheDocument()
    });
    test('should renders the component NewTask', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )
        expect(AppT.container.getElementsByClassName("newTodo").length).toBe(1)
        expect(AppT.container.getElementsByClassName("newTodo").length).not.toBe(0)
    });
    test('should renders the component TodoList', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )
        expect(AppT.container.getElementsByClassName("todos").length).toBe(1)
        expect(AppT.container.getElementsByClassName("todos").length).not.toBe(0)
    });
    test('should renders the component Actions', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )
        expect(AppT.container.getElementsByClassName("actions").length).toBe(1)
        expect(AppT.container.getElementsByClassName("actions").length).not.toBe(0)
    });
    test('should add new todo,', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )

        fireEvent.change(AppT.getByRole("textbox"), {
            target: {value: "todo1"}
        })
        fireEvent.click(AppT.getByText("Add"))

        expect(screen.getByText("1 items left")).toBeInTheDocument()
        expect(screen.getByText("todo1")).toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(1)
        //
        fireEvent.change(AppT.getByRole("textbox"), {
            target: {value: "todo2"}
        })
        fireEvent.click(AppT.getByText("Add"))

        expect(screen.getByText("2 items left")).toBeInTheDocument()
        expect(screen.getByText("todo2")).toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(2)


        //
        fireEvent.change(AppT.getByRole("textbox"), {
            target: {value: "todo3"}
        })
        fireEvent.click(AppT.getByText("Add"))

        expect(screen.getByText("3 items left")).toBeInTheDocument()
        expect(screen.getByText("todo3")).toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(3)

    });

    test('должен выделиться таск доне', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )

        fireEvent.click(AppT.getByText("todo2"))
        expect(AppT.container.getElementsByClassName("todo").length).toBe(3)
        expect(AppT.container.getElementsByClassName("done").length).toBe(1)
    });

    test('должен по нажатию на Active', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )

        fireEvent.click(AppT.getByText("Active"))
        expect(AppT.getByText("Active")).toHaveClass("btn--active")
        expect(AppT.getByText("Completed")).not.toHaveClass("btn--active")
        expect(AppT.getByText("All")).not.toHaveClass("btn--active")
        expect(screen.getByText("2 items left")).toBeInTheDocument()
        expect(screen.getByText("todo1")).toBeInTheDocument()
        expect(screen.queryByText("todo2")).not.toBeInTheDocument()
        expect(screen.getByText("todo3")).toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(2)
        expect(AppT.container.getElementsByClassName("done").length).toBe(0)



    });
    test('должен по нажатию на Completed', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )


        fireEvent.click(AppT.getByText("Completed"))
        expect(AppT.getByText("Active")).not.toHaveClass("btn--active")
        expect(AppT.getByText("Completed")).toHaveClass("btn--active")
        expect(AppT.getByText("All")).not.toHaveClass("btn--active")
        expect(screen.getByText("1 items left")).toBeInTheDocument()
        expect(screen.queryByText("todo1")).not.toBeInTheDocument()
        expect(screen.getByText("todo2")).toBeInTheDocument()
        expect(screen.queryByText("todo3")).not.toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(1)
        expect(AppT.container.getElementsByClassName("done").length).toBe(1)
    });
    test('должен по нажатию на Clear', () => {
        const AppT = render(
            <TodoProvider>
                <App/>
            </TodoProvider>
        )
        fireEvent.click(AppT.getByText("All"))
        fireEvent.click(AppT.getByText("Clear completed"))
        expect(screen.getByText("2 items left")).toBeInTheDocument()
        expect(screen.queryByText("todo1")).toBeInTheDocument()
        expect(screen.queryByText("todo3")).toBeInTheDocument()
        expect(AppT.container.getElementsByClassName("todo").length).toBe(2)
        expect(AppT.container.getElementsByClassName("done").length).toBe(0)
    })
})
