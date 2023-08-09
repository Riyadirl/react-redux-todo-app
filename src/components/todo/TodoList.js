import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import TodoEditAlert from './TodoEditAlert';
import TodoDeleteAlert from './TodoDeleteAlert';

const TodoList = () => {
    const todoItems = useSelector((state) => state.todo.value);
    const [editIndex, setEditIndex] = useState(null);
    const [deleteIndex, setDeleteIndex] = useState(null);

    const handleEditClick = (index) => {
        setEditIndex(index);
    };

    const handleDeleteClick = (index) => {
        setDeleteIndex(index);
    };

    const handleEditClose = () => {
        setEditIndex(null);
    };

    const handleDeleteClose = () => {
        setDeleteIndex(null);
    };

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table'>
                        <thead>
                        <tr>
                            <th scope='col'>No</th>
                            <th scope='col'>Task Name</th>
                            <th scope='col'>Edit</th>
                            <th scope='col'>Remove</th>
                        </tr>
                        </thead>
                        <tbody>
                        {todoItems.map((item, index) => (
                            <tr key={index.toString()}>
                                <td>{index + 1}</td>
                                <td>{item}</td>
                                <td>
                                    <button
                                        className='btn btn-primary'
                                        onClick={() =>
                                            handleEditClick(index)
                                        }
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() =>
                                            handleDeleteClick(index)
                                        }
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    {editIndex !== null && (
                        <TodoEditAlert
                            index={editIndex}
                            task={todoItems[editIndex]}
                            onClose={handleEditClose}
                        />
                    )}
                    {deleteIndex !== null && (
                        <TodoDeleteAlert
                            index={deleteIndex}
                            onClose={handleDeleteClose}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
