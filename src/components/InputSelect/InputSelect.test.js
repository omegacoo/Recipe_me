import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import InputSelect from './InputSelect';

describe('InputSelect component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(
            <BrowserRouter>
                <InputSelect />
            </BrowserRouter>, 
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders UI correctly', () => {
        expect(
        renderer.create(
            <BrowserRouter>
                <InputSelect />
            </BrowserRouter>).toJSON()
        ).toMatchSnapshot();
    });
});