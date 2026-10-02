//This is the page to add new movies

import Container_div from "../components/layout";
import { Row_div, Column_div } from "../components/layout";
import Movie_form_component from "../components/movie_form";

//I will  import Link react-router without loading
import { Link } from "react-router";

function Movie_userinfo_page(){
    return(
<Container_div>

<Row_div>
<Column_div>
<nav>
        <Link to="/">Home</Link>
<Link to="/userlist">Movie List</Link>
</nav>

</Column_div>

</Row_div>

<Row_div>
        <Column_div>
            <Movie_form_component/>
        </Column_div>
</Row_div>

</Container_div>


 )
}

export default Movie_userinfo_page;
