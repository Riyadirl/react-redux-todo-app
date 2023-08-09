import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../redux/state/todo/todoSlice';
import Swal from 'sweetalert2';

const TodoDeleteAlert = ({ index, onClose }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(removeTodo(index));
        onClose();
        Swal.fire({
            icon: 'success',
            title: 'Task Deleted',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className='alert alert-danger'>
            <p>Are you sure you want to delete this task?</p>
            <button className='btn btn-danger' onClick={handleDelete}>
                Delete
            </button>
            <button className='btn btn-secondary ml-2' onClick={onClose}>
                Cancel
            </button>
        </div>
    );
};

export default TodoDeleteAlert;
