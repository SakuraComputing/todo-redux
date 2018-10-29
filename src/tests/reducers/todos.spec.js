import todosReducer from '../../reducers/todos';
import todos from '../fixtures/todos';

describe('Todos reducer', () => {
    it('should set the default state', () => {
        const state = todosReducer(undefined, { type: '@@INIT'}); 
        expect(state).toEqual([]);
    });
    it('should add a todo', () => {
        const todo = {
            id: 999,
            todo: 'Wibble',
        };
        const action = {
            type: 'ADD_TODO',
            todo
        };
        const state = todosReducer(todos, action);
        expect(state).toEqual([...todos, todo]);
    });
    it('should set the todo data', () => {
        const action = {
            type: 'SET_TODOS',
            todos
        };
        const state = todosReducer(todos, action);
        expect(state).toEqual(todos);
    })
})

