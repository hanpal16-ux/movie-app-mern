//This is my main or home page of my movie app
import Container_div from "../components/layout";
import { Row_div, Column_div } from "../components/layout";
import Movie_card_component from "../components/movie_card";

//I will  import Link react-router without loading
import { Link } from "react-router";

function Movie_home_page(){

return(

    <Container_div>
        <Row_div>
            <Column_div>
            <nav>
                <Link to="/userinfo">Add Movie</Link>
                <Link to="/userlist">Movie List</Link>
            </nav>
            </Column_div>
        </Row_div>
   

{/*Welcome message */}
<Row_div>
    <Column_div>
        
    <h1>Welcome to your favorite movie App</h1>
<p>You don't even have to search anymore! Let Plex help you choose the perfect movie for tonight, completely free</p>

<p>Enjoy series, movies, concerts and more</p>
<p>Add your favortite movies to your personal databe and access them anytime </p>

    </Column_div>
</Row_div>


<Row_div>
    <Column_div>
    
    <h2>Movie of the day</h2>
<Movie_card_component
card_title="Men on Fire-By Denzel Washintong"
card_description = "Mexico City. A government agent, disillusioned with his life, reluctantly accepts a job protecting a young girl whose parents have received kidnapping threats. His relationship with his young charge grows, awakening a long-lost spirit within him. But when the girl is kidnapped, his rage is unleashed against those responsible."
 />
    </Column_div>
</Row_div>

</Container_div>
)
}

export default Movie_home_page



