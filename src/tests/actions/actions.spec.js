import { addTodo, setTodos } from '../../actions/todos.js';
import todos from '../fixtures/todos';

describe('Todo Action object', () => {
    it('should setup the set todo object', () => {
        const action = setTodos(todos);
        expect(action).toEqual({
            type: 'SET_TODOS',
            todos
        })
    });
    it('should setup the add todo object', () => {
        const action = addTodo(todos[1]);
        expect(action).toEqual({
            type: 'ADD_TODO',
            todo: todos[1]
        })
    });

});