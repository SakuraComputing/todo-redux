// Set Text Filter
export const setTodoFilter = (todo = '') => ({
    type: 'SET_TODO_FILTER',
    todo
});
export const sortByTodo = (sortBy = '') => ({
    type: 'SORT_BY_TODO',
    sortBy
});
