import {render, screen} from '@testing-library/react'
import { AppProviders } from '../../providers/app-providers'
import { MuiMode } from './mui-mode'

describe('MuiMode', () => {
    // test('renders text correctly', () => {
    //     render(<MuiMode/>)
    //     const headingElement = screen.getByRole('heading');
    //     expect(headingElement).toHaveTextContent("dark mode");
    // })
    // The test fails because, here, the MuiMode component does not have wrapper component
    // How do we test this component that is wrapped in a provider ?

    test('renders text correctly', () => {
        render(<MuiMode/>, {
            wrapper: AppProviders
        })
        const headingElement = screen.getByRole('heading');
        expect(headingElement).toHaveTextContent('dark mode');
    })
})