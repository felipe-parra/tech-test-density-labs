import { decrement, increment } from "../../../redux/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks"

export default function Counter() {
  const counter = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  const incrementClick = () => dispatch(increment())
  const decrementClick = () => dispatch(decrement())

  // const incrementByAmountClick = (amount: number) => dispatch(incrementByAmount(amount))

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   const amount = Number(e.currentTarget[0].value)
  //   incrementByAmountClick(amount)
  // }
  return (
    <section className="w-full h-screen flex flex-col items-center pt-10">
      <article>
        <h1>Counter</h1>
        <p>{counter}</p>
      </article>
      <article className="w-full flex justify-around">
        <button className="bg-sky-500 text-white w-1/3 rounded-full p-1 text-xl" onClick={incrementClick}>+</button>
        <button className="bg-red-500 text-white w-1/3 rounded-full p-1 text-xl" onClick={decrementClick}>-</button>
      </article>
      {/* <form onSubmit={handleSubmit}>
        <input type="number" name="newAmount"/>
        <button type="submit">Add Amount</button>
      </form> */}

    </section>
  )
}
