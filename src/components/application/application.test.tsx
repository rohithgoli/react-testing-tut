import {render, screen} from "@testing-library/react"
import { Application } from "./application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application/>);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2,
        });
        expect(sectionHeading).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: "Name"
        }); // an input element has default role called textbox
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {
            name: 'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement = screen.getByRole('combobox'); // an select element has default role called combobox
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    })
})