
        import './form.css'
        import { useState } from 'react'

        function My_form_component() {

        let [user_info, set_user_info] = useState({
        user_name: '',
        user_age: 0,
        user_city: '',
        user_hobby: '',
        user_country: ''
        });

        function update_value(event) {
        set_user_info({
            ...user_info,
            [event.target.name]: event.target.value
        });
        }

        async function send_data(event){
        event.preventDefault();

        let api_response = await fetch("http://localhost:8000/react_data", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user_info)
        });
        }

        return (
        <>
            <h1>Users Information Form</h1>
            <form>
                <input type='text' name='user_name' placeholder='Users Name' onChange={update_value}/>
                <br />
                <input type='number' name='user_age' placeholder='Users Age' onChange={update_value}/>
                <br />
                <input type='text' name='user_city' placeholder='Users City' onChange={update_value}/>
                <br />
                <input type='text' name='user_hobby' placeholder='Users Hobby' onChange={update_value}/>
                <br />
                <input type='text' name='user_country' placeholder='Users Country' onChange={update_value}/>
                <br />
                <input type='submit' value='Send!' onClick={send_data}/>
            </form>
        </>
        )
        }

        export default My_form_component;