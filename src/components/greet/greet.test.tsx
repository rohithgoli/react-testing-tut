/**
 * Greet should render the text hello and if a name is passed into the component
 * It should render hello followed by the name
 */

// import {render, screen} from '@testing-library/react'
// import {Greet} from './greet'

// test("Greet renders correctly", () => {
//     render(<Greet />)  // Now virtual DOM is available
//     const textElement = screen.getByText('Hello')
//     expect(textElement).toBeInTheDocument()
// })

import {render, screen} from '@testing-library/react'
import {Greet} from './greet' 

test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', () => {
    render(<Greet name='Bruce Wayne'/>)
    const textElement = screen.getByText('Hello Bruce Wayne')
    expect(textElement).toBeInTheDocument()
})