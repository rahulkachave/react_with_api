import React,{useState} from "react";
import './view.css'
import {toast, ToastContainer} from "react-toastify";


function AddEmp() {

    const [id,setId]=useState('')
    const [name,setName]=useState('')
    const [address,setAddress]=useState('')
    // const[employee, setEmployee] = useState([])
    // const options = {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(employee),
    // };

    function handleSubmit() {
        fetch(`https://localhost:8080/addEmp/${id}/${name}/${address}`, {
            method: 'POST',
        })

            .then(response => {
                // if (response.ok) {
                    // toast.success('Emp successfully Added');
                // }
            })
            // .then(data => setEmployee(data))
            // .catch(error => {
            //     console.error(error);
            // });
    }

    function handleInputChangeId(event){
        setId(event.target.value)
    }
    function handleInputChangeName(event){
        setName(event.target.value)
    }
    function handleInputChangeAddress(event){
        setAddress(event.target.value)
    }

    return(
            <form onSubmit={handleSubmit}>
             <label>
                Enter employee id:
                <input type="text" value={id} onChange={handleInputChangeId} />
            </label>
            <label>
                Enter employee name:
                <input type="text" value={name} onChange={handleInputChangeName} />
            </label>
            <label>
                Enter employee address:
                <input type="text" value={address} onChange={handleInputChangeAddress} />
            </label><br/>
                <button type="submit">Add</button>
                <ToastContainer autoClose={5000} /> {/* stay for 5 seconds */}
           </form>
    );
}
export default AddEmp;