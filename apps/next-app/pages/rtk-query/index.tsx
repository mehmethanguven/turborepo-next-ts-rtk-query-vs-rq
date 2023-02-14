import { TodoList } from '@/components/todos'
import { AddTodo } from '@/components/todos/AddTodo'
import { ITodo } from '@/types/index'
import clsx from 'clsx'
import { useCallback, useRef, useState } from 'react'
import { todoApi } from 'store'

const RTKQueryPage = () => {
  const { data: todos, error } = todoApi.useGetAllQuery()
  const [addTodo] = todoApi.useAddTodoMutation()
  const [updateTodo] = todoApi.useUpdateTodoMutation()
  const [deleteTodo] = todoApi.useDelteTodoMutation()

  const onToggle = useCallback(
    (todo: ITodo) => updateTodo({ ...todo, done: !todo.done }),
    [updateTodo],
  )
  const onDelete = useCallback((todo: ITodo) => deleteTodo(todo), [deleteTodo])

  return (
    <div>
      <h1 className="p-4 mb-2 text-2xl text-center md:shadow-lg md:rounded-lg md:bg-white">
        React Toolkit Query Page
      </h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
    </div>
  )
}

export default RTKQueryPage
