import React from "react";
import { shallow } from "enzyme";
import Gift from './Gift';

describe('Gift', () => {
    const mockRemove = jest.fn();
    const id = 1;
    const props = { gift: { id }, removeGift: mockRemove };
    const giftWrapper = shallow(<Gift {...props} />);
    it('renders properly', () => {
        expect(giftWrapper).toMatchSnapshot();
    });

    it('sets the state to person and present to empty strings', () => {
        expect(giftWrapper.state()).toEqual({ person: '', present: '' });
    });

    describe('when person input changes', () => {
        const person = 'uncle';
        beforeEach(() => {
            giftWrapper.find('.gift-person')
                .simulate('change', { target: { value: person } });
        });

        it('updates the person value in the state', () => {
            expect(giftWrapper.state().person).toEqual(person);
        });
    });

    describe('when present input changes', () => {
        const present = 'watch';
        beforeEach(() => {
            giftWrapper.find('.gift-present')
                .simulate('change', { target: { value: present } });
        });

        it('updates present in the state', () => {
            expect(giftWrapper.state().present).toEqual(present);
        });
    });

    describe('when user clicks the remove gift button', () => {
        beforeEach(() => {
            giftWrapper.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback in props', () => {
            expect(mockRemove).toHaveBeenCalledWith(id);
        })
    });
});