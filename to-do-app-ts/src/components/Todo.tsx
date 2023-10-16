import { useState } from "react";
import { useTodos } from "../app/Store";

const Todo = () => {
    const [task, setTask] = useState('');
    const { handleAddToDo } = useTodos()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddToDo(task);
        setTask('');
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-x-6">
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} className="p-5 place-self-start bg-transparent focus:outline-none rounded-lg border-solid border-2 border-gray-50 " />
                <button type="submit" className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">Add</button>
            </form>
        </>
    )
};

export default Todo;
