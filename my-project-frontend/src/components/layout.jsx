function Container_div({children}){
return(
<div className="container">
{children}
<footer>
   <p className="footera"> 
MERN Stack  2024 Movie App - Assignment 1, by Hanner Palacios Palacios |</p>
</footer>

</div>

   )

}
 export function Row_div({children}){
return (

<div className="row">
{children}

</div>

)


}

 export function Column_div({children}){

   return(

      <div className="column">
         {children}
      </div>
   )

 }
 export default Container_div;