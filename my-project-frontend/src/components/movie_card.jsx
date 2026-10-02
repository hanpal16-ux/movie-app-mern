//This component shows information about movie

function Movie_card_component(props){
return(
    <div className="movie_card">

         {/*shoes the the movie title*/}
        <h2>{props.card_title}</h2>
        
        {/*shows the movie description*/}
        <br />
        <p>{props.card_description}</p> 


    </div>
)

}

export default Movie_card_component;