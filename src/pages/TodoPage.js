import React from 'react';
import CreateTodo from '../components/todo/CreateTodo';
import TodoList from '../components/todo/TodoList';

const TodoPage = () => {
    return (
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-header bg-secondary'>
                            <h5 className='text-white'>ToDo App</h5>
                        </div>
                        <div className='card-body'>
                            <CreateTodo />
                            <TodoList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoPage;
