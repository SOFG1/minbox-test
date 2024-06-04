import { render, screen } from '@testing-library/react'
import App from "../App"
import { expect, vitest } from 'vitest'
import React from 'react'


const initialTodos = [
  { id: 1, text: "test1", completed: false },
  { id: 2, text: "test2", completed: true },
  { id: 3, text: "test3", completed: false },
  { id: 4, text: "test4", completed: false },
  { id: 5, text: "test5", completed: false },
  { id: 6, text: "test6", completed: false },

]


describe('App', () => {
  it('renders list of todos', () => {
    const setState = vitest.fn()
    vitest
      .spyOn(React, "useState")
      .mockImplementationOnce(initState => [initialTodos, setState])
    render(<App />)
    initialTodos.forEach(t => {
      expect(screen.getByText(t.text)).toBeInTheDocument()
    })

  })
})