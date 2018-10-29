import { addTodo, setTodos} from '../../actions/todo.js';
import todos from '../fixtures/todo';

describe('Todo Action object', () => {
    it('should setup the set todo object', () => {
        const action = setTodos(todos[1]);
        expect(action).toEqual({
            type: 'SET_TODOS',
            todo: todos[1]
        })
    });
    it('should setup the add todo object', () => {
        const action = addTodo(todos);
        expect(action).toEqual({
            type: 'ADD_TODO',
            todos
        })
    });

});