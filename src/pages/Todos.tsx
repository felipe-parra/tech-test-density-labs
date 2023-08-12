import TodoForm from "../component/ui/todos/TodoForm";
import TodoList from "../component/ui/todos/TodoList";

export default function Todos() {
  return (
    <section className="flex flex-col w-full">
      <TodoForm />
      <TodoList />
    </section>
  )
}
