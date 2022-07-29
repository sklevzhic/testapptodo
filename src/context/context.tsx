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
    clearTodos: () => void,
}

export const TodoListCtx = createContext<TodoListContextInterface | null>(null);

export const TodoProvider = ({children}: AuxProps) => {
    const [todos, setTodos] = useState<ITodo[] | []>([])

    const addTodo = (text: string) => {
        let newTodo = {
            text: text,
            visible: true,
            completed: false,
            id: Date.now()
        }
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: number) => {
        let todosTemp = todos.map(el => ((el.id === id ? {...el, completed: !el.completed} : el)))
        setTodos(todosTemp)
    }

    const clearTodos = () => {
        setTodos(todos.filter(el => !el.completed))
    }

    const visibleTodos = (type: string) => {
        if (type === Buttons.all) {
            setTodos(todos.map(el => ({...el, visible: true})))
        }
        if (type === Buttons.active) {
            setTodos(todos.map(el => (!el.completed ? {...el, visible: true} : {...el, visible: false})))
        }
        if (type === Buttons.completed) {
            setTodos(todos.map(el => (el.completed ? {...el, visible: true} : {...el, visible: false})))
        }
    }


    return (
        <TodoListCtx.Provider
            value={{todos, addTodo, updateTodo, clearTodos, visibleTodos}}
        >
            {children}
        </TodoListCtx.Provider>
    );
}

export default TodoProvider;
