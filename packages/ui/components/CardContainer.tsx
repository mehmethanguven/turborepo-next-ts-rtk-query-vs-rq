import React from 'react'

type Props = {
  children: any
}

export const CardContainer = ({ children }: Props) => {
  return (
    <div className="flex items-center h-48 p-5 border-2 border-gray-100 rounded-lg min-w-1/2">
      {children}
    </div>
  )
}
