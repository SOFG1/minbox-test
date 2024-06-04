import { fireEvent, render, screen } from '@testing-library/react'
import App from "../App"
import { expect } from 'vitest'
import React from 'react'
import { addTodo, selectTab } from './utils'


const initialTodos = [
  { id: 1, text: "test1", completed: false },
  { id: 2, text: "test2", completed: true },
  { id: 3, text: "test3", completed: false },
  { id: 4, text: "test4", completed: true },
  { id: 5, text: "test5", completed: false },
  { id: 6, text: "test6", completed: true },

]


describe('App', () => {
  it('renders list of todos', () => {
    render(<App />)
    initialTodos.forEach(i => addTodo(i.text))
    initialTodos.forEach(t => {
      if (t.completed) {
        const todo = screen.getByText(t.text)
        fireEvent.click(todo)
      }
    })
    selectTab("Active")
    initialTodos.forEach(t => {
      const el = screen.queryByText(t.text)
      if (!t.completed) {
        expect(el).toBeInTheDocument()
      }
      if (t.completed) {
        expect(el).toBeNull()
      }
    })
    selectTab("Completed")
    initialTodos.forEach(t => {
      const el = screen.queryByText(t.text)
      if (!t.completed) {
        expect(el).toBeNull()
      }
      if (t.completed) {
        expect(el).toBeInTheDocument()
      }
    })
    selectTab("All")
    initialTodos.forEach(t => {
      const el = screen.queryByText(t.text)
      expect(el).toBeInTheDocument()
    })

  })
})