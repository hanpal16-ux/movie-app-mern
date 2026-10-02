//This component brings the movies from backend and shows them on the screen

import { useState, useEffect } from "react"; // Here I import useEffect to fill up the auto..

function Movie_list_component(){
let [movie_list, set_movies_list] = useState([])

async function call_api(){

let api_response=await fetch ("http://localhost:8000/movies");
let movies_data=await api_response.json();
set_movies_list(movies_data);

}

useEffect (function(){
call_api();
}, [])


return(

    <>

    <h1>My movie List</h1>
    <ol>
{movie_list.map((movie)=>(
<li> Title- {movie.title}, Director- {movie.director}, Genre-{movie.genre}, Year-{movie.year},  Rating-{movie.rating}</li>
))}
    </ol>
</>
)
}   

export default Movie_list_component