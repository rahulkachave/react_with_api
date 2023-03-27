import React, { useState } from 'react';
import './view.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DeleteEmp() {
    const [id, setId] = useState('');

    function handleDelete() {

        fetch(`http://localhost:8080/deleteEmpById/${id}`, {
            method: 'DELETE',

        })

            .then(response => {
                if(response.ok) {
                    toast.success('Data deleted successfully');

                }
                if (!response.ok) {
                    toast.error('Data not present');
                }
            })
            .catch(error => {
                console.error(error);
            });

    }
    function handleInputChange(event){
        setId(event.target.value)
    }

    return (
            <form onSubmit={handleDelete}>
                <label>
                    Enter employee Id:
                    <input type="text" value={id} onChange={handleInputChange} />
                </label>
                <button type="submit">Delete</button>
                <ToastContainer autoClose={5000} /> {/* stay for 5 seconds */}

            </form>
    );
}

export default DeleteEmp;
