import { render, screen, fireEvent } from '@testing-library/react'
import App from "../App"
import { expect, vitest } from 'vitest'
import React from 'react'


const todoText1 = "Todo text1"
const todoText2 = "Todo text2"


describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
    const input = screen.getByPlaceholderText('What needs to be done ?')
    fireEvent.change(input, {target: {value: todoText1}})
    fireEvent.keyDown(input, {key: "Enter"})
    const todoItem = screen.getByText(todoText1)
    expect(todoItem).toBeInTheDocument()
    fireEvent.change(input, {target: {value: todoText2}})
    fireEvent.keyDown(input, {key: "Enter"})
    const todoItem2 = screen.getByText(todoText2)
    expect(todoItem2).toBeInTheDocument()
  })
})