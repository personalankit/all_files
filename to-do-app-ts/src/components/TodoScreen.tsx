import { useTodos } from "../app/Store";
import { useSearchParams } from "react-router-dom";

const TodoScreen = () => {
    const { todos, toggleToDoCompleted, deleteToDo } = useTodos();

    const [searchParams] = useSearchParams();
    const params = searchParams.get('todos'); // this is a way to get router name which is clicked weather it is clicked active or completed

    let filterData = todos;

    if (params === 'active') {
        filterData = filterData.filter((task) => task.completed)
    }

    if (params === 'completed') {
        filterData = filterData.filter((task) => task.completed)
    }


    return (
        <>
            <ul>
                {filterData.map((todo) => (
                    <li key={todo.id} className="text-[35px] space-x-10">
                        <input type="checkbox" id={`todo-${todo.id}`}
                            checked={todo.completed}
                            onChange={() => toggleToDoCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                        {todo.completed && (
                            <button type="button"
                                className=" bg-slate-700 p-2 text-[20px] rounded-lg px-10 text-white"
                                onClick={() => deleteToDo(todo.id)}
                            >Delete</button>
                        )}
                    </li>
                ))}
            </ul>
        </>
    )
};

export default TodoScreen;
