
import { BrowserRouter, Routes, Route } from "react-router";

import './App.css'

import My_notfound_page from './pages/not-found' 

{/*Pages for assigment*/}

import Movie_home_page from "./pages/movie_home";
import Movie_userinfo_page from "./pages/movie_userinfo";
import Movie_userlist_page from "./pages/movie_userlist";


function App() {


return (
<BrowserRouter>
<Routes>

  <Route path="/" element={<Movie_home_page />} />
  <Route path="/userinfo" element={<Movie_userinfo_page />} />
  <Route path="/userlist" element={<Movie_userlist_page />} />

   <Route path="*" element={<My_notfound_page />} />
 
</Routes>
</BrowserRouter>
)
}

export default App