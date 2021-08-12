import {render, fireEvent, screen} from '@testing-library/react'
import Button from './Button'

test('Button clicked and unclicked', async () => {
    render(<Button/>);
    const button = screen.getByTestId('button-to-test');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Button clicked');

    fireEvent.click(button);

    expect(button).toHaveTextContent('Button not clicked');

});