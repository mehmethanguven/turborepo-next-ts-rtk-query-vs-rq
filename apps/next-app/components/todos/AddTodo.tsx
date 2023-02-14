import { ITodo } from '@/types/index'
import clsx from 'clsx'
import { useCallback, useRef, useState } from 'react'
import { todoApi } from 'store'

type Props = {
  addTodo: (text: string) => void
}

export const AddTodo = ({ addTodo }: Props) => {
  const textRef = useRef<HTMLInputElement>(null)
  const [err, setErr] = useState(false)

  const onAdd = useCallback(() => {
    if (textRef.current?.value) {
      addTodo(textRef.current.value)
      textRef.current!.value = ''
    } else {
      setErr(true)
    }
  }, [addTodo])
  return (
    <div className="flex flex-col items-center justify-between p-3 my-2 space-y-2 md:bg-white md:shadow-lg md:flex-row">
      <div className="flex flex-col w-full space-x-2 space-y-2 md:items-center md:flex-row">
        <input
          onChange={() => setErr(false)}
          className="w-full p-2 border md:w-96 focus:outline-none"
          type="text"
          ref={textRef}
          placeholder="Please write todo name"
          required
        />
        <span>
          <h1
            className={clsx('font-serif p-2 text-red-500', err ? '' : 'hidden')}
          >
            * Required
          </h1>
        </span>
      </div>

      <button
        className="w-full p-2 bg-white border rounded-lg shadow-lg md:w-36 hover:bg-slate-100"
        onClick={onAdd}
      >
        Add
      </button>
    </div>
  )
}
