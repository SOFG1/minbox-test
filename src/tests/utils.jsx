import { screen, fireEvent } from '@testing-library/react'



export function addTodo(text) {
    const input = screen.getByPlaceholderText('What needs to be done ?')
    fireEvent.change(input, { target: { value: text } })
    fireEvent.keyDown(input, { key: "Enter" })
}


export function selectTab(tab) {
    const tabBtn = screen.getByText(tab)
    fireEvent.click(tabBtn)
}

export function delay(ms) {
    return new Promise((res) => setTimeout(res, ms))
}