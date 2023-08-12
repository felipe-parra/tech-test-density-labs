import { Todo } from '../../../redux/features/todo/todoSlice'

interface TodoItemProps {
  todo: Todo
  toggleTodo: (todo: Todo) => void
}

export default function TodoItem(
  { todo, toggleTodo }: TodoItemProps
) {
  const { title, description, completed } = todo
  return (
    <article className="w-full flex justify-between items-center p-2 border-b border-slate-100">
      <div className="flex flex-col">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex items-center">
        <input type="checkbox" name="completed" id="completed" checked={completed} onChange={() => toggleTodo(todo)} />
        <label htmlFor="completed">Completed</label>
      </div>
    </article>
  )
}
