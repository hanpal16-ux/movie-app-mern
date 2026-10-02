import './column.css'
import { useState, useEffect } from 'react';

export let my_value_for_column=100;
export let another_var=200;

//Here I will start my components 
function My_column_component(){

    let [users, set_users] = useState([]);

    async function  fetch_users(){
let api_result=await fetch ("http://localhost:8000/api/users");
let the_user_data=await api_result.json();
set_users(the_user_data);  

    }

    useEffect (function(){
fetch_users();

    },[])


return (
<div>
    <h1>Engineer Technical/Confirmatory Exam Preparation Courses</h1>
    <p>How do foreign trained engineers who have migrated to Canada become Professional Practicing Engineers? If this is a question you want to know the answer to, EPIC can help you!

EPIC has aided engineers in obtaining their professional engineering licenses for over 20 years.</p>
<a href="https://www.ontario.ca/page/serviceontario" target="_blank">service ontario</a>
<button onClick={fetch_users}>Fetch Users</button>
{users.map(function(user){
return <p>{user.fullName}</p>

})}

</div>

  );
}


export function My_second_component(){
return (
<div>
<h1>Funding for Training</h1>
<p>TThe Canadian Government’s Workforce Development Agreements (WDAs) provide federally sponsored funds to assist companies in training and developing their workforce. Companies can receive up to $10,000 per employee in contribution to the employee's training!</p>

</div> 

);
}

export default My_column_component;

