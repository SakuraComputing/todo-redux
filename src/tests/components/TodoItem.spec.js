import React from 'react';
import { shallow } from 'enzyme';
import todos from '../fixtures/todos';
import TodoListItem from '../../components/todoListItem';

describe('Todo List Item Compnent', () => {
    it('should render Todo list item',() => {
       const wrapper = shallow(<TodoListItem  {...todos[0]}  />) ;
       expect(wrapper).toMatchSnapshot();
    });    
})

