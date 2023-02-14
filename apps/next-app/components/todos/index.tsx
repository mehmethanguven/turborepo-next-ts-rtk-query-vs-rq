import { ITodo } from '@/types/index'

type Props = {
  todos?: ITodo[]
  onToggle: (todo: ITodo) => void
  onDelete: (todo: ITodo) => void
}

export const TodoList = ({ todos, onToggle, onDelete }: Props) => {
  return (
    <div className="p-4 md:bg-white rounded-lg md:shadow-lg md:w-[48rem] w-full mx-auto">
      {todos && todos.length > 0 ? (
        todos.map((todo, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between w-full pb-2 mb-2 border-b"
          >
            <div className="flex space-x-2">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo)}
              />
              <span>{todo.text}</span>
            </div>
            <button
              className="p-2 bg-white border rounded-lg shadow-lg"
              onClick={() => onDelete(todo)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1 className="p-4 text-xl">No Todo Item found</h1>
      )}
    </div>
  )
}
