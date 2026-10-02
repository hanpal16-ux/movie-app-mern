import './my_new.css'

function My_new_component(props){
//aqui la funcion recibe un dato de llamado "mensaje"
    function handle_click(mensaje){
        alert(mensaje)
}

// devuelve el html con la conexion 
return(

    <div>
        <h1>{props.my_heading}</h1>
        <p>{props.my_para}</p>
    <button onClick={()=> handle_click("!aprendiendo eventos!")}>Haz clic aqui</button>


    </div>

);

}

export default My_new_component;