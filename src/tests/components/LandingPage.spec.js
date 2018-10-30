import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from "react-redux";
import LandingPage from '../../components/LandingPage';
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});

describe('landing page component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
        <Provider store={store}>
            <LandingPage />
        </Provider>
    );
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    // it('should display h1 text', () => {
    //     const headerText = wrapper.find('h1').text();
    //     expect(headerText).toEqual('TODO List');
    // })
});