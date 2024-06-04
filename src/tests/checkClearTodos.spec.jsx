import { fireEvent, render, screen } from '@testing-library/react'
import App from "../App"
import { expect } from 'vitest'
import React from 'react'
import { addTodo } from './utils'


const initialTodos = [
  { id: 1, text: "test1", completed: false },
  { id: 2, text: "test2", completed: true },
  { id: 3, text: "test3", completed: false },
  { id: 4, text: "test4", completed: true },
  { id: 5, text: "test5", completed: false },
  { id: 6, text: "test6", completed: true },

]


describe('App', () => {
  it('renders list of todos', async () => {
    render(<App />)
    initialTodos.forEach(t => addTodo(t.text)) //add todos
    initialTodos.forEach(t => { //complete todos
      if(t.completed) {
        const el = screen.queryByText(t.text)
        fireEvent.click(el) 
      }
    })
    const clearBtn = screen.queryByText("Clear completed")
    fireEvent.click(clearBtn) //Clear completed
    initialTodos.forEach(t => {
      const el = screen.queryByText(t.text)
      if (!t.completed) {
        expect(el).toBeInTheDocument()
      }
      if (t.completed) {
        expect(el).toBeNull()
      }
    })
  })
})