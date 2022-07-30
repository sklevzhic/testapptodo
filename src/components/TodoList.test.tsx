import React, { useContext } from 'react';
import {render} from "@testing-library/react";
import TodoProvider from '../context/context';
import TodoList from './TodoList';
let todos = [
    {
        "text": "dfgf",
        "visible": true,
        "completed": false,
        "id": 1659118591554
    },
    {
        "text": "fgdf",
        "visible": true,
        "completed": true,
        "id": 1659118593621
    },
    {
        "text": "dsfad",
        "visible": true,
        "completed": true,
        "id": 1659118709575
    },
    {
        "text": "DSGFdsf",
        "visible": true,
        "completed": false,
        "id": 1659118729649
    },
    {
        "text": "dsfsd",
        "visible": true,
        "completed": false,
        "id": 1659118730776
    },
    {
        "text": "dsfsd",
        "visible": true,
        "completed": false,
        "id": 1659118732312
    },
    {
        "text": "dsfds",
        "visible": true,
        "completed": false,
        "id": 1659126443236
    }
]
let todosWithHideElements = [
    {
        "text": "dfgf",
        "visible": false,
        "completed": false,
        "id": 1659118591554
    },
    {
        "text": "fgdf",
        "visible": false,
        "completed": true,
        "id": 1659118593621
    },
    {
        "text": "dsfad",
        "visible": false,
        "completed": true,
        "id": 1659118709575
    },
    {
        "text": "DSGFdsf",
        "visible": true,
        "completed": false,
        "id": 1659118729649
    },
    {
        "text": "dsfsd",
        "visible": true,
        "completed": false,
        "id": 1659118730776
    },
    {
        "text": "dsfsd",
        "visible": true,
        "completed": false,
        "id": 1659118732312
    },
    {
        "text": "dsfds",
        "visible": true,
        "completed": false,
        "id": 1659126443236
    }
]
describe("TodoList component", () => {
    test('should renders a component TodoList', () => {
        let TodoListT = render(
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        )
        expect(TodoListT.container.getElementsByClassName("todos").length).toBe(1)
        expect(TodoListT.container.getElementsByClassName("todos").length).not.toBe(0)
    });
    test('should get text "list empty"', () => {
        jest.spyOn(React, "useContext").mockReturnValue({todos: []})
        let TodoListT = render(
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        )
        expect(TodoListT.getByText("Список задач пуст")).toBeInTheDocument()
        expect(TodoListT.container.getElementsByClassName("todo").length).toBe(0)
    });
    test('should get all the list elements', () => {
        jest.spyOn(React, "useContext").mockReturnValue({todos: todos})
        let TodoListT = render(
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        )

        expect(TodoListT.container.getElementsByClassName("todo").length).toBe(todos.length)
    });
    test('should get only visible elements in the list', () => {
        jest.spyOn(React, "useContext").mockReturnValue({todos: todosWithHideElements})
        let TodoListT = render(
            <TodoProvider>
                <TodoList />
            </TodoProvider>
        )

        expect(TodoListT.container.getElementsByClassName("todo").length)
            .toBe(todosWithHideElements.filter(el => el.visible).length)
    });
})
