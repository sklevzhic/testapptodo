import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useContext,
    useState
} from "react";


type TypeSetState<T> = Dispatch<SetStateAction<T>>

interface AuxProps {
    children: ReactNode
}

export interface ITodo {
    id: number,
    text: string,
    completed: boolean
}

interface TodoListContextInterface {
    todos: ITodo[],
    setTodos: TypeSetState<ITodo[]>
}

const initialValue = {
    todos: [],
    setTodos: () => {}
}

const TodoListCtx = createContext<TodoListContextInterface>(initialValue);

export const TodoProvider = ({children}: AuxProps) => {
    const [todos, setTodos] = useState(initialValue.todos)

    return (
        <TodoListCtx.Provider value={{todos, setTodos}}>{children}</TodoListCtx.Provider>
    );
}

export const useTodoContext = () => useContext(TodoListCtx);

export default TodoProvider;
