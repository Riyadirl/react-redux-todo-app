import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { EditTodo } from '../../redux/state/todo/todoSlice';
import Swal from 'sweetalert2';

const TodoEditAlert = ({ index, task, onClose }) => {
    const [editedTask, setEditedTask] = useState(task);
    const dispatch = useDispatch();

    const handleEdit = () => {
        if (editedTask.trim() !== '') {
            dispatch(EditTodo({ index, task: editedTask }));
            onClose();
            Swal.fire({
                icon: 'success',
                title: 'Task Updated',
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
        <div className='alert alert-info'>
            <input
                type='text'
                className='form-control'
                value={editedTask}
                onChange={(e) => setEditedTask(e.target.value)}
            />
            <button className='btn btn-success mt-2' onClick={handleEdit}>
                Save
            </button>
            <button className='btn btn-secondary ml-2 mt-2' onClick={onClose}>
                Cancel
            </button>
        </div>
    );
};

export default TodoEditAlert;
