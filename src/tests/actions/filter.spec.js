import { setTodoFilter, sortByTodo } from "../../actions/filters";

describe('filter todo object', () => {
    it('should setup the filter object', () => {
        const action = setTodoFilter('test');
        expect(action).toEqual = ({
            type: 'SET_TODO_FILTER',
            text: 'test'
        })
    });
    it('should setup the sort by star rating desc object', () => {
        expect(sortByTodo('Asc')).toEqual = ({ 
            type: 'SORT_BY_TODO',
            sortBy: 'Asc'
        })
    });
})