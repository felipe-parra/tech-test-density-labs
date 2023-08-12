import { useState } from 'react'
import * as zod from 'zod'
import { useAppDispatch } from '../../../redux/hooks'
import { addTodo } from '../../../redux/features/todo/todoSlice'

const schema = zod.object({
  title: zod.string().nonempty("Title is required"),
  description: zod.string().nonempty("Description is required"),
  completed: zod.boolean().default(false),
})

type TodoStateForm = zod.infer<typeof schema>

const initialFormState: TodoStateForm = {
  title: '',
  description: '',
  completed: false,
}

export default function TodoForm() {
  const [todo, setTodo] = useState<TodoStateForm>(initialFormState)

  const dispatch = useAppDispatch()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.currentTarget
    setTodo({
      ...todo,
      [name]: value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const schemaRes = schema.parse(todo)
      console.log({ schemaRes })
      dispatch(addTodo(schemaRes))
      setTodo(initialFormState)
    } catch (error) {
      if (error instanceof zod.ZodError) {
        console.log({ error })
      } else {
        console.log({ error })
      }

    }
  }
  return (
    <form onSubmit={handleSubmit} className='w-full flex flex-col items-center'>
      <section className='w-1/3 flex flex-col'>
        <article className='flex flex-col text-start'>
          <label htmlFor="title">Title</label>
          <input className='text-black rounded' onChange={handleChange} type="text" name="title" id="title" value={todo.title} />
        </article>
        <article className='flex flex-col text-start'>
          <label htmlFor="description">Description</label>
          <textarea className='text-black w-full rounded' onChange={handleChange} name="description" id="description" value={todo.description} />
        </article>
        <article className='flex text-start'>
          <label htmlFor="completed">Completed</label>
          <input className='ml-2 border-4 rounded' onChange={() => setTodo({ ...todo, completed: !todo.completed })} type="checkbox" name="completed" id="completed" checked={todo.completed} />
          {

          }
        </article>
      </section>
      <section className='w-1/3 my-4'>
        <button className='w-full bg-sky-500 rounded-lg p-2' type="submit">Save</button>
      </section>
    </form>
  )
}
