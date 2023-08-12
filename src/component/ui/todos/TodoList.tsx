import { Todo, toggleTodo } from "../../../redux/features/todo/todoSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"
import TodoItem from "./TodoItem"


export default function TodoList() {
  const { todos } = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()

  const toggleTodoFunction = (todo: Todo) => {
    dispatch(toggleTodo(todo))
  }
  return (
    <section className="w-full">
      <article>
        <h1>Todos</h1>
      </article>
      <article>
        {
          todos.map((todo, index) => (
            <TodoItem todo={todo} toggleTodo={toggleTodoFunction} key={`todo-key-${index}`} />
          ))
        }

      </article>
    </section>

  )
}
