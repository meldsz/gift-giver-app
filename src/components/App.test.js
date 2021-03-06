import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('App', () => {
    const id = 1;
    const app = shallow(<App />);
    it('app renders correctly', () => {
        expect(app).toMatchSnapshot();
    });

    it('sets the `state` to empty array of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });

    describe('when clicking on the add gift button', () => {

        beforeEach(() => {
            app.find('Button').simulate('click');
        });

        afterEach(() => {
            app.setState({ gifts: [] });
        });

        it('adds a gift to the `state` when the add gift button is clicked', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });

        it('renders gifts on the render on clicking add gift button', () => {
            expect(app.find('.gift-list').children().length).toEqual(1);
        });

        it('renders Gift', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('when the user removes a gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('removes gift from the state', () => {
                expect(app.state().gifts).toEqual([]);
            })
        });
    });





});