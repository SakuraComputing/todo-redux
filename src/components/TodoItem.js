import React from 'react';

const TodoItem = ({ todo }) => {
    return (
        <div className="todo-list-item">
            <h3>Todo: {todo}</h3>
        </div>
    );
}

export default TodoItem;