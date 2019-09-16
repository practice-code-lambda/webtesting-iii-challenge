import React from 'react';
import renderer from 'react-test-renderer';
// import { render, fireEvent } from '@testing-library/react';
import Controls from './Controls'
import { render, fireEvent } from 'react-testing-library';

describe('<Controls/>', () => {
    it('should take a snapshot', () => {
        const snap = renderer.create(<Controls />).toJSON();
        //Jest
        expect(snap).toMatchSnapshot()
    })
    it('should execute a function', () => {
        const mock = jest.fn()
        const { getByTestId } = render(<Controls toggleClosed={mock} />)

        const button = getByTestId(/toggleClosed/i)
        // console.log(button)
        fireEvent.click(button)

        expect(mock).toHaveBeenCalled()







    })
})

