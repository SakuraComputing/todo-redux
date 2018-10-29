import filtersReducer from '../../reducers/filters';

describe('Filters Reducer', () => {
    it('should set the test filter',() => {
        const state = filtersReducer( undefined, { type: 'SET_TODO_FILTER', text: 'test'});
        expect(state.text).toBe('test')
    });
    it('should sort by todo desc', () => {
        const currentState = {
            name: '',
            sortBy: 'Desc',
        };
        const action = { 
            type: 'SORT_BY_TODO',
            sortBy: 'Asc'
        };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('Asc');
    })
    it('should sort by starRating asc', () => {
        const currentState = {
            name: '',
            sortBy: 'Asc',
        };
        const action = { 
            type: 'SORT_BY_TODO',
            sortBy: 'Desc'
        };
        const state = filtersReducer(currentState, action);
        expect(state.sortBy).toBe('Desc');
    })
})
