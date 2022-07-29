import {
    createContext,
    ReactNode,
    useState
} from "react";
import {Buttons} from "../consts/buttons";

interface AuxProps {
    children: ReactNode
}

export interface ITodo {
    id: number,
    text: string,
    completed: boolean,
    visible?: boolean
}

export interface TodoListContextInterface {
    todos: ITodo[],
    addTodo: (t: string) => void,
    updateTodo: (id: number) => void
    visibleTodos: (t: string) => void,
    setTodosLS: (todos: ITodo[]) => void,
    clearTodos: () => void,
}

export const TodoListCtx = createContext<TodoListContextInterface | null>(null);

export const TodoProvider = ({children}: AuxProps) => {
    const [todos, setTodos] = useState<ITodo[] | []>([])

    const setTodosLS = (todos: ITodo[]) => {
        setTodos(todos)

    }

    const addTodo = (text: string) => {
        let newTodo = {
            text: text,
            visible: true,
            completed: false,
            id: Date.now()
        }
        let tempTodos = [...todos, newTodo]
        setTodos(tempTodos)
        saveToLS(tempTodos)
    }
    const updateTodo = (id: number) => {
        let tempTodos = todos.map(el => ((el.id === id ? {...el, completed: !el.completed} : el)))
        setTodos(tempTodos)
        saveToLS(tempTodos)
    }
    const clearTodos = () => {
        let tempTodos = todos.filter(el => !el.completed)
        setTodos(tempTodos)
        saveToLS(tempTodos)
    }
    const visibleTodos = (type: string) => {
        let tempTodos: ITodo[] = []
        if (type === Buttons.all) {
            tempTodos = todos.map(el => ({...el, visible: true}))
        }
        if (type === Buttons.active) {
            tempTodos = todos.map(el => (!el.completed ? {...el, visible: true} : {...el, visible: false}))
        }
        if (type === Buttons.completed) {
            tempTodos = todos.map(el => (el.completed ? {...el, visible: true} : {...el, visible: false}))
        }
        setTodos(tempTodos)
        saveToLS(tempTodos)
    }

    const saveToLS = (todos: ITodo[]) => {
        localStorage.setItem("todos", JSON.stringify(todos))
    }

    return (
        <TodoListCtx.Provider
            value={{todos, addTodo, updateTodo, clearTodos, visibleTodos, setTodosLS}}
        >
            {children}
        </TodoListCtx.Provider>
    );
}

export default TodoProvider;
