import React, { useState, useEffect } from 'react';
import  './view.css'
function GetAll(){
        const [data, setData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                const response = await fetch('http://localhost:8080/data');
                const json = await response.json();
                setData(json);
            };
            fetchData();
        }, []);

        return (
            <div >
                <h1>Get All</h1>
                    <div>
                        <table >
                            <thead>
                            <tr >
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                            </tr>
                            </thead>

                            <tbody>
                            {data.map(item => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                </tr>
                            ))}

                            </tbody>
                        </table>
                    </div>
                    <br/>
            </div>
        );

    }



export default GetAll;
