import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Pantry from './Pantry';

describe('Pantry component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <Pantry />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI correctly', () => {
        expect(
        renderer.create(
            <BrowserRouter>
                <Pantry />
            </BrowserRouter>).toJSON()
        ).toMatchSnapshot();
    });
});