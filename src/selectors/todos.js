export default (todos, { text, sortBy }) => {
    console.log('Is it getting in here?')
    return todos.filter((todo) => {
        const textMatch = todo.todo.toLowerCase().includes(text.toLowerCase());
        return textMatch;
    }).sort((a, b) => {
        if (sortBy === 'Asc') {
            return a.todo - b.todo;
        } else {
            return b.todo - a.todo;
        }
    });
};
