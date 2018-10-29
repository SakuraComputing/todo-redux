import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from '../../components/LandingPage';

describe('landing page component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LandingPage />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should display h1 text', () => {
        const headerText = wrapper.find('h1').text();
        expect(headerText).toEqual('Late Rooms');
    })
});