import './user_list.css'
import { useState, useEffect } from 'react'

function Show_users_list(){

    let [users_list, set_users_list] = useState([])

    async function call_api(){
  let api_response = await fetch("http://localhost:8000/api/users");
  let user_data = await api_response.json();
   set_users_list(user_data);
    }

    useEffect(function() {
        call_api();
    })

    return(
        <>
            <h1>Users List Below</h1>
            <ol>
            {users_list.map((user) => (
                <li>{user.fullName}</li>
            ))}
            </ol>
        </>
    )
}

export default Show_users_list;