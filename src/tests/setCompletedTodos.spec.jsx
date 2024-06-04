import { render, screen, fireEvent } from '@testing-library/react'
import App from "../App"
import { expect } from 'vitest'
import React from 'react'
import { addTodo } from './utils'



describe('App', () => {
  const todoText1 = "Todo text1"
  const todoText2 = "Todo text2"
  it('adds todos in list', () => {
    render(<App />)
    addTodo(todoText1)
    const todoItem = screen.getByText(todoText1)
    expect(todoItem).toBeInTheDocument()
    //Add second todo
    addTodo(todoText2)
    const todoItem2 = screen.getByText(todoText2)
    expect(todoItem2).toBeInTheDocument()
    //Set 1 todo as completed
    fireEvent.click(todoItem)
    expect(todoItem).toHaveStyle("text-decoration: line-through;")
    //Set 2 todo as completed
    fireEvent.click(todoItem2)
    expect(todoItem2).toHaveStyle("text-decoration: line-through;")
    //Set 1 todo as uncompleted
    fireEvent.click(todoItem)
    expect(todoItem).not.toHaveStyle("text-decoration: line-through;")
    //Set 2 todo as uncompleted
    fireEvent.click(todoItem2)
    expect(todoItem2).not.toHaveStyle("text-decoration: line-through;")
  })
})