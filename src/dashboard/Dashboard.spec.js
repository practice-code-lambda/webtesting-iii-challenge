import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard'

describe('<Dashboard/>', () => {
    it('should take a snapshot', () => {
        const snap = renderer.create(<Dashboard />).toJSON();
        //Jest
        expect(snap).toMatchSnapshot()
    })
    it('should render open text', () => {
        const Dash = render(<Dashboard />)
        //Testing Library
        Dash.getByText(/open/i)
    })
    it('should show a closed gate', () => {

        const { getByText } = render(<Dashboard />)

        const button = getByText(/close gate/i)

        fireEvent.click(button)

        getByText(/closed/i)
    })
    it('should show a locked gate', () => {

        const { getByText } = render(<Dashboard />)

        const Closebutton = getByText(/close gate/i)
        const Lockbutton = getByText(/lock gate/i)

        fireEvent.click(Closebutton)
        fireEvent.click(Lockbutton)

        getByText(/locked/i)

    })
})


