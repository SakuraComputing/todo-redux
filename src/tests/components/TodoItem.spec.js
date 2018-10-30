import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import TodoItem from '../../components/TodoItem';

describe('Todo List Item Component', () => {
    it('should render Todo list item',() => {
       const wrapper = shallow(<TodoItem {...todos[0]}  />) ;
       expect(wrapper).toMatchSnapshot();
    });    
})

