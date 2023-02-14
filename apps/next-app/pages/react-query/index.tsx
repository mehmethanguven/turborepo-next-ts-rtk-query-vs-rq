import { AddTodo } from '@/components/todos/AddTodo'
import { ITodo } from '@/types/index'
import axios from 'axios'
import { clsx } from 'clsx'
import React, { useCallback, useRef, useState } from 'react'
import { QueryClient, useMutation, useQuery } from 'react-query'
import { queryClient } from '../_app'

export const axiosClient = axios.create({
  baseURL: 'http://localhost:4000',
})

const ReactQueryPage = () => {
  const textRef = useRef<HTMLInputElement>(null)
  const [err, setErr] = useState(false)
  const { data: todos } = useQuery<ITodo[]>(
    'todos',
    async () => (await axiosClient.get<ITodo[]>('/todos')).data,
    {
      initialData: [],
    },
  )

  const updateMutation = useMutation<Response, unknown, ITodo>(
    todo => axiosClient.put(`/todos/${todo.id}`, todo),
    {
      onSettled: () => queryClient.invalidateQueries('todos'),
    },
  )
  const deleteMutation = useMutation<Response, unknown, ITodo>(
    ({ id }) => axiosClient.delete(`/todos/${id}`),
    {
      onSettled: () => queryClient.invalidateQueries('todos'),
    },
  )

  const createMutation = useMutation<Response, unknown, { text: string }>(
    data => axiosClient.post('/todos', data),
    {
      onSettled: () => {
        queryClient.invalidateQueries('todos')
      },
    },
  )

  const onAdd = useCallback(() => {
    if (textRef.current?.value) {
      createMutation.mutate({ text: textRef.current.value })
      textRef.current!.value = ''
    } else {
      setErr(true)
    }
  }, [])
  return (
    <div>
      <h1 className="p-4 text-2xl md:bg-white rounded-lg md:shadow-lg md:w-[48rem] mb-2 text-center">
        React Query Page
      </h1>
      <div className="flex flex-col items-center justify-between p-3 my-2 space-y-2 md:flex-row md:bg-white md:shadow-lg">
        <div className="flex flex-col w-full space-x-4 space-y-2 md:items-center md:flex-row">
          <input
            onChange={() => setErr(false)}
            className="w-full p-2 bg-white border shadow-lg focus:outline-none md:w-96"
            type="text"
            ref={textRef}
            placeholder="Please write todo name"
            required
          />
          <span>
            <h1
              className={clsx('font-serif text-red-500', err ? '' : 'hidden')}
            >
              * Required
            </h1>
          </span>
        </div>

        <button
          className="w-full p-2 bg-white border rounded-lg shadow-lg md:w-20 hover:bg-slate-100"
          onClick={onAdd}
        >
          Add
        </button>
      </div>
      <div className="p-4  bg-white rounded-lg shadow-lg md:w-[48rem] mx-auto text-center">
        {todos && todos.length > 0 ? (
          todos.map((todo, idx) => (
            <div key={idx} className="flex items-center justify-between mb-2">
              <div className="flex space-x-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() =>
                    updateMutation.mutate({ ...todo, done: !todo.done })
                  }
                />
                <span>{todo.text}</span>
              </div>
              <button
                className="p-1 bg-white border rounded-lg shadow-lg"
                onClick={() => {
                  deleteMutation.mutate(todo)
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h1 className="p-4 text-xl">No Todo Item found</h1>
        )}
      </div>
    </div>
  )
}

export default ReactQueryPage
