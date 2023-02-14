import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ITodo } from '../types'

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getAll: builder.query<ITodo[], void>({
      query: () => `todos`,
      providesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    addTodo: builder.mutation<string, string>({
      query(text) {
        return {
          url: 'todos',
          method: 'POST',
          body: {
            text,
          },
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),

    updateTodo: builder.mutation<ITodo, ITodo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'PUT',
          body: todo,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
    delteTodo: builder.mutation<ITodo, ITodo>({
      query(todo) {
        return {
          url: `todos/${todo.id}`,
          method: 'DELETE',
          body: todo,
        }
      },
      invalidatesTags: [{ type: 'Todos', id: 'LIST' }],
    }),
  }),
})
