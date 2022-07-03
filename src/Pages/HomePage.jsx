
import Productos from "../Components/Productos"
//import '../App.css';
import firebase from '../Config/firebase'
function HomePage(){
    
    console.log(firebase)
    return(
        <div className="list">
             <div id="wrapper">
                <div id="prod">
                    < Productos />
                </div> 
            </div>
        </div>
    )
}

export default HomePage
