const filtersReducerDefaultState = {
    text: '',
    sortBy: ''
};
export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TODO_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_TODO':  
            return {
                ...state,
                sortBy: action.sortBy
            };
        default:
            return state;
    }
}

