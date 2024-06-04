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
  })
})