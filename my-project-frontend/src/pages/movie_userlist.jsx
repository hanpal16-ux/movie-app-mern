//This is page that shows movies saved in the dabase

import Container_div from "../components/layout";
import { Row_div, Column_div } from "../components/layout";
import Movie_list_component from "../components/movie_list";

//I will  import Link react-router without loading
import { Link } from "react-router";

function Movie_userlist_page(){
    return(
<Container_div>
<Row_div>
        <Column_div>
         {/* Navigation links */}
         <nav>
    <Link to= "/">Home</Link>
    <Link to="/userinfo">Add movie</Link>
    </nav>
        
        </Column_div>
</Row_div>


<Row_div>
    <Column_div>
           <Movie_list_component />
    </Column_div>

</Row_div>

</Container_div>

)
}

export default Movie_userlist_page