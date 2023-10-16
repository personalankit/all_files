import { createContext, ReactNode, useContext, useState } from "react";

type TodoProviderProps = {
    children: ReactNode  //accepts everything React can render
};

type Todo = {
    id: string;
    task: string;
    completed: boolean;
    createdAt: Date;
};

type TodoContext = {
    todos: Todo[];
    handleAddToDo: (task: string) => void;
    toggleToDoCompleted: (id: string) => void;
    deleteToDo: (id: string) => void;
};

const todoContext = createContext<TodoContext | null>(null);

export const TodoProvider = ({ children }: TodoProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>(() => {
        try {
            const newTodos = localStorage.getItem('todos') || '[]'
            return JSON.parse(newTodos) as Todo[]
        } catch (error) {
            return []
        }
    });

    const handleAddToDo = (task: string) => {
        setTodos((prv) => {
            const newTodos: Todo[] = [{ id: Math.random().toString(), task: task, completed: false, createdAt: new Date() }, ...prv];
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos;
        });
    };

    const toggleToDoCompleted = (id: string) => {
        setTodos((prv) => {
            let newTodos = prv.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
            localStorage.setItem('todos', JSON.stringify(newTodos))
            return newTodos
        });
    };

    const deleteToDo = (id: string) => {
        setTodos((prv) => {
            const updatedTodos = prv.filter(todo => todo.id !== id);
            localStorage.setItem('todos', JSON.stringify(updatedTodos))
            return updatedTodos
        })
    }

    return (
        <todoContext.Provider value={{ todos, handleAddToDo, toggleToDoCompleted, deleteToDo }}>
            {children}
        </todoContext.Provider>
    )
};

// custom hooks

export const useTodos = () => {
    const todosConsumer = useContext(todoContext);
    if (!todosConsumer) {
        throw new Error('useTodos used outside of provider');
    };
    return todosConsumer;
};