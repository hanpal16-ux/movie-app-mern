// I will create a a form to add a new movie to the database

import { useState } from "react";

function Movie_form_component(){


    let [movie_info, set_movie_info] = useState({

// Base on class code, must be empty until user types the information
        title:'',
        director:'',
        genre:'',
        year:'',
        rating:'',

        
        });

function update_value(event){
    set_movie_info({
        ...movie_info,
        [event.target.name]:event.target.value
    });

}
//Here I will send data  to backend 

async function send_data(event){
    event.preventDefault();

    let api_response= await fetch("http://localhost:8000/movies", {

        method:"POST",
      headers: {"content-type":"application/json"
      },
    body:JSON.stringify(movie_info)

    });
}

return (
<>

<h1>Add a Movie</h1>
<p>Fill up the form below to add a new movie to you databe. </p>
<form>
<input type="text" name="title" placeholder="Movie title" onChange={update_value}/>
<br />
<input type="text" name="director" placeholder="Director" onChange={update_value}/>
<br />
<input type="text" name="genre" placeholder="Genre" onChange={update_value}/>
<br />
<input type="text" name="year" placeholder="Year" onChange={update_value}/>
<br />
<input type="text" name="rating" placeholder="Rating" onChange={update_value}/>
<br />
<input type="submit" value='Add movie' onClick={send_data}/>

</form>
</>

)
}

export default Movie_form_component;
