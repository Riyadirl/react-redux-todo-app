import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/state/todo/todoSlice';
import Swal from 'sweetalert2';

const CreateTodo = () => {
    const dispatch = useDispatch();
    const [taskInput, setTaskInput] = useState('');

    const handleAddTodo = () => {
        if (taskInput.trim() !== '') {
            dispatch(addTodo(taskInput));
            setTaskInput('');
            Swal.fire({
                icon: 'success',
                title: 'Task Added',
                showConfirmButton: false,
                timer: 1500,
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Task name cannot be empty',
            });
        }
    };

    return (
        <div className='container-fluid'>
            <div className='row mb-3'>
                <div className='col-md-8'>
                    <input
                        placeholder='Task Name'
                        type='text'
                        className='form-control'
                        value={taskInput}
                        onChange={(e) => setTaskInput(e.target.value)}
                    />
                </div>
                <div className='col-md-4'>
                    <button
                        className='btn btn-primary w-100'
                        onClick={handleAddTodo}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTodo;
