


export function addTodo(text) {
    const input = screen.getByPlaceholderText('What needs to be done ?')
    fireEvent.change(input, { target: { value: text } })
    fireEvent.keyDown(input, { key: "Enter" })
}